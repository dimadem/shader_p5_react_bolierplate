// variables for Shader and createGraphics Canvas
let sh, g;

// shader.vert
let sv = `attribute vec3 aPosition; 
attribute vec2 aTexCoord; 
varying vec2 vTexCoord; 
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

void main() {
  vTexCoord = aTexCoord; 
  vec4 positionVec4 = vec4(aPosition, 1.0); 
  
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4; 
}`;

// shader.frag
let sf = `precision highp float; 
varying vec2 vTexCoord;
uniform vec3 col;
void main() { 
  gl_FragColor = vec4(col, 1.0 ); 
}`;

export default function Sketch(p5) {
  p5.preload = () => {
    // preload shader to sketch is not working!!!
    // sh = p5.loadShader(sv, sf);
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    g = p5.createGraphics(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    // build shader on createGraphics Canvas!
    sh = g.createShader(sv, sf);
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
