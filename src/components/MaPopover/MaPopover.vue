<template>
  <a-popover
      v-bind="$attrs"
      v-on="$listeners"
      :placement="placement"
      class="ma-popover"
  >
    <template v-if="title !== null" slot="title">
      {{ title }}
    </template>
    <slot v-else name="title" slot="title"/>
    <template v-if="content !== null" slot="content">
      {{ content }}
    </template>
    <slot v-else name="content" slot="content"/>
    <slot/>
  </a-popover>
</template>

<script>
import Popover from 'ant-design-vue/lib/popover';

export default {
  name: 'ma-popover',
  components: {
    APopover: Popover,
  },
  data() {
    return {};
  },
  props: {
    placement: { type: String, default: 'top' },
    title: { type: String, default: null },
    content: { type: String, default: null },
  },
};
</script>

<style lang="scss">
@import '~ant-design-vue/lib/popover/style/index.css';
</style>
