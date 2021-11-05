// 1.使用ES6导入语法，导入JQuery
import $ from 'jquery';

// 导入样式(在webpack中一切皆模块，都可以通过ES6导入语法进行导入和使用)
// 如果某个模块中，使用from接受到的成员为undifined，则没必要进行接收
import './css/index.css';
import './css/index.less';

// 2.定义JQUery的入口函数
$(function () {
    // 3.实现奇偶行变色
    $('li:odd').css('background-color', 'pink');
    $('li:even').css('background-color', 'blue');

});



// 1.导入图片，得到图片文件
import logo from './images/apple1.png';
console.log(logo);
// 2.给img标签的src动态赋值
$('.box').attr('src',logo)

// 定义装饰器函数
function info(target){
    target.info = 'Person info.'
}

// 定义一个类
@info
class Person{}

console.log(Person.info);