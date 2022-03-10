import { withKnobs } from '@storybook/addon-knobs';
import MaPagination from './MaPagination.vue';

export default {
    title: 'MaPagination',
    decorators: [withKnobs],

    parameters: {
        component: MaPagination,
    },
};

export const Basic = () => ({
    components: { MaPagination },
    data() {
        return {
            pageSize: 10,
            total: 50,
            current: 1,
        };
    },
    template: `
       <div class="m-2">
            <ma-pagination
                :page-size.sync="pageSize"
                :total.sync="total"
                :current.sync="current"
            />
       </div>
       
      `,
});

Basic.storyName = 'Basic';

export const More = () => ({
    components: { MaPagination },
    data() {
        return {
            pageSize: 10,
            total: 100,
            current: 1,
        };
    },
    template: `
       <div class="m-2">
            <ma-pagination
                :page-size.sync="pageSize"
                :total.sync="total"
                :current.sync="current"
            />
       </div>
      `,
});

More.storyName = 'More';

export const Changer = () => ({
    components: { MaPagination },
    data() {
        return {
            pageSize: 10,
            total: 500,
            current: 1,
        };
    },
    template: `
       <div class="m-2">
            <ma-pagination
                :page-size.sync="pageSize"
                :total.sync="total"
                :current.sync="current"
                :show-size-changer="true"
            />
       </div>
       
      `,
});

Changer.storyName = 'Changer';

export const Disabled = () => ({
    components: { MaPagination },
    data() {
        return {
            pageSize: 10,
            total: 500,
            current: 1,
        };
    },
    template: `
       <div class="m-2">
            <ma-pagination
                :page-size.sync="pageSize"
                :total.sync="total"
                :current.sync="current"
                :show-size-changer="true"
                :disabled="true"
            />
       </div>
       
      `,
});

Disabled.storyName = 'Disabled';


export const Jumper = () => ({
    components: { MaPagination },
    data() {
        return {
            pageSize: 10,
            total: 500,
            current: 1,
        };
    },
    template: `
       <div class="m-2">
            <ma-pagination
                :page-size.sync="pageSize"
                :total.sync="total"
                :current.sync="current"
                :show-size-changer="true"
                :show-quick-jumper="true"
            />
       </div>
       
      `,
});

Jumper.storyName = 'Jumper';

export const Total = () => ({
    components: { MaPagination },
    data() {
        return {
            pageSize: 10,
            total: 500,
            current: 1,
        };
    },
    template: `
       <div class="m-2">
            <ma-pagination
                :page-size.sync="pageSize"
                :total.sync="total"
                :current.sync="current"
                :show-size-changer="true"
                :show-quick-jumper="true"
                :show-total="true"
            />
       </div>
      `,
});

Total.storyName = 'Total';

export const SmallSize = () => ({
    components: { MaPagination },
    data() {
        return {
            pageSize: 10,
            total: 500,
            current: 1,
        };
    },
    template: `
       <div class="m-2">
            <ma-pagination
                :page-size.sync="pageSize"
                :total.sync="total"
                :current.sync="current"
                :show-size-changer="true"
                :show-quick-jumper="true"
                :show-total="true"
                size="small"
            />
       </div>
       
      `,
});

SmallSize.storyName = 'Small Size';

