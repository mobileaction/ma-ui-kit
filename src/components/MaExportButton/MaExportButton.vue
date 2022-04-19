<template>
    <a-tooltip v-if="isToolTip" :placement="tooltipPlacement">
        <template slot="title">
            <span>{{ tooltip }}</span>
        </template>
        <a-button
            class="ma-export-button"
            :class="classes"
            :disabled="disabled"
            :size="size"
            type="type"
            @click="handleClick"
        >
            <span v-if="loading" class="m-p-3">
                <ma-icon icon="spinner" spin/>
            </span>
            <span v-else>
                <ma-icon icon="download"/>
                {{ text }}
            </span>
        </a-button>
    </a-tooltip>
    <a-button
        v-else
        class="ma-export-button"
        :class="classes"
        :disabled="disabled"
        :size="size"
        type="type"
        @click="handleClick"
    >
        <span v-if="loading" class="m-p-3">
            <ma-icon icon="spinner" spin/>
        </span>
        <span v-else>
            <ma-icon icon="download"/>
            {{ text }}
        </span>
    </a-button>
</template>

<script>
    import Button from 'ant-design-vue/lib/button/index.js';
    import Tooltip from 'ant-design-vue/lib/tooltip/index.js';
    import MaIcon from '../MaIcon/MaIcon.vue';

    export default {
        name: 'ma-export-button',
        components: {
            AButton: Button,
            ATooltip: Tooltip,
            MaIcon,
        },
        props: {
            text: { type: String, default: 'CSV' },
            size: { type: String, default: 'default' },
            tooltip: { type: String, default: '' },
            tooltipPlacement: { type: String, default: 'top' },
            loading: { type: Boolean },
            disabled: { type: Boolean },
            classes: { type: [Array, String, Object], default: '' },
        },
        computed: {
            isToolTip(){
                return this.tooltip !== '' ? true : false;
            },
        },
        methods: {
            handleClick (evt) {
                this.$emit('click', evt);
            },
        },
    };
</script>

<style lang="scss">
@import '~ant-design-vue/lib/button/style/index.css';
.ma-export-button {
  border-radius: 2px;
  height: 32px;
    padding: 5px 15px;
    background-color: #fff;
    &:not(.disabled):hover {
      background-color: var(--white);
    }
  }
</style>
