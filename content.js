(function() {
    'use strict';

    // 使用 setInterval 来反复检查弹幕按钮是否存在
    var checkExist = setInterval(function() {
        var danmakuSwitch = document.querySelector('.bui-danmaku-switch-input');
        if (danmakuSwitch) {
            danmakuSwitch.style.display = 'none';  // 隐藏弹幕按钮
            clearInterval(checkExist);  // 成功隐藏后停止检查
        }
    }, 1000);  // 每隔 1 秒检查一次
})();