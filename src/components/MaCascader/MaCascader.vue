<template>
    <a-cascader
        v-model="data"
        :options="options"
        :placeholder="placeholder"
        :field-names="fieldNames"
        :popup-class-name="popupClassName"
        :popup-placement="popupPlacement"
        :default-value="defaultValue"
        :allow-clear="allowClear"
        :disabled="disabled"
        :size="size"
        @popup-visible-change="$emit('popup-visible-change',$event)"
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
            value: { type: [Number, Array] },
            options: { type: [Object,Array], required: true },
            fieldNames: { type: Object, default: ()=> ({}) },
            defaultValue: { type: [Object,Array] },
            placeholder: { type: String, default: 'Please Select' },
            expandTrigger: { type: String, default: 'click' },
            popupClassName: { type: String, default: '' },
            popupPlacement: { type: String, default: 'topLeft' },
            size: { type: String, default: 'default' },
            disabled: { type: Boolean },
            allowClear: { type: Boolean },
            width: { type: Number },
        },
        data() {
            return {
                data: this.value,
            };
        },
        watch: {
            value(newValue){
                this.data = newValue;
            },
        },
    };
</script>

<style lang="scss">
  .ant-cascader-picker-label {
    width: auto;
  }
</style>
