

<template>
    <div>
        <div v-if="!pythonEnabled" class="field is-horizontal is-aligned-top">
            <div class="field-label">
                <label class="label">{{ $t('common.python') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="text">
                            {{ $t('templates.domainSections.python.pythonIsDisabled') }}
                            <template v-if="$parent.$props.data.reverseProxy.reverseProxy.computed">
                                <br />{{ $t('templates.domainSections.python.pythonCannotBeEnabledWithReverseProxy') }}
                            </template>
                            <template v-if="$parent.$props.data.php.php.computed">
                                <br />{{ $t('templates.domainSections.python.pythonCannotBeEnabledWithPhp') }}
                            </template>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="field is-horizontal">
            <div class="field-label">
                <label class="label">{{ $t('common.python') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${pythonChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="python" class="p-default p-curve p-fill p-icon">
                                {{ $t('templates.domainSections.python.enablePython') }}
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="djangoRulesEnabled" class="field is-horizontal">
            <div class="field-label">
                <label class="label">{{ $t('templates.domainSections.python.djangoRules') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${djangoRulesChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="djangoRules" class="p-default p-curve p-fill p-icon">
                                {{ $t('templates.domainSections.python.enableDjangoRules') }}
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

    const defaults = {
        python: {
            default: false,
            enabled: false,
        },
        djangoRules: {
            default: false,
            enabled: false,
        },
    };

    export default {
        name: 'DomainPython',                               // Component name
        display: 'common.python',                           // Display name for tab (i18n key)
        key: 'python',                                      // Key for data in parent
        delegated: delegatedFromDefaults(defaults),         // Data the parent will present here
        components: {
            PrettyCheck,
        },
        props: {
            data: Object,                                   // Data delegated back to us from parent
        },
        computed: computedFromDefaults(defaults, 'python'), // Getters & setters for the delegated data
        watch: {
            // If the Reverse proxy or PHP is enabled, Python will be forced off
            '$parent.$props.data': {
                handler(data) {
                    // This might cause recursion, but seems not to
                    if (data.reverseProxy.reverseProxy.computed || data.php.php.computed) {
                        this.$props.data.python.enabled = false;
                        this.$props.data.python.computed = false;
                    } else {
                        this.$props.data.python.enabled = true;
                        this.$props.data.python.computed = this.$props.data.python.value;
                    }
                },
                deep: true,
            },
            // Disable Django if Python is disabled
            '$props.data.python': {
                handler(data) {
                    if (data.computed) {
                        this.$props.data.djangoRules.enabled = true;
                        this.$props.data.djangoRules.computed = this.$props.data.djangoRules.value;
                    } else {
                        this.$props.data.djangoRules.enabled = false;
                        this.$props.data.djangoRules.computed = false;
                    }
                },
                deep: true,
            },
        },
    };
</script>
