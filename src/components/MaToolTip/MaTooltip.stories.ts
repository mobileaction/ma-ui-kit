import MaTooltip from './MaTooltip.vue';

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
        <ma-tooltip title="Title">
          <span> Hover me</span>
        </ma-tooltip>
      </div>
    `,
});

Base.storyName = 'Base';

export const Circle = () => ({
  components: { MaTooltip },
  template: `
      <div class="m-2">
        <ma-tooltip type="circle"/>
      </div>
    `,
});

Circle.storyName = 'Circle';

export const Disabled = () => ({
  components: { MaTooltip },
  template: `
    <div class="m-2">
      <ma-tooltip disabled/>
    </div>
    `,
});

Disabled.storyName = 'Disabled';

export const Loading = () => ({
  components: { MaTooltip },
  template: `
    <div class="m-2">
      <ma-tooltip loading/>
    </div>
    `,
});

Loading.storyName = 'Loading';

export const Sizes = () => ({
  components: { MaTooltip },
  template: `
      <div class="m-2">
        <ma-tooltip size="small"/>
        <ma-tooltip/>
        <ma-tooltip size="large"/>
      </div>
    `,
});

Sizes.storyName = 'Sizes';
