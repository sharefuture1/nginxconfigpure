

<template>
    <div>
        <div v-if="!pythonServerEnabled" class="field is-horizontal is-aligned-top">
            <div class="field-label">
                <label class="label">{{ $t('templates.globalSections.python.pythonServer') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="text">
                            {{ $t('templates.globalSections.python.pythonMustBeEnabledOnOneSite') }}
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="field is-horizontal">
            <div class="field-label">
                <label class="label">{{ $t('templates.globalSections.python.pythonServer') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${pythonServerChanged ? ' is-changed' : ''}`">
                        <input
                            v-model="pythonServer"
                            class="input"
                            type="text"
                            :placeholder="$props.data.pythonServer.default"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import delegatedFromDefaults from '../../util/delegated_from_defaults';
    import computedFromDefaults from '../../util/computed_from_defaults';

    const defaults = {
        pythonServer: {
            default: '/tmp/uwsgi.sock',
            enabled: false,
        },
    };

    export default {
        name: 'GlobalPython',                               // Component name
        display: 'common.python',                           // Display name for tab (i18n key)
        key: 'python',                                      // Key for data in parent
        delegated: delegatedFromDefaults(defaults),         // Data the parent will present here
        props: {
            data: Object,                                   // Data delegated back to us from parent
        },
        computed: computedFromDefaults(defaults, 'python'), // Getters & setters for the delegated data
        watch: {
            // Enable Python server settings if any site uses Python
            '$parent.$parent.$data.domains': {
                handler(data) {
                    for (const domain of data) {
                        if (domain && domain.python && domain.python.python && domain.python.python.computed) {
                            this.$props.data.pythonServer.enabled = true;
                            this.$props.data.pythonServer.computed = this.$props.data.pythonServer.value;
                            return;
                        }
                    }
                    this.$props.data.pythonServer.enabled = false;
                    this.$props.data.pythonServer.computed = '';
                },
                deep: true,
            },
        },
    };
</script>
