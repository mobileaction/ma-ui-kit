<template>
  <a-checkbox-group
      v-model="data"
      class="ma-checkbox-group"
      :options="options"
      @change="onChange"
  >
    <slot/>
  </a-checkbox-group>
</template>

<script>
import { Checkbox } from 'ant-design-vue';

const { Group } = Checkbox;

export default {
  name: "ma-checkbox-group",
  components: {
    ACheckboxGroup: Group
  },
  props: {
    options: { type: Array, default: () => [] },
    value: {type: Array, default: () => [] }
  },
  data() {
    return {
      data: this.value
    }
  },
  methods: {
    onChange(checkedValues){
      this.$emit('input', checkedValues);
      this.$emit('change', checkedValues);
    }
  },
  watch: {
    value(newValue){
      this.data = newValue;
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~ant-design-vue/lib/checkbox/style/index.css';

</style>