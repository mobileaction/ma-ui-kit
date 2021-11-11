import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import MaPagination from './MaPagination.vue';

storiesOf('MaPagination', module)
  .addDecorator(withKnobs)
  .addParameters({ component: MaPagination })
  .add('base', () => ({
    components: { MaPagination },
    data () {
      return {
      };
    },
    template: `
       <div class="m-p-10">
            <ma-pagination/>
       </div>
       
      `,
  }));
