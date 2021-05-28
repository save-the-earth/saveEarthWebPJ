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
  AOS.init();

  $appBodyEl.css("overflow", "hidden");

  // 스크롤 설정
  $fullPageEl.fullpage({
    sectionSelector: ".section",
    anchors: ["first", "second", "third"],
    navigationTooltips: [
      "제로웨이스트란",
      "제로웨이스트챌린지",
      "제로웨이스트실천방법",
    ],
    navigation: true,
    navigationPosition: "right",
    lockAnchors: true,
    verticalCentered: true,
    resize: false,
    scrollOverflow: true,
    responsive: 921,
    //Scrolling
    css3: true,
    scrollBar: true,
    autoScrolling: true,
    fixedElements: ".app-header",
    afterResize: function () {
      AOS.init(); // AOS initiation
      $(".aos-init").removeClass("aos-animate");

      const a_table = ["first", "second", "third"]; // duplicated table of anchors name

      for (let i = 0; i < a_table.length; i++) {
        $(".section2-" + a_table[i] + ".active .aos-init").addClass(
          "aos-animate"
        ); // all magic goes here - when page is active, then all elements with AOS will start animate
      }
    },

    afterRender: function (index, anchorIndex) {
      AOS.init(); // AOS initiation
    },
    afterLoad: function (index, anchorIndex) {
      $(".aos-init").removeClass("aos-animate");

      const a_table = ["first", "second", "third"];

      for (let i = 0; i < a_table.length; i++) {
        $(".section2-" + a_table[i] + ".active .aos-init").addClass(
          "aos-animate"
        );
      }
    },
    onLeave: function (origin, destination, direction) {},
  });

  //스크롤 다운
  $(".scroll-down").on("click", function () {
    $("#fullpage").fullpage.moveSectionDown();
  });

  $(document).on("click", '.nav a[href!="#"]', function (e) {
    $(".ui-view").fullpage.destroy("all");
    clearTimeoutAll();
  });
})(jQuery);
