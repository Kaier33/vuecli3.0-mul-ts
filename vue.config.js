const glob = require('glob');
const px2rem = require('postcss-px2rem-exclude'); // post 转换rem 插件
const autoprefixer = require('autoprefixer'); // 添加后缀 , 因为下面设置的会覆盖原本的, 所以重新引入
let pagesConf = { // 需要一个index
    'index': {
        entry: 'src/main.ts',
        template: 'public/index_jq.html',
        filename: 'index.html'
    }
};
glob.sync('./src/multiple/*.ts').forEach((filePath) => {
    let fileName = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    // 有些可能会用到jq
    if (fileName === 'something' || fileName === 'other') {
        pagesConf[fileName] = {
            entry: `src/multiple/${fileName}.ts`,
            template: 'public/index_jq.html',
            filename: `${fileName}.html`
        }
    } else {
        pagesConf[fileName] = {
            entry: `src/multiple/${fileName}.ts`,
            template: 'public/index.html',
            filename: `${fileName}.html`
        }
    }
});

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/', // 资源路径
    productionSourceMap: false, // 生成环境不需要
    pages: pagesConf, // 多页配置
    css: {
        loaderOptions: {
            postcss: {
                plugins: [px2rem({ //启动rem转换
                    remUnit: 37.5,
                    exclude: ['src/assets/css/common_ignore.less'] // 可以单独指定文件, 也可以使用 /*no*/ 去忽略某一行
                }), autoprefixer]
            },
        },
        extract: { //让样式归类到css文件夹下面
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        },
    },
    configureWebpack: {
        externals: {
            jquery: 'jQuery',
        },
    },
}