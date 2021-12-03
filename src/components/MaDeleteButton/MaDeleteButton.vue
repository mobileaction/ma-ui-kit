<template>
  <a-button
    class="ma-delete-button"
    :disabled="disabled"
    @click="$emit('click',$event)"
  >
    <ma-icon v-if="loading" icon="spinner" spin/>
    <ma-icon v-else icon="trash-alt"/>
  </a-button>
</template>

<script lang="ts">
import { Button } from 'ant-design-vue';
import 'ant-design-vue/lib/button/style/index.css'
import MaIcon from '../MaIcon/MaIcon.vue';

export default {
  name: 'ma-delete-button',
  components: {
    MaIcon,
    AButton: Button,
  },
  props: {
    loading: { type: Boolean, default:false },
    disabled: { type: Boolean, default:false },
  },
};
</script>

<style lang="scss" scoped>
    .ma-delete-button {
      height: 32px;
      width: 32px;
      font-size: 11px;
      padding: 9px;
      margin: 0;
      background-color: #fff;
      &:not(.is-disabled):hover {
        color:var(--red-500);
        border: 1px solid #DCDFE6;
        background-color: var(--white);
      }
    }
</style>
