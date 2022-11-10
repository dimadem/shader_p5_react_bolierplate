import sv from "../assets/shader.vert";
import sf from "../assets/shader.frag";

export default function Sketch(p5) {
  // variables for Shader and createGraphics Canvas
  let sh;

  let prevImg, currImg;

  let width = p5.windowWidth;
  let height = p5.windowHeight;

  p5.preload = () => {
    // preload shader if you use separate .vert & .frag
    sh = p5.loadShader(sv, sf);
  };

  p5.setup = () => {
    p5.createCanvas(width, height, p5.WEBGL);
    prevImg = p5.createGraphics(width, height);
    prevImg.background(0);
    prevImg.fill(255);
    prevImg.ellipse(width / 2, height / 2, 40, 40);

    currImg = p5.createGraphics(width, height, p5.WEBGL);
  };

  p5.draw = () => {
    //update canvas here
    currImg.shader(sh);

    //we send the shader prevImg as a 2d texture so we can
    //read the values inside the shader
    sh.setUniform("u_prevtex", prevImg);
    sh.setUniform("u_texsize", [prevImg.width, prevImg.height]);

    //we need a rect for frag shader to draw onto
    currImg.rect(-width / 2, -height / 2, width, height);

    //copy the currImg and set it as previous
    prevImg.image(currImg, 0, 0, width, height);

    //show the results
    p5.image(currImg, -width / 2, -height / 2, width, height);
  };
}
