import { withKnobs } from '@storybook/addon-knobs';
import MaModal from './MaModal.vue';
import MaButton from '../MaButton/MaButton.vue';

export default {
    title: 'MaModal',
    decorators: [withKnobs],
    parameters: {
        component: MaModal,
    },
};

export const Base = () => ({
    components: { MaModal, MaButton },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        openModal(){
            this.visible = true;
        },
        close(){
            this.visible = false;
        },
    },
    template:
        `
          <div class="m-2">
          <ma-button @click="openModal">Open Modal</ma-button>
          <ma-modal 
              :visible="visible" 
              title="Basic Modal"
              @ok="close"
              @cancel="close"
          >
            <div>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
          </ma-modal>
          </div>
        `,
});

Base.storyName = 'Base';

export const CustomFooter = () => ({
    components: { MaModal, MaButton },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        openModal(){
            this.visible = true;
        },
        close(){
            this.visible = false;
        },
    },
    template:
        `
          <div class="m-2">
          <ma-button @click="openModal">Open Modal</ma-button>
          <ma-modal 
              :visible="visible" 
              title="Basic Modal"
              @ok="close"
              @cancel="close"
          >
            <template #footer>
              <ma-button key="back" @click="close">Return</ma-button>
              <ma-button key="submit" type="primary" @click="close">Submit</ma-button>
            </template>
            <div>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
          </ma-modal>
          </div>
        `,
});

CustomFooter.storyName = 'Custom Footer';


export const CustomHeader = () => ({
    components: { MaModal, MaButton },
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        openModal(){
            this.visible = true;
        },
        close(){
            this.visible = false;
        },
    },
    template:
        `
          <div class="m-2">
          <ma-button @click="openModal">Open Modal</ma-button>
          <ma-modal 
              :visible="visible"
              @ok="close"
              @cancel="close"
          >
            <template #title>
              <div>Example Header</div>
            </template>
            <div>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
          </ma-modal>
          </div>
        `,
});

CustomHeader.storyName = 'Custom Header';
