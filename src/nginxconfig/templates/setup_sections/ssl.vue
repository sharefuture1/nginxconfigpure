

<template>
    <div>
        <ol v-if="diffieHellmanValue || letsEncryptActive">
            <li v-if="diffieHellmanValue">
                <p>
                    <span v-html="$t('templates.setupSections.ssl.generateDiffieHellmanKeysByRunningThisCommandOnYourServer')"></span>
                    <br />
                    <BashPrism
                        :key="`${$props.data.global.nginx.nginxConfigDirectory.computed}-${diffieHellmanValue}`"
                        :cmd="`openssl dhparam -out ${$props.data.global.nginx.nginxConfigDirectory.computed}/dhparam.pem ${diffieHellmanValue}`"
                        @copied="codeCopiedEvent('Generate diffie-hellman keys')"
                    ></BashPrism>
                </p>
            </li>

            <li v-if="letsEncryptActive">
                <p>
                    <span v-html="$t('templates.setupSections.ssl.createACommonAcmeChallengeDirectoryForLetsEncrypt')"></span>
                    <br />
                    <BashPrism
                        :key="letsEncryptDir"
                        :cmd="`mkdir -p ${letsEncryptDir}`"
                        @copied="codeCopiedEvent('Create let\'s encrypt directory')"
                    ></BashPrism>
                    <BashPrism
                        :key="`${nginxUser}-${letsEncryptDir}`"
                        :cmd="`chown ${nginxUser} ${letsEncryptDir}`"
                        @copied="codeCopiedEvent('Set let\'s encrypt directory ownership')"
                    ></BashPrism>
                </p>
            </li>
        </ol>

        <div v-else class="field is-horizontal">
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="text">
                            {{ $t('templates.setupSections.ssl.noAdditionalStepsAreNeededToSetUpSslForNginx') }}
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
        name: 'SetupSSL',
        display: 'templates.setupSections.ssl.sslInit', // i18n key
        key: 'ssl',
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
            nginxUser() {
                return this.$props.data.global.nginx.user.computed;
            },
            diffieHellmanValue() {
                switch (this.$props.data.global.https.sslProfile.computed) {
                case 'intermediate':
                    return 2048;
                case 'old':
                    return 1024;
                case 'modern':
                default:
                    return 0;
                }
            },
            letsEncryptActive() {
                for (const domain of this.$props.data.domains) {
                    if (domain && domain.https.certType.computed === 'letsEncrypt') {
                        return true;
                    }
                }
                return false;
            },
        },
        methods: {
            codeCopiedEvent(step) {
                analytics({
                    category: 'Setup',
                    action: 'Code snippet copied',
                    label: `ssl: ${step}`,
                });
            },
        },
    };
</script>
