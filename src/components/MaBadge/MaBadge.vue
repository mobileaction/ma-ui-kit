<template>
    <a-badge
        v-bind="$attrs"
        v-on="$listeners"
        :count="count"
        :overflow-count="overflowCount"
        :showZero="showZero"
        :offset="offset"
    >
      <slot/>
    </a-badge>
</template>

<script>
import Badge from 'ant-design-vue/lib/badge';

export default {
  name: 'ma-badge',
  components: {
    ABadge: Badge,
  },
  props: {
    size: { type: String, default: 'default'},
    count: { type: [String,Number], default: null },
    overflowCount: { type: Number },
    offset: { type: Array, default: () => [10,0] },
    showZero: { type: Boolean },
  },
  computed: {
    classNames () {
      return {
        '-icon': this.icon || this.leftIcon,
        [`-${this.variant}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~ant-design-vue/lib/badge/style/index.css';
</style>
