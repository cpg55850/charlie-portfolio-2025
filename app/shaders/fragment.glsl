precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;
uniform float pixelRatio; // Add this line

// Perlin noise function
vec3 permute(vec3 x) {
  return mod(((x*34.0)+1.0)*x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                      -0.577350269189626, // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  
  // Fix aspect ratio to prevent warping
  float aspect = resolution.x / resolution.y;
  vec2 aspectUv = uv;
  aspectUv.x *= aspect;
  
  // Use pixelRatio to normalize scale across different displays
  float scale = pixelRatio; // This will be 2.0 on retina displays, 1.0 on standard displays
  
  // Combine time-based movement with mouse movement
  vec2 timeOffset = vec2(time * 0.02, time * 0.015);
  vec2 mouseOffset = mouse * 0.25;
  
  // Apply consistent scaling regardless of device pixel ratio and use aspect-corrected UV
  float noise = snoise(aspectUv * 2.0 / scale + timeOffset + mouseOffset);
  float wave = sin(aspectUv.x * 5.0 / scale + time * 0.3 + mouse.x * 0.01 + noise) * 0.5 + 
               sin(aspectUv.y * 5.0 / scale + time * 0.25 + mouse.y * 0.01 + noise) * 0.5;
  
  vec3 baseColor = vec3(0.0 / 255.0, 0.0 / 255.0, 25.0 / 255.0);
  vec3 waveColor = vec3(0.2, 0.2, 0.2);
  vec3 color = baseColor + (waveColor * wave);
  gl_FragColor = vec4(color, 1.0);
}