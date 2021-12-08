import { withKnobs } from '@storybook/addon-knobs';
import MaTabs from './MaTabs.vue';
import MaButton from './../MaButton/MaButton.vue';

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
       <div class="m-p-15">
            <ma-tabs
              :tab-panel-list="list"
              show-count
            />
       </div>
      `,
});

Base.storyName = 'base';

export const Header = () => ({
  components: { MaTabs, MaButton },
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
          active: true,
        },
      ],
    };
  },
  template: `
      <div class="m-p-15 m-bg-purple-800">
        <ma-tabs
            :tab-panel-list="list"
            variant="header"
        >
          <ma-button name="tabBarExtraContent">1
            Extra
          </ma-button>
        </ma-tabs>
      </div>
    `,
});

Header.storyName = 'header';

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
      <div class="m-p-15">
        <ma-tabs
            :tab-panel-list="list"
            show-count
        />
       </div>
    `,
});

ShowCount.storyName = 'show-count';

export const ShowTooltip = () => ({
  components: { MaTabs },
  data() {
    return {
      list: [
        {
          type: 'item1',
          label: 'Item 1',
          active: true,
          totalElements: '4',
          tooltip: 'Title tooltip',
        },
        {
          type: 'item2',
          label: 'Item 2',
          totalElements: '10',
          tooltip: 'Title tooltip 2',
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
      <div class="m-p-15">
        <ma-tabs
            :tab-panel-list="list"
        />
        <ma-tabs
            :tab-panel-list="list"
            variant="header"
        />
       </div>
    `,
});

ShowTooltip.storyName = 'show-tooltip';

export const Sizes = () => ({
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
      <div class="m-p-15">
        <p class="m-pb-8">Small</p>
        <ma-tabs
            :tab-panel-list="list"
            size="small"
          />
        <p class="m-pb-8">Default</p>
        <ma-tabs :tab-panel-list="list"/>
        <p class="m-pb-8">Large</p>
        <ma-tabs
            :tab-panel-list="list"
            size="large"
        />
      </div>
    `,
});

Sizes.storyName = 'sizes';
