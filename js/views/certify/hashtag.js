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
        let loc_d = "M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 " +
            "556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 " +
            "M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 " +
            "C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 " +
            "C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115," +
            "58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 " +
            "564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662," +
            "73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003," +
            "74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 " +
            "520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755," +
            "65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623," +
            "37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 " +
            "C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057," +
            "25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607," +
            "26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 " +
            "564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 " +
            "C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425," +
            "30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 " +
            "C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831," +
            "20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 " +
            "516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181," +
            "37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 " +
            "511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376," +
            "77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 " +
            "541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 " +
            "C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167," +
            "67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 " +
            "570.82,37.631"
        let insta_link = [
            'https://www.instagram.com/p/CPOF4BLhxgB/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPOF6soJQa0/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPOHIi3Jywe/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPOIgYNHGjn/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPOKkxFJiTy/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPOL_exl9A4/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPOQw1eBVLU/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPOWqXQFpbL/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPFYiCppm-_/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CO7eMywHSKm/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CO-ujxenT0J/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPGNu_bNNcs/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPFo8U7BxKV/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPIKwmGHot-/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CO2YjAkJQTB/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPICCmgDOMy/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CCNd8gcJC6O/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CMPFpRdMtG3/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CL_wHqQnGPI/?utm_source=ig_embed&amp;utm_campaign=loading',
            'https://www.instagram.com/p/CPODcjEFZNc/?utm_source=ig_embed&amp;utm_campaign=loading'
        ];
        let insta_id = [
            '@jooya_111',
            '서일수(@dk1365)',
            '오늘 더 제로웨이스트(@my.zerowastejourney)',
            'Jihye(@seed_jh)',
            'happy life(@eco_youi)',
            'Naji(@jina__b612)',
            '유어플로라🌼(@atelier_yourflora)',
            '서서남매맘🤗(@jym1855)',
            '덕분愛 제로웨이스트샵(@thanksto__zerowaste.seoul)',
            '&lt;평범해서 특별한, 나의 별씨&gt; by.긍씨(@studio.bluemay)',
            '위봉봉(@oui_bonbon)',
            'Kangeun Kim (앵부리)(@hiking___artist)',
            '한국관광공사 ‘대한민국구석구석’(@kto9suk9suk)',
            '일러스트레이터 유섬(usum)(@u_sum)',
            '껍데기는가라 알맹이만 오라 알맹상점(@almang_market)',
            '로마네_page(@romane_corp)',
            '부부커피(@bubucoffee_)',
            '하정(@hafeteria)',
            '율이홈(@bebeyul)',
            'harry(@merryharry7)'
        ];

        let id = $(this).attr("src");
        let num = parseInt(id.substr(id.length - 6, 2)) - 1;

        $("#modal_insta_body").empty();

        let link = '<blockquote class="instagram-media" data-instgrm-permalink="'+insta_link[num]+'" data-instgrm-version="13">' +
            '<div class="insta_div1">' +
            '<a href="'+insta_link[num]+'" class="insta_a1" target="_blank">' +
            '<div class="insta_div2">' +
            '<div class="insta_div3"></div>' +
            '<div class="insta_div4">' +
            '<div class="insta_div5"></div>' +
            '<div class="insta_div6"></div>' +
            '</div>' +
            '</div>' +
            '<div style="padding: 19% 0;"></div>' +
            '<div class="insta_div5">' +
            '<svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">' +
            '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
            '<g transform="translate(-511.000000, -20.000000)" fill="#000000">' +
            '<g><path d="'+loc_d+'"></path></g>' +
            '</g>' +
            '</g>' +
            '</svg>' +
            '</div>' +
            '<div style="padding-top: 8px;"><div class="insta_div8"> Instagram에서 이 게시물 보기</div></div>' +
            '<div style="padding: 12.5% 0;"></div>' +
            '<div class="insta_div9">' +
            '<div><div class="insta_div10"></div> <div class="insta_div11"></div> <div class="insta_div12"></div></div>' +
            '<div style="margin-left: 8px;"> <div class="insta_div13"></div> <div class="insta_div14"></div></div>' +
            '<div style="margin-left: auto;">' +
            '<div class="insta_div15"></div> <div class="insta_div16"></div> <div class="insta_div17"></div>' +
            '</div>' +
            '</div>' +
            '<div class="insta_div18">' +
            '<div class="insta_div19"></div> <div class="insta_div20"></div>' +
            '</div>' +
            '</a>' +
            '<p class="insta_p">' +
            '<a href="'+insta_link[num]+'" class="insta_a2" target="_blank">'+insta_id[num]+'님의 공유 게시물</a>' +
            '</p>' +
            '</div>' +
            '</blockquote>' +
            '<script async src="//www.instagram.com/embed.js"></script>';

        $("#modal_insta_body").html(link);
        $("#insta_modal").modal();

    });
})(jQuery);
