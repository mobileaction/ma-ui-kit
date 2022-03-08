import { withKnobs } from '@storybook/addon-knobs';
import MaPopover from './MaPopover.vue';
import MaButton from './../MaButton/MaButton.vue';

export default {
    title: 'MaPopover',
    decorators: [withKnobs],
    parameters: {
        component: MaPopover,
    },
};

export const Base = () => ({
    components: { MaPopover },
    data() {
        return {};
    },
    template: `
       <div class="m-2">
            <ma-popover title="Title" content="Content">
              <template #content>
                AAA
              </template>
              Hover
            </ma-popover>
       </div>
      `,
});

Base.storyName = 'base';

export const Trigger = () => ({
    components: { MaPopover, MaButton },
    template: `
      <div class="m-2">
      <ma-popover title="Title" content="Content" trigger="click">
        <ma-button> Click </ma-button>
      </ma-popover>
      <ma-popover class="mx-2" title="Title" content="Content" trigger="hover">
        <ma-button> Hover Me </ma-button>
      </ma-popover>
      <ma-popover title="Title" content="Content" trigger="focus">
        <ma-button> Focus Me </ma-button>
      </ma-popover>
      </div>
    `,
});

Trigger.storyName = 'trigger';
