"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/certify/certify_badge.js
    Create by 지구방위대, 송예지 on 2021-05-26 00:02:50.
*/

(function ($) {
    let subCat = $("#subcategories");
    let subCat02 = $("#subcategories02");
    subCat.on("show.bs.collapse", ".collapse", function () {
        subCat.find(".collapse").not(this).collapse("hide");
        subCat02.find(".collapse").not(this).collapse("hide");
    });
    subCat02.on("show.bs.collapse", ".collapse", function () {
        subCat.find(".collapse").not(this).collapse("hide");
        subCat02.find(".collapse").not(this).collapse("hide");
    });

    $(".certify_badge").click(function () {
        if ($(window).width() > 768) {
            if ($(this).hasClass("badge_active")) {
                $(this).removeClass("badge_active");
            } else {
                $(this).addClass("badge_active");
                $(".certify_badge").not($(this)).removeClass("badge_active");
            }
        }
    });

    $("#upload_btn").click(function () {
        $("#upload_item").removeAttr("disabled");
        $("#upload_modal").modal();
    });

    $(".upload_active").click(function () {
        let id = $(this).parents(".collapse").attr("id");
        let num = id.substr(id.length - 1, 1) - 1;

        $("#upload_item option:eq(" + num + ")").prop("selected", "selected");
        $("#upload_item").attr("disabled", "true");
        $("#upload_modal").modal();
    });

    $(".photo_modal").click(function () {
        let id = $(this).parents(".collapse").attr("id");
        let num = id.substr(id.length - 1, 1) - 1;

        $("#photo_item option:eq(" + num + ")").prop("selected", "selected");
        $("#photo_modal .modal_photo_body img").attr("src", $(this).attr("src"));
        $("#photo_modal").modal();
    });

    $(window).resize(function () {
        if ($(window).width() < 768) {
            $(".certify_text_mobile").show();

            $(".certify_badge").removeClass("badge_active");

            subCat.find(".collapse").collapse("hide");
            subCat02.find(".collapse").collapse("hide");
        } else {
            $(".certify_text_mobile").hide();
        }
    });
})(jQuery);
