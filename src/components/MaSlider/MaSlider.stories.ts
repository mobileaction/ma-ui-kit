import MaSlider from './MaSlider.vue';

export default {
    title: 'MaSlider',
    parameters: {
        component: MaSlider,
    },
};

export const Base = () => ({
    components: { MaSlider },
    data() {
        return {
            data: [10,30],
        };
    },
    watch: {
        data(to,fr) {
            console.log(to,fr);
        },
    },
    template: `
       <div class="m-2">
            <ma-slider
                v-model="data"
                :min="0"
                :max="100"
                :step="10"
                range
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
