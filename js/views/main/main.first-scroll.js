"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/main/main.first-scroll.js
    Create by 지구방위대, 정윤아 and 송예지 on 2021-05-21 07:03:09.
*/
/* 지구방위대 2021-05-21 14:47:10, 정윤아 Front-end Dev */

(function ($) {
  const $btnAutoEl = $("#btn_auto");
  const $htmlBodyEl = $("html, body");

  $btnAutoEl.on("click", function (event) {
    $htmlBodyEl.animate(
      {
        scrollTop: $("#main_clock").offset().top,
      },
      1200
    );
  });
})(jQuery);
