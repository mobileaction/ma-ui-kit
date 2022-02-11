<template>
  <a-tooltip
      class="ma-tooltip"
      v-bind="$attrs"
      :placement="placement"
  >
    <template slot="title">
     {{ title }}
    </template>
    <slot/>
  </a-tooltip>
</template>

<script lang="ts">
import Tooltip from 'ant-design-vue/lib/tooltip';
import MaIcon from '../MaIcon/MaIcon.vue';

export default {
  name: 'ma-tooltip',
  components: {
    MaIcon,
    ATooltip: Tooltip,
  },
  props: {
    placement: { type: String, default: 'top' },
    title: { type: String, default: '' },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
  @import '~ant-design-vue/lib/button/style/index.css';
    .ma-tooltip {
    }
</style>
