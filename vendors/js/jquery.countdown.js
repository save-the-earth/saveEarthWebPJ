(function ($) {
  $.fn.Countdown = function (options, callback) {
    // check for jQuery knob and throttle
    if (!jQuery().knob) {
      throw "Countdown require jQuery knob.";
    }

    if (!jQuery.throttle) {
      throw "Countdown require jQuery throttle / debounce.";
    }

    let element = $(this);
    let settings = {
      rampung: undefined,
      labels: true,
      labelsOptions: {
        lang: {
          years: "Years",
          months: "Months",
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds",
        },
        style: "font-size: 0.5em",
      },
      style: {
        element: "",
        labels: false,
        textResponsive: 0.5,
        years: {
          gauge: {
            thickness: 0.02,
            bgColor: "rgba(0, 0, 0, 0)",
            fgColor: "rgba(0, 0, 0, 1)",
            lineCap: "butt",
          },
          textCSS: "",
        },
        months: {
          gauge: {
            thickness: 0.02,
            bgColor: "rgba(0, 0, 0, 0)",
            fgColor: "rgba(0, 0, 0, 1)",
            lineCap: "butt",
          },
          textCSS: "",
        },
        days: {
          gauge: {
            thickness: 0.02,
            bgColor: "rgba(0, 0, 0, 0)",
            fgColor: "rgba(0, 0, 0, 1)",
            lineCap: "butt",
          },
          textCSS: "",
        },
        hours: {
          gauge: {
            thickness: 0.02,
            bgColor: "rgba(0, 0, 0, 0)",
            fgColor: "rgba(0, 0, 0, 1)",
            lineCap: "butt",
          },
          textCSS: "",
        },
        minutes: {
          gauge: {
            thickness: 0.02,
            bgColor: "rgba(0, 0, 0, 0)",
            fgColor: "rgba(0, 0, 0, 1)",
            lineCap: "butt",
          },
          textCSS: "",
        },
        seconds: {
          gauge: {
            thickness: 0.02,
            bgColor: "rgba(0, 0, 0, 0)",
            fgColor: "rgba(0, 0, 0, 1)",
            lineCap: "butt",
          },
          textCSS: "",
        },
      },
      onEndCallback: function () {
        if (window.console && window.console.log) {
          window.console.log("[Countdown::isRampung] Wayae, wayae ......");
        }
      },
    };

    // if not rampung passed in options
    if (!options.rampung) {
      throw "Parameter options.rampung must passed bro.";
    }

    // append options
    settings = $.extend(true, settings, options);

    // callback
    if (typeof callback !== undefined) {
      settings.onEndCallback = callback;
    }

    function prepareTemplate() {
      element.append(
        '<div class="ClassyCountdown-wrapper">' +
          '<div class="ClassyCountdown-years">' +
          '<input type="text" />' +
          '<div class="ClassyCountdown-value"><div class="time-title"></div><p class="time-value"></p></div>' +
          "</div>" +
          '<div class="ClassyCountdown-months">' +
          '<input type="text" />' +
          '<div class="ClassyCountdown-value"><div class="time-title"></div><p class="time-value"></p></div>' +
          "</div>" +
          '<div class="ClassyCountdown-days">' +
          '<input type="text" />' +
          '<div class="ClassyCountdown-value"><div class="time-title"></div><p class="time-value"></p></div>' +
          "</div>" +
          '<div class="ClassyCountdown-hours">' +
          '<input type="text" />' +
          '<div class="ClassyCountdown-value"><div class="time-title"></div><p class="time-value"></p></div>' +
          "</div>" +
          '<div class="ClassyCountdown-minutes">' +
          '<input type="text" />' +
          '<div class="ClassyCountdown-value"><div class="time-title"></div><p class="time-value"></p></div>' +
          "</div>" +
          '<div class="ClassyCountdown-seconds">' +
          '<input type="text" />' +
          '<div class="ClassyCountdown-value"><div class="time-title"></div><p class="time-value"></p></div>' +
          "</div>" +
          "</div>"
      );

      element.find(".ClassyCountdown-years input").knob(
        $.extend(
          {
            width: "100%",
            displayInput: false,
            readOnly: true,
            max: 365,
          },
          settings.style.years.gauge
        )
      );

      element.find(".ClassyCountdown-months input").knob(
        $.extend(
          {
            width: "100%",
            displayInput: false,
            readOnly: true,
            max: 365,
          },
          settings.style.months.gauge
        )
      );

      element.find(".ClassyCountdown-days input").knob(
        $.extend(
          {
            width: "100%",
            displayInput: false,
            readOnly: true,
            max: 365,
          },
          settings.style.days.gauge
        )
      );

      element.find(".ClassyCountdown-hours input").knob(
        $.extend(
          {
            width: "100%",
            displayInput: false,
            readOnly: true,
            max: 24,
          },
          settings.style.hours.gauge
        )
      );

      element.find(".ClassyCountdown-minutes input").knob(
        $.extend(
          {
            width: "100%",
            displayInput: false,
            readOnly: true,
            max: 60,
          },
          settings.style.minutes.gauge
        )
      );

      element.find(".ClassyCountdown-seconds input").knob(
        $.extend(
          {
            width: "100%",
            displayInput: false,
            readOnly: true,
            max: 60,
          },
          settings.style.seconds.gauge
        )
      );
      // const $addTimeData = $(
      //   '<span class="ClassyCountdown-value"><div></div><p></p></span>'
      // );
      // let $addTimeData = '<span class="ClassyCountdown-value">';
      // $addTimeData += "<div></div>";
      // $addTimeData += "<p></p>";
      // $addTimeData += "</span>";
      // element
      //   .find(".ClassyCountdown-wrapper div > div")
      //   .each(function (index, el) {
      //     console.log("element", index, el);
      //     $(this).append($addTimeData);
      //   });

      element
        .find(".ClassyCountdown-wrapper div")
        .attr("style", settings.style.element);
      element
        .find(".ClassyCountdown-years .ClassyCountdown-value")
        .attr("style", settings.style.years.textCSS);
      element
        .find(".ClassyCountdown-months .ClassyCountdown-value")
        .attr("style", settings.style.months.textCSS);
      element
        .find(".ClassyCountdown-days .ClassyCountdown-value")
        .attr("style", settings.style.days.textCSS);
      element
        .find(".ClassyCountdown-hours .ClassyCountdown-value")
        .attr("style", settings.style.hours.textCSS);
      element
        .find(".ClassyCountdown-minutes .ClassyCountdown-value")
        .attr("style", settings.style.minutes.textCSS);
      element
        .find(".ClassyCountdown-seconds .ClassyCountdown-value")
        .attr("style", settings.style.seconds.textCSS);

      element.find(".ClassyCountdown-value").each(function () {
        let $getHeightEl = element.find(".ClassyCountdown-wrapper > div");
        $(this).css(
          "height",
          Math.floor(parseInt($getHeightEl.height())) + "px"
        );
      });

      if (settings.labels) {
        element
          .find(".ClassyCountdown-years .ClassyCountdown-value .time-value")
          .html(settings.labelsOptions.lang.years);
        element
          .find(".ClassyCountdown-months .ClassyCountdown-value .time-value")
          .html(settings.labelsOptions.lang.months);
        element
          .find(".ClassyCountdown-days .ClassyCountdown-value .time-value")
          .html(settings.labelsOptions.lang.days);
        element
          .find(".ClassyCountdown-hours .ClassyCountdown-value .time-value")
          .html(settings.labelsOptions.lang.hours);
        element
          .find(".ClassyCountdown-minutes .ClassyCountdown-value .time-value")
          .html(settings.labelsOptions.lang.minutes);
        element
          .find(".ClassyCountdown-seconds .ClassyCountdown-value .time-value")
          .html(settings.labelsOptions.lang.seconds);
        element
          .find(".ClassyCountdown-value > p")
          .attr("style", settings.labelsOptions.style);
      }
    }

    function onResize() {
      if (settings.style.textResponsive) {
        element
          .find(".ClassyCountdown-value")
          .css(
            "font-size",
            Math.floor(
              (element.find("> div").eq(0).width() *
                settings.style.textResponsive) /
                16
            ) + "px"
          );
      }

      element.find(".ClassyCountdown-value").each(function () {
        let $getHeightEl = element.find(".ClassyCountdown-wrapper > div");
        $(this).css(
          "height",
          Math.floor(parseInt($getHeightEl.width())) + "px"
        );
      });
    }

    function doResponsive() {
      element.find(".ClassyCountdown-wrapper > div").each(function () {
        $(this).css("height", $(this).width() + "px");
      });

      if (settings.style.textResponsive) {
        element
          .find(".ClassyCountdown-value")
          .css(
            "font-size",
            Math.floor(
              (element.find("> div").eq(0).width() *
                settings.style.textResponsive) /
                12
            ) + "px"
          );
        // element.find(".ClassyCountdown-value").each(function () {
        //   $(this).css(
        //     "margin-top",
        //     Math.floor(0 - parseInt($(this).height()) / 2) + "px"
        //   );
        // });
      }

      // $(window).trigger("resize");

      // $(window).resize($.throttle(50, onResize));
      window.addEventListener("resize", function () {
        //???????????? ???????????? ???

        onResize();
      });
    }

    function getTheme(name) {
      switch (name) {
        case "flat-colors":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946b",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              months: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946b",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              days: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946b",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              hours: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946b",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              minutes: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946b",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              seconds: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946b",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
            },
          };
        case "flat-colors-wide":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946b",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              months: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946B",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              days: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946B",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              hours: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946B",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              minutes: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946B",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              seconds: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#63946B",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
            },
          };
        case "flat-colors-very-wide":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(255,255,255,.3)",
                  fgColor: "#1abc9c",
                },
                textCSS: "font-weight:600;color:#fff;",
              },
              months: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(255,255,255,.3)",
                  fgColor: "#2980b9",
                },
                textCSS: "font-weight:600;color:#fff;",
              },
              days: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(255,255,255,.3)",
                  fgColor: "#1abc9c",
                },
                textCSS: "font-weight:600;color:#fff;",
              },
              hours: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(255,255,255,.3)",
                  fgColor: "#2980b9",
                },
                textCSS: "font-weight:600;color:#fff;",
              },
              minutes: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(255,255,255,.3)",
                  fgColor: "#8e44ad",
                },
                textCSS: "font-weight:600;color:#fff;",
              },
              seconds: {
                gauge: {
                  thickness: 0.1,
                  bgColor: "rgba(255,255,255,.3)",
                  fgColor: "#f39c12",
                },
                textCSS: "font-weight:600;color:#fff;",
              },
            },
          };
        case "flat-colors-black":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#1abc9c",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              months: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#2980b9",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              days: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#1abc9c",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              hours: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#2980b9",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              minutes: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#8e44ad",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              seconds: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#f39c12",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
            },
          };
        case "black":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.01,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              months: {
                gauge: {
                  thickness: 0.01,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              days: {
                gauge: {
                  thickness: 0.01,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              hours: {
                gauge: {
                  thickness: 0.01,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              minutes: {
                gauge: {
                  thickness: 0.01,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              seconds: {
                gauge: {
                  thickness: 0.01,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
            },
          };
        case "black-wide":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              months: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              days: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              hours: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              minutes: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              seconds: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
            },
          };
        case "black-very-wide":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.17,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              months: {
                gauge: {
                  thickness: 0.17,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              days: {
                gauge: {
                  thickness: 0.17,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              hours: {
                gauge: {
                  thickness: 0.17,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              minutes: {
                gauge: {
                  thickness: 0.17,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              seconds: {
                gauge: {
                  thickness: 0.17,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
            },
          };
        case "black-black":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              months: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              days: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              hours: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              minutes: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
              seconds: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(0,0,0,0.05)",
                  fgColor: "#222",
                  lineCap: "round",
                },
                textCSS:
                  "font-family:'Open Sans';font-weight:300;color:#34495e;",
              },
            },
          };
        case "white":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              months: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              days: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              hours: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              minutes: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              seconds: {
                gauge: {
                  thickness: 0.03,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
            },
          };
        case "white-wide":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.06,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              months: {
                gauge: {
                  thickness: 0.06,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              days: {
                gauge: {
                  thickness: 0.06,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              hours: {
                gauge: {
                  thickness: 0.06,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              minutes: {
                gauge: {
                  thickness: 0.06,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              seconds: {
                gauge: {
                  thickness: 0.06,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
            },
          };
        case "white-very-wide":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.16,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              months: {
                gauge: {
                  thickness: 0.16,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              days: {
                gauge: {
                  thickness: 0.16,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              hours: {
                gauge: {
                  thickness: 0.16,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              minutes: {
                gauge: {
                  thickness: 0.16,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              seconds: {
                gauge: {
                  thickness: 0.16,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
            },
          };
        case "white-black":
          return {
            labels: true,
            style: {
              element: "",
              textResponsive: 0.5,
              years: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                  lineCap: "round",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              months: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                  lineCap: "round",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              days: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                  lineCap: "round",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              hours: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                  lineCap: "round",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              minutes: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                  lineCap: "round",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
              seconds: {
                gauge: {
                  thickness: 0.25,
                  bgColor: "rgba(255,255,255,0.05)",
                  fgColor: "#fff",
                  lineCap: "round",
                },
                textCSS: "font-family:'Open Sans';font-weight:300;color:#fff;",
              },
            },
          };
      }
    }

    // append theme from options if passed
    if (options.theme) {
      if (options.theme === "default") {
        options.theme = "flat-colors-very-wide";
      }
      settings = $.extend(true, settings, getTheme(options.theme));
    } else {
      settings = $.extend(true, settings, getTheme("flat-colors-very-wide"));
    }

    prepareTemplate();

    let countdown = setInterval(function () {
      let sel_data = settings.rampung.getTime() - new Date().getTime();
      let now = new Date(),
        years,
        months,
        days,
        hours,
        minutes,
        seconds = [];

      if (sel_data > 0) {
        years = settings.rampung.getFullYear() - now.getFullYear();
        months = settings.rampung.getMonth() - now.getMonth();
        days = settings.rampung.getDate() - now.getDate();
        hours = settings.rampung.getHours() - now.getHours();
        minutes = settings.rampung.getMinutes() - now.getMinutes();
        seconds = settings.rampung.getSeconds() - now.getSeconds();
      } else {
        years = -settings.getFullYear() + now.getFullYear();
        months = -settings.rampung.getMonth() + now.getMonth();
        days = -settings.rampung.getDate() + now.getDate();
        hours = -settings.rampung.getHours() + now.getHours();
        minutes = -settings.rampung.getMinutes() + now.getMinutes();
        seconds = -settings.rampung.getSeconds() + now.getSeconds();

        if (seconds < 0) {
          seconds += 60;
        }
      }

      while (true) {
        if (months < 0) {
          years--;
          months += 12;
        }
        if (days < 0) {
          months--;
          days += getDaysInMonth(now.getMonth() - 1, now.getFullYear());
        }
        if (hours < 0) {
          days--;
          hours += 24;
        }
        if (minutes < 0) {
          hours--;
          minutes += 60;
        }
        if (seconds < 0) {
          minutes--;
          seconds += 60;
        }
        if (
          years >= 0 &&
          months >= 0 &&
          days >= 0 &&
          hours >= 0 &&
          minutes >= 0 &&
          seconds >= 0
        )
          break;
      }

      if (sel_data < 0) {
        years = 0;
        months = 0;
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      }

      element.find(".ClassyCountdown-years input").val(years).trigger("change");
      element
        .find(".ClassyCountdown-months input")
        .val(months)
        .trigger("change");
      element.find(".ClassyCountdown-days input").val(days).trigger("change");
      element.find(".ClassyCountdown-hours input").val(hours).trigger("change");
      element
        .find(".ClassyCountdown-minutes input")
        .val(minutes)
        .trigger("change");
      element
        .find(".ClassyCountdown-seconds input")
        .val(seconds)
        .trigger("change");
      element
        .find(".ClassyCountdown-years .ClassyCountdown-value .time-title")
        .html(years);
      element
        .find(".ClassyCountdown-months .ClassyCountdown-value .time-title")
        .html(months);
      element
        .find(".ClassyCountdown-days .ClassyCountdown-value .time-title")
        .html(days);
      element
        .find(".ClassyCountdown-hours .ClassyCountdown-value .time-title")
        .html(hours);
      element
        .find(".ClassyCountdown-minutes .ClassyCountdown-value .time-title")
        .html(minutes);
      element
        .find(".ClassyCountdown-seconds .ClassyCountdown-value .time-title")
        .html(seconds);

      if (sel_data < 0) {
        clearInterval(countdown);
        settings.onEndCallback();
      }
    }, 1000);
    doResponsive();
  };
})(jQuery);

function getDaysInMonth(month, year) {
  if (typeof year == "undefined") year = 2015;
  let curr_mon = new Date(year, month);
  let next_mon = new Date(year, month + 1);
  return Math.floor(
    (next_mon.getTime() - curr_mon.getTime()) / (24 * 3600 * 1000)
  );
}
