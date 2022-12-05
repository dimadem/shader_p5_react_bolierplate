#ifdef GL_ES
      precision highp float;
#endif

// attributes, in
attribute vec3 aPosition;
attribute vec2 aTexCoord;

// attributes, out
varying vec2 var_vertTexCoord;

attribute vec3 aNormal;
varying vec3 vNormal;

// matrices
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

void main() {
    var_vertTexCoord = aTexCoord;
    gl_Position = uProjectionMatrix * aPosition;
    vNormal = aNormal;
}
