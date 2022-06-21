<template>
    <a-slider
        v-bind="$attrs"
        class="ma-slider"
        :class="classes"
        :step="step"
        :min="min"
        :max="max"
        :marks="marks"
        :range="range"
        :vertical="vertical"
        :dots="dots"
        @change="$emit('onChange',$event)"
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
            min: { type: Number, default: 0 },
            max: { type: Number, default: 100 },
            step: { type: Number, default: 10 },
            range: { type: Boolean },
            marks: { type: Object, default: () => ({}) },
            vertical: { type: Boolean },
            dots: { type: Boolean },
            disabled: { type: Boolean, default: false },
            size: { type: String, default: 'default' },
        },
        computed: {
            classes() {
                return {
                    [`-vertical`]: this.vertical,
                };
            },
        },
    };
</script>
<style lang="scss" scoped>
  @import '~ant-design-vue/lib/slider/style/index.css';
  .ma-slider {
    &.-vertical {
      display: block;
      height: 200px;
      marginLeft: 70px
    }
  }
</style>
