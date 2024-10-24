# 哔哩哔哩弹幕按钮隐藏扩展

（前文补充）后续测试发现好多问题，在使用扩展前，要先手动关闭视频页面的弹幕按钮，因为此扩展只是不让你按按钮，而非完全屏蔽弹幕（服了，什么破项目）。

作者能力有限，未能将此扩展发布到扩展商店，所以仅通过篡改猴脚本或手动安装的方式提供给大家（/(ㄒoㄒ)/~~）。

## 安装方法

### 方法一：使用篡改猴安装

1. 安装 **Tampermonkey**（篡改猴），不论是 Edge 或 Chrome 浏览器，均可使用。篡改猴是不是测试版也不影响。

2. 下载并安装后，进入 **篡改猴管理面板**。

3. 点击 **加号** 添加新脚本。

4. 将以下代码复制并粘贴到新脚本中，保存即可启用扩展功能：

```javascript
// ==UserScript==
// @name         隐藏哔哩哔哩弹幕按钮
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  隐藏哔哩哔哩视频页面的弹幕开关按钮
// @author       af
// @match        *://www.bilibili.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var checkExist = setInterval(function() {
        var danmakuSwitch = document.querySelector('.bui-danmaku-switch-input');
        if (danmakuSwitch) {
            danmakuSwitch.style.display = 'none';  // 隐藏弹幕按钮
            clearInterval(checkExist);  // 成功隐藏后停止检查
        }
    }, 1000);  // 每隔 1 秒检查一次

})();
```

5. 脚本保存后，可正常使用而不被弹幕影响心情了（嘿嘿）。

### 方法二：手动安装（不使用篡改猴）

1. 下载仅有的三个文件，并将它们放在同一文件夹中：
2. 启用浏览器的开发者模式：
   - 在 Chrome 浏览器中：打开右上角的 **开发者模式**。
   - 在 Edge 浏览器中：在左侧边栏中找到 **开发者模式**。
3. 点击 **加载已解压的扩展程序**，选择刚才下载的文件夹，导入扩展即可使用。

---

### 常见问题

- 有问题的话，不如，咱们一起讨论讨论，合作愉快。

---

希望这个扩展对你有帮助！如有问题或建议，欢迎在此页面提出反馈。
