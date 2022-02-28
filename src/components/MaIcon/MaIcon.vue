<template>
  <font-awesome-icon
      :icon="icon"
      :size="size"
      :class="classNames"
      :spin="spin"
  />
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPlus,
  faInfoCircle,
  faTrashAlt,
  faSpinner,
  faDownload,
  faQuestionCircle,
  faCheckCircle,
  faPlusCircle,
  faCheck,
  faEnvelope,
  faUser,
  faInfo,
  faSync,
  faEye,
  faEyeSlash,
  faCopy,
  faChartLine,
  faBell,
  faBellSlash,
  faLock,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faPlus,
    faInfoCircle,
    faTrashAlt,
    faSpinner,
    faDownload,
    faQuestionCircle,
    faCheckCircle,
    faPlusCircle,
    faCheck,
    faEnvelope,
    faUser,
    faInfo,
    faSync,
    faEye,
    faEyeSlash,
    faCopy,
    faChartLine,
    faBell,
    faBellSlash,
    faLock,
    faComment,
);

export default {
  name: 'ma-icon',
  components: {
    FontAwesomeIcon,
  },
  props: {
    icon: { type: String },
    size: { type: String, default: '1x' },
    color: { type: String },
    spin: { type: Boolean, default: false },
  },
  computed: {
    classNames() {
      const classes = {
        [`ma-${this.color}`]: true,
      };
      return classes;
    },
  }
};
</script>

<style lang="scss" scoped>
  .ma-white {
    color: #fff;
  }
</style>
