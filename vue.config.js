const glob = require('glob');
let pagesConf = { //需要一个index
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
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/', //资源路径
    productionSourceMap: false, //生成环境不需要sourceMap
    pages: pagesConf, // 多页配置
    chainWebpack: config => {
        config.module
            .rule('px2rem')
            .use('px2rem-loader')
                .loader('px2rem-loader')
                .options({
                    remUnit: 75 / 2
                })
    }
}