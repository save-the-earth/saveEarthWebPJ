$(function () {
  //scroll-main
  $(".app-body").css("overflow", "hidden");
  $("#fullPage").fullpage({
    sectionsColor: ["#4BBFC3", "#7BAABE", "whitesmoke", "#000"],
    sectionSelector: ".main_section",
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
  });
});
