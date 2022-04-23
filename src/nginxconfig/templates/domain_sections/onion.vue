

<template>
    <div>
        <div class="field is-horizontal is-aligned-top">
            <div class="field-label has-margin-top">
                <label class="label">{{ $t('templates.domainSections.onion.onionLocation') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${onionLocationChanged ? ' is-changed' : ''}`">
                        <input v-model="onionLocation" class="input" type="text" :placeholder="$props.data.onionLocation.placeholder" />
                    </div>

                    <template v-if="!onionLocationChanged">
                        <div class="control">
                            <label class="text">
                                {{ $t('templates.domainSections.onion.provideAnOnionLocationToSetOnionLocationHeader') }}
                            </label>
                        </div>
                        <div class="control">
                            <label class="text">
                                {{ $t('templates.domainSections.onion.letsVisitorsKnownOnionServicesIsAvailable') }}
                            </label>
                        </div>
                        <div class="control">
                            <label class="text">
                                <ExternalLink
                                    :text="$t('templates.domainSections.onion.learnMoreAboutOnionServices')"
                                    link="https://community.torproject.org/onion-services/"
                                ></ExternalLink>
                            </label>
                        </div>
                    </template>

                    <div v-if="incorrectEnding" class="control">
                        <label class="text message is-warning">
                            <span class="message-body">
                                {{ $t('templates.domainSections.onion.onionLocationExpectedToEndWithOnion') }}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ExternalLink from 'do-vue/src/templates/external_link';
    import delegatedFromDefaults from '../../util/delegated_from_defaults';
    import computedFromDefaults from '../../util/computed_from_defaults';

    const defaults = {
        onionLocation: {
            default: '',
            placeholder: '<your-onion-address>.onion',
            enabled: true,
        },
    };

    export default {
        name: 'DomainOnion',                                    // Component name
        display: 'templates.domainSections.onion.onion',        // Display name for tab (i18n key)
        key: 'onion',                                           // Key for data in parent
        delegated: delegatedFromDefaults(defaults),             // Data the parent will present here
        components: {
            ExternalLink,
        },
        props: {
            data: Object,                                       // Data delegated back to us from parent
        },
        computed: {
            ...computedFromDefaults(defaults, 'onion'),         // Getters & setters for the delegated data
            incorrectEnding() {
                return this.onionLocationChanged && !this.$props.data.onionLocation.computed.endsWith('.onion');
            },
            hasWarnings() {
                return this.incorrectEnding;
            },
        },
        watch: {
            '$props.data.onionLocation': {
                handler(data) {
                    // Drop http(s)://
                    data.computed = data.computed.replace(/^https?:\/\//, '');
                },
                deep: true,
            },
        },
    };
</script>
