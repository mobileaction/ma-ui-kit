import __name__ from './{__name__}.vue';

export default { // this defines story
  title: '{__name__}',

  parameters: {
    component: { __name__ },
  },
};

export const Base = () => ({ // this is where story template exists, think of it like a small vue app
  components: { __name__ },
  data() {
    return {};
  },
  template: `<div style="text-align: center; margin:100px;">Content</div>`,
});

Base.storyName = 'base'; // you can change name of this story to anything
