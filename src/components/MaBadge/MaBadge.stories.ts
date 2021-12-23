import MaBadge from './MaBadge.vue';

export default {
  title: 'MaBadge',
  parameters: {
    component: MaBadge,
  },
};

export const Base = () => ({
  components: { MaBadge },
  template: `
      <div class="m-2">
        <ma-badge count="10">
          <div class="bg-gray-300 w-8 h-8 rounded"> </div>
        </ma-badge>
      </div>
    `,
});

export const OverflowCount = () => ({
  components: { MaBadge },
  template: `
      <div class="m-2">
        <ma-badge count="900" :overflow-count="10">
          <a href="#" class="head-example"> COUNT </a>
        </ma-badge>
      </div>
    `,
});
OverflowCount.storyName = 'overflow-count';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
export const Colors = () => ({
  components: { MaBadge },
  data() {
    return {
      colors,
    };
  },
  template: `
      <div>
        <div v-for="color in colors" :key="color">
          <ma-badge :color="color" :text="color" />
        </div>
      </div>
    `,
});
Colors.storyName = 'colors';

export const Offset = () => ({
  components: { MaBadge },
  template: `
      <div class="m-2">
        <ma-badge count="90" :offset="[15,5]">
          <a href="#" class="head-example">COUNT</a>
        </ma-badge>
      </div>
    `,
});
Offset.storyName = 'offset';

