<template>
    <a-card
        :size="size"
        :loading="loading"
        :bordered="!noBorder"
        class="ma-card"
    >
      <template v-if="title !== null" slot="title">
        {{ title }}
      </template>
      <slot name="title" slot="title"/>
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
  },
};
</script>

<style lang="scss">
  @import '~ant-design-vue/lib/card/style/index.css';
  .ma-card {
    .ant-card-head {
      padding: 0 15px;
    }
    .ant-card-body{
      padding: 15px;
    }
    .ant-card-actions > li {
      font-weight: bold;
    }
  }
</style>
