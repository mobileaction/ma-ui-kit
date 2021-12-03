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
      <font-awesome-icon icon="spinner" spin />
    </span>
    <span v-else>
        <font-awesome-icon icon="download"/>
       {{ text }}
    </span>
  </a-button>
</template>

<script>
import { Button } from 'ant-design-vue';
import 'ant-design-vue/lib/button/style/index.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faDownload, faSpinner);

export default {
  name: 'MaExportButton',
  components: {
    AButton: Button,
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
