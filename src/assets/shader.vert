#ifdef GL_ES
      precision highp float;
      precision highp int;
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
   gl_Position = uProjectionMatrix * aPosition;
    vNormal = aNormal;
    var_vertTexCoord  = aTexCoord;
}




