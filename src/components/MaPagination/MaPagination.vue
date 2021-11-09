<template>
  <el-pagination
      v-bind="$attrs"
      v-on="listeners"
      background
      :page-sizes="[20, 30, 50, 100, 200]"
      :current-page.sync="pagination.currentPage"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      layout="prev, pager, next, sizes, total"
      @current-change="v => pagination.currentPage = v"
      @size-change="v => pagination.pageSize = v"
  />
</template>

<script>
import { Pagination } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang);
export default {
  name: 'ma-pagination',
  components: {
    ElPagination: Pagination,
  },
  props: {
    pagination: { type: Object, default: () => null },
  },
};
</script>

<style lang="scss">
  @import '~element-ui/lib/theme-chalk/pagination.css';
  @import '~element-ui/lib/theme-chalk/icon.css';
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #292C52 !important;
  }
  .el-pager li {
    min-width: 28px!important;
  }
</style>
