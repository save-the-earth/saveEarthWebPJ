"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/main/main.common.js
    Create by 지구방위대, 정윤아 on 2021-05-21 07:02:50.
*/

/* 지구방위대 2021-05-21 14:46:42, 정윤아 Front-end Dev */

(function ($) {
  let currentIndex = 0;
  const $appBodyEl = $(".app-body");
  const $fullPageEl = $("#fullPage");
  AOS.init();

  $appBodyEl.css("overflow", "hidden");

  // console.log($(window).height() - convertRemToPixels(4.4));

  // 스크롤 설정
  $fullPageEl.fullpage({
    sectionSelector: ".section",
    anchors: [
      "first",
      "second",
      "third",
      "forth",
      "fifth",
      "sixth",
      "seventh",
      "last",
    ],
    navigationTooltips: [
      "지구의온도",
      "지구의시간",
      "쓰레기처리",
      "자원의순환",
      "늘어나는폐기물",
      "환경파괴는빠르게",
      "일회용품Out",
      "서약서",
    ],
    topHeight: convertRemToPixels(4.5),
    navigation: true,
    navigationPosition: "right",
    lockAnchors: true,
    verticalCentered: false,
    resize: true,
    scrollOverflow: false,
    //Scrolling
    responsiveWidth: 991, // 반응형 전환 값
    fitToSection: true,
    css3: true,
    scrollBar: true,
    autoScrolling: true,
    fixedElements: ".app-header",
    afterResponsive: function () {},
    afterResize: function (index, anchorIndex) {
      AOS.init(); // AOS initiation
      $(".aos-init").removeClass("aos-animate");

      const a_table = [
        "first",
        "second",
        "third",
        "forth",
        "fifth",
        "sixth",
        "seventh",
        "last",
      ]; // duplicated table of anchors name

      if (currentIndex === 3) {
        reSizeWindow();
      }

      for (let i = 0; i < a_table.length; i++) {
        $(".section-" + a_table[i] + ".active .aos-init").addClass(
          "aos-animate"
        ); // all magic goes here - when page is active, then all elements with AOS will start animate
      }
    },

    afterRender: function () {
      AOS.init(); // AOS initiation
      $(".aos-init").removeClass("aos-animate");
    },
    afterLoad: function (index, anchorIndex) {
      $(".aos-init").removeClass("aos-animate");

      const a_table = [
        "first",
        "second",
        "third",
        "forth",
        "fifth",
        "sixth",
        "seventh",
        "last",
      ];

      for (let i = 0; i < a_table.length; i++) {
        $(".section-" + a_table[i] + ".active .aos-init").addClass(
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
    onLeave: function (leaveIndex, nextIndex, direction) {
      //목적지가 세번째 구역인 경우 스크롤되지 않음

      currentIndex = nextIndex;

      if (nextIndex === 3) {
        $("#mtt_wrap").removeClass("no-wave");
        startMatter();
      }

      if (leaveIndex === 3) {
        stopMatter();
        $("#mtt_wrap").addClass("no-wave");
      }
    },
  });

  //스크롤 다운
  $(".scroll-down-btn").on("click", function () {
    $("#fullpage").fullpage.moveSectionDown();
  });

  //스트롤 업
  $(".scroll-up-btn").on("click", function () {
    $("#fullpage").fullpage.moveSectionUp();
  });
  // 동적 스크립트 정의 - 라이브러리 및 화면별 JS
  const requireJs = [
    // 화면 별 JS
    "js/views/main/main.first-scroll.js",
    "js/views/main/main.second-scroll.js",
    "js/views/main/main.last-scroll.js",
  ];

  $(document).on("click", '.nav a[href!="#"]', function (e) {
    $(".ui-view").fullpage.destroy("all");
    clearTimeoutAll();
  });

  loadJS(requireJs);
})(jQuery);
