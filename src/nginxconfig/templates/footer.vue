

<template>
    <div class="footer">
        <div class="container">
            <p>
                <a href="#top" class="button is-primary is-small">{{ $t('templates.footer.backToTop') }}</a>
            </p>
            <p>
                {{ $t('templates.footer.thisToolIs') }}
                <ExternalLink
                    :text="$t('templates.footer.openSourceOnGitHub')"
                    link="https://nav.young1.ml"
                ></ExternalLink>
                {{ $t('templates.footer.underThe') }}
                <ExternalLink
                    :text="$t('templates.footer.mit')"
                    link="https://nav.young1.ml"
                ></ExternalLink>
                {{ $t('templates.footer.license') }}
                {{ $t('templates.footer.weWelcomeFeedbackAndContributions') }}
            </p>
            <p>
                {{ $t('templates.footer.originallyCreatedBy') }}
                <ExternalLink
                    :text="$t('templates.footer.balintSzekeres')"
                    link="https://nav.young1.ml"
                ></ExternalLink>,
                {{ $t('templates.footer.maintainedBy') }}
                <ExternalLink
                    :text="$t('templates.footer.digitalOcean')"
                    link="https://nav.young1.ml"
                ></ExternalLink>.
            </p>
        </div>
    </div>
</template>

<script>
    import ExternalLink from 'do-vue/src/templates/external_link';

    export default {
        name: 'Footer',
        components: {
            ExternalLink,
        },
    };
</script>
