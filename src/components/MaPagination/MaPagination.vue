<template>
  <pagination
      v-model="current"
      :total="50"
      show-less-items
  />
</template>

<script>
  import Pagination from 'ant-design-vue/lib/pagination';

  export default {
    name: 'ma-pagination',
    components: {
      Pagination,
  },
  data() {
    return {
      current: 2,
    };
  },
  props: {
    text: { type: String, default: 'CSV' },
    size: { type: String, default: 'small' },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    classes: { type: [Array, String, Object], default: '' },
  },
  methods: {
  },
};
</script>

<style lang="scss">
  @import '~ant-design-vue/lib/pagination/style'
</style>
