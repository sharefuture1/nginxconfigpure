

<template>
    <div @copied="copied">
        <pre><code class="language-bash">{{ cmd }}</code></pre>
    </div>
</template>

<script>
    import { info } from '../../util/log';

    export default {
        name: 'BashPrism',
        props: {
            cmd: String,
        },
        mounted() {
            info(`Highlighting ${this.$props.cmd}...`);
            window.Prism.highlightAllUnder(this.$el);
        },
        methods: {
            copied(event) {
                this.$emit('copied', event.detail.text);
            },
        },
    };
</script>
