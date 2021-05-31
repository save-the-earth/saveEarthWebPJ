"use strict";
/*
    Copyright © 2021 지구방위대.
    ProjectName: saveEarthWebPJ
    FilePath: js/views/main/matter.module.js
    Create by 지구방위대, 정윤아 on 2021-05-24 13:30:55.
*/

// 윈도우(브라우저)의 크기를 변수에 담습니다.
// 991px <= 모바일 사이즈
//사이즈 조절을 위해 HTML Canvas 이용
let windowHeight, windowWidth;

// Matter-js 기본 정의
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const Common = Matter.Common;

let engine, world, render;
let ground, leftGround, rightGround;
let isWallCreated = false; //벽 생성 flag
let isDropCreated = true; //떨어지는 객체 생성 flag

let dropObjectTimer;
let removeGroundTimer, reStartTimer;

//윈도우 및 객체 사이즈 가져오기 함수
const getWindowSize = () => {
  let $getHeaderEl = $("#mtt_wrap");

  // 윈도우(브라우저)의 크기 변경
  windowHeight = $getHeaderEl.height();
  windowWidth = window.innerWidth; // Matter-js
};

// Matter 엔진을 생성
const initMatter = () => {
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0.3; //y축으로 떨어지는 속도
};

const initScreen = () => {
  createWall();

  //render 정의
  render = Render.create({
    element: document.getElementById("mtt_wrap"),
    engine: engine,
    options: {
      width: windowWidth,
      height: windowHeight,
      wireframes: false,
      background: "transparent",
      wireframeBackground: "transparent",
    },
  });

  // 엔진 실행
  Engine.run(engine); // 렌더 실행
  Render.run(render); // 이벤트 추가

  //animation 실행
  startAnimation();

  //Canvas 클릭 시 객체 생성 이벤트
  render.canvas.addEventListener("click", clickRandomEvent, false);
};

// 바닥과, 왼쪽, 오른쪽 벽을 생성하는 함수
const createWall = () => {
  // console.log("createWall");
  if (isWallCreated) return false; //이미 벽 생성 완료

  // 하단 바닥 생성
  ground = Bodies.rectangle(windowWidth / 2, windowHeight, windowWidth, 55, {
    isStatic: true, // 고정된 위치의 객체
    render: {
      fillStyle: "#d8bc8b",
    },
  });

  // 왼쪽 벽 생성
  leftGround = Bodies.rectangle(
    windowWidth + 1,
    windowHeight / 2,
    1,
    windowHeight,
    {
      isStatic: true,
      render: {
        fillStyle: "#f7f2e6",
      },
    }
  );

  // 오른쪽 벽 생성
  rightGround = Bodies.rectangle(-1, windowHeight / 2, 1, windowHeight, {
    isStatic: true,
    render: {
      fillStyle: "#f7f2e6",
    },
  });

  // World에 생성한 벽 추가
  World.add(engine.world, [ground, leftGround, rightGround]); // 렌더를 생성

  //auto drop timer 실행

  autoDropObject();

  //바닥제거 자동 timer
  autoRemoveGround();
};

// Event
// canvas 마우스 클릭 시 랜덤 객체 생성
const clickRandomEvent = (e) => {
  const newCircle = Bodies.circle(e.offsetX, e.offsetY, windowHeight * 0.05, {
    render: {
      fillStyle: ["#a2ce97", "#9ec5dd", "#babfbf"][
        Math.round(Math.random() * 2)
      ],
    },
  }); // 공간에 추가합니다.

  // rendering
  World.add(engine.world, newCircle);
};

// autoDrop
// 떨어지는 객체 관련 함수
const autoDropObject = () => {
  clearTimeout(dropObjectTimer);
  dropObjectTimer = setTimeout(function () {
    createTypeCircle();
    createTypePolygon();
    createTypeRectangle();
    //반복 실행
    autoDropObject();
  }, 1000);
};

const createTypeCircle = () => {
  //랜덤 생성 여부 확인
  if (!isDropCreated) return;

  const newCircle = Bodies.circle(
    Common.random(0, windowWidth),
    50,
    windowHeight * 0.05,
    {
      render: {
        fillStyle: ["#a2ce97", "#9ec5dd", "#babfbf"][
          Math.round(Math.random() * 2)
        ],
      },
    }
  ); // 공간에 추가합니다.
  World.add(engine.world, newCircle);
};

const createTypeRectangle = () => {
  //랜덤 생성 여부 확인
  if (!isDropCreated) return;

  const newRectangle = Bodies.rectangle(
    Common.random(0, windowWidth),
    50,
    windowHeight * 0.09,
    windowHeight * 0.09,
    {
      render: {
        fillStyle: ["#a2ce97", "#9ec5dd", "#babfbf"][
          Math.round(Math.random() * 2)
        ],
      },
    }
  ); // 공간에 추가합니다.

  World.add(engine.world, newRectangle);
};

const createTypePolygon = () => {
  //랜덤 생성 여부 확인
  if (!isDropCreated) return;

  const newPolygon = Bodies.polygon(
    Common.random(0, windowWidth),
    6,
    6,
    windowHeight * 0.05,
    {
      render: {
        fillStyle: ["#a2ce97", "#9ec5dd", "#babfbf"][
          Math.round(Math.random() * 2)
        ],
        zIndex: 200,
      },
    }
  ); // 공간에 추가합니다.

  World.add(engine.world, newPolygon);
};

// 바닥에 있는 개체 모두 제거
const autoRemoveGround = () => {
  // console.log("autoRemoveGround");
  clearTimeout(removeGroundTimer);
  removeGroundTimer = setTimeout(function () {
    // console.log("autoRemoveGround start");
    removeGroundOnObject();
    // 10초 뒤 삭제
  }, 10000);
};

//바닥 제거 함수
const removeGroundOnObject = () => {
  // console.log("removeGroundOnObject");
  isDropCreated = false; //떨어지는 객체 중단.
  World.remove(engine.world, ground); //바닥에 있는 객체 모두 clear

  //4초 후 clear 후 재생성
  clearTimeout(reStartTimer);
  reStartTimer = setTimeout(function () {
    reStartMatter();
  }, 4000);
};

const reStartMatter = () => {
  World.clear(engine.world); //클리어
  createWall(); //벽 생성
  isDropCreated = true; //떨어지는 객체 중단.
};

const clearTimeoutAll = () => {
  clearTimeout(dropObjectTimer);
  clearTimeout(removeGroundTimer);
  clearTimeout(reStartTimer);
};

const startMatter = () => {
  getWindowSize();
  initMatter();
  initScreen();
  //Auto Drop reStart
  isDropCreated = true;
};

const startAnimation = () => {
  const waveEl = $("#wave");
  waveEl.addClass("wave-animation");
};

const stopAnimation = () => {
  const waveEl = $("#wave");
  waveEl.removeClass("wave-animation");
};

const stopMatter = () => {
  const delCanvas = document.querySelector("#mtt_wrap canvas");
  if (delCanvas) {
    stopAnimation();
    delCanvas.remove();
    //Auto Drop Stop
    isDropCreated = false;
    //반복 실행 모두 클리어
    clearTimeoutAll();
    //월드 클리어
    World.clear(engine.world);
    //클릭 이벤트 제거
    render.canvas.removeEventListener("click", clickRandomEvent, false);
    //변수 초기화
    engine = null;
    render = null;
  }
};

const reSizeWindow = () => {
  //브라우저 리사이즈 시

  const delCanvas = document.querySelector("#mtt_wrap canvas");

  if (delCanvas) {
    stopMatter();
    //window 사이즈 재설정
    getWindowSize();
    //초기화 다시 실행
    initMatter();
    initScreen();
    //Auto Drop reStart
    isDropCreated = true;
  }
};
