const glob = require('glob');
const px2rem = require('postcss-px2rem-exclude'); // post 转换rem 插件
const autoprefixer = require('autoprefixer'); // 添加后缀 , 因为下面设置的会覆盖原本的, 所以重新引入
let pagesConf = { // 需要一个index
    'index': {
        entry: 'src/main.ts',
        template: 'public/index.html',
        filename: 'index.html'
    }
};
glob.sync('./src/multiple/*.ts').forEach((filePath) => {
    let fileName = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    pagesConf[fileName] = {
        entry: `src/multiple/${fileName}.ts`,
        template: 'public/index.html',
        filename: `${fileName}.html`
    }
});

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/', // 资源路径
    productionSourceMap: false, // 生成环境不需要sourceMap
    pages: pagesConf, // 多页配置
    css: {
        loaderOptions: {
            postcss: {
                plugins: [px2rem({
                    remUnit: 37.5,
                    exclude: 'src/assets/css/common.css' // 可以单独指定文件, 也可以使用 /*no*/ 去忽略某一行
                }), autoprefixer]
            }
        }
    },
    configureWebpack: {
        externals: {
            jquery: 'jQuery',
        },
    }
}