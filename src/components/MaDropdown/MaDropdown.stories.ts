import { withKnobs } from '@storybook/addon-knobs';
import MaDropdown from './MaDropdown.vue';

export default {
  title: 'MaDropdown',
  decorators: [withKnobs],
  parameters: {
    component: MaDropdown,
  },
};

export const Base = () => ({
  components: { MaDropdown },
  data() {
    return {
      menuItems: [
          { key:1, title: 'Item1'},
          { key:22, title: 'Item2'},
          { key:333, title: 'Item3'}
      ],
    };
  },
  template: `
       <div class="m-2">
            <ma-dropdown :menu-items="menuItems">
            </ma-dropdown>
       </div>
      `,
});

Base.storyName = 'base';
