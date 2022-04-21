<template>
    <a-modal
        class="ma-modal"
        v-bind="$attrs"
        @ok="handleOk"
        @cancel="handleCancel"
    >
        <slot name="title" slot="title"/>
        <slot/>
        <slot name="footer" slot="footer"/>
    </a-modal>
</template>

<script>
    import Modal from 'ant-design-vue/lib/modal/index.js';
    export default {
        name: 'ma-modal',
        components: {
            AModal: Modal,
        },
        methods: {
            handleOk(){
                this.$emit('ok');
            },
            handleCancel() {
                this.$emit('cancel');
            },
        },
    };
</script>

<style scoped>
@import '~ant-design-vue/lib/modal/style/index.css';

</style>
