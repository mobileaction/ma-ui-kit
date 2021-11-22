<template>
  <a-button
    class="ma-delete-button"
    :disabled="disabled"
    @click="$emit('click',$event)"
  >
    <font-awesome-icon v-if="loading" icon="spinner" spin/>
    <font-awesome-icon v-else icon="trash-alt"/>
  </a-button>
</template>

<script lang="ts">
import { Button } from 'ant-design-vue';
import 'ant-design-vue/lib/button/style/index.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt, faSpinner);

export default {
  name: 'ma-delete-button',
  components: {
    Button,
    FontAwesomeIcon,
  },
  props: {
    loading: { type: Boolean, default:false },
    disabled: { type: Boolean, default:false },
  },
};
</script>

<style lang="scss" scoped>
  @import '~element-ui/lib/theme-chalk/button.css';
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
