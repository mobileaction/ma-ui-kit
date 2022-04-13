<template>
    <a-button
        v-bind="$attrs"
        class="ma-button"
        :class="classNames"
        :disabled="disabled"
        v-on="$listeners"
        @click="$emit('click',$event)"
    >
        <span class="ma-btn-content items-center">
            <span class="flex flex-wrap content-center mr-1">
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
            <span class="text-left leading-tight">
                <p>
                    {{ keyword }}
                </p>
                <span v-if="translatedKeyword" class="translatedKw text-xs">
                    (en) {{ translatedKeyword }}
                </span>
            </span>
        </span>
    </a-button>
</template>

<script>
    import Button from 'ant-design-vue/lib/button/index.js';
    import MaIcon from '../MaIcon/MaIcon.vue';

    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
    library.add(faTrashAlt, faSpinner);
    export default {
        name: 'ma-track-button',
        components: {
            AButton: Button,
            MaIcon,
        },
        props: {
            trackAll: { type: Boolean },
            color: { type: String, default: 'default' },
            size: { type: String, default: 'm' },
            loading: { type: Boolean, default: false },
            disabled: { type: Boolean, default: false },
            tracked: { type: Boolean, default: false },
            keyword: { type: String, required: true },
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
    .ant-btn:hover:not([disabled]),
    .ant-btn:focus {
      background-color: #FAFAFA;
      border-color: #656565;
      color: #656565;
    }
    .ma-button {
      align-items: center;
      border-radius: 2px;
      min-height: 33px;
      height: auto;
      font-size:13px;
      padding: 5px 10px;
      .ma-btn-content {
        display: flex;
      }
      &.-default {
        &.-tracked-default {
          background-color: #f3f3f3;
          border-color: #d9d8d8;
          color: #aaaaaa;
          &:hover {
            &:not([disabled]){
              border-color: #656565;
              color: #656565;
            }
          }
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
      &.-tracked-light-red {
        background-color: #FCE4E2;
      }

      &.-size-s {
        height: auto;
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
      .ma-btn-icon {
        margin-top: 4px;
      }
    }
</style>
