#ifdef GL_ES
precision highp float;
#endif

precision highp float; 
varying vec2 vTexCoord;
uniform vec3 col;
void main() { 
  gl_FragColor = vec4(col, 1.0 ); 
}