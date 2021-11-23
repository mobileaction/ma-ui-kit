import __NAME__ from './__NAME__.vue';

export default { // this defines story
  title: '__NAME__',

  parameters: {
    component: { __name__: __NAME__ },
  },
};

export const Base = () => ({ // this is where story template exists, think of it like a small vue app
  components: { __NAME__ },
  data() {
    return {};
  },
  template: `<div style="text-align: center; margin:100px;">Content</div>`,
});

Base.storyName = 'base'; // you can change name of this story to anything
