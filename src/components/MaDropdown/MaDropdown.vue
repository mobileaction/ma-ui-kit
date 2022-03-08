<template>
    <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            Hover me
        </a>
        <template slot="overlay">
            <menu slot="overlay">
                ,
                <a-menu-item
                    v-for="(item) in menuItems"
                    :key="item.key"
                >
                    <div> {{ item.title }} </div>
                </a-menu-item>
            </menu>
        </template>
    </a-dropdown>
</template>

<script>
    import Dropdown from 'ant-design-vue/lib/dropdown/index.js';
    import MenuItem from 'ant-design-vue/lib/menu/MenuItem.js';
    export default {
        name: 'ma-dropdown',
        components: {
            ADropdown: Dropdown,
            AMenuItem: MenuItem,
        },
        props: {
            menuItems: { type: Array, default: () => [] },
            title: { type: String, default: null },
            content: { type: String, default: null },
        },
        data() {
            return {};
        },
    };
</script>

<style lang="scss">
@import '~ant-design-vue/lib/dropdown/style/index.css';
@import '~ant-design-vue/lib/menu/style/index.css';
</style>
