<template>
    <a-pagination
        class="ma-pagination"
        v-bind="$attrs"
        :page-size-options="[10, 20, 30, 50, 100, 200]"
        :page-size="pageSize"
        :current="current"
        :total="total"
        :show-quick-jumper="showQuickJumper"
        :show-size-changer="showSizeChanger"
        :disabled="disabled"
        :size="size"
        :show-total="this.showTotalFunction"
        v-on="$listeners"
        @change="onPageChange"
        @showSizeChange="onPageSizeChange"
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
            pageSize: {
                type: Number,
                default: 10,
            },
            pageSizeOptions: {
                type: Array,
                default: () => [10, 20, 30, 50, 100, 200],
            },
            total: {
                type: Number,
                default: 0,
            },
            current: {
                type: Number,
                default: 1,
            },
            showQuickJumper: {
                type: Boolean,
                default: false,
            },
            showSizeChanger: {
                type: Boolean,
                default: false,
            },
            showTotal: {
                type: Boolean,
                default: false,
            },
            customShowTotal: {
                type: Function,
                default: null,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            size: {
                type: String,
                default: '',
            },
        },
        computed: {
            showTotalFunction() {
                return this.customShowTotal ? this.customShowTotal : (this.showTotal ? this.defaultTotalFunction : null);
            },
        },
        methods: {
            onPageChange(page) {
                this.$emit('update:current', page);
            },
            onPageSizeChange(current, pageSize) {
                this.$emit('update:current', 1);
                this.$emit('update:pageSize', pageSize);
            },
            defaultTotalFunction(total){
                return `Total ${total}`;
            },

        },
    };
</script>

<style lang="scss" scoped>
@import '~ant-design-vue/lib/pagination/style/index.css';
@import '~ant-design-vue/lib/select/style/index.css';


.ant-pagination {
  &.ma-pagination {
    ::v-deep.anticon svg {
      display: inline-block;
    }
    ::v-deep svg { vertical-align: baseline; }
    ::v-deep.ant-pagination-item-active{
      background-color: #4356b5;
      border-color: #4356b5;
      a{
        color: white;
      }
      a:hover{
        color: white;
      }
      li:hover{
        color: white;
      }
    }

    ::v-deep.ant-pagination-item{
      a:hover{
        color: #4356b5;
      }
    }
    ::v-deep.ant-pagination-item:hover{
      border-color: #4356b5;
      a{
        color: #4356b5;
      }
    }
    ::v-deep.ant-pagination-item-active:hover{
      a{
        color: white;
      }
    }
    ::v-deep.ant-pagination-prev:hover{
      a{
        border-color: #4356b5;
        color: #4356b5;
      }
    }
    ::v-deep.ant-pagination-next:hover{
      a{
        border-color: #4356b5;
        color: #4356b5;
      }
    }
    ::v-deep.ant-pagination-disabled:hover{
      a{
        border-color: #d9d9d9;
        color: rgba(0, 0, 0, 0.25);
      }
    }
    ::v-deep.ant-pagination-options-size-changer{
      .ant-select-selection:hover{
        border-color: #4356b5;
        i{
          color: #4356b5;
        }
      }
    }
    ::v-deep.ant-pagination-options-quick-jumper{
      input:hover{
        border-color: #4356b5;
      }
    }
  }
}
</style>
