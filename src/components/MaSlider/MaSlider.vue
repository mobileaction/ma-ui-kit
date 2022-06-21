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
            value: { type: [Number,Array], default: 0 },
            min: { type: Number, default: 0 },
            max: { type: Number, default: 100 },
            step: { type: Number, default: 10 },
            range: { type: Boolean },
            marks: { type: Object, default: () => ({}) },
            vertical: { type: Boolean },
            dots: { type: Boolean },
            disabled: { type: Boolean, default: false },
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
