// ==UserScript==
// @name         Select WD2A by default
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  時間割ページにてドロップダウンメニューの初期値をWD2Aに設定します。
// @author       Houju Kuge
// @match        https://click.ecc.ac.jp/ecc/rtakimoto/schedule/
// @icon         https://cdn.discordapp.com/attachments/1217178760218935336/1227125288564035615/7f3f7985e9f1ec5a.png?ex=6627447b&is=6614cf7b&hm=8f031607aed499a6710df95b6b2a6fb84fcb1b99c541974ea4f1213e82b77edc&
// @updateURL    https://github.com/kugehouju/Select-WD2A-by-default/raw/main/src/change.user.js
// @downloadURL  https://github.com/kugehouju/Select-WD2A-by-default/raw/main/src/change.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // カーソルストーカーの設定
    var imageUrl = "https://cdn.discordapp.com/attachments/1011155934921367574/1227578117762056243/mona-whisper.gif?ex=6628ea36&is=66167536&hm=a8617b539876cd29418c7d97a5f425c1a2141045aa69f19f7cfed08271fc4977&";
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

        document.body.style.background = "url('https://cdn.discordapp.com/attachments/1217178760218935336/1227125287985086474/HONDA_CORE_wallpaper.png?ex=6627447b&is=6614cf7b&hm=d63173ebb90b83c31be377c01b34da42003fb8c5665a759dd358698571b1d4ee&') no-repeat red center / cover"
        document.querySelectorAll('.scheduleTable__td, p ,span , h1, h2, h3, th, td').forEach((a) => {
            a.style.color = ("white")
        })
    };
})();