<template>
  <a-button
    class="ma-delete-button"
    :class="classNames"
    :disabled="disabled"
    :type="type === 'circle' ? 'danger' : 'default'"
    :shape="type"
    :size="size"
    @click="$emit('click',$event)"
  >
    <ma-icon :size="iconSize" v-if="loading" icon="spinner" spin/>
    <ma-icon :size="iconSize" v-else icon="trash-alt"/>
  </a-button>
</template>

<script lang="ts">
import Button from 'ant-design-vue/lib/button';
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
    type: { type: String, default: 'default' },
    size: { type: String, default: 'default' },
  },
  computed: {
   iconSize () {
      if(this.size === "small"){
        return 'xs';
      }
      else if(this.size === "large"){
        return 'lg';
      }
      else return '';
    },
    classNames () {
      return {
        [`-size-${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~ant-design-vue/lib/button/style/index.css';
    .ma-delete-button {
      &:not(.-size-small):not(.-size-large){
        height: 32px;
        width: 32px;
        font-size: 11px;
        padding: 9px;
        margin: 0;
      }
        &:not([disabled]):not(.ant-btn-danger):focus,
        &:not([disabled]):not(.ant-btn-danger):hover{
          color: #202348;
          border-color: #202348;
        }
    }
</style>
