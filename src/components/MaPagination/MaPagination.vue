<template>
  <el-pagination/>
</template>

<script>
import { Pagination,  } from 'element-ui';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import MaPropValidator from '../../base/MaPropValidator.mjs';

library.add(faDownload, faSpinner);

export default {
  name: 'ma-tabs',
  components: {
    ElPagination: Pagination,
    FontAwesomeIcon,
    MaPropValidator,
  },
  data() {
    return {
      selectedTab: '',
    }
  },
  props: {
    tabPanelList: {
      type: Array,
      default: () => [],
      validator: MaPropValidator.listItemsHasFields(['type']),
    },
    showCount: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    },
  },
  mounted() {
    this.selectedTab = this.tabPanelList.map(tab => tab.active === true)[0].type || this.tabPanelList[0].type;
  },
  watch: {
    selectedTab() {
      this.$emit('activeTab', this.selectedTab);
      console.log('Selected Tab', this.selectedTab);
    }
  }
};
</script>

<style lang="scss">
  @import '~element-ui/lib/theme-chalk/pagination.css';
  .el-tabs__item {
    margin: 0 4px;
    font-size: 0.9rem;
    font-weight:400;
    border-radius: 5px 5px 0 0;
    background-color: #202348;
  }
  .el-tabs--border-card {
    background: none;
    border: none;
    box-shadow: none;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #202347;
    background-color: var(--white);
    //border-top: 2px solid #D6E0EA;
    //border-left: 2px solid #D6E0EA;
    //border-radius: 5px 5px 0 0;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item {
    color: var(--white);
    border-width: 1px;
    border-color: var(--white);;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    color: #202347 !important;
    background-color: var(--white);
  }
  .el-tabs--border-card>.el-tabs__header {
    background:none;
    border: none;
  }
  .el-tabs__nav .is-top{
    margin:1px !important;
  }
  .is-new-img {
    width: 40px;
    margin-left: 1px;
    margin-top: -1px;
  }
</style>
