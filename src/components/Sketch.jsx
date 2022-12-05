//https://itp-xstory.github.io/p5js-shaders/#/./docs/setting-up-shaders-in-p5

import sv from "../assets/shader-milady.vert";
import sf from "../assets/shader-milady.frag";
import img from "../media/bg.png";

export default function Sketch(p5) {
  // variables for Shader and createGraphics Canvas
  let sh;

  let currImg;

  let width = p5.windowWidth;
  let height = p5.windowHeight;

  p5.preload = () => {
    // preload shader if you use separate .vert & .frag
    sh = p5.loadShader(sv, sf);
  };

  // vert
  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);
  };

  // frag
  p5.draw = () => {
    //update canvas here
    p5.shader(sh);

    p5.setUniform("image", img);

    //we need a rect for frag shader to draw onto
    p5.rect(-width / 2, -height / 2, width, height);

    //show the results
    p5.image(currImg, -width / 2, -height / 2, width, height);
  };
}
