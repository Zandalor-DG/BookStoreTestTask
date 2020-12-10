// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    cssLoaderOptions: {
                        modules: { localIdentName: '[local]_[hash:base64:5]' },
                    },
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#1DA57A',
                            '@link-color': '#1DA57A',
                            '@border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
