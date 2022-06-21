import MaSlider from './MaSlider.vue';

export default {
    title: 'MaSlider',
    parameters: {
        component: MaSlider,
    },
};

export const Base = () => ({
    components: { MaSlider },
    template: `
       <div class="m-2">
            <ma-slider
                :min="0"
                :max="100"
                :step="10"
            />
       </div>
      `,
});
Base.storyName = 'base';

export const Vertical = () => ({
    components: { MaSlider },
    template: `
       <div class="m-2">
            <ma-slider
                :min="0"
                :max="100"
                :step="10"
                vertical
                range
            />
       </div>
      `,
});
Vertical.storyName = 'vertical';
export const Dots = () => ({
    components: { MaSlider },
    template: `
       <div class="m-2">
            <ma-slider
                :min="0"
                :max="100"
                :step="10"
                dots
            />
       </div>
      `,
});
Dots.storyName = 'dots';
