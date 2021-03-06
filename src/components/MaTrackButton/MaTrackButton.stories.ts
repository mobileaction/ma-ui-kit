import MaTrackButton from './MaTrackButton.vue';

export default {
    title: 'MaTrackButton',
    parameters: {
        component: MaTrackButton,
    },
};

export const Base = () => ({
    components: { MaTrackButton },
    template: `
      <div class="m-2">
        <ma-track-button keyword="keyword" translated-keyword="translated"/>
        <ma-track-button keyword="long keyword" loading/>
        <ma-track-button keyword="keyword"/>
        <ma-track-button keyword="keyword" tracked/>
        <ma-track-button keyword="keyword" disabled/>
        <ma-track-button keyword="keyword" size="s"/>
        <ma-track-button keyword="keyword" size="s" disabled/>
      </div>
    `,
});
Base.storyName = 'base';

export const Orange = () => ({
    components: { MaTrackButton },
    template: `
      <div class="m-2">
        <ma-track-button keyword="keyword" translated-keyword="translated" color="orange"/>
        <ma-track-button keyword="long keyword" color="orange" loading/>
        <ma-track-button keyword="keyword" color="orange" tracked/>
        <ma-track-button keyword="keyword" disabled/>
        <ma-track-button keyword="keyword" color="orange" size="s"/>
        <ma-track-button keyword="keyword" size="s" disabled/>
      </div>
    `,
});
Orange.storyName = 'orange';

export const LightGreen = () => ({
    components: { MaTrackButton },
    template: `
      <div class="m-2">
        <ma-track-button keyword="keyword" translated-keyword="translated" color="light-green"/>
        <ma-track-button keyword="long keyword" color="light-green" loading/>
        <ma-track-button keyword="keyword" color="light-green" tracked/>
        <ma-track-button keyword="keyword" disabled/>
        <ma-track-button keyword="keyword" color="light-green" size="s"/>
        <ma-track-button keyword="keyword" size="s" disabled/>
      </div>
    `,
});

LightGreen.storyName = 'light-green';

export const LightBlue = () => ({
    components: { MaTrackButton },
    template: `
    <div class="m-2">
    <ma-track-button keyword="keyword" translated-keyword="translated" color="light-blue"/>
    <ma-track-button keyword="long keyword" color="light-blue" loading/>
    <ma-track-button keyword="keyword" color="light-blue" tracked/>
    <ma-track-button keyword="keyword" disabled/>
    <ma-track-button keyword="keyword" color="light-blue" size="s"/>
    <ma-track-button keyword="keyword" size="s" disabled/>
    </div>
    `,
});
LightBlue.storyName = 'light-blue';

export const DrakBlue = () => ({
    components: { MaTrackButton },
    template: `
    <div class="m-2">
    <ma-track-button keyword="keyword" translated-keyword="translated" color="dark-blue"/>
    <ma-track-button keyword="long keyword" color="dark-blue" loading/>
    <ma-track-button keyword="keyword" color="dark-blue" tracked/>
    <ma-track-button keyword="keyword" disabled/>
    <ma-track-button keyword="keyword" color="dark-blue" size="s"/>
    <ma-track-button keyword="keyword" size="s" disabled/>
    </div>
    `,
});
DrakBlue.storyName = 'dark-blue';

export const Grey = () => ({
    components: { MaTrackButton },
    template: `
    <div class="m-2">
    <ma-track-button keyword="keyword" translated-keyword="translated keyword" color="grey"/>
    <ma-track-button keyword="long keyword" color="grey" loading/>
    <ma-track-button keyword="keyword" color="grey" tracked/>
    <ma-track-button keyword="keyword" disabled/>
    <ma-track-button keyword="keyword" color="grey" size="s"/>
    <ma-track-button keyword="keyword" size="s" disabled/>
    </div>
    `,
});
Grey.storyName = 'grey';

export const LightRed = () => ({
    components: { MaTrackButton },
    template: `
    <div class="m-2">
    <ma-track-button keyword="keyword" translated-keyword="translated" color="light-red"/>
    <ma-track-button keyword="loading" color="light-red"loading/>
    <ma-track-button keyword="keyword" color="light-red" tracked/>
    <ma-track-button keyword="keyword" disabled/>
    <ma-track-button keyword="keyword" color="light-red" size="s"/>
    <ma-track-button keyword="keyword" size="s" disabled/>
    </div>
    `,
});
LightRed.storyName = 'light-red';
