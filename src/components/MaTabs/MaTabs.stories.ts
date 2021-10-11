import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import MaTabs from './MaTabs.vue';

storiesOf('MaTabs', module)
  .addDecorator(withKnobs)
  .addParameters({ component: MaTabs })
  .add('base', () => ({
    components: { MaTabs },
    data () {
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
        }
    },
    template: `
       <div class="m-p-15 m-bg-purple-800">
            <ma-tabs
              :tab-panel-list="list"
              show-count
            />
       </div>
      `,
  }))
  .add('newTab', () => ({
    components: { MaTabs },
      data () {
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
          }
      },
    template: `
      <div class="m-p-15 m-bg-purple-800">
        <ma-tabs
            :tab-panel-list="list"
        />
      </div>
    `,
  }))
  .add('showCount', () => ({
    components: { MaTabs },
      data () {
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
          }
      },
    template: `
      <div class="m-p-15 m-bg-purple-800">
        <ma-tabs
            :tab-panel-list="list"
            show-count
        />
       </div>
    `,
  }));
