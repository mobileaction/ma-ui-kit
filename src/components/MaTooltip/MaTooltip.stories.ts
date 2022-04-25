import MaTooltip from './MaTooltip.vue';
import { Input as AInput } from 'ant-design-vue';

export default {
    title: 'MaTooltip',

    parameters: {
        component: MaTooltip,
    },
};

export const Base = () => ({
    components: { MaTooltip },
    template: `
      <div class="m-2">
        <ma-tooltip color="white" title="title">
          <span> Hover me</span>
        </ma-tooltip>
      </div>
    `,
});

Base.storyName = 'Base';

export const Trigger = () => ({
    components: { MaTooltip, AInput },
    template: `
      <div class="m-2">
        <ma-tooltip title="Triggered" trigger="click">
          <span class="mr-10">Click me</span>
        </ma-tooltip>
        <ma-tooltip title="Triggered by focus" trigger="focus">
          <a-input placeholder="Focus me"></a-input>
        </ma-tooltip>
      </div>
    `,
});

Trigger.storyName = 'Trigger';
