import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';
import { uglify } from 'rollup-plugin-uglify';
import fs from 'fs';

const testAppPath = 'D:/berezh/data-feed-test/src/data-feed';

const plugins = [
    typescript({
        typescript: require('typescript'),
    }),
    scss({
        // output: false,
        output: function(styles) {
            fs.writeFileSync('dist/index.css', styles);
            if (process.env.BUILD !== 'production') {
                fs.writeFileSync(`${testAppPath}/index.css`, styles);
            }
        },
    }),
];

const output = [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
];

if (process.env.BUILD === 'production') {
    plugins.push(
        uglify({
            nameCache: {},
        }),
    );
} else {
    output.push({
        file: `${testAppPath}/index.js`,
        format: 'es',
        banner: '/* eslint-disable */',
    });
}

export default [
    {
        input: 'src/index.ts',
        dest: 'index.js',
        external: Object.keys(pkg.peerDependencies || {}),
        plugins,
        output,
    },
];
