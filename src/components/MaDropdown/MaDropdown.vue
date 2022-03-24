<template>
    <a-dropdown :trigger="trigger">
        <div>
            <div v-if="isButton">
                <a-tooltip
                    v-if="tooltip" :placement="tooltip.placement ? tooltip.placement : 'top'"
                >
                    <template slot="title">
                        {{ tooltip.content }}
                    </template>
                    <ma-button v-if="buttonIcon !== ''" :icon="buttonIcon" @click="e => e.preventDefault()">
                        <div v-if="selectedItem">
                            <img v-if="hasImage" :src="selectedItem.image">
                            {{ selectedItem.title }} <ma-icon icon="caret-down"/>
                        </div>
                        <div v-else>
                            {{ content }} <ma-icon icon="caret-down"/>
                        </div>
                    </ma-button>
                    <ma-button v-else @click="e => e.preventDefault()">
                        <div v-if="selectedItem">
                            <img v-if="hasImage" :src="selectedItem.image">
                            {{ selectedItem.title }} <ma-icon icon="caret-down"/>
                        </div>
                        <div v-else>
                            {{ content }} <ma-icon icon="caret-down"/>
                        </div>
                    </ma-button>
                </a-tooltip>
                <div v-else>
                    <ma-button v-if="buttonIcon !== ''" :icon="buttonIcon" @click="e => e.preventDefault()">
                        <div v-if="selectedItem">
                            <img v-if="hasImage" :src="selectedItem.image">
                            {{ selectedItem.title }} <ma-icon icon="caret-down"/>
                        </div>
                        <div v-else>
                            {{ content }} <ma-icon icon="caret-down"/>
                        </div>
                    </ma-button>
                    <ma-button v-else @click="e => e.preventDefault()">
                        <div v-if="selectedItem">
                            <img v-if="hasImage" :src="selectedItem.image">
                            {{ selectedItem.title }} <ma-icon icon="caret-down"/>
                        </div>
                        <div v-else>
                            {{ content }} <ma-icon icon="caret-down"/>
                        </div>
                    </ma-button>
                </div>
            </div>
            <div v-else>
                <a-tooltip v-if="tooltip" :placement="tooltip.placement ? tooltip.placement : 'top' ">
                    <template slot="title">
                        {{ tooltip.content }}
                    </template>
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        <div v-if="selectedItem">
                            <img v-if="hasImage" :src="selectedItem.image">
                            {{ selectedItem.title }} <ma-icon icon="caret-down"/>
                        </div>
                        <div v-else> {{ content }} <ma-icon icon="caret-down"/> </div>
                    </a>
                </a-tooltip>
                <a v-else class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <div v-if="selectedItem">
                        <img v-if="hasImage" :src="selectedItem.image">
                        {{ selectedItem.title }} <ma-icon icon="caret-down"/>
                    </div>
                    <div v-else> {{ content }} <ma-icon icon="caret-down"/> </div>
                </a>
            </div>
        </div>
        <a-menu slot="overlay">
            <span v-if=" header !== '' " class="font-bold"> {{ header }}</span>
            <a-menu-item
                v-for="(item, index) in menuItems"
                :key="index"
                class="ma-menu-item"
                @click="click(item)"
            >
                <div class="flex flex-row justify-between">
                    <!--dropdown menu item name image icon part-->
                    <div class="mr-1">
                        <a-tooltip v-if="item.tooltip" placement="top">
                            <template slot="title">
                                {{ item.tooltip }}
                            </template>
                            <img v-if="item.image" :src="item.image">
                            <ma-icon v-if="item.icon" :icon="item.icon"/>
                            <div>
                                <div v-if="item.bold" class="font-bold">
                                    {{ item.title }}
                                </div>
                                <div v-else>
                                    {{ item.title }}
                                </div>
                            </div>
                            <div v-if="item.description">
                                {{ item.description }}
                            </div>
                        </a-tooltip>
                        <div v-else>
                            <img v-if="item.image" :src="item.image">
                            <ma-icon v-if="item.icon" :icon="item.icon"/>
                            <div>
                                <div v-if="item.bold" class="font-bold">
                                    {{ item.title }}
                                </div>
                                <div v-else>
                                    {{ item.title }}
                                </div>
                            </div>
                            <div v-if="item.description">
                                {{ item.description }}
                            </div>
                        </div>
                    </div>
                    <!--dropdown menu item check property and button group part-->
                    <div class="flex flex-row">
                        <div v-if="item.checked" class="mr-2">
                            <ma-button variant="link" icon="check"/>
                        </div>
                        <div v-if="extraIcon" class="mr-2">
                            <a-tooltip v-if="extraIcon.tooltip">
                                <template slot="title">
                                    {{ extraIcon.tooltip }}
                                </template>
                                <ma-button variant="link" :icon="extraIcon.icon"/>
                            </a-tooltip>
                            <ma-button v-else variant="link" :icon="extraIcon.icon"/>
                        </div>
                        <div v-if="item.buttonGroup && item.buttonGroup.length > 0">
                            <div
                                v-for="(button, index) in item.buttonGroup"
                                :key="index"
                                class="flex flex-row mr-1"
                            >
                                <a-tooltip v-if="button.tooltip">
                                    <template slot="title">
                                        {{ button.tooltip }}
                                    </template>
                                    <ma-button
                                        variant="link"
                                        :icon="button.icon"
                                        @click="$emit('buttonGroupEvent', $event)"
                                    />
                                </a-tooltip>
                                <ma-button
                                    v-else variant="link"
                                    :icon="button.icon"
                                    @click="$emit('buttonGroupEvent', $event)"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </a-menu-item>
            <!--there is a menu item if a button required in bottom of menu -->
            <a-menu-item
                v-if="menuItemButton"
                class="ma-menu-item"
                @click="$emit('menuItemClick', $event);"
            >
                <ma-button v-if="menuItemButton.icon" :icon="menuItemButton.icon" variant="link">
                    {{ menuItemButton.name }}
                </ma-button>
            </a-menu-item>
        </a-menu>
    </a-dropdown>
</template>

<script>
    import Dropdown from 'ant-design-vue/lib/dropdown/index.js';
    import Tooltip  from 'ant-design-vue/lib/tooltip/index.js';
    import MaButton from '../MaButton/MaButton.vue';
    import MaIcon from '../MaIcon/MaIcon.vue';
    const { Menu, MenuItem } = Dropdown;
    export default {
        name: 'ma-dropdown',
        components: {
            MaButton,
            MaIcon,
            ATooltip: Tooltip,
            ADropdown: Dropdown,
            AMenuItem: MenuItem,
            AMenu: Menu,
        },
        props: {
            menuItems: { type: Array, default: () => [] },
            menuItemButton: { type: Object, default: null },
            title: { type: String, default: null },
            trigger: { type: Array, default: () => ['hover'] },
            content: { type: String, default: '' },
            type: { type: String, default: 'button' },
            icon: { type: String, default: '' },
            header: { type: String, default: '' },
            extraIcon: { type: Object, default: null },
            tooltip: { type: Object, default: null },
        },
        data() {
            return {
                selectedItem: null,
            };
        },
        computed: {
            isButton() {
                return this.type === 'button';
            },
            hasImage() {
                return this.menuItems.some(x => x.image);
            },
            buttonIcon(){
                return this.selectedItem && this.selectedItem.icon ? this.selectedItem.icon : this.icon;
            },
        },
        methods: {
            click(item){
                this.selectedItem = item;
                this.$emit('click',item);
            },
        },
    };
</script>

<style lang="scss">
@import '~ant-design-vue/lib/dropdown/style/index.css';
@import '~ant-design-vue/lib/menu/style/index.css';

.ant-dropdown{
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 10px 0;
  margin: 5px 2px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  color: #606266;
  cursor: pointer;
  line-height: 27px;
  padding: 0 15px;
  font-size: 13px;
  min-width: 50px !important;
  .ma-menu-item{
    left: 2px;
    bottom: 1px;
    &:hover {
      background-color: #eceef8 !important;
      color: #6978c4;
    }
  }
}
</style>
