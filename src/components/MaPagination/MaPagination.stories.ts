import { withKnobs } from '@storybook/addon-knobs';
import { Table as ATable } from 'ant-design-vue';
import MaPagination from './MaPagination.vue';
import 'ant-design-vue/dist/antd.css';

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
for (let i = 0; i < 46; i++) {
    tableData.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

export const Base = () => ({
    components: { MaPagination },
    data() {
        return {
            pagination: {
                pageSize: 10,
                total: 100,
                currentPage: 1,
            },
        };
    },
    template: `
       <div class="m-p-10">
            <ma-pagination
                :pagination="pagination"
            />
       </div>
       
      `,
});

Base.storyName = 'Base';

export const PaginationWithTable = () => ({
    components: { MaPagination, ATable },
    data() {
        return {
            pagination: {
                pageSize: 10,
                total: tableData.length,
                currentPage: 1,
            },
            tableData,
            sampleColumns,
        };
    },
    computed: {
        shownData() {
            return this.tableData.slice(
                (this.pagination.currentPage - 1) * this.pagination.pageSize,
                this.pagination.currentPage * this.pagination.pageSize
            );
        },
    },
    template: `
       <div class="m-p-10">
        <a-table :columns="sampleColumns" :data-source="shownData" bordered :pagination="false">
        </a-table>
        <ma-pagination :pagination.sync="pagination" />
       </div>
      `,
});

PaginationWithTable.storyName = 'pagination with table';
