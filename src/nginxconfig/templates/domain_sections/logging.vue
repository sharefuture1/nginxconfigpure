

<template>
    <div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">access_log {{ $t('templates.domainSections.logging.byDomain') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${accessLogChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="accessLog" class="p-default p-curve p-fill p-icon">
                                {{ $t('templates.domainSections.logging.enableForThisDomain') }}
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">error_log {{ $t('templates.domainSections.logging.byDomain') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${errorLogChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="errorLog" class="p-default p-curve p-fill p-icon">
                                {{ $t('templates.domainSections.logging.enableForThisDomain') }}
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
        accessLog: {
            default: false,
            enabled: true,
        },
        errorLog: {
            default: false,
            enabled: true,
        },
    };

    export default {
        name: 'DomainLogging',                                  // Component name
        display: 'common.logging',                              // Display name for tab (i18n key)
        key: 'logging',                                         // Key for data in parent
        delegated: delegatedFromDefaults(defaults),             // Data the parent will present here
        components: {
            PrettyCheck,
        },
        props: {
            data: Object,                                       // Data delegated back to us from parent
        },
        computed: computedFromDefaults(defaults, 'logging'),    // Getters & setters for the delegated data
    };
</script>
