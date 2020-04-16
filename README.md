# 快速上手
## 安装
```
npm install imcookie
```
## 页面引入imcookie
```
首先在需要的页面 import imcookie from "imcookie" 引入操作;
```
# api方法使用
 ### 参数
```
设置cookie,参数：key（名称）必填项*，value（值）必填项*

imcookie.setItem("key",value);
```
```
获取cookie,参数：key（名称）必填项*

imcookie.getItem("key");
```
```
删除cookie,参数：key（名称）必填项*

imcookie.removeItem("key");
```
```
获取所有cookie的key,参数：无

imcookie.getKeys();
```
```
清空所有cookie,参数：无

imcookie.clear();
```
## 使用实例
```
imcookie.setItem("key","我是cookie的值")

```