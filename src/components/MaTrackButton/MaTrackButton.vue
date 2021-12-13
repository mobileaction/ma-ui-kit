<template>
  <a-button
      v-bind="$attrs"
      v-on="$listeners"
      class="ma-button"
      :class="classNames"
      :disabled="disabled"
      @click="$emit('click',$event)"
  >
     <span class="flex">
       <span class="flex-wrap content-center">
         <span>
           <span v-if="!loading">
             <ma-icon v-if="tracked" icon="check" class="ma-btn-icon"/>
             <ma-icon v-else icon="plus" class="ma-btn-icon"/>
           </span>
           <span v-else-if="loading">
             <ma-icon icon="spinner" spin/>
           </span>
         </span>
         </span>
       <span class="text-left">
         {{ keyword }}
       </span>
     </span>
  </a-button>
</template>

<script>
import Button from 'ant-design-vue/lib/button';
import MaIcon from '../MaIcon/MaIcon.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import MaButton from "../MaButton/MaButton.vue";
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
];
export default {
  name: 'ma-track-button',
  components: {
    MaButton,
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
    trackAll: { type: Boolean },
    color: { type: String, default: '' },
    size: { type: String, default: 'm' },
    loading: { type: Boolean, default:false },
    disabled: { type: Boolean, default:false },
    showButtonIcon: { type: Boolean, default:false },
    tracked: { type: Boolean, default:false },
    keyword: { type: String, required:true },
    translatedKeyword: { type: String, default: '' },
  },
  computed: {
    classNames () {
      return {
        [`-tracked-${this.color}`]: this.tracked,
        [`-size-${this.size}`]: true,
        [`-${this.color}`]: true,
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
        &:not([disabled]){
          color: #FF9762;
          border-color: #FF9762;
        }
        &:focus,
        &:hover {
          border-color: #FF9762;
          color: #FF9762;
          background-color: #FFF7F1;
        }
      }
      &.-tracked-orange {
        border-color: #FF9762;
        color: #FF9762;
        background-color: #FFF7F1;
      }

      &.-light-green {
        &:not([disabled]){
          color: #24CEB8;
          border-color: #23CEB8;
        }
        &:focus,
        &:hover {
          background-color: #EAFFFD;
          color: #23CEB8;
        }
      }
      &.-tracked-light-green {
        background-color: #EAFFFD;
        color: #23CEB8;
      }

      &.-light-blue {
        &:not([disabled]){
          color: #6F8CC5;
          border-color:#6F8CC5;
        }
        &:focus,
        &:hover {
          color: #6F8CC5;
          background-color: #E4EDFE;
        }
      }
      &.-tracked-light-blue {
        background-color: #E4EDFE;
      }

      &.-dark-blue {
        &:not([disabled]){
          color: #3F83A3;
          border-color:#3F83A3;
        }
        &:focus,
        &:hover {
          background-color: #DFEDF3;
        }
      }
      &.-tracked-dark-blue {
        background-color: #DFEDF3;
      }

      &.-grey {
        &:not([disabled]){
          color: #435160;
          border-color: #435160;
        }
        &:focus,
        &:hover {
          background-color: #F1F1F3;
        }
      }
      &.-tracked-grey {
        background-color: #F1F1F3;
      }

      &.-light-red {
        &:not([disabled]){
          color: #FF7262;
          border-color: #FF7262;
        }
        &:focus,
        &:hover {
          background-color: #FCE4E2;
        }
      }
      &.tracked-light-red {
        background-color: #FCE4E2;
      }

      &.-size-s {
        height: 24px;
        padding:0 8px;
        font-size: 12px;
      }
      .ma-btn-icon {
        margin-top: 4px;
      }
    }
</style>
