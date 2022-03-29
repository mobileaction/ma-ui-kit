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
                    <ma-button
                        :shape="buttonShape"
                        :class="buttonClass"
                        @click="e => e.preventDefault()"
                    >
                        <div v-if="selectedItem" class="flex flex-row justify-start items-center">
                            <ma-icon v-if="buttonIcon !== ''" :icon="buttonIcon" :color="iconColor"/>
                            <img v-if="hasImage && selectedItem.image" :src="selectedItem.image" class="ma-dropdown-image">
                            <div v-if="autoContentChange">
                                {{ selectedItem.title }}
                                <ma-icon icon="caret-down"/>
                            </div>
                            <div v-else>
                                {{ content }}
                                <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                            </div>
                        </div>
                        <div v-else class="flex flex-row justify-start items-center">
                            <ma-icon v-if="buttonIcon !== ''" :icon="buttonIcon" :color="iconColor"/>
                            <img v-if="selectedImage !== '' " :src="selectedImage" class="ma-dropdown-image">
                            {{ content }} <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                        </div>
                    </ma-button>
                </a-tooltip>
                <div v-else>
                    <ma-button
                        :shape="buttonShape"
                        :class="buttonClass"
                        @click="e => e.preventDefault()"
                    >
                        <div v-if="selectedItem" class="flex flex-row justify-start items-center">
                            <ma-icon v-if="buttonIcon !== ''" :icon="buttonIcon" :color="iconColor"/>
                            <img v-if="hasImage && selectedItem.image" :src="selectedItem.image" class="ma-dropdown-image">
                            <div v-if="autoContentChange">
                                {{ selectedItem.title }}
                                <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                            </div>
                            <div v-else>
                                {{ content }}
                                <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                            </div>
                        </div>
                        <div v-else class="flex flex-row justify-start items-center">
                            <ma-icon v-if="buttonIcon !== ''" :icon="buttonIcon" :color="iconColor"/>
                            <img v-if="selectedImage !== '' " :src="selectedImage" class="ma-dropdown-image">
                            {{ content }} <ma-icon v-if="arrowVisibility" icon="caret-down"/>
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
                        <div v-if="selectedItem" class="flex flex-row justify-start items-center">
                            <img v-if="hasImage && selectedItem.image" :src="selectedItem.image" class="ma-dropdown-image">
                            <div v-if="autoContentChange">
                                {{ selectedItem.title }}
                                <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                            </div>
                            <div v-else>
                                {{ content }}
                                <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                            </div>
                        </div>
                        <div v-else class="flex flex-row justify-start items-center">
                            <img v-if="selectedImage !== '' " :src="selectedImage" class="ma-dropdown-image">
                            {{ content }} <ma-icon v-if="arrowVisibility" icon="caret-down"/> </div>
                    </a>
                </a-tooltip>
                <a v-else class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <div v-if="selectedItem" class="flex flex-row justify-start items-center">
                        <img v-if="hasImage && selectedItem.image" :src="selectedItem.image" class="ma-dropdown-image">
                        <div v-if="autoContentChange">
                            {{ selectedItem.title }}
                            <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                        </div>
                        <div v-else>
                            {{ content }}
                            <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                        </div>
                    </div>
                    <div v-else class="flex flex-row justify-start items-center">
                        <img v-if="selectedImage !== '' " :src="selectedImage" class="ma-dropdown-image">
                        {{ content }} <ma-icon v-if="arrowVisibility" icon="caret-down"/>
                    </div>
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
                            <div class="flex flex-col items-center">
                                <div class="flex flex-row justify-center items-center">
                                    <img v-if="item.image" :src="item.image" class="ma-dropdown-image">
                                    <ma-icon
                                        v-if="item.icon" :icon="item.icon"
                                        class="mr-1"
                                        :class="item.className"
                                    />
                                    <div>
                                        <div v-if="item.bold" class="font-bold">
                                            {{ item.title }}
                                        </div>
                                        <div v-else>
                                            {{ item.title }}
                                        </div>
                                    </div>
                                </div>
                                <div v-if="item.description" class="text-xs">
                                    {{ item.description }}
                                </div>
                            </div>
                        </a-tooltip>
                        <div v-else class="flex flex-col items-center">
                            <div class="flex flex-row justify-start items-center">
                                <img v-if="item.image" :src="item.image" class="ma-dropdown-image">
                                <ma-icon
                                    v-if="item.icon" :icon="item.icon"
                                    class="mr-1"
                                    :class="item.className"
                                />
                                <div>
                                    <div v-if="item.bold" class="font-bold">
                                        {{ item.title }}
                                    </div>
                                    <div v-else>
                                        {{ item.title }}
                                    </div>
                                </div>
                            </div>
                            <div v-if="item.description" class="text-xs">
                                {{ item.description }}
                            </div>
                        </div>
                    </div>
                    <!--dropdown menu item check property and button group part-->
                    <div class="flex flex-row">
                        <div v-if="item.checked" class="mr-2">
                            <ma-button variant="link" class="bottom-1" icon="check"/>
                        </div>
                        <div v-if="extraIcon" class="mr-2">
                            <a-tooltip v-if="extraIcon.tooltip">
                                <template slot="title">
                                    {{ extraIcon.tooltip }}
                                </template>
                                <ma-button variant="link" class="bottom-1" :icon="extraIcon.icon"/>
                            </a-tooltip>
                            <ma-button
                                v-else variant="link"
                                class="bottom-1"
                                :icon="extraIcon.icon"
                            />
                        </div>
                        <div v-if="item.buttonGroup && item.buttonGroup.length > 0" class="flex flex-row">
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
                                        class="bottom-1"
                                        @click="buttonGroupClick(button, item)"
                                    />
                                </a-tooltip>
                                <ma-button
                                    v-else variant="link"
                                    :icon="button.icon"
                                    class="bottom-1"
                                    @click="buttonGroupClick(button, item)"
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
            >
                <ma-button
                    v-if="menuItemButton.icon" :icon="menuItemButton.icon"
                    variant="link"
                    @click="menuItemClick"
                >
                    {{ menuItemButton.name }}
                </ma-button>
            </a-menu-item>
        </a-menu>
    </a-dropdown>
</template>

<script>
    import Dropdown from 'ant-design-vue/lib/dropdown/index.js';
    import Menu from 'ant-design-vue/lib/menu/index.js';
    import MenuItem from 'ant-design-vue/lib/menu/MenuItem.js';
    import Tooltip  from 'ant-design-vue/lib/tooltip/index.js';
    import MaButton from '../MaButton/MaButton.vue';
    import MaIcon from '../MaIcon/MaIcon.vue';
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
            selectedImage: { type: String, default: '' },
            buttonShape: { type: String },
            buttonClass: { type: String },
            iconColor: { type: String },
            arrowVisibility: { type: Boolean, default: true },
            selectedDescription: { type: String, default: null },
            autoContentChange: { type: Boolean, default: true },
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
            menuItemClick(){
                this.$emit('menu');
            },
            buttonGroupClick(btn, item){
                item.btn = btn;
                this.$emit('group',item);
            },
        },
    };
</script>

<style lang="scss">
@import '~ant-design-vue/lib/dropdown/style/index.css';
@import '~ant-design-vue/lib/menu/style/index.css';

.ant-dropdown{
  min-width: 50px !important;
  padding: 0px !important;
  .ma-menu-item{
    left: 2px;
    &:hover {
      background-color: #eceef8 !important;
      color: #6978c4;
    }
  }
}
.ma-dropdown-image {
  width: 25px;
  height: 25px;
  border-radius: 4px;
  margin-right: 2px;
}
</style>
