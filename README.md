# 快速上手
## 安装
```shell
npm install im-cookie
```
## 页面引入im-cookie
```
首先在需要的页面 import cookie from "im-cookie" 引入操作;
```
## api方法使用
 # cookie参数
```
设置cookie,参数：key（名称）必填项*，value（值）必填项*
setItem("key",value);
```
```
获取cookie,参数：key（名称）必填项*
getItem("key");
```
```
删除cookie,参数：key（名称）必填项*
removeItem("key");
```
```
获取所有cookie的key,参数：无
getKeys();
```
```
清空所有cookie,参数：无
clear();
```
## 使用实例
```
cookie.setItem("key","我是cookie的值")
```