<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      Hover me
    </a>
    <template  slot="overlay">
      <menu slot="overlay">,
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
import Dropdown from 'ant-design-vue/lib/dropdown';
import MenuItem from 'ant-design-vue/lib/menu/MenuItem';
export default {
  name: 'ma-dropdown',
  components: {
    ADropdown: Dropdown,
    AMenuItem: MenuItem,
  },
  data() {
    return {};
  },
  props: {
    menuItems: { type: Array, default: () => [] },
    title: { type: String, default: null },
    content: { type: String, default: null },
  },
};
</script>

<style lang="scss">
@import '~ant-design-vue/lib/dropdown/style/index.css';
@import '~ant-design-vue/lib/menu/style/index.css';
</style>
