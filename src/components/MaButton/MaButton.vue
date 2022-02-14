<template>
  <a-button
      v-bind="$attrs"
      v-on="$listeners"
      class="ma-button"
      :class="classNames"
      :disabled="disabled"
      :size="size"
      :shape="shape"
      @click="$emit('click',$event)"
  >
    <ma-icon :icon="icon" v-if="icon === 'spinner'" spin class="ma-btn-icon"/>
    <ma-icon :icon="icon" v-else-if="icon && icon !== 'spinner'" class="ma-btn-icon"/>
    <ma-icon :icon="leftIcon" size="xs" v-else-if="leftIcon" class="ma-left-btn"/>
    <slot/>
  </a-button>
</template>

<script>
import Button from 'ant-design-vue/lib/button';
import MaIcon from '../MaIcon/MaIcon.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add(faTrashAlt, faSpinner);

const VALID_BUTTON_VARIANT = [
  'passive',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'danger',
  'link',
  'orange',
];
export default {
  name: 'ma-button',
  components: {
    AButton: Button,
    FontAwesomeIcon,
    MaIcon,
  },
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    leftIcon: {
      type: String,
    },
    icon: {
      type: String,
    },
    loading: { type: Boolean, default:false },
    disabled: { type: Boolean, default:false },
    size: { type: String, default:'default' },
    shape: {
      type: String,
    },
  },
  computed: {
    classNames () {
      return {
        '-icon': this.icon || this.leftIcon,
        [`-${this.variant}`]: true,
        'rounded-[2px]': this.shape !== 'circle' && this.shape !== 'round',
      };
    },
  },
};
</script>

<style lang="scss">
  @import '~ant-design-vue/lib/button/style/index.css';
    .ma-button {
      align-items: center;
      & > svg + span {
        margin-left: 5px;
      }
      &.-secondary {
        &:not([disabled]){
          color: #fff;
          background-color: #46B9A4;
          border: 1px solid #46B9A4;
        }
        &:hover {
          &:not([disabled]){
            background-color: #62C3B2;
          }
        }
        &.icon {
          color: white;
        }
      }
      &.-orange {
        background: #F2935F;
      }
      &.-danger {
        &:not([disabled]) {
          background: #F56C6C;
          color: white;
          border: 1px solid #F56C6C;
        }
        &:hover {
          &:not([disabled]){
            background: #f78989;
            color: white;
          }
        }
      }
      &.-info {
        &:not([disabled]) {
          background: #4356B5;
          color: white;
          border: 1px solid #4356B5;
        }
        &:hover {
          &:not([disabled]){
            background: #6978c4;
            color: white;
          }
        }
      }
      &.-warning {
        &:not([disabled]) {
          background: #E6A23C;
          color: white;
          border: 1px solid #E6A23C;
        }
        &:hover {
          &:not([disabled]){
            background: #ebb563;
            color: white;
          }
        }
      }
      .ma-left-btn {
        margin-top: 5px;
      }
      &.-icon {
        .-big {
          padding: 10px 30px;
        }
        .-medium {
          padding: 8px 20px;
        }
      }
      .ma-btn-icon {
        margin-top: 4px;
      }
    }
</style>
