import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import MaExportButton from './MaExportButton.vue';

storiesOf('MaExportButton', module)
  .addDecorator(withKnobs)
  .addParameters({ component: MaExportButton })
  .add('base', () => ({
    components: { MaExportButton },
    data () {
      return {
      };
    },
    template: `
       <div class="m-p-10">
            <ma-export-button/>
       </div>
       
      `,
  }))
  .add('disabled', () => ({
    components: { MaExportButton },
    template: `
      <div class="m-p-10">
        <ma-export-button disabled/>
      </div>
    `,
  }))
  .add('loading', () => ({
    components: { MaExportButton },
    template: `
       <div class="m-p-10">
        <ma-export-button loading/>
       </div>
    `,
  }));
