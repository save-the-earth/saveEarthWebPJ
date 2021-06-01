"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/main/main.second-scroll.js
    Create by 지구방위대, 송예지 on 2021-05-21 07:03:15.
*/
/* 지구방위대 2021-05-21 14:47:24, 정윤아 Front-end Dev */

(function ($) {
  const $clickEl = $("#countdown");

  $clickEl.Countdown({
    rampung: new Date("Nov 08, 2045 19:42:52"),
    theme: "flat-colors",
  });
})(jQuery);
