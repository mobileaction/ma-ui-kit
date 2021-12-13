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
    return {
      pagination: {
        pageSize: 10,
        total: 100,
        currentPage: 1,
      },
    };
  },
  template: `
       <div class="m-p-10">
            <ma-pagination
                :pagination="pagination"
            />
       </div>
       
      `,
});

Base.storyName = 'base';
