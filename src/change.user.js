// ==UserScript==
// @name         Select WD2A by default
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  時間割ページにてドロップダウンメニューの初期値をWD2Aに設定します。
// @author       Houju Kuge
// @match        https://click.ecc.ac.jp/ecc/rtakimoto/schedule/
// @match        https://click.ecc.ac.jp/ecc/rtakimoto/schedule/index.php
// @icon         glitterHonda.png
// @updateURL    https://github.com/kugehouju/Select-WD2A-by-default/raw/main/src/change.user.js
// @downloadURL  https://github.com/kugehouju/Select-WD2A-by-default/raw/main/src/change.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // カーソルストーカーの設定
    var imageUrl = "glitterHonda.png";
    var cursorStalker = document.createElement('img');
    cursorStalker.src = imageUrl;
    cursorStalker.style.position = 'absolute';
    cursorStalker.style.pointerEvents = 'none';
    cursorStalker.style.width = '64px';
    cursorStalker.style.height = '64px';
    document.body.appendChild(cursorStalker);
    var targetX = 0, targetY = 0;
    var ease = 0.05; // 数値を変えることでカーソルストーカーの遅延速度を変更できます
    function animate() {
        var dx = targetX - cursorStalker.offsetLeft;
        var dy = targetY - cursorStalker.offsetTop;
        cursorStalker.style.left = cursorStalker.offsetLeft + dx * ease + 'px';
        cursorStalker.style.top = cursorStalker.offsetTop + dy * ease + 'px';
        requestAnimationFrame(animate);
    }
    document.addEventListener('mousemove', function(e) {
        targetX = e.pageX;
        targetY = e.pageY;
    });
    animate();

    // ドロップダウンメニューの初期値をWD2Aに設定
    window.onload = function() {
        var selectElement = document.getElementById('js-classNameList');
        selectElement.value = 'WD2A';

        selectElement.dispatchEvent(new Event('change'));
        document.querySelector('header').remove()

        document.body.style.background = "url('scheduleBg.png') no-repeat red center / cover"
        document.querySelectorAll('.scheduleTable__td, p ,span , h1, h2, h3, th, td').forEach((a) => {
            a.style.color = ("white")
        })
    };
})();