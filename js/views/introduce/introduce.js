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
    navigation: false,
    lockAnchors: true,
    verticalCentered: false,
    resize: false,
    scrollOverflow: false,
    //Scrolling
    responsiveWidth: 991, // 반응형 전환 값
    topHeight: convertRemToPixels(4.5),
    fitToSection: true,
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
      const numSections = document.querySelectorAll(".fp-section").length;
      if (anchorIndex === numSections) {
        $(".scroll-down-btn").addClass("d-none");
        $(".scroll-up-btn").removeClass("d-none");
      } else {
        $(".scroll-down-btn").removeClass("d-none");
        $(".scroll-up-btn").addClass("d-none");
      }
    },
    onLeave: function (origin, destination, direction) {},
  });

  //스크롤 다운
  $(".scroll-down-btn").on("click", function () {
    $("#fullpage").fullpage.moveSectionDown();
  });

  //스트롤 업
  $(".scroll-up-btn").on("click", function () {
    $("#fullpage").fullpage.moveSectionUp();
  });

  $(document).on("click", '.nav a[href!="#"]', function (e) {
    $(".ui-view").fullpage.destroy("all");
    clearTimeoutAll();
  });
})(jQuery);
