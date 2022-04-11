<template>
    <a-tooltip
        :overlay-class-name="className"
        v-bind="$attrs"
        :placement="placement"
    >
        <template slot="title">
            <span v-if="title !== ''">{{ title }} </span>
            <slot v-else name="title"/>
        </template>
        <slot/>
    </a-tooltip>
</template>

<script lang="ts">
    import Tooltip from 'ant-design-vue/lib/tooltip/index.js';

    export default {
        name: 'ma-tooltip',
        components: {
            ATooltip: Tooltip,
        },
        props: {
            placement: { type: String, default: 'top' },
            title: { type: String, default: '' },
            color: { type: String, default: 'black' },
        },
        computed: {
            className() {
                return 'ma-tooltip-' + this.color;
            },
        },
    };
</script>

<style lang="scss">

.ma-tooltip-black {
  z-index: 3000;
.ant-tooltip-inner {
  background-color: rgba(0, 0, 0, 0.80);
}
}
.ma-tooltip-white {
  z-index: 3000;
  .ant-tooltip-inner {
    border-color: #000000;
    background: #ffffff;
    color: #000000;
  }
}
</style>
