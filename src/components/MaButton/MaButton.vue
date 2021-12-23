<template>
  <a-button
      v-bind="$attrs"
      v-on="$listeners"
      class="ma-button"
      :class="classNames"
      :disabled="disabled"
      @click="$emit('click',$event)"
  >
    <ma-icon :icon="icon" v-if="icon === 'spinner'" spin class="ma-btn-icon"/>
    <ma-icon :icon="leftIcon" v-else-if="leftIcon" class="ma-left-btn"/>
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
      type: String
    },
    loading: { type: Boolean, default:false },
    disabled: { type: Boolean, default:false },
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
  @import '~ant-design-vue/lib/button/style/index.css';
    .ma-button {
      font-family: Roboto,serif;
      align-items: center;
      border-radius: 2px;
      //display: inline-flex;
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
      .ma-left-btn {
        margin-right: 2px;
        margin-top: 4px;
      }
      &.-icon {
        margin-right: 2px;
        margin-top: 4px;
        .-big {
          padding: 10px 30px;
        }
        .-medium {
          padding: 8px 20px;
        }
      }
      .ma-btn-icon {
        margin-right: 2px;
      }
    }
</style>
