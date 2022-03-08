<template>
    <a-pagination
        v-bind="$attrs"
        :page-size-options="[20, 30, 50, 100, 200]"
        :current-page="pagination.currentPage"
        :page-size="pagination.pageSize"
        :total="pagination.total"
        v-on="$listeners"
        @change="onPageChange"
        @show-size-change="onPageSizeChange"
    />
</template>

<script>
    import Pagination from 'ant-design-vue/lib/pagination/index.js';

    export default {
        name: 'ma-pagination',
        components: {
            APagination: Pagination,
        },
        props: {
            pagination: { type: Object, default: () => ({}) },
        },
        data() {
            return {
                current: 2,
            };
        },
        methods: {
            onPageChange(page) {
                this.$emit('update:pagination', { ...this.pagination, currentPage: page });
            },
            onPageSizeChange(pageSize) {
                this.$emit('update:pagination', { ...this.pagination, pageSize });
            },
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
