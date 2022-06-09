import { withKnobs } from '@storybook/addon-knobs';
import MaInput from './MaInput.vue';
import MaIcon from '../MaIcon/MaIcon.vue';

export default {
    title: 'MaInput',
    decorators: [withKnobs],
    parameters: {
        component: MaInput,
    },
};

export const Base = () => ({
    components: { MaInput },
    data() {
        return {
            value: '',
            placeholder: 'placeholder',
        };
    },
    template: `
       <div class="m-2">
            <ma-input v-model="value" :placeholder="placeholder" />
       </div>
      `,
});
Base.storyName = 'Base';

export const Clearable = () => ({
    components: { MaInput },
    data() {
        return {
            value: 'Clear it',
        };
    },
    methods: {
        onClear(){
            console.log('onclear');
        },
    },
    template: `
       <div class="m-2">
            <ma-input v-model="value" :allow-clear="true" @clear="onClear"/>
       </div>
      `,
});
Clearable.storyName = 'Clearable';

export const MaxLength = () => ({
    components: { MaInput },
    data() {
        return {
            value: '',
        };
    },
    template: `
       <div class="m-2">
            <ma-input v-model="value" :max-length="5" placeholder="Max length 5" />
       </div>
      `,
});
MaxLength.storyName = 'MaxLength';

export const PrefixIconWithTemplate = () => ({
    components: {
        MaInput,
        MaIcon,
    },
    data() {
        return {
            value: 'PrefixIcon',
        };
    },
    template: `
       <div class="m-2">
            <ma-input v-model="value" pla>
              <template v-slot:prefix>
                <ma-icon
                    icon="info-circle"
                    class="ma-btn-icon"
                />              
              </template>
            </ma-input>
       </div>
      `,
});
PrefixIconWithTemplate.storyName = 'PrefixIcon With Template';

export const SuffixIconWithProps = () => ({
    components: {
        MaInput,
        MaIcon,
    },
    data() {
        return {
            value: 'PrefixIcon',
        };
    },
    template: `
       <div class="m-2">
            <ma-input v-model="value" suffix-icon="info-circle"/>
       </div>
      `,
});
SuffixIconWithProps.storyName = 'SuffixIcon With Props';

export const ReadOnly = () => ({
    components: { MaInput },
    data() {
        return {
            value: 'ReadOnly',
        };
    },
    mounted() {
        window.setTimeout(()=>{
            this.value='eee';
        },4000);
    },
    template: `
       <div class="m-2">
            <ma-input v-model="value" :read-only="true" />
       </div>
      `,
});
ReadOnly.storyName = 'ReadOnly';

export const Disabled = () => ({
    components: { MaInput },
    data() {
        return {
            value: 'Disabled',
        };
    },
    template: `
       <div class="m-2">
            <ma-input v-model="value" :disabled="true" />
       </div>
      `,
});
Disabled.storyName = 'Disabled';

export const AutoFocus = () => ({
    components: { MaInput },
    template: `
       <div class="m-2">
            <ma-input :auto-focus="true" />
       </div>
      `,
});
AutoFocus.storyName = 'Auto Focus';

export const Sizes = () => ({
    components: { MaInput },
    template: `
       <div class="m-2 space-y-4">
            <ma-input size="small" placeholder="small"/>
            <ma-input size="default" placeholder="default"/>
            <ma-input size="large" placeholder="large"/>
       </div>
      `,
});
Sizes.storyName = 'Sizes';

export const TextArea = () => ({
    components: { MaInput },
    template: `
       <div class="m-2 space-y-4">
            <ma-input type="textarea" placeholder="Textarea"/>
            <ma-input type="textarea" :rows="6" placeholder="Textarea with Rows=6"/>
            <ma-input type="textarea" :autosize="true" placeholder="Textarea with autosize true"/>
            <ma-input type="textarea" :autosize="{ minRows: 2, maxRows: 6 }" placeholder="Textarea with autosize { minRows: 2, maxRows: 6 }"/>
       </div>
      `,
});
TextArea.storyName = 'TextArea';

export const Password = () => ({
    components: { MaInput },
    template: `
       <div class="m-2">
            <ma-input type="password"/>
       </div>
      `,
});
Password.storyName = 'Password';

export const KeydownEnter = () => ({
    components: { MaInput },
    data(){
        return {
            keyword: undefined,
        };
    },
    methods: {
        onKeydownEnter(keyword){
            this.keyword = keyword;
        },
    },
    template: `
       <div class="m-2">
            <ma-input @keydown-enter="onKeydownEnter"/>
       </div>
      `,
});
Password.storyName = 'Password';
