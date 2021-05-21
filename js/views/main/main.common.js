"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/main/main.common.js
    Create by 지구방위대, 정윤아 on 2021-05-21 07:02:50.
*/

/* 지구방위대 2021-05-21 14:46:42, 정윤아 Front-end Dev */

(function ($) {
  const $appBodyEl = $(".app-body");
  const $fullPageEl = $("#fullPage");

  $appBodyEl.css("overflow", "hidden");

  // 스크롤 설정
  $fullPageEl.fullpage({
    // sectionsColor: ["#4BBFC3", "#7BAABE", "whitesmoke", "#000"],
    sectionSelector: ".main_section",
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
  });
})(jQuery);
