import { withKnobs } from '@storybook/addon-knobs';
import MaExportButton from './MaExportButton.vue';

export default {
  title: 'MaExportButton',
  decorators: [withKnobs],

  parameters: {
    component: MaExportButton,
  },
};

export const Base = () => ({
  components: { MaExportButton },
  data() {
    return {};
  },
  template: `
       <div class="m-2">
            <ma-export-button/>
       </div>
       
      `,
});

Base.storyName = 'base';

export const Disabled = () => ({
  components: { MaExportButton },
  template: `
      <div class="m-2">
        <ma-export-button disabled/>
      </div>
    `,
});

Disabled.storyName = 'disabled';

export const Loading = () => ({
  components: { MaExportButton },
  template: `
       <div class="m-2">
        <ma-export-button loading/>
       </div>
    `,
});

Loading.storyName = 'loading';
