import { withKnobs } from '@storybook/addon-knobs';
import MaCheckboxGroup from './MaCheckboxGroup.vue';
import MaCheckbox from '../MaCheckbox/MaCheckbox.vue';

export default {
    title: 'MaCheckboxGroup',
    decorators: [withKnobs],
    parameters: {
        component: MaCheckboxGroup,
    },
};
export const CheckboxGroupBasic = () => ({
    components: { MaCheckboxGroup },
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
    components: { MaCheckboxGroup, MaCheckbox },
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
