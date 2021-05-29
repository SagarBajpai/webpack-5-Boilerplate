/**
 * Created by: Sagar Bajpai (ashversache@gmail.com)
 * @see https://webpack.js.org/configuration/dev-server/
 */
import isWindows from 'is-windows';

import { devServerProxyConfig } from './devServierProxy';

const defaultPort = 8086;

const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
    publicPath: '/',
    port: defaultPort,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: devServerProxyConfig,
    hot: true,
    overlay: false,
    host: devServerHost,
    stats: {
        assetsSort: '!size',
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: false,
        warnings: false,
        publicPath: false,
    },
};
