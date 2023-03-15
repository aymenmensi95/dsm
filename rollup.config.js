import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-import-css';
import scss from 'rollup-plugin-scss';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    external: ['react', 'react-dom', 'core-js', 'react/jsx-runtime'],
    input: 'src/index.ts',
    output: [
      {
        dir: './build',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      babel({ extensions, include: ['src/**/*'] }),
      commonjs({ include: ['../../node_modules/**', '/node_modules/**'] }),
      resolve({ extensions, preferBuiltins: true }),
      typescript(),
      css(),
      scss(),
      json(),
      terser(),
    ],
  },
  {
    external: [/(\.scss|\.css)$/],
    input: './src/index.ts',
    output: { file: './build/index.d.ts', format: 'es' },
    plugins: [dts(), json()],
  },
];
