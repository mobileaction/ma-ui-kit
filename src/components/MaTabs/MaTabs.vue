<template>
  <el-tabs
      type="border-card"
      class="ma-tabs"
      v-model="selectedTab"
  >
    <el-tab-pane
        v-for="(tab,i) in tabPanelList"
        :key="tab+i"
        :name="`${ tab.type }`"
        lazy
    >
      <span slot="label" class="ma-tab-name">
        {{ tab.label }}
        <span v-if="showCount && tab.totalElements">
          ({{ tab.totalElements }})
        </span>
        <div v-if="tab.isNew" class="ma-new-icon">
            NEW
        </div>
      </span>
      <slot></slot>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { Tabs, TabPane } from 'element-ui';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import MaPropValidator from '../../base/MaPropValidator.mjs';

library.add(faSpinner);

export default {
  name: 'ma-tabs',
  components: {
    ElTabs: Tabs,
    ElTabPane: TabPane,
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
  @import '~element-ui/lib/theme-chalk/tabs.css';
  .el-tabs__item {
    margin: 0 4px;
    font-size: 0.9rem;
    font-weight:400;
    border-radius: 5px 5px 0 0;
    background-color: var(--ma-main-color);
  }
  .el-tabs--border-card {
    background: none;
    border: none;
    box-shadow: none;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: var(--ma-main-color);
    background-color: var(--white);
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
  .ma-tab-name {
    display: flex;
    align-items: center;
  }
  .ma-new-icon {
    margin-top: -2px;
    margin-left: 3px;
    line-height: 0;
    color: white;
    padding-right: 0.3rem;
    font-weight: bold;
    font-size: 10px;
    display: inline-block;
    border: 0.5rem solid red;
    border-right-color: transparent;
  }
</style>
