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
      <div class="m-p-10">
        <ma-delete-button/>
      </div>
    `,
});

export const Disabled = () => ({
  components: { MaDeleteButton },
  template: `
    <div class="m-p-10">
      <ma-delete-button disabled/>
    </div>
    `,
});

Disabled.storyName = 'disabled';

export const Loading = () => ({
  components: { MaDeleteButton },
  template: `
    <div class="m-p-10">
      <ma-delete-button loading/>
    </div>
    `,
});

Loading.storyName = 'loading';
