import MaButton from './MaButton.vue';

export default {
  title: 'MaButton',

  parameters: {
    component: MaButton,
  },
};

export const Base = () => ({
  components: { MaButton },
  template: `
      <div class="m-2">
        <ma-button> Button </ma-button>
      </div>
    `,
});

export const Secondary = () => ({
  components: { MaButton },
  template: `
      <div class="m-2">
        <ma-button variant="secondary" left-icon="plus"> Button </ma-button>
        <ma-button variant="secondary" left-icon="plus" disabled> Button </ma-button>
      </div>
    `,
});

export const LeftIcon = () => ({
  components: { MaButton },
  template: `
    <div class="m-2">
      <ma-button left-icon="plus"> Button </ma-button>
    </div>
    `,
});
LeftIcon.storyName = 'Left Icon';

export const Loading = () => ({
  components: { MaButton },
  template: `
    <div class="m-2">
    <ma-button icon="spinner" spin> Button </ma-button>
    </div>
    `,
});
Loading.storyName = 'Loading';

export const Disabled = () => ({
  components: { MaButton },
  template: `
    <div class="m-2">
    <ma-button left-icon="plus" disabled>Button </ma-button>
    </div>
    `,
});

Disabled.storyName = 'Disabled';

export const Variants = () => ({
  components: { MaButton },
  template: `
    <div class="m-2">
    <p>Info</p>
    <ma-button variant="info" icon="user"/>
    <p>Danger</p>
    <ma-button variant="danger" icon="trash-alt"/>
    <p>Warning</p>
    <ma-button variant="warning" icon="envelope"/>
    </div>
    `,
});

Variants.storyName = 'Variants';

export const Sizes = () => ({
  components: { MaButton },
  template: `
    <div class="m-2">
    <ma-button size="small"> Button </ma-button>
    <ma-button> Button </ma-button>
    <ma-button size="large"> Button </ma-button>
    </div>
    `,
});

Sizes.storyName = 'Sizes';

export const Shapes = () => ({
  components: { MaButton },
  template: `
    <div class="m-2">
    <ma-button> Default </ma-button>
    <ma-button shape="round"> Round </ma-button>
    <ma-button shape="circle" icon="info-circle"/>
    </div>
    `,
});

Shapes.storyName = 'Shapes';
