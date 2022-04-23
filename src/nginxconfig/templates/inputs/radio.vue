

<template>
    <PrettyRadio>
        <!-- Set the FontAwesome check as the default extra -->
        <template #extra>
            <slot name="extra">
                <i class="icon fas fa-check"></i>
            </slot>
        </template>

        <!-- Load in all other slots -->
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </PrettyRadio>
</template>

<script setup>
    import PrettyRadio from 'do-vue/src/templates/pretty-checkbox-vue/pretty_radio';
</script>
