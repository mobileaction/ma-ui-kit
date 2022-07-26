import { withKnobs } from '@storybook/addon-knobs';
import MaCascader from './MaCascader.vue';

export default {
    title: 'MaCascader',
    decorators: [withKnobs],
    parameters: {
        component: MaCascader,
    },
};

export const Base = () => ({
    components: { MaCascader },
    data() {
        return {
            idValue: ['nanjing'],
            options: [
                {
                    id: 'zhejiang',
                    name: 'Zhejiang',
                },
                {
                    id: 'nanjing',
                    name: 'Nanjing',
                },
            ],
        };
    },
    template: `
       <div class="m-2">
       <ma-cascader
           v-model="idValue"
           :options="options"
           :field-names="{ label: 'name', value: 'id', children: 'children'}"
           expand-trigger="hover"
       />
       </div>
      `,
});

Base.storyName = 'base';
