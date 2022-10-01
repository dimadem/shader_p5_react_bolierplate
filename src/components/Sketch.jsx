import sv from "../assets/shader.vert";
import sf from "../assets/shader.frag";

// variables for Shader and createGraphics Canvas
let sh, g;

export default function Sketch(p5) {
  p5.preload = () => {
    // preload shader if you use separate .vert & .frag
    sh = p5.loadShader(sv, sf);
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    g = p5.createGraphics(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.noStroke();
  };

  p5.draw = () => {
    if (p5.frameCount < 2) {
      g.noStroke();
      g.shader(sh);
      for (let i = 0; i < 8; i++) {
        sh.setUniform("col", [p5.random(), p5.random(), p5.random()]);
        g.rect(
          -p5.width / 2 + (i * p5.width) / 8,
          -p5.height / 2,
          p5.width / 8,
          p5.height
        );
      }
    }

    p5.background(220);
    p5.texture(g);
    p5.noStroke();

    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.box(100, 100, 100);
  };
}
