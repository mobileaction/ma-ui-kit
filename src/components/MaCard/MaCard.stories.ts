import MaCard from './MaCard.vue';

export default {
    title: 'MaCard',

    parameters: {
        component: MaCard,
    },
};

export const Base = () => ({
    components: { MaCard },
    template: `
      <div class="m-2">
        <ma-card title="Card Title">
          <template #extra>
            <a href="#">more</a>
          </template>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
          <template #actions>
            <a href="#">Action 1</a>
          </template>
        </ma-card>
      </div>
    `,
});

export const NoBorder = () => ({
    components: { MaCard },
    template: `
      <div class="p-8 bg-gray-200">
        <ma-card title="Card Title" no-border>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <template #actions>
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
          </template>
        </ma-card>
      </div>
    `,
});
NoBorder.storyName = 'no-border';

export const NoTitle= () => ({
    components: { MaCard },
    template: `
      <div class="p-8 bg-gray-200">
        <ma-card no-border>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <template #actions>
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
          </template>
        </ma-card>
      </div>
    `,
});
NoTitle.storyName = 'no-title';

export const Loading= () => ({
    components: { MaCard },
    template: `
      <div class="p-8 bg-gray-200">
        <ma-card title="Card Title" no-border loading>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </ma-card>
      </div>
    `,
});
Loading.storyName = 'loading';

