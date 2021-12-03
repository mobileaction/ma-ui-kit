<template>
  <a-button
    class="ma-export-button"
    :class="classes"
    :disabled="disabled"
    :size="size"
    type="type"
    @click="handleClick"
  >
    <span v-if="loading" class="m-p-3">
      <ma-icon icon="spinner" spin/>
    </span>
    <span v-else>
       <ma-icon icon="download"/>
       {{ text }}
    </span>
  </a-button>
</template>

<script>
import { Button } from 'ant-design-vue';
import 'ant-design-vue/lib/button/style/index.css'
import MaIcon from '../MaIcon/MaIcon.vue';

export default {
  name: 'MaExportButton',
  components: {
    AButton: Button,
    MaIcon,
  },
  props: {
    text: { type: String, default: 'CSV' },
    size: { type: String, default: 'small' },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    classes: { type: [Array, String, Object], default: '' },
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    },
  },
};
</script>

<style lang="scss">
  .ma-export-button {
    height: 32px;
    padding: 5px 15px;
    margin: 0;
    background-color: #fff;
    &:not(.is-disabled):hover {
      background-color: var(--white);
    }
  }
</style>
