<template>
    <component
        :is="component"
        v-model="data"
        class="ma-input"
        :read-only="readOnly"
        :disabled="disabled"
        :auto-focus="autoFocus"
        :size="size"
        :type="type"
        :rows="rows"
        :autosize="autosize"
        :allow-clear="allowClear"
        :max-length="maxLength"
        :visibility-toggle="visibilityToggle"
        :placeholder="placeholder"
        @input="onInput"
        @change="onChange"
        @paste.native="onPaste"
        @keydown.enter.native="onKeydown"
    >
        <template v-if="prefixIcon || this.$slots.prefix" #prefix>
            <slot name="prefix"/>
            <ma-icon
                v-if="prefixIcon" :icon="prefixIcon"
                class="ma-btn-icon"
            />
        </template>
        <template v-if="suffixIcon || this.$slots.suffix" #suffix>
            <slot name="suffix"/>
            <ma-icon
                v-if="suffixIcon" :icon="suffixIcon"
                class="ma-btn-icon"
            />
        </template>
    </component>
</template>
<script>
    import Input from 'ant-design-vue/lib/input/index.js';
    import Password from 'ant-design-vue/lib/input/Password.js';
    import MaIcon from '../MaIcon/MaIcon.vue';

    export default {
        name: 'ma-input',
        components: {
            AInput: Input,
            APassword: Password,
            MaIcon,
        },
        props: {
            value: { type: String, default: '' },
            readOnly: { type: Boolean, default: false },
            disabled: { type: Boolean, default: false },
            autoFocus: { type: Boolean, default: false },
            size: { type: String, default: 'default' },
            type: { type: String, default: 'text' },
            placeholder: { type: String, default: 'text' },
            rows: { type: Number, default: 2 },
            maxLength: { type: Number, default: undefined },
            autosize: { type: [Object, Boolean], default: false },
            allowClear: { type: Boolean, default: false },
            prefixIcon: { type: String, default: '' },
            suffixIcon: { type: String, default: '' },
            visibilityToggle: { type: Boolean, default: true },
            trim: { type: Boolean, default: false },
            lazy: { type: Boolean, default: false },
        },
        data() {
            return {
                data: this.value,
                component: this.type === 'password' ? 'APassword' : 'AInput',
            };
        },
        methods: {
            onChange(event){
                let newValue = this.trim && event.target.value ? event.target.value.trim() : event.target.value;
                this.$emit('input', newValue);
                //https://github.com/ant-design/ant-design/issues/16862#issuecomment-507616942
                if (event.type === 'click' && event.target.value === ''){
                    this.$emit('clear');
                }
            },
            onPaste(clipBoard){
                this.$emit('paste-native', clipBoard);
            },
            onKeydown(keyword){
                this.$emit('keydown-enter', keyword);
            },
            onInput(event){
                if (!this.lazy) {
                    let newValue = this.trim && event.target.value ? event.target.value.trim() : event.target.value;
                    this.$emit('input', newValue);
                }
            },
        },
        watch: {
            value(newValue){
                this.data = newValue;
            },
        },
    };
</script>

<style lang="scss" scoped>
@import '~ant-design-vue/lib/input/style/index.css';
.ma-input{

}
</style>
