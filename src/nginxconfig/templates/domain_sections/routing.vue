

<template>
    <div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">root</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${rootChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="root" class="p-default p-curve p-fill p-icon">
                                {{ $t('common.enable') }}
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="indexEnabled" class="field is-horizontal is-aligned-top">
            <div class="field-label">
                <label class="label">index</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div
                        v-for="value in $props.data.index.options"
                        :class="`control${indexChanged && value === index ? ' is-changed' : ''}`"
                    >
                        <div class="radio">
                            <PrettyRadio v-model="index" :value="value" class="p-default p-round p-fill p-icon">
                                {{ value }}
                            </PrettyRadio>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="fallbackHtmlEnabled || fallbackPhpEnabled" class="field is-horizontal is-aligned-top">
            <div class="field-label">
                <label class="label">{{ $t('templates.domainSections.routing.fallbackRouting') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div v-if="fallbackHtmlEnabled" :class="`control${fallbackHtmlChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="fallbackHtml" class="p-default p-curve p-fill p-icon">
                                index.html
                            </PrettyCheck>
                        </div>
                    </div>
                    <div v-if="fallbackPhpEnabled" :class="`control${fallbackPhpChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="fallbackPhp" class="p-default p-curve p-fill p-icon">
                                index.php
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="fallbackPhpPathEnabled" class="field is-horizontal">
            <div class="field-label">
                <label class="label">{{ $t('templates.domainSections.routing.fallbackRoutingPhpPath') }}</label>
            </div>
            <div class="field-body">
                <div :class="`field${fallbackPhpPathChanged ? ' is-changed' : ''}`">
                    <div class="control">
                        <input
                            v-model="fallbackPhpPath"
                            class="input"
                            type="text"
                            :placeholder="$props.data.fallbackPhpPath.default"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div v-if="legacyPhpRoutingEnabled" class="field is-horizontal">
            <div class="field-label">
                <label class="label">{{ $t('templates.domainSections.routing.legacyPhpRouting') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${legacyPhpRoutingChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="legacyPhpRouting" class="p-default p-curve p-fill p-icon">
                                {{ $t('templates.domainSections.routing.enableLegacyRouting') }}
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import delegatedFromDefaults from '../../util/delegated_from_defaults';
    import computedFromDefaults from '../../util/computed_from_defaults';
    import PrettyCheck from '../inputs/checkbox';
    import PrettyRadio from '../inputs/radio';

    const defaults = {
        root: {
            default: true,
            enabled: true,
        },
        index: {
            default: 'index.php',
            options: ['index.html', 'index.php'],
            enabled: true,
        },
        fallbackHtml: {
            default: false,
            enabled: true,
        },
        fallbackPhp: {
            default: true,
            enabled: true,
        },
        fallbackPhpPath: {
            default: '/api/',
            enabled: false,
        },
        legacyPhpRouting: {
            default: false,
            enabled: true,
        },
    };

    export default {
        name: 'DomainRouting',                                  // Component name
        display: 'templates.domainSections.routing.routing',    // Display name for tab (i18n key)
        key: 'routing',                                         // Key for data in parent
        delegated: delegatedFromDefaults(defaults),             // Data the parent will present here
        components: {
            PrettyCheck,
            PrettyRadio,
        },
        props: {
            data: Object,                                       // Data delegated back to us from parent
        },
        computed: computedFromDefaults(defaults, 'routing'),    // Getters & setters for the delegated data
        watch: {
            // Disable all options (expect legacy php) if root is disabled
            '$props.data.root': {
                handler(data) {
                    if (data.computed) {
                        this.$props.data.index.enabled = true;
                        this.$props.data.index.computed = this.$props.data.index.value;
                        this.$props.data.fallbackHtml.enabled = true;
                        this.$props.data.fallbackHtml.computed = this.$props.data.fallbackHtml.value;
                        this.$props.data.fallbackPhp.enabled = true;
                        this.$props.data.fallbackPhp.computed = this.$props.data.fallbackPhp.value;
                    } else {
                        this.$props.data.index.enabled = false;
                        this.$props.data.index.computed = '';
                        this.$props.data.fallbackHtml.enabled = false;
                        this.$props.data.fallbackHtml.computed = false;
                        this.$props.data.fallbackPhp.enabled = false;
                        this.$props.data.fallbackPhp.computed = false;
                    }
                },
                deep: true,
            },
            // Only enable PHP path if both fallback routing options enabled
            '$props.data': {
                handler(data) {
                    // This might cause recursion, but seems not to
                    if (data.fallbackHtml.computed && data.fallbackPhp.computed) {
                        this.$props.data.fallbackPhpPath.enabled = true;
                        this.$props.data.fallbackPhpPath.computed = this.$props.data.fallbackPhpPath.value;
                    } else {
                        this.$props.data.fallbackPhpPath.enabled = false;
                        this.$props.data.fallbackPhpPath.computed = '';
                    }
                },
                deep: true,
            },
        },
    };
</script>
