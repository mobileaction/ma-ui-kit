<template>
    <a-menu
        v-model="current"
        mode="inline"
        class="ma-parent-menu h-full bg-sub-menu relative mt-5 border-r-0"
        :collapse="collapse"
    >
        <a-menu-item
            v-for="(m, index) in menuList"
            :key="`sub-menu-${index}`"
            :index="m.titleShort"
            class="flex flex-col flex-grow-0 flex-shrink-0 items-center justify-center border-t bg-parent-menu"
            @mouseenter.native="$emit('package-change', m.titleShort)"
            @mouseleave.native="$emit('package-change', m.titleShort)"
        >
            <div class="flex flex-col items-center justify-center">
                <ma-icon v-if="m.icon" :icon="m.icon" class="ma-menu-icon"/>
                <div
                    v-if="m.titleShort !== 'ACC'"
                    class="ma-menu-short-title"
                    :class="{ 'text-xs': m.titleShort === 'MARKET' || m.titleShort === 'SEARCH ADS'}"
                >
                    <div v-if="m.titleShort === 'SEARCH ADS'" class="flex flex-col items-center">
                        <b class="flex justify-center h-5">SEARCH</b>
                        <b class="flex justify-center">ADS</b>
                    </div>
                    <b v-else>{{ m.titleShort }}</b>
                </div>
            </div>
        </a-menu-item>
    </a-menu>
</template>

<script>
    import Menu from 'ant-design-vue/lib/menu/index.js';
    import MenuItem from 'ant-design-vue/lib/menu/MenuItem.js';
    import MaIcon from '../MaIcon/MaIcon.vue';
    export default {
        name: 'ma-menu',
        components: {
            AMenuItem: MenuItem,
            AMenu: Menu,
            MaIcon,
        },
        props: {
            collapse: { type: Boolean },
            parentMenu: { type: Boolean },
            user: { type: Object, default: () => ({}) },
            menuList: { type: Array, required: true },
        },
        data() {
            return {
                current: ['mail'],
            };
        },
        methods: {
            handleOk(){
                this.$emit('ok');
            },
            handleCancel() {
                this.$emit('cancel');
            },
        },
    };
</script>

<style lang="scss">
.ant-menu {
  background-color: transparent;
  color:#fff;
  border:none;
  .bg-sub-menu {
    --tw-bg-opacity: 1;
    background-color: rgba(50, 53, 92, var(--tw-bg-opacity));
  }
  .ma-menu-icon  {
    font-size: 20px;
    user-select: none;
    width: 20px;
    height: 20px;
    opacity: .5;
  }
  .ant-menu-item {
    display: flex;
    padding: 45px 0 !important;
    font-size: 0.75rem;
    font-weight: 200;
    border-top:1px solid #33355c;
    &:hover, &.is-active {
      background-color: transparent;
    }
    &.ant-menu-item-selected {
      .ma-menu-icon {
        opacity: 1;
      }
      &:after {
        border-right:none !important;
      }
    }
  }
  .ant-menu-item-selected {
    color:#fff !important;
    background: #585a7a !important;
  }
}
</style>
