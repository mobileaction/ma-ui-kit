<template>
    <a-progress
        :stroke-width="strokeWidth"
        :stroke-color="strokeColor"
        v-bind="$attrs"
        :percent="percentage"
        :status="status"
        :type="type"
        :width="width"
        :show-info="showText"
        :size="size"
        :format="format"
        :stroke-line-cap="strokeLinecap"
    />
</template>

<script>
    import Progress from 'ant-design-vue/lib/progress/index.js';

    export default {
        name: 'ma-switch',
        components: {
            AProgress: Progress,
        },
        props: {
            size: { type: String, default: 'default' },
            type: { type: String, default: 'line' },
            color: { type: String },
            width: { type: Number },
            showText: { type: Boolean, default: true },
            percentage: { type: Number },
            strokeWidth: { type: Number, default: 10 },
            strokeColor: { type: String },
            format: { type: Function },
            status: { type: String }, // success exception normal active(line only)
            strokeLinecap: { type: String, default: 'round' },
        },
        data() {
            return {};
        },
        computed: {
            classNames() {
                return {
                    [`ma-${this.color}`]: true,
                };
            },
            propsToPass() {
                // Checked will be passed to the Switch component only if it is not undefined
                return this.checked ? {
                    checked: this.checked,
                } : {};
            },
        },
    };
</script>

<style lang="scss">
@import '~ant-design-vue/lib/switch/style/index.css';
  .ma-switch {
    &.ant-switch-checked {
      background-color: #10ce66;
    }
    &.ma-yellow {
      &.ant-switch-checked {
        background-color: #FFB146;
      }
    }
    &.ma-turquoise {
      &.ant-switch-checked {
        background-color: #00A592;
      }
    }
  }
</style>
