

<template>
    <div>
        <p>
            <b>{{ $t('templates.setupSections.goLive.letsGoLive') }}</b> 🎉
        </p>
        <p>
            {{ $t('templates.setupSections.goLive.reloadNginxToLoadInYourNewConfiguration') }}
            <br />
            <BashPrism
                cmd="sudo nginx -t && sudo systemctl reload nginx"
                @copied="codeCopiedEvent('Reload nginx')"
            ></BashPrism>
        </p>
    </div>
</template>

<script>
    import BashPrism from '../prism/bash';
    import analytics from '../../util/analytics';

    export default {
        name: 'SetupGoLive',
        display: 'templates.setupSections.goLive.goLive', // i18n key
        key: 'goLive',
        components: {
            BashPrism,
        },
        props: {
            data: Object,
        },
        methods: {
            codeCopiedEvent(step) {
                analytics({
                    category: 'Setup',
                    action: 'Code snippet copied',
                    label: `goLive: ${step}`,
                });
            },
        },
    };
</script>
