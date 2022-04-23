

<template>
    <div :class="`column ${half ? 'is-half' : 'is-full'} is-full-mobile is-full-tablet`" @copied="copied">
        <h3 v-html="name"></h3>
        <pre><code class="language-docker" v-html="conf"></code></pre>
    </div>
</template>

<script>
    import 'prismjs/components/prism-docker';
    import { info } from '../../util/log';

    export default {
        name: 'DockerPrism',
        props: {
            name: String,
            conf: String,
            half: Boolean,
        },
        mounted() {
            info(`Highlighting ${this.$props.name}...`);
            window.Prism.highlightAllUnder(this.$el);
        },
        methods: {
            copied(event) {
                this.$emit('copied', event.detail.text);
            },
        },
    };
</script>
