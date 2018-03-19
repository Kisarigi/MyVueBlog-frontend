# 基于vue构建的个人博客（前端部分）

> 这是一个前后端完全分离的项目，学完vue和node后总想做点什么，于是就有了这个博客。整体布局样式大量借鉴了minia的个人博客。<br>
[演示地址这里](http://39.108.214.182/#/)<br> 
技术栈：vue全家桶+node.js+express+mongoDB+mongoose <br>
发布文章时支持预览，支持用markdown语法编辑文章。结合express开发后台api，主要实现了文章模块与留言模块的增删改查。<br>
整体代码无非就是业务逻辑，增删改查那一套，难点反而是在从开发环境部署到服务器的过程。<br>
webpack打包问题啦，服务器上配置CROS跨域啦，最后调通了实在是万幸。<br>
[这里是项目的后台的github地址](https://github.com/Kisarigi/MyVueBlog-server)

## 不足之处
1.没做权限控制。想实现不难，但是接下来还有个棘手的毕业设计，告辞0.0 <br>
2.没有文章评论模块。以后会考虑加上的。还是增删改查那套...快写吐了  <br>
3.没做移动端适配。会尽快适配的<br>
4.admin界面也太寒酸了吧。住嘴...有时间会好好设计一下的<br>

## 演示图片
![1](https://wx2.sinaimg.cn/mw1024/006SncqLgy1fpie8k9hlpj31gr0q9770.jpg)

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
# MyVueBlog-frontend
