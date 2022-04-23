

<template>
    <div>
        <ol v-if="letsEncryptActive">
            <li>
                <p>
                    {{ $t('templates.setupSections.certbot.commentOutSslDirectivesInConfiguration') }}
                    <br />
                </p>
                <BashPrism
                    :key="sitesAvailable"
                    :cmd="`sed -i -r 's/(listen .*443)/\\1; #/g; s/(ssl_(certificate|certificate_key|trusted_certificate) )/#;#\\1/g; s/(server \\{)/\\1\\n    ssl off;/g' ${sitesAvailable}`"
                    @copied="codeCopiedEvent('Disable ssl directives')"
                ></BashPrism>
            </li>

            <li>
                <p>
                    {{ $t('templates.setupSections.certbot.reloadYourNginxServer') }}
                    <br />
                </p>
                <BashPrism
                    cmd="sudo nginx -t && sudo systemctl reload nginx"
                    @copied="codeCopiedEvent('Reload nginx')"
                ></BashPrism>
            </li>

            <li>
                <p>
                    {{ $t('templates.setupSections.certbot.obtainSslCertificatesFromLetsEncrypt') }}
                    <br />
                </p>
                <BashPrism
                    :key="certbotCmds"
                    :cmd="certbotCmds"
                    @copied="codeCopiedEvent('Obtain certificates using certbot')"
                ></BashPrism>
            </li>

            <li>
                <p>
                    {{ $t('templates.setupSections.certbot.uncommentSslDirectivesInConfiguration') }}
                    <br />
                </p>
                <BashPrism
                    :key="sitesAvailable"
                    :cmd="`sed -i -r -z 's/#?; ?#//g; s/(server \\{)\\n    ssl off;/\\1/g' ${sitesAvailable}`"
                    @copied="codeCopiedEvent('Enable ssl directives')"
                ></BashPrism>
            </li>

            <li>
                <p>
                    {{ $t('templates.setupSections.certbot.reloadYourNginxServer') }}
                    <br />
                </p>
                <BashPrism
                    cmd="sudo nginx -t && sudo systemctl reload nginx"
                    @copied="codeCopiedEvent('Reload nginx (2)')"
                ></BashPrism>
            </li>

            <li>
                <p>
                    {{ $t('templates.setupSections.certbot.configureCertbotToReloadNginxOnCertificateRenewal') }}
                    <br />
                </p>
                <BashPrism
                    cmd="echo -e '#!/bin/bash\nnginx -t && systemctl reload nginx' | sudo tee /etc/letsencrypt/renewal-hooks/post/nginx-reload.sh"
                    @copied="codeCopiedEvent('Create nginx auto-restart on renewal')"
                ></BashPrism>
                <BashPrism
                    cmd="sudo chmod a+x /etc/letsencrypt/renewal-hooks/post/nginx-reload.sh"
                    @copied="codeCopiedEvent('Enable execution of auto-restart')"
                ></BashPrism>
            </li>
        </ol>

        <div v-else class="field is-horizontal">
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="text">
                            {{ $t('templates.setupSections.certbot.certbotDoesNotNeedToBeSetupForYourConfiguration') }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BashPrism from '../prism/bash';
    import analytics from '../../util/analytics';

    export default {
        name: 'SetupCertbot',
        display: 'templates.setupSections.certbot.certbot', // i18n key
        key: 'certbot',
        components: {
            BashPrism,
        },
        props: {
            data: Object,
        },
        computed: {
            letsEncryptDir() {
                return this.$props.data.global.https.letsEncryptRoot.computed.replace(/\/+$/, '');
            },
            letsEncryptActive() {
                for (const domain of this.$props.data.domains) {
                    if (domain && domain.https.certType.computed === 'letsEncrypt') {
                        return true;
                    }
                }
                return false;
            },
            sitesAvailable() {
                if (!this.$props.data.global.tools.modularizedStructure.computed)
                    return `${this.$props.data.global.nginx.nginxConfigDirectory.computed}/nginx.conf`;

                const enabledAvailable = this.$props.data.global.tools.symlinkVhost.computed ? 'available' : 'enabled';
                return this.$props.data.domains
                    .filter(domain => domain.https.certType.computed === 'letsEncrypt')
                    .map(domain => `${this.$props.data.global.nginx.nginxConfigDirectory.computed}/sites-${enabledAvailable}/${domain.server.domain.computed}.conf`)
                    .join(' ');
            },
            certbotCmds() {
                return this.$props.data.domains
                    .filter(domain => domain.https.certType.computed === 'letsEncrypt')
                    .map(domain => (
                        [
                            'certbot certonly --webroot',
                            `-d ${domain.server.domain.computed}`,
                            domain.server.wwwSubdomain.computed ? `-d www.${domain.server.domain.computed}` : null,
                            domain.server.cdnSubdomain.computed ? `-d cdn.${domain.server.domain.computed}` : null,
                            `--email ${domain.https.letsEncryptEmail.computed}`,
                            `-w ${this.letsEncryptDir}`,
                            '-n --agree-tos --force-renewal',
                        ].filter(x => x !== null).join(' ')
                    )).join('\n');
            },
        },
        methods: {
            codeCopiedEvent(step) {
                analytics({
                    category: 'Setup',
                    action: 'Code snippet copied',
                    label: `certbot: ${step}`,
                });
            },
        },
    };
</script>
