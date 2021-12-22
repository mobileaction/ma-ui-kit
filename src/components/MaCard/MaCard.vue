<template>
    <a-card :size="size" :loading="loading" :title="title" :bordered="!noBorder">
      <slot name="extra" slot="extra"/>
      <slot/>
      <slot name="actions" slot="actions" class="ant-card-actions"/>
    </a-card>
</template>

<script>
import Card from 'ant-design-vue/lib/card';

export default {
  name: 'ma-card',
  components: {
    ACard: Card,
  },
  props: {
    size: { type: String, default: 'default'},
    title: { type: String, default: null },
    loading: { type: Boolean, default: false },
    noBorder: { type: Boolean, default: false },
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
  @import '~ant-design-vue/lib/card/style/index.css';
</style>
