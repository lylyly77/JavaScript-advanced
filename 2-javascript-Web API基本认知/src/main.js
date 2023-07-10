console.log('1')

// Web API

//  作用 就是使用js取操作html和浏览器
//  分类：DOM（文档对象模型）、BOM（浏览器对象模型）

//  DOM 操作网页内容
//  开发网页内容特效和实现用户交互

//  DOM树

//  DOM对象 浏览器根据html标签生成的JS对象
//  所有标签的属性都可以在这个对象上面找到
//  修改这个对象的熟悉感会自动映射到标签身上
// 核心：把网页内容当作对象来处理

const div = document.querySelector('div')
console.dir(div)
console.log(typeof div)
//   div在html是标签，在js中叫对象


//  document对象是DOM里提供的一个对象
//  它提供的属性和方法都是用来访问和操作网页内容的