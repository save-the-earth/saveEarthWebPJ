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
  const a_anchors = [
    "first",
    "second",
    "third",
    "forth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "last",
  ];
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
      AOS.init(aosInit);
      $(".aos-init").removeClass("aos-animate");
      aosActiveSection(a_anchors, "section3-");
    },

    afterRender: function (index, anchorIndex) {
      AOS.init(aosInit); // AOS initiation
    },
    afterLoad: function (index, anchorIndex) {
      AOS.init(aosInit);
      $(".aos-init").removeClass("aos-animate");
      aosActiveSection(a_anchors, "section3-");

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

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30, //위 slidesPerview 여백
    loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    centeredSlides: true,
    autoplay: {
      delay: 5000, // 시간 설정
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: false,
  });
})(jQuery);
