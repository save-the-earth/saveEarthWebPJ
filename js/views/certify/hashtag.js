"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/certify/hashtag.js
    Create by 지구방위대, 송예지 on 2021-05-25 12:49:12.
*/

(function ($) {
    $("#btn_more").click(function () {
        $(".hashtag_more").css("display", "flex");
        $("#btn_more").css("display", "none");
        $("#btn_hide").css("display", "inline-block");
    });
    $("#btn_hide").click(function () {
        $(".hashtag_more").css("display", "none");
        $("#btn_more").css("display", "inline-block");
        $("#btn_hide").css("display", "none");
    });

    $(".hashtag_photo").click(function () {
        let insta = [
            "https://www.instagram.com/p/CPOF4BLhxgB/",
            "https://www.instagram.com/p/CPOF6soJQa0/",
            "https://www.instagram.com/p/CPOHIi3Jywe/",
            "https://www.instagram.com/p/CPOIgYNHGjn/",
            "https://www.instagram.com/p/CPOKkxFJiTy/",
            "https://www.instagram.com/p/CPOL_exl9A4/",
            "https://www.instagram.com/p/CPOQw1eBVLU/",
            "https://www.instagram.com/p/CPOWqXQFpbL/",
            "https://www.instagram.com/p/CPFYiCppm-_/",
            "https://www.instagram.com/p/CO7eMywHSKm/",
            "https://www.instagram.com/p/CO-ujxenT0J/",
            "https://www.instagram.com/p/CPGNu_bNNcs/",
            "https://www.instagram.com/p/CPFo8U7BxKV/",
            "https://www.instagram.com/p/CPIKwmGHot-/",
            "https://www.instagram.com/p/CO2YjAkJQTB/",
            "https://www.instagram.com/p/CPICCmgDOMy/",
            "https://www.instagram.com/p/CCNd8gcJC6O/",
            "https://www.instagram.com/p/CMPFpRdMtG3/",
            "https://www.instagram.com/p/CL_wHqQnGPI/",
            "https://www.instagram.com/p/CPODcjEFZNc/",
        ];
        let id = $(this).attr("src");
        let num = parseInt(id.substr(id.length - 6, 2)) - 1;

        $("#insta_modal iframe").attr("src", insta[num] + "embed");
        $("#insta_modal").modal();
    });
})(jQuery);
