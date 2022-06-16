<template>
  <a-checkbox class="ma-checkbox"></a-checkbox>
</template>
<script>
import Checkbox from 'ant-design-vue/lib/checkbox/index';

export default {
  name: 'ma-checkbox',
  components: {
    ACheckbox: Checkbox,
  },
  methods: {

    onKeydown(keyword){
      this.$emit('keydown-enter', keyword);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~ant-design-vue/lib/checkbox/style/index.css';
.ma-checkbox{
}
</style>
