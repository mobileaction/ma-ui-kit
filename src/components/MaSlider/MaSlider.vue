<template>
    <a-slider
        v-model="data"
        class="ma-slider"
        :class="classes"
        :step="step"
        :min="min"
        :max="max"
        :marks="marks"
        :range="range"
        :vertical="vertical"
        :dots="dots"
        @change="onChange"
        @afterChange="$emit('onAfterChange',$event)"
    />
</template>

<script>
    import Slider from 'ant-design-vue/lib/slider/index.js';
    export default {
        name: 'ma-slider',
        components: {
            ASlider: Slider,
        },
        props: {
            value: { type: [Number, Array] },
            min: { type: Number, default: 0 },
            max: { type: Number, default: 100 },
            step: { type: Number, default: 10 },
            range: { type: Boolean },
            marks: { type: Object, default: () => ({}) },
            vertical: { type: Boolean },
            dots: { type: Boolean },
            secondary: { type: Boolean },
        },
        data() {
            return {
                data: this.value,
            };
        },
        computed: {
            classes() {
                return {
                    [`-vertical`]: this.vertical,
                    [`-secondary`]: this.secondary,
                };
            },
        },
        methods: {
            onChange(event) {
                this.$emit('onChange',event);
                this.$emit('input', event);
            },
        },
        watch: {
            value(newValue){
                this.data = newValue;
            },
        },
    };
</script>
<style lang="scss">
  @import '~ant-design-vue/lib/slider/style/index.css';
  .ma-slider {
    &.-vertical {
      display: block;
      height: 200px;
    }
    &.-secondary {
      .ant-slider-mark-text {
        background-color: #1ECFB4 !important;
        margin-left: 10px;
        padding: 5px 10px;
        border-radius:0.25rem;
        color:white;
        font-size: 0.75rem;
        line-height: 1rem;
      }
      .ant-slider-mark-text:before {
        content: ' ';
        position: absolute;
        top: 30%;
        left: 0;
        border-style: solid;
        border-width: 5px 8px 5px 0;
        border-color: transparent #1ECFB4 transparent transparent;
        transform: translate(-100%);
      }
      .ant-slider-track {
        background-color: #1ecfb4;
      }
      .ant-slider-handle {
        border-color: #1ecfb4;
      }

    }
  }
</style>
