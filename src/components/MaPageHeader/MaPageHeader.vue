<template>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        :sub-title="subTitle"
    >
        <slot name="extra" slot="extra"/>
    </a-page-header>
</template>

<script>
    import PageHeader from 'ant-design-vue/lib/page-header/index.js';

    export default {
        name: 'ma-page-header',
        components: {
            APageHeader: PageHeader,
        },
        props: {
            title: { type: String, default: '' },
            subTitle: { type: String, default: '' },
        },
    };
</script>

<style lang="scss" scoped>
  @import '~ant-design-vue/lib/page-header/style/index.css';
</style>
