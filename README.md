# v_ts
[TypeScript文档](https://www.tslang.cn/docs/home.html)  
[TSLint规范](https://palantir.github.io/tslint/rules/)  
[TS_Vue装饰器写法](https://github.com/kaorun343/vue-property-decorator#propoptions-propoptions--constructor--constructor---decorator)

***

0. npm run lint 检查代码书写是否符合规范!!!
   + 使用PascalCase为类型命名。
   + 不要使用I做为接口名前缀。
   + 使用PascalCase为枚举值命名。
   + 使用camelCase为函数命名。
   + 使用camelCase为属性或本地变量命名。
   + 不要为私有属性名添加_前缀。
   + 中文注释 // 文字前面要加个空格
   + 统一缩进为4个制表符
   + tslint报错具体会告诉你哪个书写不规范,对着改就行了;
1. 样式直接照设计稿的px写就可以了 ; postcss-px2rem-exclude 用于自动转换rem (配置和注意事项具体看vue.config.js)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
