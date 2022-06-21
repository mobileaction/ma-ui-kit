<template>
  <a-checkbox
      :checked="data"
      class="ma-checkbox"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="onChange"
  >
    {{label}}
  </a-checkbox>
</template>
<script>
import Checkbox from 'ant-design-vue/lib/checkbox/index';

export default {
  name: 'ma-checkbox',
  components: {
    ACheckbox: Checkbox,
  },
  props: {
    value: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: undefined },
    indeterminate: { type: Boolean, default: false },
  },
  data() {
    return {
      data: this.value,
    };
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.checked);
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
@import '~ant-design-vue/lib/checkbox/style/index.css';
.ma-checkbox{
}
</style>
