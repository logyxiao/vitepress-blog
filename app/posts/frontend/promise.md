---
date: 2020-12-04
title: Promise 实现
tags:
- 前端
---

# Promise 实现

## Promise出现原因



由于在网页交互过程中,用户经常要向服务器请求数据,而用户的上网环境的不同,数据请求回来的并不是即时的,所以只能通过`回调函数`来进行请求数据成功后的后续操作.所当一个操作需要连续的异步请求时,便形成了`回调地狱`.

例如,有一个备忘录 app.

假设这一步操作,要连续进行.

```js
    // 1. 验证用户账号密码是否正确
    $.ajax({
      url: "xxx.com",
      success: function (info) {
        // 2.  根据用户信息获得备忘录列表
        $.ajax({
          url: "xxx.com",
          success: function (id) {
            // 3.  根据备忘录 ID 获取备忘录详情...
          },
        });
      },
    });
```

这种回调地狱让代码可读性差,不利用维护.

使用 `promise`

```js
    function test() {
      return new Promise((resolve, reject) => {
        $.ajax({
          url: "xxx.com",
          success: function (res) {
            resolve(res);
          },
        });
      });
    }

    test
      .then((info) => {
        // 2.  根据用户信息获得备忘录列表...
        return id;
      })
      .then((id) => {
        // 3.  根据备忘录 ID 获取备忘录详情...
      });

```

因为`promise`的链式结构,使得过程看起来是一步一步进行的,将异步操作队列化,代码逻辑变得清晰可见.

## 原理

### 基本需求

1. 我们需要知道异步操作的当前状态, 即:
   1. 请求中
   2. 已完成 - 返回成功结果
   3. 已失败 - 返回失败原因
2. 状态只会从请求中变成成功或者失败.
3. 异步操作的成功和失败的回调函数
   - 成功回调
   - 失败回调

```js
 const 等待中 = "等待中";
    const 已解决 = "已解决";
    const 已失败 = "已失败";

    class 承诺 {
      constructor(执行器) {
        this.状态 = "等待中";
        const 成功 = (值) => {
          if (this.状态 === 等待中) {
            this.状态 = 成功;
            console.log("执行成功", 值);
          }
        };
        const 失败 = (错误) => {
          if (this.状态 === 等待中) {
            this.状态 = 失败;
            console.log("执行失败", 错误);
          }
        };
        try {
          执行器(成功, 失败);
        } catch (错误) {
          失败(错误);
        }
      }
    }
```



