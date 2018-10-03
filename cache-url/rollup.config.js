/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';
import compiler from '@ampproject/rollup-plugin-closure-compiler';
import pkg from './package.json';

const plugins = [
  resolve({
    preferBuiltins: false,
  }),
  commonjs(),
  json(),
  builtins(),
  compiler(),
];

export default [
  {
    input: 'index.js',
    output: {
      name: 'amp-toolbox-cache-url',
      file: pkg.browser,
      format: 'umd',
    },
    context: 'window',
    plugins: plugins,
  },
  {
    input: 'index.js',
    output: {file: pkg.module, format: 'es'},
    context: 'window',
    plugins: plugins,
  },
  {
    input: 'index.js',
    output: {file: pkg.main, format: 'cjs'},
    context: 'global',
    plugins: plugins,
  },
];
