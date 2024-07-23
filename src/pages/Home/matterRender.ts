import * as Matter from "matter-js";

export const renderMatter = () => {
  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const Bodies = Matter.Bodies;
  const Composite = Matter.Composite;
  const Runner = Matter.Runner;
  const Mouse = Matter.Mouse;

  // 1. 创建引擎
  const engine = Engine.create();

  // 2. 创建渲染器，并将引擎连接到画布上
  const render = Render.create({
    element: document.getElementById("canvasMatter") as HTMLDivElement, // 绑定页面元素
    engine: engine, // 绑定引擎
    options: {
      width: 700,
      height: 700,
      background: "rgb(253, 253, 253)",
      wireframes: false,
    },
  });

  // 3-1. 创建两个正方形
  const circle = Bodies.circle(100, 100, 50, { restitution: 0.8 });
  const rect = Bodies.rectangle(130, 50, 100, 100, { restitution: 0.8 });

  // 3-2. 创建地面，将isStatic设为true，表示物体静止
  const ground = Bodies.rectangle(0, 490, 1000, 30, { isStatic: true });

  const mouse = Mouse.create(render.canvas);

  // 给鼠标添加约束
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  // 4. 将所有物体添加到世界中
  Composite.add(engine.world, [circle, rect, ground, mouseConstraint]);

  // 5. 执行渲染操作
  Render.run(render);

  // 6. 创建运行方法
  const runner = Runner.create();

  // 7. 运行渲染器
  Runner.run(runner, engine);
};
