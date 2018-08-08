# v_ts
[TypeScript文档](https://www.tslang.cn/docs/home.html)  
[TSLint规范](https://palantir.github.io/tslint/rules/)  
[TS_Vue装饰器写法](https://github.com/kaorun343/vue-property-decorator#propoptions-propoptions--constructor--constructor---decorator)

## 目录结构说明
```catalog  

├── public                          // 静态页面
├── src                             // 主目录
    ├── assets                      // 资源集合
        ├── css                     // 样式文件
        ├── images                  // 图片
        ├── ts                      // 各类ts
    ├── components                  // 各组件
    ├── multiple                    // 多页TS入口
    ├── views                       // 多页主视图组件
    ├── App.vue                     // index主入口
    ├── main.ts                     // index主入口
    ├── shims-vue.d.ts              // 声明文件
├── babel.config.js                 // preset 记录
├── package.json                    // 依赖
├── README.md                       // 爱看不看~
├── tsconfig.json                   // ts 配置
├── tslint.json                     // tslint 配置
└── vue.config.js                   // webpack 配置  

```

***

## 全局规范说明

**url、文件名、目录命名全部采用小写方式,并以连接号-分隔**   
1. 目录命名 , 有复数结构时，要采用复数命名法。例：cars, images, data-models  
2. TS文件命名 , 同上  
3. CSS, LCSS文件命名 , 同上  
4. vue文件. views各个主页面采用PascalCase命名, components则沿用小写规范 , 例如: 主页MainPages.vue , 组件childs.vue  
5. 在vue文件内部, 引入组件使用PascalCase命名; 例如, import Child from 'xxx';  <Child :sendValue='anything' />   

**Vue TS 上下书写顺序**
```ts
<script lang="ts">
// asset
import HelloWorld from '@/components/HelloWorld.vue';

// library
import { Vue, Component, } from "vue-property-decorator";
@Component({
  components: { HelloWorld },                              // 1 组件
  mixins: [ Emitter ]                                      // 2 混入
})
export default class HelloWorld extends Vue {
  initStr: string = '初始数据'                              // 3 初始数据,声明

  @Prop({ type: [ Number, String ], default: 16 })         // 4 props
                                       
  @Watch('count')                                          // 5 watch   
  onWatchCount (val: number) {
    console.log('onWatchCount', val)
  }
     
  // computed                                              // 6 计算属性
  get styles () {}
  
  // lifecycle                                             // 7 生命周期
  created () {}
  mounted () {}
  destroyed () {}

  // methods                                               // 8 各个方法放在最后
  getCityWeather (city: string) {}
}
</script>
```  

**TypeScript书写规范**  
npm run lint 会修复一些简单的错误格式,以及提示还有哪些代码不符合规范!  
   + 使用PascalCase为类型命名。
   + 不要使用I做为接口名前缀。
   + 使用PascalCase为枚举值命名。
   + 使用camelCase为函数命名。
   + 使用camelCase为属性或本地变量命名。
   + 不要为私有属性名添加_前缀。
   + 中文注释 // 文字前面要加个空格
   + vue文件统一缩进为4个制表符  

tslint报错具体会告诉你哪里书写不规范,根据提示信息改就行了;  


**CSS命名规范**
1. 类名小写,采用连接符'-'分隔, Id和less 变量,函数等则采用camelCase;   例如: .im-class 、 #myNameIsId 、 $colorBlack: #000;
2. 尽可能的采用 BEM 规范(这个不做过多要求,命名通俗易懂就好,别给我来一堆拼音就行!)
```css
/* BTM 的意思就是 : 块 name（block）、元素 __（element）、修饰符 --（modifier）*/
/*                父元素            父->子元素          该元素对应的各种状态  */
/* 举个🌰  */
.header{ }              //头部
.header__logo{}         //logo
.header__logo--xmas     //某个节日logo
```

**CSS书写属性顺序**  
多个样式则不同 类别之间用 空行处理 , 少于5条的就不用了  
```css
.declaration-order {
    display: block;                                     // 类型、浮动
    float: right;

    position: absolute;                                 // 定位位置
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    margin: 10px;                                       // 大小、边框 、间距
    padding: 10px;
    border: 1px solid #e5e5e5;                          
    border-radius: 3px;
    width: 100px;
    height: 100px;

    font: normal 13px "Helvetica Neue", sans-serif;     // 字体 、对齐
    line-height: 1.5;
    text-align: center;

    color: #333;                                        // 颜色
    background-color: #f5f5f5;

    opacity: 1;                                         // 其他
}
```


## 其他事项说明  
1. 样式直接照设计稿的px写就可以了 ; postcss-px2rem-exclude 会自动转换rem 
2. 对于不需要的转换rem的, 单行属性可以在后面加 /*no*/ , 整个文件可以在vue.config中的css->loaderOptions->postcss->plugins->exclude中指定某个文件
3. 某些外部插件没有.d.ts文件的,自己在shims-vue.d.t中声明
4. ...


## Project setup
```
npm install                       // 第一次拉项目要安装一次, 以后每次package.json有变化的话, 也要安装
```

### Compiles and hot-reloads for development
```
npm run serve || npm run dev      // 走你~
```

### Compiles and minifies for production
```
npm run build                     // 每次编译前, 要 lint 一下, 没有问题再build
```

### Lints and fixes files
```
npm run lint                      // 检查代码规范
```
