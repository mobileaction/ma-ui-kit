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
               :show-text="false"
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
              :percentage="74.90815991200601"
              :format="(p) => parseFloat(p).toFixed(0)"
              status="exception"
          />
      </div>
    `,
});

Circle.storyName = 'circle';

export const Dashboard = () => ({
    components: { MaProgress },
    data() {
        return {};
    },
    template: `
      <div class="m-2">
          <ma-progress
              type="dashboard"
              :percentage="70"
              :width="60"
          />
      </div>
    `,
});

Dashboard.storyName = 'dashboard';

