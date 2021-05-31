"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/common/util.js
    Create by 지구방위대, 정윤아 on 2021-05-21 05:41:42.
*/

//금액 입력 - 숫자
function funGetNumber(obj) {
  let num01;
  let num02;
  num01 = obj.value;
  num02 = num01.replace(/\D/g, "");
  num01 = funSetComma(num02);
  obj.value = num01;
}
//콤마추가
function funSetComma(inNum) {
  let outNum;
  outNum = String(inNum);
  while (/(\d+)(\d{3})/.test(outNum)) {
    outNum = outNum.replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
  }
  return outNum;
}
//콤마제거
function funRemoveComma(str, isNum) {
  if (isNum) {
    return Number(str.replace(/,/g, ""));
  } else {
    return str.replace(/,/g, "");
  }
}
//마이너스제거
function funRemoveMinus(str, isNum) {
  if (isNum) {
    return Number(str.replace(/-/g, ""));
  } else {
    return str.replace(/-/g, "");
  }
}
//convert rem into pixels:
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
// lt =>  < , gt -> > 변경
function funRestore(text) {
  return text.replace(/&lt;/gi, "<").replace(/&gt;/gi, ">");
}

//Validation
//비어있는지 체크
function isEmpty(_str) {
  return !isNotEmpty(_str);
}

//비어있지 않는지 체크
function isNotEmpty(_str) {
  let obj = String(_str);
  if (
    obj === null ||
    obj === undefined ||
    obj === "null" ||
    obj === "undefined" ||
    obj === ""
  )
    return false;
  else return true;
}

//영문자, 숫자만 있는지 체크
function isOnlyAlphaNum(_str) {
  if (isEmpty(_str)) {
    return false;
  } else {
    return /^[A-Za-z0-9+]*$/.test(String(_str).replace(/\s/gi, ""));
  }
}

//한글, 영문자, 숫자, 가로만 있는지 체크
function isOnlyHanAlphaNum(_str) {
  if (isEmpty(_str)) {
    return false;
  } else {
    return /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|()]+$/.test(
      String(_str).replace(/\s/gi, "")
    );
  }
}

//특수문자가 있는지 체크
function isSpChar(_str) {
  return /[~!@\#$%<>^&*\()\-=+_\’]/gi.test(String(_str));
}

//숫자, 하이픈만 있는지 체크
function isOnlyNumHyphen(_str) {
  if (isEmpty(_str)) {
    return false;
  } else {
    return /^[0-9|-]+$/.test(String(_str));
  }
}

//숫자만 있는지 체크
function isOnlyNum(_str) {
  if (isEmpty(_str)) {
    return false;
  } else {
    return /^[0-9|]+$/.test(String(_str));
  }
}
