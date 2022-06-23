import { withKnobs } from '@storybook/addon-knobs';
import MaCheckbox from './MaCheckbox.vue';

export default {
    title: 'MaCheckbox',
    decorators: [withKnobs],
    parameters: {
        component: MaCheckbox,
    },
};

export const Base = () => ({
    components: { MaCheckbox },
    data() {
        return {
            value: true,
        };
    },
    methods: {
        onChange(checked) {
            console.log(checked);
        },
    },
    template: `
       <div class="m-2">
            <ma-checkbox v-model="value" @change="onChange"/>
       </div>
      `,
});
Base.storyName = 'Base';


export const Disabled = () => ({
    components: { MaCheckbox },
    data() {
        return {
            value: true,
        };
    },
    template: `
       <div class="m-2">
            <ma-checkbox v-model="value" disabled/>
       </div>
      `,
});
Disabled.storyName = 'Disabled';

export const Label = () => ({
    components: { MaCheckbox },
    data() {
        return {
            value: true,
            label: 'Label',
        };
    },
    template: `
       <div class="m-2">
            <ma-checkbox v-model="value" :label="label"/>
       </div>
      `,
});
Label.storyName = 'Label';

export const Indeterminate = () => ({
    components: { MaCheckbox },
    data() {
        return {
            value: false,
        };
    },
    template: `
       <div class="m-2">
            <ma-checkbox v-model="value" indeterminate/>
       </div>
      `,
});
Indeterminate.storyName = 'Indeterminate';
