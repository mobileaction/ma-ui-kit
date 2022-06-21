<template>
  <a-checkbox
      :checked="data"
      class="ma-checkbox"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="onChange"
      :value="stringData"
  >
    {{label}}
    <slot/>
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
    value: { type: Boolean | String, default: false | undefined },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: undefined },
    indeterminate: { type: Boolean, default: false },
  },
  data() {
    return {
      data: typeof this.value === 'boolean' ? this.value : undefined,
      stringData: typeof this.value === 'string' ? this.value : undefined,
    };
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.checked);
      this.$emit('change', event.target.checked);
    },
  },
  watch: {
    value(newValue){
      this.data = typeof newValue === 'boolean' ? newValue : undefined;
      this.stringData = typeof newValue === 'string' ? newValue : undefined;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~ant-design-vue/lib/checkbox/style/index.css';
.ma-checkbox{
}
</style>
