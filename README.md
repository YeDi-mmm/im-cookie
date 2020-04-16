# 快速上手
## 安装
```shell
npm install testpublish
```
## 全局注册（在main.js文件里注册）
```javascript
import testpublish from 'testpublish';
global.testpublish = testpublish;
```
## 局部注册（在你所使用的vue里注册）
```javascript
import testpublish from 'testpublish';
```
## 例子
姓名脱敏
```javascript
let str = testpublish.$hideName("张三");
```
 
 
#目录
* [1.姓名脱敏](#hideName)
 
```
<h6 id="hideName">1.姓名脱敏</h6>
```javascript
//返回字符串
let str = testpublish.$hideName("张三");
```