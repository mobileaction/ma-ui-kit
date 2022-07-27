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
            idValue: ['zhejiang'],
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
    methods: {
        popupChange(a) {
            console.log(a);
            debugger;
        },
        changeDir(a) {
            console.log(a);
        },
    },
    template: `
       <div class="m-2">
       <ma-cascader
           :defaultValue="idValue"
           :options="options"
           :field-names="{ label: 'name', value: 'id', children: 'children'}"
           expand-trigger="hover"
           @popup-visible-change="popupChange"
           @change="changeDir"
       />
       </div>
      `,
});

Base.storyName = 'base';
