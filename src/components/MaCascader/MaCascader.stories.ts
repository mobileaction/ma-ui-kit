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
            categoryIdValues: ['6018'],
            options: [{ id: '6018',name: 'Books',active: true,parent: null },{ id: '6000',name: 'Business',active: true,parent: null },{ id: '6026',name: 'Developer Tools',active: true,parent: null,hideInMarketIntel: true },{ id: '6017',name: 'Education',active: true,parent: null },{ id: '6016',name: 'Entertainment',active: true,parent: null },{ id: '6015',name: 'Finance',active: true,parent: null },{ id: '6023',name: 'Food & Drink',active: true,parent: null },{ id: '6014',name: 'Games',active: true,parent: null },{ id: '6027',name: 'Graphics & Design',active: true,parent: null,hideInMarketIntel: true },{ id: '6013',name: 'Health & Fitness',active: true,parent: null },{ id: '6012',name: 'Lifestyle',active: true,parent: null },{ id: '6021',name: 'Magazines & Newspapers',active: true,parent: null },{ id: '6020',name: 'Medical',active: true,parent: null },{ id: '6011',name: 'Music',active: true,parent: null },{ id: '6010',name: 'Navigation',active: true,parent: null },{ id: '6009',name: 'News',active: true,parent: null },{ id: '6008',name: 'Photo & video',active: true,parent: null },{ id: '6007',name: 'Productivity',active: true,parent: null },{ id: '6006',name: 'Reference',active: true,parent: null },{ id: '6024',name: 'Shopping',active: true,parent: null },{ id: '6005',name: 'Social Networking',active: true,parent: null },{ id: '6004',name: 'Sports',active: true,parent: null },{ id: '6003',name: 'Travel',active: true,parent: null },{ id: '6002',name: 'Utilities',active: true,parent: null },{ id: '6001',name: 'Weather',active: true,parent: null }],
        };
    },
    methods: {
        popupChange(a) {
            console.log(a);
        },
        changeDir(a) {
            console.log(a);
        },
    },
    template: `
       <div class="m-2">
       <ma-cascader
           v-model="categoryIdValues"
           :options="options"
           :field-names="{ label: 'name', value: 'id', children: 'children'}"
           expand-trigger="hover"
           popup-visible
           @change="categoryIdValues = $event"
       />
       </div>
      `,
});

Base.storyName = 'base';
