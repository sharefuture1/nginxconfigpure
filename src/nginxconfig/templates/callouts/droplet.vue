

<template>
    <div class="callout">
        <p>
            {{ $t('templates.callouts.droplet.lookingForAPlaceToDeploy') }}
            <ExternalLink
                :text="$t('templates.callouts.droplet.tryOutDigitalOceansDroplet')"
                link="https://marketplace.digitalocean.com/apps/lemp"
                @click.native="linkClickEvent"
            ></ExternalLink>
        </p>
    </div>
</template>

<script>
    import ExternalLink from 'do-vue/src/templates/external_link';
    import analytics from '../../util/analytics';

    export default {
        name: 'DropletCallout',
        components: {
            ExternalLink,
        },
        data() {
            return {
                observer: null,
            };
        },
        mounted() {
            // Use an intersection observer to fire the event when the user scrolls this into view
            if ('IntersectionObserver' in window) {
                this.observer = new window.IntersectionObserver(this.observerCallback, {
                    root: null,
                    rootMargin: '0px',
                    threshold: 1,
                });
                this.observer.observe(this.$el);
                return;
            }

            // If we don't have intersection observer support, just fire the visible event now
            this.calloutVisibleEvent();
        },
        updated() {
            // If the Vue component updated/re-rendered, ensure we're observing the correct DOM elm
            this.$nextTick(() => {
                if (this.observer) {
                    this.observer.disconnect();
                    this.observer.observe(this.$el);
                }
            });
        },
        beforeDestroy() {
            // Properly cleanup the observer if the Vue component is being destroyed
            this.observerCleanup();
        },
        methods: {
            observerCleanup() {
                if (this.observer) {
                    this.observer.disconnect();
                    this.observer = null;
                }
            },
            observerCallback(entries) {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        // We've intersected, so we no longer need the observer
                        this.observerCleanup();

                        // Fire the event!
                        this.calloutVisibleEvent();
                    }
                }
            },
            calloutVisibleEvent() {
                analytics({
                    category: 'Droplet callout',
                    action: 'Visible',
                    nonInteraction: true,
                });
            },
            linkClickEvent() {
                analytics({
                    category: 'Droplet callout',
                    action: 'Clicked',
                });
            },
        },
    };
</script>
