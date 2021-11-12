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
        <el-tooltip
            v-if="tab.tooltip"
            :content="tab.tooltip"
            :placement="top"
            :enterable="false"
            class="ma-tab-label-popper"
        >
          <i class="fas fa-question-circle"/>
        </el-tooltip>
      </span>
      <slot></slot>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { Tabs, TabPane, Tooltip } from 'element-ui';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.css'
import { faSpinner, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import MaPropValidator from '../../base/MaPropValidator.mjs';

library.add(faSpinner, faQuestionCircle);

export default {
  name: 'ma-tabs',
  components: {
    ElTabs: Tabs,
    ElTabPane: TabPane,
    ElTooltip: Tooltip,
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
  .fa-question-circle:hover {
    color: black;
  }
  .ma-tab-label-popper {
    max-width: 400px;
    text-align: center;
  }
  .fa-question-circle {
    margin: 0 -10px 0 5px;
    visibility: hidden;
  }
  .el-tabs__item {
    font-size: 0.9rem;
    font-weight: 400;
    border-radius: 5px 5px 0 0;
    background-color: #202348;
    &:hover {
      .fa-question-circle {
        visibility: visible;
      }
    }
  }
  .el-tabs--border-card {
    background: none;
    border: none;
    box-shadow: none;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #202348;
    background-color: #fff;
    border-bottom: none;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item {
    color: #fff;
    border-width: 1px;
    border-color: #D6E0EA;
    margin-top:0;
    border-bottom: none;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:hover {
    color: #202347 !important;
    background-color: #fff;
    border-bottom: none;
  }
  .el-tabs--border-card>.el-tabs__header {
    background:none;
    border: none;
  }
  .el-tabs__nav .is-top:first-child{
    margin-left:0px !important;
  }
  .el-tabs__nav .is-top{
    margin-left:5px !important;
    padding: 0 20px !important;
  }
  .el-tabs--border-card > .el-tabs__content {
    padding: 0;
    margin: 0;
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
  .el-tooltip__popper {
    position: absolute;
    border-radius: 4px;
    padding: 10px;
    z-index: 2000;
    font-size: 12px;
    line-height: 1.2;
    min-width: 10px;
    word-wrap: break-word;
    background: #303133;
    color: #fff;
  }

</style>
