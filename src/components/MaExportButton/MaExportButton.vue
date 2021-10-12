<template>
  <el-button
    class="ma-export-button"
    :class="classes"
    :disabled="disabled"
    :size="size"
    type="type"
    @click="handleClick"
  >
    <span v-if="loading" class="m-p-12">
      <font-awesome-icon icon="spinner" spin />
    </span>
    <span v-else>
        <font-awesome-icon icon="download"/>
       {{ text }}
    </span>
  </el-button>
</template>

<script>
import { Button } from 'element-ui';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faDownload, faSpinner);

export default {
  name: 'MaExportButton',
  components: {
    ElButton: Button,
    FontAwesomeIcon,
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
  @import '~element-ui/lib/theme-chalk/button.css';
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
