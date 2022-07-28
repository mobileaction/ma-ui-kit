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
  ::v-deep.ant-steps-item-active{
    .ant-steps-item-container{
      .ant-steps-item-content > .ant-steps-item-title::after{

      }
      .ant-steps-item-icon {
          background-color: #1dcfb4;
          border-color: #1dcfb4;
          .ant-steps-icon {
            .anticon {
              vertical-align: text-bottom;
            }
          }
        }
    }
  }
  ::v-deep.ant-steps-item-finish{
    .ant-steps-item-container{
      .ant-steps-item-content > .ant-steps-item-title::after{
        background-color: #32355c;
      }
      .ant-steps-item-icon {
        background-color: #32355c;
        border-color: #32355c !important;
        .ant-steps-icon {
          .anticon {
            vertical-align: text-bottom;
            color: #fff;
          }
        }
      }
    }
  }

  ::v-deep.ant-steps-item-wait {
    .ant-steps-item-container {
      .ant-steps-item-icon {
        background-color: #32355c;
        border-color: #32355c !important;
        &:hover {
            color: #fff;
        }
        .ant-steps-icon {
            color: #fff !important;
        }
      }
    }
  }

}
</style>
