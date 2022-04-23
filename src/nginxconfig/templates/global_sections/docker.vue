

<template>
    <div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">{{ $t('templates.globalSections.docker.docker') }}</label>
            </div>
            <div class="field-body">
                <div class="field is-horizontal is-aligned-top">
                    <a class="button is-primary is-tiny" @click="applyDockerTweaks">
                        {{ $t('templates.globalSections.docker.applyDockerTweaks') }}
                    </a>
                    <p>
                        {{ $t('templates.globalSections.docker.applyDockerTweaksForNginx') }}
                        <br />
                        <small v-html="$t('templates.globalSections.docker.applyDockerTweaksExplainer')"></small>
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">{{ $t('templates.globalSections.docker.dockerfile') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${dockerfileChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="dockerfile" class="p-default p-curve p-fill p-icon">
                                {{ $t('templates.globalSections.docker.includeDockerfile') }}
                            </PrettyCheck>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="dockerfile" class="field is-horizontal">
            <div class="field-label">
                <label class="label">{{ $t('templates.globalSections.docker.dockerCompose') }}</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div :class="`control${dockerComposeChanged ? ' is-changed' : ''}`">
                        <div class="checkbox">
                            <PrettyCheck v-model="dockerCompose" class="p-default p-curve p-fill p-icon">
                                {{ $t('templates.globalSections.docker.includeDockerCompose') }}
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
    import analytics from '../../util/analytics';
    import PrettyCheck from '../inputs/checkbox';

    const defaults = {
        dockerfile: {
            default: false,
            enabled: true,
        },
        dockerCompose: {
            default: false,
            enabled: false,
        },
    };

    export default {
        name: 'GlobalDocker',                               // Component name
        display: 'templates.globalSections.docker.docker',  // Display name for tab (i18n key)
        key: 'docker',                                      // Key for data in parent
        delegated: delegatedFromDefaults(defaults),         // Data the parent will present here
        components: {
            PrettyCheck,
        },
        props: {
            data: Object,                                   // Data delegated back to us from parent
        },
        computed: computedFromDefaults(defaults, 'docker'), // Getters & setters for the delegated data
        watch: {
            // Disable docker-compose if dockerfile is disabled
            '$props.data.dockerfile': {
                handler(data) {
                    if (data.computed) {
                        this.$props.data.dockerCompose.enabled = true;
                        this.$props.data.dockerCompose.computed = this.$props.data.dockerCompose.value;
                    } else {
                        this.$props.data.dockerCompose.enabled = false;
                        this.$props.data.dockerCompose.computed = false;
                    }
                },
                deep: true,
            },
        },
        methods: {
            applyDockerTweaks() {
                analytics('apply_docker_tweaks', 'Presets');
                this.$parent.setValue('nginx', 'user', 'nginx');
                this.$parent.setValue('nginx', 'pid', '/var/run/nginx.pid');
                this.$parent.setValue('docker', 'dockerfile', true);
            },
        },
    };
</script>
