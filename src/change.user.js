// ==UserScript==
// @name         Select WD2A by default
// @namespace    https://github.com/kugehouju/Change-to-WD2A
// @version      0.1
// @description  Select WD2A by default in the dropdown
// @author       Houju Kuge
// @match        https://click.ecc.ac.jp/ecc/rtakimoto/schedule/
// @grant        none
// @updateURL    https://github.com/kugehouju/Change-to-WD2A/src/change.user.js
// @downloadURL  https://github.com/kugehouju/Change-to-WD2A/src/change.user.js
// @supportURL   none
// ==/UserScript==

(function() {
    'use strict';
    const imageUrl = "https://media.discordapp.net/attachments/1217178760218935336/1227125288564035615/7f3f7985e9f1ec5a.png?ex=6627447b&is=6614cf7b&hm=8f031607aed499a6710df95b6b2a6fb84fcb1b99c541974ea4f1213e82b77edc&=&format=webp&quality=lossless&width=64&height=64";

    const cursorStalker = document.createElement('img');
    cursorStalker.src = imageUrl;
    cursorStalker.style.position = 'absolute';
    cursorStalker.style.pointerEvents = 'none';
    document.body.appendChild(cursorStalker);

    const targetX = 0, targetY = 0;
    const ease = 0.05; // カーソルストーカーの遅延速度を設定

    function animate() {
        const dx = targetX - cursorStalker.offsetLeft;
        const dy = targetY - cursorStalker.offsetTop;

        cursorStalker.style.left = cursorStalker.offsetLeft + dx * ease + 'px';
        cursorStalker.style.top = cursorStalker.offsetTop + dy * ease + 'px';

        requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', function(e) {
        targetX = e.pageX;
        targetY = e.pageY;
    });

    animate();

    // ドロップダウンメニューのデフォルトをWD2Aに設定
    window.onload = function() {
        const selectElement = document.getElementById('js-classNameList');
        selectElement.value = 'WD2A';
        selectElement.dispatchEvent(new Event('change'));
        document.querySelector('header').remove()
        document.querySelectorAll('.scheduleTable__td, p ,span , h1, h2, h3, th, td').forEach((a) => {
            a.style.color = ("white")
        })
        document.body.style.background = "url('https://cdn.discordapp.com/attachments/1217178760218935336/1227125287985086474/HONDA_CORE_wallpaper.png?ex=6627447b&is=6614cf7b&hm=d63173ebb90b83c31be377c01b34da42003fb8c5665a759dd358698571b1d4ee&') no-repeat red center / cover"
    };

    // ここに置き換えたい文字列を設定します
    const oldText = "©2020 ECC computer Ogura";
    const newText = "©ここしれっと変えてもバレへんやろ";

    // ページ内のすべての<small>タグを取得します
    const smallTags = document.getElementsByTagName('small');

    // 各<small>タグに対してループ処理を行います
    for (const i = 0; i < smallTags.length; i++) {
        // <small>タグ内のテキストを取得します
        const smallText = smallTags[i].innerHTML;

        // 古いテキストが存在する場合は新しいテキストに置き換えます
        if (smallText.includes(oldText)) {
            smallTags[i].innerHTML = smallText.replace(oldText, newText);
        }
    }
})();