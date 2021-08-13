# vue-sync-promise-demo

## 原理
自定义指令，异步函数作为参数传入，指令中await异步函数将数据innerText到dom节点

## 使用方法

* 将 [sync.js](src/directive/sync/sync.js)插件放入项目
* 在main.js中引入自定义指令

```javascript
import sync from './directive/sync/sync'

Vue.use(sync)
```
* 使用指令

```javascript
<span v-sync="asyncFunc(value)"/>

<span v-sync.update="promiseFunc(value)"/>
```
