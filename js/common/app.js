/*****
 * INDEX 관련 JS
 */

$.ajaxLoad = true;

$.defaultPage = "main.html";
$.subPagesDirectory = "views/";
$.page404 = "views/pages/404.html";
$.mainContent = $("#ui-view");

//Main navigation
$.navigation = $("nav > ul.nav");
$.panelIconOpened = "icon-arrow-up";
$.panelIconClosed = "icon-arrow-down";

//Default colours
$.brandPrimary = "#20a8d8";
$.brandSuccess = "#4dbd74";
$.brandInfo = "#63c2de";
$.brandWarning = "#f8cb00";
$.brandDanger = "#f86c6b";

$.grayDark = "#2a2c36";
$.gray = "#55595c";
$.grayLight = "#818a91";
$.grayLighter = "#d1d4d7";
$.grayLightest = "#f8f9fa";

("use strict");

/*****
 * 동적 스크립트 동적 CSS
 * ASYNC LOAD
 * Load JS files and CSS files asynchronously in ajax mode
 */
function loadJS(jsFiles, pageScript) {
  let i;
  for (i = 0; i < jsFiles.length; i++) {
    let body = document.getElementsByTagName("body")[0];
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.src = jsFiles[i];
    body.appendChild(script);
  }

  if (pageScript) {
    let body = document.getElementsByTagName("body")[0];
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.src = pageScript;
    body.appendChild(script);
  }

  init();
}

function loadCSS(cssFile, end, callback) {
  let cssArray = {};

  if (!cssArray[cssFile]) {
    cssArray[cssFile] = true;

    if (end == 1) {
      let head = document.getElementsByTagName("head")[0];
      let s = document.createElement("link");
      s.setAttribute("rel", "stylesheet");
      s.setAttribute("type", "text/css");
      s.setAttribute("href", cssFile);

      s.onload = callback;
      head.appendChild(s);
    } else {
      let head = document.getElementsByTagName("head")[0];
      let style = document.getElementById("main-style");

      let s = document.createElement("link");
      s.setAttribute("rel", "stylesheet");
      s.setAttribute("type", "text/css");
      s.setAttribute("href", cssFile);

      s.onload = callback;
      head.insertBefore(s, style);
    }
  } else if (callback) {
    callback();
  }
}

/****
 * 동적 페이지
 * AJAX LOAD
 * Load pages asynchronously in ajax mode
 */

if ($.ajaxLoad) {
  let paceOptions = {
    elements: false,
    restartOnRequestAfter: false,
  };

  let url = location.hash.replace(/^#/, "");

  if (url != "") {
    setUpUrl(url);
  } else {
    setUpUrl($.defaultPage);
  }

  $(document).on("click", '.nav a[href!="#"]', function (e) {
    if (
      $(this).parent().parent().hasClass("nav-tabs") ||
      $(this).parent().parent().hasClass("nav-pills")
    ) {
      e.preventDefault();
    } else if ($(this).attr("target") == "_top") {
      e.preventDefault();
      let target = $(e.currentTarget);
      window.location = target.attr("href");
    } else if ($(this).attr("target") == "_blank") {
      e.preventDefault();
      let target = $(e.currentTarget);
      window.open(target.attr("href"));
    } else {
      e.preventDefault();
      let target = $(e.currentTarget);
      setUpUrl(target.attr("href"));
    }
  });

  $(document).on("click", 'a[href="#"]', function (e) {
    e.preventDefault();
  });
}

function setUpUrl(url) {
  $("nav .nav li .nav-link").removeClass("active");
  $("nav .nav li.nav-dropdown").removeClass("open");
  $('nav .nav li:has(a[href="' + url.split("?")[0] + '"])').addClass("open");
  $('nav .nav a[href="' + url.split("?")[0] + '"]').addClass("active");

  loadPage(url);
}

function loadPage(url) {
  $.ajax({
    type: "GET",
    url: $.subPagesDirectory + url,
    dataType: "html",
    cache: false,
    async: false,
    beforeSend: function () {
      $.mainContent.css({ opacity: 0 });
    },
    success: function () {
      Pace.restart();
      $("html, body").animate({ scrollTop: 0 }, 0);
      $.mainContent
        .load($.subPagesDirectory + url, null, function (responseText) {
          window.location.hash = url;
        })
        .delay(250)
        .animate({ opacity: 1 }, 0);
    },
    error: function () {
      window.location.href = $.page404;
    },
  });
}

/****
 * 메인 네비게이션
 * MAIN NAVIGATION
 */

$(document).ready(function ($) {
  $.navigation.find("a").each(function () {
    let cUrl = String(window.location).split("?")[0];

    if (cUrl.substr(cUrl.length - 1) == "#") {
      cUrl = cUrl.slice(0, -1);
    }

    if ($($(this))[0].href == cUrl) {
      $(this).addClass("active");

      $(this)
        .parents("ul")
        .add(this)
        .each(function () {
          $(this).parent().addClass("open");
        });
    }
  });

  // Dropdown Menu
  $.navigation.on("click", "a", function (e) {
    if ($.ajaxLoad) {
      e.preventDefault();
    }

    if ($(this).hasClass("nav-dropdown-toggle")) {
      $(this).parent().toggleClass("open");
      resizeBroadcast();
    }
  });

  function resizeBroadcast() {
    let timesRun = 0;
    let interval = setInterval(function () {
      timesRun += 1;
      if (timesRun === 5) {
        clearInterval(interval);
      }
      window.dispatchEvent(new Event("resize"));
    }, 62.5);
  }

  /* ---------- Main Menu Open/Close, Min/Full ---------- */
  $(".sidebar-toggler").click(function () {
    $("body").toggleClass("sidebar-hidden");
    resizeBroadcast();
  });

  $(".sidebar-minimizer").click(function () {
    $("body").toggleClass("sidebar-minimized");
    resizeBroadcast();
  });

  $(".brand-minimizer").click(function () {
    $("body").toggleClass("brand-minimized");
  });

  $(".aside-menu-toggler").click(function () {
    $("body").toggleClass("aside-menu-hidden");
    resizeBroadcast();
  });

  $(".mobile-sidebar-toggler").click(function () {
    $("body").toggleClass("sidebar-mobile-show");
    resizeBroadcast();
  });

  $(".sidebar-close").click(function () {
    $("body")
      .toggleClass("sidebar-opened")
      .parent()
      .toggleClass("sidebar-opened");
  });

  /* ---------- Disable moving to top ---------- */
  $('a[href="#"][data-top!=true]').click(function (e) {
    e.preventDefault();
  });
});

function init(url) {
  /* ---------- Tooltip ---------- */
  $('[rel="tooltip"],[data-rel="tooltip"]').tooltip({
    placement: "bottom",
    delay: { show: 400, hide: 200 },
  });

  /* ---------- Popover ---------- */
  $('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();
}
