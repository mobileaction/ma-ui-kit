import { withKnobs } from '@storybook/addon-knobs';
import MaPagination from './MaPagination.vue';

export default {
  title: 'MaPagination',
  decorators: [withKnobs],

  parameters: {
    component: MaPagination,
  },
};

export const Base = () => ({
  components: { MaPagination },
  data() {
    return {};
  },
  template: `
       <div class="m-p-10">
            <ma-pagination/>
       </div>
       
      `,
});

Base.storyName = 'base';
