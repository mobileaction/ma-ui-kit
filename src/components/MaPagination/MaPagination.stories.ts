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
            pagination: {
                pageSize: 10,
                total: 100,
                currentPage: 1,
            },
        }
    },
    template: `
       <div class="m-p-15 m-bg-main-purple-800">
            <ma-pagination
              :pagination="pagination"
            />
       </div>
      `,
  }))
  .add('onePage', () => ({
    components: { MaPagination },
      data () {
          return {
              pagination: {
                  pageSize: 10,
                  total: 0,
                  currentPage: 1,
              },
          }
      },
    template: `
      <div class="m-p-15">
        <ma-pagination
            :pagination="pagination"
        />
      </div>
    `,
  }))
