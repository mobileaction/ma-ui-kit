import MaIcon from './MaIcon.vue';
import ARow from 'ant-design-vue/es/grid/Row.js';
import ACol from 'ant-design-vue/es/grid/Col.js';

export default {
    title: 'MaIcon',

    parameters: {
        component:
        MaIcon,
    },
};

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

export const Icons = () => ({
    components: { MaIcon, ACol, ARow },
    methods: {
        copyIcon(iconName) {
            const copyText = '<ma-icon icon="' + iconName + '" />';
            navigator.clipboard.writeText(copyText);
            alert('Copied the text: ' + copyText);
        },
    },
    template: `
      <div class="m-2">
      <a-row class="my-5">
        <a-col :span="4">
          <div @click="copyIcon('plus')" class="cursor-pointer">
            <ma-icon icon="plus"/>
            <div> plus</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('info-circle')" class="cursor-pointer">
            <ma-icon icon="info-circle"/>
            <div> info circle</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('download')" class="cursor-pointer">
            <ma-icon icon="download"/>
            <div> download</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('question-circle')" class="cursor-pointer">
            <ma-icon icon="question-circle"/>
            <div> question circle</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('check-circle')" class="cursor-pointer">
            <ma-icon icon="check-circle"/>
            <div> check circle</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('plus-circle')" class="cursor-pointer">
            <ma-icon icon="plus-circle"/>
            <div> plus circle</div>
          </div>
        </a-col>
      </a-row>
      <a-row class="my-5">
        <a-col :span="4">
          <div @click="copyIcon('check')" class="cursor-pointer">
            <ma-icon icon="check"/>
            <div> check</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('envelope')" class="cursor-pointer">
            <ma-icon icon="envelope"/>
            <div> envelope</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('user')" class="cursor-pointer">
            <ma-icon icon="user"/>
            <div> user</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('info')" class="cursor-pointer">
            <ma-icon icon="info"/>
            <div> info</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('trash-alt')" class="cursor-pointer">
            <ma-icon icon="trash-alt"/>
            <div> trash alt</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('spinner')" class="cursor-pointer">
          <ma-icon icon="spinner"/>
            <div> spinner</div>
          </div>
        </a-col>
      </a-row>
      <a-row class="my-5">
        <a-col :span="4">
          <div @click="copyIcon('sync')" class="cursor-pointer">
          <ma-icon icon="sync"/>
          <div> sync</div>
        </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('eye')" class="cursor-pointer">
            <ma-icon icon="eye"/>
            <div> eye</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('eye-slash')" class="cursor-pointer">
            <ma-icon icon="eye-slash"/>
            <div> eye-slash</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('copy')" class="cursor-pointer">
            <ma-icon icon="copy"/>
            <div> copy</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('chart-line')" class="cursor-pointer">
            <ma-icon icon="chart-line"/>
            <div> chart-line</div>
          </div>
        </a-col>
        <a-col :span="4">
          <div @click="copyIcon('bell')" class="cursor-pointer">
            <ma-icon icon="bell"/>
            <div> bell</div>
          </div>
        </a-col>
      </a-row>
      <a-row class="my-5">
        <a-col :span="4">
          <ma-icon icon="bell-slash"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="lock"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="comment"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="align-left"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="angle-down"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="angle-right"/>
        </a-col>
      </a-row>
      <a-row class="my-5">
        <a-col :span="4">
          <ma-icon icon="angle-left"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="arrow-left"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="arrow-right"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="arrow-up"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="arrow-down"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="arrows-alt-h"/>
        </a-col>
      </a-row>
      <a-row class="my-5">
        <a-col :span="4">
          <ma-icon icon="ad"/>
        </a-col>
        <a-col :span="4">
          <ma-icon icon="ban"/>
        </a-col>
      </a-row>
      </div>
    `,
});
Icons.storyName = 'icons';

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

