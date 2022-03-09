import { withKnobs } from '@storybook/addon-knobs';
import { Table as ATable } from 'ant-design-vue';
import MaPagination from './MaPagination.vue';

export default {
    title: 'MaPagination',
    decorators: [withKnobs],

    parameters: {
        component: MaPagination,
    },
};

const sampleColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const tableData = [];
for (let i = 0; i < 106; i++) {
    tableData.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

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

export const CustomTotal = () => ({
    components: { MaPagination },
    data() {
        return {
            pageSize: 10,
            total: 500,
            current: 1,
        };
    },
    methods: {
        showTotal(total, range) {
            return `${range[0]}-${range[1]} of ${total} items`;
        },
    },
    template: `
       <div class="m-2">
            <ma-pagination
                :page-size.sync="pageSize"
                :total.sync="total"
                :current.sync="current"
                :show-size-changer="true"
                :show-quick-jumper="true"
                :custom-show-total="showTotal"
            />
       </div>
       
      `,
});

CustomTotal.storyName = 'Custom Total';

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

export const PaginationWithTable = () => ({
    components: { MaPagination, ATable },
    data() {
        return {
            pageSize: 10,
            total: tableData.length,
            current: 1,
            tableData,
            sampleColumns,
        };
    },
    computed: {
        shownData() {
            return this.tableData.slice(
                (this.current - 1) * this.pageSize,
                this.current * this.pageSize
            );
        },
    },
    template: `
       <div class="m-2">
        <a-table 
            :columns="sampleColumns" 
            :data-source="shownData" 
            bordered 
            :pagination="false">
        </a-table>
        <ma-pagination
            :page-size.sync="pageSize"
            :total.sync="total"
            :current.sync="current"
            :show-total="true"
            :show-size-changer="true"
            :show-quick-jumper="true"
        />
       </div>
      `,
});

PaginationWithTable.storyName = 'Pagination With Table';
