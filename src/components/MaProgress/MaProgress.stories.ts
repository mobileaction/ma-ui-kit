import { withKnobs } from '@storybook/addon-knobs';
import MaProgress from './MaProgress.vue';

export default {
    title: 'MaProgress',
    decorators: [withKnobs],
    parameters: {
        component: MaProgress,
    },
};

export const Base = () => ({
    components: { MaProgress },
    data() {
        return {};
    },
    template: `
       <div class="m-2">
           <ma-progress
               :percentage="70"
               :stroke-width="5"
           />
       </div>
      `,
});

Base.storyName = 'base';

export const Circle = () => ({
    components: { MaProgress },
    data() {
        return {};
    },
    template: `
      <div class="m-2">
          <ma-progress
              type="circle"
              :show-text="false"
              :percentage="30"
              status="exception"
          />
      </div>
    `,
});

Circle.storyName = 'circle';

