import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// ShaderMesh Component
const ShaderMesh = ({ optimized = false }) => {
  const mesh = useRef();
  const [isPaused, setIsPaused] = useState(false);
  const frameCount = useRef(0);

  const uniforms = useMemo(
    () => ({
      u_color: { value: [1.31, 0, 1] },
      u_background: { value: [0, 0, 0, 1] },
      u_speed: { value: 1.0 },
      u_detail: { value: 0.4 },
      u_time: { value: 0 },
      u_mouse: { value: [0, 0] },
      u_resolution: { value: [1, 1] },
    }),
    [] // Only calculate once
  );

  useEffect(() => {
    if (!optimized) return;

    const handleVisibilityChange = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (window.innerWidth < 768) {
      const timer = setTimeout(() => setIsPaused(true), 500);
      return () => clearTimeout(timer);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [optimized]);

  useFrame((state) => {
    if (isPaused || !mesh.current) return;

    frameCount.current += 1;
    const updateFrequency = window.innerWidth < 768 ? 2 : 1;

    if (frameCount.current % updateFrequency === 0) {
      const { clock, pointer, size } = state;

      mesh.current.material.uniforms.u_mouse.value = [
        pointer.x / 2 + 0.5,
        pointer.y / 2 + 0.5,
      ];
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
      mesh.current.material.uniforms.u_resolution.value = [
        size.width + (window.innerWidth < 768 ? 450 : 900),
        size.height + (window.innerWidth < 768 ? 350 : 250),
      ];
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[512, 512]} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={`
          uniform vec2 u_resolution;
          uniform float u_time;
          uniform vec3 u_color;
          uniform vec4 u_background;
          uniform float u_speed;
          uniform float u_detail;

          mat2 m(float a) {
            float c = cos(a), s = sin(a);
            return mat2(c, -s, s, c);
          }

          float map(vec3 p) {
            float t = u_time * u_speed;
            p.xz *= m(t * 0.4); 
            p.xy *= m(t * 0.1);
            vec3 q = p * 2.0 + t;
            return length(p + vec3(sin(t * 0.1))) * log(length(p) + 0.9)
              + cos(q.x + sin(q.z + cos(q.y))) * 0.5 - 1.0;
          }

          void main() {
            vec2 a = gl_FragCoord.xy / u_resolution - vec2(0.5, 0.5);
            vec3 cl = vec3(0.0);
            float d = 2.5;

            for (float i = 0.; i <= (1. + 20. * u_detail); i++) {
              vec3 p = vec3(0, 0, 4.0) + normalize(vec3(a, -1.0)) * d;
              float rz = map(p);
              float f = clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);
              vec3 l = vec3(0.1, 0.3, 0.4) + vec3(5.0, 2.5, 3.0) * f;
              cl = cl * l + smoothstep(2.5, 0.0, rz) * 0.6 * l;
              d += min(rz, 1.0);
            }

            vec4 color = vec4(min(u_color, cl), 1.0);
            color.r = max(u_background.r, color.r);
            color.g = max(u_background.g, color.g);
            color.b = max(u_background.b, color.b);
            gl_FragColor = color;
          }
        `}
        vertexShader={`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        wireframe={false}
        dithering={false}
        flatShading={true}
      />
    </mesh>
  );
};

// ShaderBackground Component
const ShaderBackground = ({ optimized = false }) => {
  const canvasProps = useMemo(() => ({
    gl: {
      powerPreference: window.innerWidth < 768 ? "default" : "high-performance",
      antialias: window.innerWidth >= 768,
      precision: window.innerWidth < 768 ? "mediump" : "highp",
      preserveDrawingBuffer: true,
      premultipliedAlpha: false,
      alpha: true,
    },
    camera: {
      fov: 75,
      near: 0.1,
      far: 1000,
      position: [0, 0, 5],
    },
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -11,
      borderRadius: "16px",
    },
  }), []);

  return (
    <Canvas {...canvasProps}>
      <ShaderMesh optimized={optimized} />
    </Canvas>
  );
};

export default ShaderBackground;
