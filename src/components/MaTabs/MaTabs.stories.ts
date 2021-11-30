import { withKnobs } from '@storybook/addon-knobs';
import MaTabs from './MaTabs.vue';

export default {
  title: 'MaTabs',
  decorators: [withKnobs],

  parameters: {
    component: MaTabs,
  },
};

export const Base = () => ({
  components: { MaTabs },
  data() {
    return {
      list: [
        {
          type: 'item1',
          label: 'Item 1',
          active: true,
        },
        {
          type: 'item2',
          label: 'Item 2',
        },
        {
          type: 'item3',
          label: 'Item 3',
        },
      ],
    };
  },
  template: `
       <div class="m-p-15 m-bg-purple-800">
            <ma-tabs
              :tab-panel-list="list"
              show-count
            />
       </div>
      `,
});

Base.storyName = 'base';

export const NewTab = () => ({
  components: { MaTabs },
  data() {
    return {
      list: [
        {
          type: 'item1',
          label: 'Item 1',
        },
        {
          type: 'item2',
          label: 'Item 2',
          totalElements: '4',
        },
        {
          type: 'item3',
          label: 'Item 3',
          isNew: true,
          active: true,
        },
      ],
    };
  },
  template: `
      <div class="m-p-15 m-bg-purple-800">
        <ma-tabs
            :tab-panel-list="list"
        />
      </div>
    `,
});

NewTab.storyName = 'newTab';

export const ShowCount = () => ({
  components: { MaTabs },
  data() {
    return {
      list: [
        {
          type: 'item1',
          label: 'Item 1',
          active: true,
          totalElements: '4',
        },
        {
          type: 'item2',
          label: 'Item 2',
          totalElements: '10',
        },
        {
          type: 'item3',
          label: 'Item 3',
          totalElements: '40',
        },
      ],
    };
  },
  template: `
      <div class="m-p-15 m-bg-purple-800">
        <ma-tabs
            :tab-panel-list="list"
            show-count
        />
       </div>
    `,
});

ShowCount.storyName = 'showCount';
