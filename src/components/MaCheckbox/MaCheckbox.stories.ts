import { withKnobs } from '@storybook/addon-knobs';
import { MaCheckbox, MaCheckboxGroup } from "./index";
import { Checkbox } from "ant-design-vue";

const { Group } = Checkbox;

export default {
    title: 'MaCheckbox',
    decorators: [withKnobs],
    parameters: {
        component: MaCheckbox,
    },
};

export const Base = () => ({
    components: { MaCheckbox },
    data() {
        return {
            value: true,
        };
    },
    methods: {
      onChange(checked) {
          console.log(checked);
      }
    },
    template: `
       <div class="m-2">
            <ma-checkbox v-model="value" @change="onChange"/>
       </div>
      `,
});
Base.storyName = 'Base';


export const Disabled = () => ({
    components: { MaCheckbox },
    data() {
        return {
            value: true,
        };
    },
    template: `
       <div class="m-2">
            <ma-checkbox v-model="value" disabled/>
       </div>
      `,
});
Disabled.storyName = 'Disabled';

export const Label = () => ({
    components: { MaCheckbox },
    data() {
        return {
            value: true,
            label: "Label"
        };
    },
    template: `
       <div class="m-2">
            <ma-checkbox v-model="value" :label="label"/>
       </div>
      `,
});
Label.storyName = 'Label';

export const Indeterminate = () => ({
    components: { MaCheckbox },
    data() {
        return {
            value: false,
        };
    },
    template: `
       <div class="m-2">
            <ma-checkbox v-model="value" indeterminate/>
       </div>
      `,
});
Indeterminate.storyName = 'Indeterminate';

export const CheckboxGroupBasic = () => ({
    components: { MaCheckboxGroup, ACheckbox: Checkbox, ACheckboxGroup: Group, MaCheckbox },
    data() {
        return {
            value: ['Apple'],
            options: [
                { label: 'Apple', value: 'Apple' },
                { label: 'Pear', value: 'Pear' },
                { label: 'Orange', value: 'Orange' },
            ],
        };
    },
    template: `
       <div class="m-2">
            <ma-checkbox-group v-model="value" :options="options">
            </ma-checkbox-group>
       </div>
      `,
});
CheckboxGroupBasic.storyName = 'Checkbox Group Basic';

export const CheckboxGroupWithTemplate = () => ({
    components: { MaCheckboxGroup, ACheckbox: Checkbox, ACheckboxGroup: Group, MaCheckbox },
    data() {
        return {
            value: ['Apple'],
        };
    },
    template: `
       <div class="m-2">
            <ma-checkbox-group v-model="value">
                  <ma-checkbox value="Apple">
                    <span>Apple!</span>
                  </ma-checkbox>
                  <ma-checkbox value="Pear">
                    <span>Pear!</span>
                  </ma-checkbox>
            </ma-checkbox-group>
       </div>
      `,
});
CheckboxGroupWithTemplate.storyName = 'Checkbox Group With Template';