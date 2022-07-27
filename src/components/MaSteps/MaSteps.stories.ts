import { withKnobs } from '@storybook/addon-knobs';
import MaSteps from './MaSteps.vue';
import Steps from 'ant-design-vue/lib/steps/index.js';

const AStep = Steps.Step;
export default {
    title: 'MaSteps',
    decorators: [withKnobs],
    parameters: {
        component: MaSteps,
    },
};

export const Base = () => ({
    components: {
        MaSteps,
        AStep,
    },
    data() {
        return {
            value: 0,
            steps: [1,2,3],
        };
    },
    watch: {
        value(val) {
            console.log(val);
        },
    },
    template: `
       <div class="m-2">
        <ma-steps v-model="value">
          <a-step v-for="i in steps" :key="i" />
        </ma-steps>
       </div>
      `,
});
Base.storyName = 'Base';

export const Verticle = () => ({
    components: {
        MaSteps,
        AStep,
    },
    data() {
        return {
            value: 0,
            steps: [1,2,3],
        };
    },
    template: `
       <div class="m-2">
        <ma-steps v-model="value" direction="vertical">
          <a-step v-for="i in steps" :key="i" />
        </ma-steps>
       </div>
      `,
});
Verticle.storyName = 'Verticle';

export const TitleDescription = () => ({
    components: {
        MaSteps,
        AStep,
    },
    data() {
        return {
            value: 0,
        };
    },
    template: `
       <div class="m-2">
        <ma-steps v-model="value">
          <a-step title="Step 1" description="This is a description."/>
          <a-step title="Step 2" description="This is a description."/>
        </ma-steps>
       </div>
      `,
});
TitleDescription.storyName = 'Title Description';

export const ProgressDot = () => ({
    components: {
        MaSteps,
        AStep,
    },
    data() {
        return {
            value: 0,
        };
    },
    template: `
       <div class="m-2">
        <ma-steps v-model="value" progress-dot>
          <a-step title="Inviting Mobile Action Account"/>
          <a-step title="Verifying Integration"/>
        </ma-steps>
       </div>
      `,
});
ProgressDot.storyName = 'Progress Dot';
