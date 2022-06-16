import { withKnobs } from '@storybook/addon-knobs';
import MaCheckbox from "./index";

export default {
    title: 'MaCheckbox',
    decorators: [withKnobs],
    parameters: {
        component: MaCheckbox,
    },
};

export const Base = () => ({
    components: { MaCheckbox },
    template: `
       <div class="m-2">
            <ma-checkbox/>
       </div>
      `,
});
Base.storyName = 'Base';
