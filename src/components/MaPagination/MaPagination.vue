<template>
    <a-pagination
        v-bind="$attrs"
        v-on="$listeners"
        :page-sizes="[20, 30, 50, 100, 200]"
        :current-page.sync="pagination.currentPage"
        :page-size="pagination.pageSize"
        :total="pagination.total"
        @change="v => pagination.currentPage = v"
        @show-size-change="v => pagination.pageSize = v"
    />
</template>

<script>
  import Pagination from 'ant-design-vue/lib/pagination';

  export default {
    name: 'ma-pagination',
    components: {
      APagination: Pagination,
  },
  data() {
    return {
      current: 2,
    };
  },
  props: {
    pagination: { type: Object, default: () => ({}) },
  },
  methods: {
  },
};
</script>

<style>
  @import '~ant-design-vue/lib/pagination/style/index.css';
  @import '~ant-design-vue/lib/icon/style/index.css';
  .anticon {
    display: inline-block;
  }
</style>
