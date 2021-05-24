"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/main/main.third-scroll.js
    Create by 지구방위대, 정윤아 on 2021-05-21 07:03:18.
*/

(function ($) {
  window.addEventListener("resize", function () {
    //브라우저 리사이즈 시
    console.log("resize");

    reSizeWindow();
  });
  startMatter();
})(jQuery);
