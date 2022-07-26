<template>
    <a-cascader
        :options="options"
        :placeholder="placeholder"
        :field-names="fieldNames"
        :popup-class-name="popupClassName"
        :popup-placement="popupPlacement"
        :allow-clear="allowClear"
        @popup-visible-change="$emit('visible-change',$event)"
        @change="$emit('change',$event)"
    />
</template>

<script>
    import Cascader from 'ant-design-vue/lib/cascader/index.js';

    export default {
        name: 'ma-cascader',
        components: {
            ACascader: Cascader,
        },
        props: {
            options: { type: [Object,Array], required: true },
            fieldNames: { type: Object, default: ()=> ({}) },
            placeholder: { type: String, default: 'Please Select' },
            expandTrigger: { type: String, default: 'click' },
            popupClassName: { type: String, default: '' },
            popupPlacement: { type: String, default: 'bottomLeft' },
            allowClear: { type: String },
            width: { type: Number },
        },
        data() {
            return {};
        },
        computed: {
        },
    };
</script>

<style lang="scss">
</style>
