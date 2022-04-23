

<template>
    <div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Referrer-Policy</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${referrerPolicyChanged ? ' is-changed' : ''}`">
                        <VueSelect
                            v-model="referrerPolicy"
                            :options="$props.data.referrerPolicy.options"
                            :clearable="false"
                        ></VueSelect>
                    </div>
                </div>
            </div>
        </div>

        <div :class="`field is-horizontal${hasWordPress && !hasUnsafeEval ? ' is-aligned-top' : ''}`">
            <div class="field-label">
                <label class="label">Content-Security-Policy</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${contentSecurityPolicyChanged ? ' is-changed' : ''}`">
                        <input
                            v-model="contentSecurityPolicy"
                            class="input"
                            type="text"
                            :placeholder="$props.data.contentSecurityPolicy.default"
                        />
                    </div>
                    <div v-if="hasWordPress && !hasWordPressUnsafeEval" class="control">
                        <label class="text message is-warning">
                            <span
                                class="message-body"
                                v-html="$t('templates.globalSections.security.whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality')"
                            ></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Permissions-Policy</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${permissionsPolicyChanged ? ' is-changed' : ''}`">
                        <input
                            v-model="permissionsPolicy"
                            class="input"
                            type="text"
                            :placeholder="$props.data.permissionsPolicy.default"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">server_tokens</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${serverTokensChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="serverTokens" class="p-default p-curve p-fill p-icon">
                                {{ $t('common.enable') }}
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">limit_req</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${limitReqChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="limitReq" class="p-default p-curve p-fill p-icon">
                                {{ $t('common.enable') }}
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">security.txt</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${securityTxt ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="securityTxt" class="p-default p-curve p-fill p-icon">
                                {{ $t('common.enable') }}
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="$props.data.securityTxt.computed" class="field is-horizontal">
            <div class="field-label">
                <label class="label">security.txt path</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${securityTxtChanged ? ' is-changed' : ''}`">
                        <input
                            v-model="securityTxtPath"
                            class="input"
                            type="text"
                            :placeholder="$props.data.securityTxtPath.default"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueSelect from 'vue-select';
    import delegatedFromDefaults from '../../util/delegated_from_defaults';
    import computedFromDefaults from '../../util/computed_from_defaults';
    import PrettyCheck from '../inputs/checkbox';

    const defaults = {
        referrerPolicy: {
            default: 'no-referrer-when-downgrade',
            options: [
                'no-referrer',
                'no-referrer-when-downgrade',
                'origin',
                'origin-when-cross-origin',
                'same-origin',
                'strict-origin',
                'strict-origin-when-cross-origin',
                'unsafe-url',
            ],
            enabled: true,
        },
        contentSecurityPolicy: {
            default: 'default-src \'self\' http: https: ws: wss: data: blob: \'unsafe-inline\'; frame-ancestors \'self\';',
            enabled: true,
        },
        permissionsPolicy: {
            default: 'interest-cohort=()',
            enabled: true,
        },
        serverTokens: {
            default: false,
            enabled: true,
        },
        limitReq: {
            default: false,
            enabled: true,
        },
        securityTxt: {
            default: false,
            enabled: true,
        },
        securityTxtPath: {
            default: '~/security.txt',
            enabled: true,
        },
    };

    export default {
        name: 'GlobalSecurity',                                     // Component name
        display: 'templates.globalSections.security.security',      // Display name for tab (i18n key)
        key: 'security',                                            // Key for data in parent
        delegated: delegatedFromDefaults(defaults),                 // Data the parent will present here
        components: {
            PrettyCheck,
            VueSelect,
        },
        props: {
            data: Object,                                           // Data delegated back to us from parent
        },
        computed: {
            ...computedFromDefaults(defaults, 'security'),          // Getters & setters for the delegated data
            hasWordPress() {
                return this.$parent.$parent.$data.domains.some(d => d && d.php.wordPressRules.computed);
            },
            hasWordPressUnsafeEval() {
                return this.$props.data.contentSecurityPolicy.computed
                    .match(/(default|script)-src[^;]+'self'[^;]+'unsafe-inline'[^;]+'unsafe-eval'[^;]*;/) !== null;
            },
            hasWarnings() {
                return this.hasWordPress && !this.hasWordPressUnsafeEval;
            },
        },
        watch: {
            // Check referrer policy selection is valid
            '$props.data.referrerPolicy': {
                handler(data) {
                    // This might cause recursion, but seems not to
                    if (data.enabled)
                        if (!data.options.includes(data.computed))
                            data.computed = data.default;
                },
                deep: true,
            },
        },
    };
</script>
