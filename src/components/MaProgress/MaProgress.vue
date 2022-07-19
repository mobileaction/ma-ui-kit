<template>
    <a-progress
        :stroke-width="strokeWidth"
        :stroke-color="rateColors"
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
            isRateColor: { type: Boolean },
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
            rateColors() {
                // eslint-disable-next-line no-debugger
                debugger;
                if (!this.isRateColor) {
                    return this.strokeColor;
                }
                const x = this.percentage;
                switch (true) {
                    case (x <= 20):
                        return '#f56c6c';
                    case (x <= 40):
                        return '#e6a23c';
                    case (x <= 60):
                        return '#6f7ad3';
                    case (x <= 80):
                        return '#1989fa';
                    case (x <= 100):
                        return '#5cb87a';
                    default:
                        return '#fff';
                }
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
