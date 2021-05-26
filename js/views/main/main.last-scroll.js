"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/main/main.last-scroll.js
    Create by 지구방위대, 송예지 on 2021-05-21 07:03:12.
*/
(function ($) {
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);

  $(".pledge_date").text(year + "년 " + month + "월 " + day + "일");

  $("#pledge_btn").click(function () {
    //window.scrollTo(0, 0);
    downImg();
  });

  function downImg() {
    html2canvas($("#img_pledge")[0], {
      scrollX: 0,
      scrollY: -window.scrollY
    }).then(function (canvas) {
      var myImage = canvas.toDataURL();
      downloadURI(myImage, "제로웨이스트 서약서.png")
    });
  }

  function downloadURI(uri, name) {
    var link = document.createElement("a")
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
  }


  //<![CDATA[
  Kakao.init("d7e1e549f0dfd6fd3ce939221b6e4961");
  Kakao.Link.createDefaultButton({
     container: "#kakao_btn",
     objectType: "feed",
     content: {
       title: "지구방위대",
       description: "제로웨이스트의 시작! 지구방위대와 함께해요🙂",
       imageUrl: "", //"http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
       link: {
         webUrl: "http://earthguard.dothome.co.kr/",
         mobileWebUrl: "http://earthguard.dothome.co.kr/",
       },
     },
     buttons: [
       {
         title: "Open!",
         link: {
           webUrl: "http://earthguard.dothome.co.kr/",
           mobileWebUrl: "http://earthguard.dothome.co.kr/",
         },
       },
     ],
   });
  //]]>
})(jQuery);
