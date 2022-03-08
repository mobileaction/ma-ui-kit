import MaDeleteButton from './MaDeleteButton.vue';

export default {
    title: 'MaDeleteButton',

    parameters: {
        component: MaDeleteButton,
    },
};

export const Base = () => ({
    components: { MaDeleteButton },
    template: `
      <div class="m-2">
        <ma-delete-button/>
      </div>
    `,
});

Base.storyName = 'Base';

export const Circle = () => ({
    components: { MaDeleteButton },
    template: `
      <div class="m-2">
        <ma-delete-button type="circle"/>
      </div>
    `,
});

Circle.storyName = 'Circle';

export const Disabled = () => ({
    components: { MaDeleteButton },
    template: `
    <div class="m-2">
      <ma-delete-button disabled/>
    </div>
    `,
});

Disabled.storyName = 'Disabled';

export const Loading = () => ({
    components: { MaDeleteButton },
    template: `
    <div class="m-2">
      <ma-delete-button loading/>
    </div>
    `,
});

Loading.storyName = 'Loading';

export const Sizes = () => ({
    components: { MaDeleteButton },
    template: `
      <div class="m-2">
        <ma-delete-button size="small"/>
        <ma-delete-button/>
        <ma-delete-button size="large"/>
      </div>
    `,
});

Sizes.storyName = 'Sizes';
