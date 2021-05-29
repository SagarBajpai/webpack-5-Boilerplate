/**
 * Created by: Sagar Bajpai (ashversache@gmail.com)
 */
import merge from 'webpack-merge';

import baseConfig from './webpack/base';
import devConfig from './webpack/dev';
import prodConfig from './webpack/prod';
import {isProd} from './webpack/utils/env';

const config = isProd
    ? merge(baseConfig, prodConfig)
    : merge(baseConfig, devConfig);

export default () => config;
