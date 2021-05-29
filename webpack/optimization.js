/**
 * Created by: Sagar Bajpai (ashversache@gmail.com)
 */
export default {
    runtimeChunk: {
        name: 'runtime',
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
            },
        },
    },
};
