import { withKnobs } from '@storybook/addon-knobs';
import MaSwitch from './MaSwitch.vue';

export default {
  title: 'MaSwitch',
  decorators: [withKnobs],
  parameters: {
    component: MaSwitch,
  },
};

export const Base = () => ({
  components: { MaSwitch },
  data() {
    return {};
  },
  template: `
       <div class="m-2">
            <ma-switch default-checked/>
       </div>
      `,
});

Base.storyName = 'base';

export const Disabled = () => ({
  components: { MaSwitch },
  template: `
      <div class="m-2">
        <ma-switch disabled/>
      </div>
    `,
});

Disabled.storyName = 'disabled';

export const checkedValue = () => ({
  components: { MaSwitch },
  template: `
      <div class="m-2">
        <ma-switch checked-children="Active" un-checked-children="Passive"/>
      </div>
    `,
});

checkedValue.storyName = 'checked/unchecked/-children';

export const customChange = () => ({
  components: { MaSwitch },
  data: () => ({
    checked: true,
  }),
  methods: {
    onChange(checked) {
      this.checked = checked;
    },
  },
  template: `
      <div class="m-2">
        <ma-switch :checked="this.checked" @change="this.onChange"/>
      </div>
    `,
});

customChange.storyName = 'custom Change';

export const colors = () => ({
  components: { MaSwitch },
  template: `
      <div class="m-2">
        <ma-switch color="yellow" default-checked/>
        <ma-switch color="turquoise" default-checked class="mr-2"/>
      </div>
    `,
});

colors.storyName = 'colors';
