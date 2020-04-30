# 快速上手
## 安装
```
npm install imcookie
```
## 页面引入imcookie
```
页面引入操作 import { getCookie } from "imcookie" ;
```
## api方法使用
### 参数
> * 设置cookie,参数：key（名称）必填项*，value（值）必填项*，hour（过期时间）[小时，非必填，留空则为默认]
>  > setCookie("key",value,hour);
> * 获取cookie,参数：key（名称）必填项*
>  > getCookie("key");
> * 删除某个cookie,参数：key（名称）必填项*
>  > removeCookie("key");
> * 获取所有cookie的key,参数：无
>  > getKeysCookie();
> * 清空所有cookie,参数：无
>  > clearCookie();

## 使用实例
```
setCookie("key","我是cookie的值")

```