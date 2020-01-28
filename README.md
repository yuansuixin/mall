# mall

> 一个大型电商网站

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 项目步骤

* 技术选型
* 开始一个vue项目
  1. 全局安装`vue-cli`, `npm install --global vue-cli`
  2. 创建一个新的基于webpack模板的新项目，`vue init webpack mall`
  3. 安装依赖包 `cd mall; npm install; npm run dev;`
  4. 准备需要的文件和目录结构
     * 将eslint规范根据自己的习惯写好
     * 配置好webpack 
  5. 准备公共资源
* 初始化项目,安装项目需要的依赖，去除生成项目时候不需要的代码

```
cnpm install --save babel-polyfill fastclick

cnpm install --save-dev node-sass 

cnpm install sass-loader@7.3.1 --save-dev

cnpm install --save vue-awesome-swiper

cnpm install --save axios
cnpm install --save jsonp
cnpm install --save vue-lazyload
```