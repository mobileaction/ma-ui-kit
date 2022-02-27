<template>
    <a-switch
        v-bind="propsToPass"
        :loading="loading"
        :checked-children="checkedChildren"
        :un-checked-children="unCheckedChildren"
        :disabled="disabled"
        :size="size"
        :default-checked="defaultChecked"
        class="ma-switch"
        :class="classNames"
        @change="$emit('change',$event)"
        @click="$emit('click',$event)"
    >
    </a-switch>
</template>

<script>
import Switch from 'ant-design-vue/lib/switch';

export default {
  name: 'MaSwitch',
  components: {
    ASwitch: Switch,
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
  props: {
    size: { type: String, default: 'default' },
    checkedChildren: { type: String },
    unCheckedChildren: { type: String },
    color: { type: String },
    defaultChecked: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    checked: { type: Boolean, default: undefined },
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
