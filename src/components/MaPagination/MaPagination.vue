<template>
  <a-pagination
      v-model="current"
      show-size-changer
      :default-current="0"
      :total="pagination.total"
      @showSizeChange="onShowSizeChange"
  />
</template>

<script>
import { Pagination } from 'ant-design-vue';
import 'ant-design-vue/lib/pagination/style/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang);
export default {
  name: 'ma-pagination',
  data() {
    return {
      pageSize: 20,
      current: 4,
    };
  },
  components: {
   APagination: Pagination,
  },
  props: {
    pagination: { type: Object, default: () => null },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
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
