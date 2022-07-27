<template>
    <a-steps
        class="ma-steps"
        :current="data"
        :direction="direction"
        :progress-dot="progressDot"
        @change="changeStep"
    >
        <slot/>
    </a-steps>
</template>
<script>
    import Steps from 'ant-design-vue/lib/steps/index.js';

    export default {
        name: 'ma-steps',
        components: {
            ASteps: Steps,
        },
        props: {
            value: { type: Number, default: 0 },
            direction: { type: String, default: 'horizontal' },
            progressDot: { type: Boolean, default: false },
        },
        data() {
            return {
                data: this.value,
            };
        },
        methods: {
            changeStep(data) {
                this.$emit('input', data);
            },
        },
        watch: {
            value(val) {
                this.data = val;
            },
        },
    };
</script>

<style lang="scss" scoped>
@import '~ant-design-vue/lib/steps/style/index.css';
.ma-steps {
  width: auto;
  ::v-deep.ant-steps-icon {
    .anticon {
      vertical-align: text-bottom;
    }
  }
}
</style>
