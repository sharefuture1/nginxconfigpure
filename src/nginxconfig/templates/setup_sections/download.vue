

<template>
    <div>
        <ol>
            <li>
                <p>
                    <span v-html="$t('templates.setupSections.download.downloadTheGeneratedConfig')"></span>
                    <b>&nbsp;<a @click="$parent.downloadTar">{{ $parent.tarName }}</a></b>
                    <br />
                    <span v-html="$t('templates.setupSections.download.andUploadItToYourServers')"></span>
                    <code class="slim">{{ $props.data.global.nginx.nginxConfigDirectory.computed }}</code>
                    {{ $t('templates.setupSections.download.directory') }}
                </p>
                <p>
                    {{ $t('templates.setupSections.download.or') }}
                    <b>
                        <a ref="copyTar">
                            {{ $t('templates.setupSections.download.copyBase64StringOfCompressedConfig') }}</a>
                    </b>
                    <span v-html="$t('templates.setupSections.download.pasteItInYourServersCommandLineAndExecute')"></span>
                </p>
            </li>

            <li>
                <p>
                    <span v-html="$t('templates.setupSections.download.navigateToYourNginxConfigurationDirectoryOnYourServer')"></span>
                    <br />
                    <BashPrism
                        :key="$props.data.global.nginx.nginxConfigDirectory.computed"
                        :cmd="`cd ${$props.data.global.nginx.nginxConfigDirectory.computed}`"
                        @copied="codeCopiedEvent('Navigate to nginx config directory')"
                    ></BashPrism>
                </p>
            </li>

            <li>
                <p>
                    <span v-html="$t('templates.setupSections.download.createABackupOfYourCurrentNginxConfiguration')"></span>
                    <br />
                    <BashPrism
                        cmd="tar -czvf nginx_$(date +'%F_%H-%M-%S').tar.gz nginx.conf sites-available/ sites-enabled/ nginxconfig.io/"
                        @copied="codeCopiedEvent('Create nginx config backup tar')"
                    ></BashPrism>
                </p>
            </li>

            <li>
                <p>
                    <span v-html="$t('templates.setupSections.download.extractTheNewCompressedConfigurationArchiveUsingTar')"></span>
                    <br />
                    <BashPrism
                        :key="$parent.tarName"
                        :cmd="`tar -xzvf ${$parent.tarName} | xargs chmod 0644`"
                        @copied="codeCopiedEvent('Extract new nginx config tar')"
                    ></BashPrism>
                </p>
            </li>
        </ol>
    </div>
</template>

<script>
    import BashPrism from '../prism/bash';
    import analytics from '../../util/analytics';

    export default {
        name: 'SetupDownload',
        display: 'templates.setupSections.download.download', // i18n key
        key: 'download',
        components: {
            BashPrism,
        },
        props: {
            data: Object,
        },
        mounted() {
            this.$parent.setupCopy(this.$refs.copyTar);
        },
        methods: {
            codeCopiedEvent(step) {
                analytics({
                    category: 'Setup',
                    action: 'Code snippet copied',
                    label: `download: ${step}`,
                });
            },
        },
    };
</script>
