"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/introduce/youtube-intro.js
    Create by 지구방위대, 정윤아 on 2021-05-29 16:01:48.
*/

(function ($) {
  const $appBodyEl = $(".app-body");
  const $fullPageEl = $("#fullPage");
  const a_anchors = ["first", "second", "third", "forth"];
  const aosInit = { easing: "ease-out-back", duration: 1500 };
  AOS.init(aosInit);
  $appBodyEl.css("overflow", "hidden");

  // 스크롤 설정
  $fullPageEl.fullpage({
    // sectionsColor: ["#4BBFC3", "#7BAABE", "whitesmoke", "#000"],
    sectionSelector: ".section",
    anchors: a_anchors,
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
      AOS.init(aosInit); // AOS initiation
      $(".aos-init").removeClass("aos-animate");
      aosActiveSection(a_anchors, "section4-");
    },

    afterRender: function (index, anchorIndex) {
      AOS.init(aosInit);
    },
    afterLoad: function (index, anchorIndex) {
      AOS.init(aosInit); // AOS initiation
      $(".aos-init").removeClass("aos-animate");
      aosActiveSection(a_anchors, ".section4-");
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
