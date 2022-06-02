

<template>
    <div class="callout floating" :style="style">
        <div class="close">
            <p>
                {{ $t('templates.callouts.contribute.wantToContributeChanges') }}
            </p>
            <a @click.prevent="close">
                <i class="fas fa-times"></i>
            </a>
        </div>
        <a
            href="https://nav.young1.ml"
            class="button is-primary"
            target="_blank"
            @click="linkClickEvent"
        >
            {{ $t('templates.callouts.contribute.getInvolvedOnGitHub') }}
        </a>
    </div>
</template>

<script>
    import analytics from '../../util/analytics';

    export default {
        name: 'ContributeCallout',
        data() {
            return {
                scrolled: false,
                closed: false,
            };
        },
        computed: {
            visible() {
                return this.$data.scrolled && !this.$data.closed;
            },
            style() {
                return this.visible ? undefined : {
                    opacity: 0,
                    pointerEvents: 'none',
                };
            },
        },
        mounted() {
            document.addEventListener('scroll', () => {
                if (this.$data.scrolled) return;
                if (window.scrollY < 300) return;
                this.$data.scrolled = true;
                this.calloutVisibleEvent();
            });
        },
        methods: {
            close() {
                this.$data.closed = true;
                this.closedEvent();
            },
            closedEvent() {
                analytics({
                    category: 'Contribute callout',
                    action: 'Closed',
                });
            },
            calloutVisibleEvent() {
                analytics({
                    category: 'Contribute callout',
                    action: 'Visible',
                    nonInteraction: true,
                });
            },
            linkClickEvent() {
                analytics({
                    category: 'Contribute callout',
                    action: 'Clicked',
                });
            },
        },
    };
</script>
