<template>
    <a-button
        v-bind="$attrs"
        class="ma-button"
        :class="classNames"
        :disabled="disabled"
        :size="size"
        :shape="shape"
        @click="$emit('click',$event)"
    >
        <div class="flex items-center">
            <ma-icon
                v-if="icon === 'spinner' || loading " icon="spinner"
                spin
                class="ma-btn-icon"
            />
            <ma-icon v-else-if="icon && icon !== 'spinner'" :icon="icon" class="ma-btn-icon"/>
            <span v-if="onlyIconWithText" class="ma-btn-span-with-icon">
                <slot/>
            </span>
            <slot v-else/>
        </div>
    </a-button>
</template>

<script>
    import Button from 'ant-design-vue/lib/button/index.js';
    import MaIcon from '../MaIcon/MaIcon.vue';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
    library.add(faTrashAlt, faSpinner);

    //const VALID_BUTTON_VARIANT = [
    //  'passive',
    //  'primary',
    //  'secondary',
    //  'tertiary',
    //  'success',
    //  'info',
    //  'warning',
    //  'danger',
    //  'link',
    //  'orange',
    //];
    export default {
        name: 'ma-button',
        components: {
            AButton: Button,
            MaIcon,
        },
        props: {
            variant: { type: String, default: 'primary' },
            leftIcon: { type: String },
            icon: { type: String },
            loading: { type: Boolean, default: false },
            disabled: { type: Boolean, default: false },
            size: { type: String, default: 'default' },
            shape: { type: String },
        },
        computed: {
            onlyIconWithText() {
                return (this.icon || this.leftIcon) && this.$slots.default;
            },
            classNames () {
                return {
                    '-icon': this.icon || this.leftIcon,
                    [`-${this.variant}`]: true,
                    [`-size-${this.size}`]: true,
                    [`-shape-${this.shape}`]: this.shape,
                    [`rounded-border`]: this.shape !== 'circle' && this.shape !== 'round',
                };
            },
        },
    };
</script>
<style lang="scss" scoped>
  @import '~ant-design-vue/lib/button/style/index.css';
    .ma-button {
      align-items: center;
      &.rounded-border {
        border-radius: 2px;
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
      &.-tertiary {
        &:not([disabled]){
          border-style: none;
          --tw-text-opacity: 1;
          color: #fff;;
          background: #4e5172;
        }
        &:hover {
          &:not([disabled]){
            color: #32355C;
            background: #E7EBEF;
          }
        }
        &.icon {
          color: white;
        }
      }
      &.-link {
        &:not([disabled]){
          padding: 0;
          border: none;
          color: #1890ff;
          background: none;
          box-shadow: none;
        }
        &:hover {
          &:not([disabled]){
            color:#40a9ff;
          }
        }
      }
      &.-success {
        &:not([disabled]){
          color: #fff;
          background-color: #11b95c;
          border: 1px solid #11b95c;
        }
        &:hover {
          &:not([disabled]){
            background-color: #11a853;
          }
        }
        &.icon {
          color: white;
        }
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
      .ma-btn-span-with-icon {
        margin-left: 4px;
      }
      &.-size-small {
        min-height: 24px;
        padding:0 8px;
        font-size: 12px;
        .ma-btn-content {
          padding: 2px 0;
        }
        .translatedKw {
          font-size: 0.70rem;
        }
      }
      &.-size-default {
        padding:0 12px;
      }
      &.-shape-circle {
        width:24px;
        display: inline-flex;
        justify-content: center;
      }
    }
</style>
