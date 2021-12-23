import MaPageHeader from './MaPageHeader.vue';
import MaButton from './../MaButton/MaButton.vue';

export default {
  title: 'MaPageHeader',
  parameters: {
    component: MaPageHeader,
  },
};

export const Base = () => ({
  components: { MaPageHeader, MaButton },
  template: `
      <div class="m-2">
        <ma-page-header title="Page Title" subTitle="This is a subtitle"/>
      </div>
    `,
});

export const Extra = () => ({
  components: { MaPageHeader, MaButton },
  template: `
      <div class="m-2">
        <ma-page-header title="Page Title" subTitle="This is a subtitle">
          <template #extra>
            <ma-button key="3">
              Operation
            </ma-button>
            <ma-button key="2">
              Operation
            </ma-button>
            <ma-button key="1" type="primary">
              Primary
            </ma-button>
          </template>
        </ma-page-header>
      </div>
    `,
});
