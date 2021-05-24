// Matter-js 기본 정의
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const Common = Matter.Common;

// Matter 엔진 생성
const initEngine = () => {
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0.3; //y축으로 떨어지는 속도
};

initEngine();

const circle = Bodies.circle(windowWidth / 2, 50, 10, {
  friction: 0.2,
  // 단어 그대로 마찰력 값입니다. (0~1)
  restitution: 0.8,
  // 단어 그대로 복원력 입니다. (0~1)
  render: {
    fillStyle: "#000",
    strokeStyle: "#000",
    lineWidth: 1,
  },
  // fillStyle 은 채워질 색, strokeStyle은 선색, lineWidth 선 굵기
});

const ground = Bodies.rectangle(
  windowWidth / 2,
  windowHeight - 50,
  windowWidth / 3,
  10,
  {
    isStatic: true,
    // 고정된 위치의 오브제
  }
);

World.add(engine.world, [circle, ground]);

// 렌더를 생성합니다.
const render = Render.create({
  element: document.getElementById("mtt_wrap"),
  engine: engine,
  options: {
    width: windowWidth,
    height: windowHeight,
    wireframes: false,
    background: "#fff",
  },
});

// 엔진을 실행하고
Engine.run(engine);
// 렌더를 실행합니다.
Render.run(render);

// 몇가지 이벤트를 추가합니다.

// render 객체의 canvas는 DOM body에 추가 될 canvas 엘리먼트를 가리킵니다.
render.canvas.addEventListener(
  "click",
  (e) => {
    // 캔버스를 마우스로 클릭하면
    // 현재 마우스 위치에 반지름이 10인 원을 만들어서
    const box = Bodies.circle(e.offsetX, e.offsetY, 10, {
      friction: 0.2,
      restitution: 0.8,
    });
    // 공간에 추가합니다.
    World.add(engine.world, box);
  },
  false
);

// 1초 간격으로
setInterval(() => {
  // 가로 중앙, 상단에서 50px 떨어진 곳에 반지름이 10인 원을 만들어서
  const box = Bodies.circle(windowWidth / 2, 50, 10, {
    friction: 0.2,
    restitution: 0.8,
  });
  // 공간에 추가합니다.
  World.add(engine.world, box);
}, 1000);

// 아까 위에 선언한 Matter에서 지정되어 있는 이벤트 인데요.
// 그중에 'collisionStart'은 오브제 간 충돌의 시작한 시점의 이벤트입니다.
Events.on(engine, "collisionStart", (event) => {
  // 오브제들이 충돌하면 console.log를 출력합니다.
  console.log("collision");
});
// 첫번째 글이라 자세히 적진 않았지만 인자로 받은 event의 값으로
// 충돌한 오브제 A와 오브제 B를 구분하여 이벤트를 처리해 줄 수도 있습니다.
