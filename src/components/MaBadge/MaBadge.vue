<template>
    <a-badge
        v-bind="$attrs"
        :count="count"
        :overflow-count="overflowCount"
        :show-zero="showZero"
        :offset="offset"
        v-on="$listeners"
    >
        <slot/>
    </a-badge>
</template>

<script>
    import Badge from 'ant-design-vue/lib/badge/index.js';

    export default {
        name: 'ma-badge',
        components: {
            ABadge: Badge,
        },
        props: {
            size: { type: String, default: 'default' },
            count: { type: [String,Number], default: null },
            overflowCount: { type: Number },
            offset: { type: Array, default: () => [10,0] },
            showZero: { type: Boolean },
        },
        computed: {
        },
    };
</script>

<style lang="scss" scoped>
  @import '~ant-design-vue/lib/badge/style/index.css';
</style>
