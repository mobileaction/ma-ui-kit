import MaIcon from './MaIcon.vue';

export default {
  title: 'MaIcon',

  parameters: {
    component: MaIcon,
  },
};

export const Plus = () => ({
  components: { MaIcon },
  template: `
    <div>
      <div class="m-2">
        <ma-icon icon="plus" size="xs"/>
        <ma-icon icon="plus"/>
        <ma-icon icon="plus" size="2x"/>
        <ma-icon icon="plus" size="3x"/>
        <ma-icon icon="plus" size="5x"/>
        <ma-icon icon="plus" size="7x"/>
      </div>
    </div>
    `,
});
Plus.storyName = 'plus';

export const Spinner = () => ({
  components: { MaIcon },
  template: `
    <div>
      <div class="m-2">
        <ma-icon icon="spinner" size="xs"/>
        <ma-icon icon="spinner" spin/>
        <ma-icon icon="spinner" size="2x"/>
        <ma-icon icon="spinner" size="3x"/>
        <ma-icon icon="spinner" size="5x"/>
        <ma-icon icon="spinner" size="7x"/>
      </div>
    </div>
    `,
});
Spinner.storyName = 'spinner';

export const InfoCircle = () => ({
  components: { MaIcon },
  template: `
    <div>
      <div class="m-2">
        <ma-icon icon="info-circle" size="xs"/>
        <ma-icon icon="info-circle"/>
        <ma-icon icon="info-circle" size="2x"/>
        <ma-icon icon="info-circle" size="3x"/>
        <ma-icon icon="info-circle" size="5x"/>
        <ma-icon icon="info-circle" size="7x"/>
      </div>
    </div>
    `,
});

InfoCircle.storyName = 'info-circle';

export const TrashAlt = () => ({
  components: { MaIcon },
  template: `
    <div>
      <div class="m-2">
        <ma-icon icon="trash-alt" size="xs"/>
        <ma-icon icon="trash-alt"/>
        <ma-icon icon="trash-alt" size="2x"/>
        <ma-icon icon="trash-alt" size="3x"/>
        <ma-icon icon="trash-alt" size="5x"/>
        <ma-icon icon="trash-alt" size="7x"/>
      </div>
    </div>
    `,
});
TrashAlt.storyName = 'trash-alt';

export const Download = () => ({
  components: { MaIcon },
  template: `
    <div>
      <div class="m-2">
        <ma-icon icon="download" size="xs"/>
        <ma-icon icon="download"/>
        <ma-icon icon="download" size="2x"/>
        <ma-icon icon="download" size="3x"/>
        <ma-icon icon="download" size="5x"/>
        <ma-icon icon="download" size="7x"/>
      </div>
    </div>
    `,
});
Download.storyName = 'download';

export const QuestionCircle = () => ({
  components: { MaIcon },
  template: `
    <div>
      <div class="m-2">
        <ma-icon icon="question-circle" size="xs"/>
        <ma-icon icon="question-circle"/>
        <ma-icon icon="question-circle" size="2x"/>
        <ma-icon icon="question-circle" size="3x"/>
        <ma-icon icon="question-circle" size="5x"/>
        <ma-icon icon="question-circle" size="7x"/>
      </div>
    </div>
    `,
});
QuestionCircle.storyName = 'question-circle';

export const Envelope = () => ({
  components: { MaIcon },
  template: `
    <div>
      <div class="m-2">
        <ma-icon icon="envelope" size="xs"/>
        <ma-icon icon="envelope"/>
        <ma-icon icon="envelope" size="2x"/>
        <ma-icon icon="envelope" size="3x"/>
        <ma-icon icon="envelope" size="5x"/>
        <ma-icon icon="envelope" size="7x"/>
      </div>
    </div>
    `,
});
Envelope.storyName = 'envelope';

export const User = () => ({
  components: { MaIcon },
  template: `
    <div>
      <div class="m-2">
        <ma-icon icon="user" size="xs"/>
        <ma-icon icon="user"/>
        <ma-icon icon="user" size="2x"/>
        <ma-icon icon="user" size="3x"/>
        <ma-icon icon="user" size="5x"/>
        <ma-icon icon="user" size="7x"/>
      </div>
    </div>
    `,
});
User.storyName = 'user';


export const Colors = () => ({
  components: { MaIcon },
  template: `
      <div class="m-p-10 m-d-flex">
        <div class="m-d-flex m-bg-purple-800">
          <p class="m-mx-10 m-p-10">
            <ma-icon icon="plus" color="white"/>
          </p>
          <p class="m-bg-purple-800 m-mx-10 m-p-10">
            <ma-icon icon="plus" size="2x" color="white"/>
          </p>
          <p class="m-bg-purple-800 m-mx-10 m-p-10">
            <ma-icon icon="plus" size="3x" color="white"/>
          </p>
          <p class="m-bg-purple-800 m-mx-10 m-p-10">
            <ma-icon icon="plus" size="5x" color="white"/>
          </p>
        </div>
      </div>
    `,
});
Colors.storyName = 'colors';

