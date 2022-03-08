import { readdirSync } from 'fs';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

const components = readdirSync(`${__dirname}/src/components`);

const componentsConfig = components
    .map((file) => {
        return file.split('.')[0];
    })
    .map(file => ({
        input: `${__dirname}/src/components/${file}/${file}.vue`,
        external: [
            'vue',
            'feather-img',
            'inputmask',
            'vue-quill-editor',
        ],
        output: [
            {
                exports: 'auto',
                format: 'cjs',
                dir: `${__dirname}/core`,
                entryFileNames: '[name].js',
                chunkFileNames: '[name]-[hash].js',
                sourcemap: false,
            },
        ],
        plugins: [
            nodeResolve(),
            vue(),
            scss(),
            postcss(),
            typescript(),
            babel({
                babelHelpers: 'runtime',
                exclude: 'node_modules/**',
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
            }),
            commonjs(),
            terser(),
        ],
    }));

const directives = readdirSync(`${__dirname}/src/directives`);
const directivesConfig = directives
    .map(file => file.split('.')[0])
    .map(file => ({
        input: `${__dirname}/src/directives/${file}.ts`,
        output: [
            {
                format: 'cjs',
                dir: `${__dirname}/directives`,
                entryFileNames: '[name].js',
                exports: 'default',
                sourcemap: false,
            },
        ],
        external: ['inputmask'],
        plugins: [
            nodeResolve(),
            typescript(),
            babel({
                babelHelpers: 'runtime',
                exclude: 'node_modules/**',
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
            }),
            commonjs(),
            terser(),
        ],
    }));

export default [...componentsConfig, ...directivesConfig];
