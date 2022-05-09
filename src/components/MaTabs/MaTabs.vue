<template>
    <a-tabs
        v-model="selectedTab"
        type="card"
        :size="size"
        class="ma-tabs"
        tab-position="top"
        :class="classNames"
        @change="handleTabChange"
    >
        <a-tab-pane
            v-for="(tab) in tabPanelList"
            :key="tab.type"
            lazy
        >
            <span slot="tab" class="ma-tab-name">
                {{ tab.label }}
                <span v-if="showCount && tab.totalElements" class="ma-count">
                    ({{ tab.totalElements }})
                </span>
                <div v-if="tab.tooltip" class="ma-tooltip">
                    <a-tooltip>
                        <template slot="title">
                            {{ tab.tooltip }}
                        </template>
                        <ma-icon icon="question-circle"/>
                    </a-tooltip>
                </div>
                <div v-if="tab.isNew" class="ma-new-icon">
                    NEW
                </div>

                <img v-if="tab.image" class="ma-tab-image" :src="tab.image">
            </span>
            <slot :name="tab.type"/>
        </a-tab-pane>
        <slot slot="tabBarExtraContent"/>
    </a-tabs>
</template>

<script>
    import Tabs  from 'ant-design-vue/lib/tabs/index.js';
    import Tooltip  from 'ant-design-vue/lib/tooltip/index.js';
    import MaIcon from '../MaIcon/MaIcon.vue';

    const { TabPane } = Tabs;
    import MaPropValidator from '../../base/MaPropValidator.js';

    export default {
        name: 'ma-tabs',
        components: {
            ATooltip: Tooltip,
            ATabs: Tabs,
            ATabPane: TabPane,
            MaIcon,
        },
        props: {
            tabPanelList: {
                type: Array,
                default: () => [],
                validator: MaPropValidator.listItemsHasFields(['type']),
            },
            variant: {
                type: String,
                default: 'module',
            },
            showCount: {
                type: Boolean,
                default: false,
            },
            size: {
                type: String,
                default: 'default',
            },
            selected: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                selectedTab: '',
            };
        },
        computed: {
            classNames () {
                return {
                    [`-${this.variant}`]: true,
                };
            },
        },
        methods: {
            handleTabChange(tab) {
                this.$emit('activeTab', tab);
                this.$emit('update:selected', tab);
            },
        },
        mounted() {
            this.selectedTab = this.selected !== '' ? this.selected : (this.tabPanelList[0] && this.tabPanelList[0].type ? this.tabPanelList[0].type : '');
        },
    };
</script>

<style lang="scss">
@import '~ant-design-vue/lib/tabs/style/index.css';
@import '~ant-design-vue/lib/tooltip/style/index.css';
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
  color: #333;
}
.ant-tabs-tab:active {
  color: #333;
}
.ma-tabs {
    letter-spacing: 0.020em;
  &.hover {
    color: red;
  }
    .ant-tabs-tab{
      margin-right: 5px!important;
      &.hover {
        color: red;
      }
    }

    .ant-tabs-bar {
      margin:0;
    }
    &.-header {
      .ant-tabs-tab{
        background-color: #202348 !important;
        border: 1px solid #202348;
        color: #fff;
      }
      .ant-tabs-tab-active{
        color: #333;
        background-color: #fff !important;
        border: 1px solid #202348;
        &.hover {
          color: #333;
        }
      }
      .ma-tab-name {
        &:not(.is-disabled):hover {
          color: #c7c5c5;
        }
      }
    }
    .is-new-img {
      width: 40px;
      margin-left: 1px;
      margin-top: -1px;
    }
  .ma-tooltip {
    margin-left:3px;
  }
  }
  .ma-tab-name {
    display: flex;
    align-items: center;
    &:not(.is-disabled):hover {
      color: #333;
    }
    .ma-tab-image {
      width: 36px;
      height: 36px;
      border-radius: 4px;
    }
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
  .ma-count {
    margin-left: 2px;
  }
</style>
