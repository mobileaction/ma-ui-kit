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

export const Success = () => ({
    components: { MaButton },
    template: `
    <div class="m-2">
      <ma-button variant="success" size="small">Success</ma-button>
      <ma-button variant="success" >Success</ma-button>
    </div>
    
    `,
});
Success.storyName = 'success';

export const Danger = () => ({
    components: { MaButton },
    template: `
    <div class="m-2">
      <ma-button variant="danger" size="small">Danger</ma-button>
      <ma-button variant="danger">Danger</ma-button>
      <ma-button variant="danger" icon="trash-alt"/>
    </div>
    
    `,
});
Danger.storyName = 'danger';

export const Info = () => ({
    components: { MaButton },
    template: `
    <div class="m-2">
      <ma-button variant="info" size="small">Info</ma-button>
      <ma-button variant="info">Info</ma-button>
      <ma-button variant="info" icon="user"/>
    </div>
    `,
});
Info.storyName = 'info';

export const Warning = () => ({
    components: { MaButton },
    template: `
    <div class="m-2">
      <ma-button variant="warning" size="small">Info</ma-button>
      <ma-button variant="warning">Info</ma-button>
      <ma-button variant="warning" icon="envelope"/>
    </div>
    `,
});
Warning.storyName = 'warning';

export const LeftIcon = () => ({
    components: { MaButton },
    template: `
    <div class="m-2">
      <ma-button icon="plus" size="small"> Button </ma-button>
      <ma-button icon="plus"> Button </ma-button>
      <ma-button icon="plus" size="large"> Button </ma-button>
    </div>
    `,
});
LeftIcon.storyName = 'Left Icon';

export const Link = () => ({
    components: { MaButton },
    template: `
    <div class="m-2">
      <ma-button variant="link" size="small"> Small Link </ma-button> <br/>
      <ma-button variant="link"> Link </ma-button> <br/>
      <ma-button variant="link" size="large"> Large Link </ma-button>
    </div>
    `,
});
Link.storyName = 'Link';

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
    <ma-button icon="plus" disabled>Button </ma-button>
    </div>
    `,
});

Disabled.storyName = 'Disabled';

export const Sizes = () => ({
    components: { MaButton },
    template: `
    <div class="m-2">
    <ma-button size="small"> small </ma-button>
    <ma-button> Default </ma-button>
    <ma-button size="large">Large </ma-button>
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
