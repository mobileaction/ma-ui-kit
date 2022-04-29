<template>
    <a-pagination
        class="ma-pagination"
        :class="classNames"
        v-bind="$attrs"
        :page-size-options="pageSizeOptions"
        :page-size="pageSize"
        :current="current"
        :total="total"
        :show-quick-jumper="showQuickJumper"
        :show-size-changer="showSizeChanger"
        :disabled="disabled"
        :show-total="showTotalFunction"
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
            pageSize: { type: Number, default: 10 },
            pageSizeOptions: { type: Array, default: () => ['10', '20', '30', '50', '100', '200'] },
            total: { type: Number, default: 0 },
            current: { type: Number, default: 1 },
            showQuickJumper: { type: Boolean },
            showSizeChanger: { type: Boolean },
            hideTotal: { type: Boolean },
            disabled: { type: Boolean },
            size: { type: String, default: '' },
        },
        computed: {
            showTotalFunction() {
                return this.hideTotal ? null : total => `Total ${total}`;
            },
            classNames() {
                return this.size === 'small' ? '-small' : '';
            },
        },
        methods: {
            onPageChange(page) {
                this.$emit('update:current', page);
                this.$emit('onPageChange', page);
            },
            onPageSizeChange(current, pageSize) {
                this.$emit('update:current', 1);
                this.$emit('update:pageSize', pageSize);
                this.$emit('onPageSizeChange', pageSize);
            },
        },
    };
</script>

<style lang="scss" scoped>
@import '~ant-design-vue/lib/pagination/style/index.css';
@import '~ant-design-vue/lib/select/style/index.css';

.ant-pagination {
  &.ma-pagination {
    &.-small {
      font-size: 12px;
      ::v-deep.ant-pagination-item{
        min-width: 26px;
        line-height: 26px;
        height: 26px;
      }
      ::v-deep.ant-pagination-prev{
        min-width: 26px;
        line-height: 26px;
        height: 26px;
      }
      ::v-deep.ant-pagination-next{
        min-width: 26px;
        line-height: 26px;
        height: 26px;
      }
      ::v-deep.ant-pagination-options-size-changer{
        .ant-select-selection--single{
          min-width: 26px;
          line-height: 26px;
          height: 26px;
          .ant-select-selection__rendered{
            min-width: 26px;
            line-height: 26px;
            height: 26px;
            font-size: 12px;
          }
        }
      }
      ::v-deep.ant-pagination-options-quick-jumper{
        vertical-align: baseline;
        input{
          min-width: 26px;
          line-height: 26px;
          height: 26px;
          width: 35px;
        }
      }
    }
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
    @apply m-3
  }
}
</style>
