import ReactDOM from "react-dom";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { Div } from "./canvasElements";
import "./styles.css";
function Shoenew({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[19.89, 0, -0.31]}
        rotation={[-Math.PI, 1.33, -Math.PI]}
        scale={0.65}
      >
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={nodes.Cube_1.material}
          scale={[1, 1, -1]}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={nodes.Cube001_1.material}
          position={[0.78, -0.37, 0]}
          scale={0.49}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={nodes.Cube002_1.material}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={nodes.Cube003_1.material}
          position={[0, 0.08, 0]}
        />
        <mesh
          geometry={nodes.NurbsPath_1.geometry}
          material={nodes.NurbsPath_1.material}
        />
        <mesh
          geometry={nodes.NurbsPath001_1.geometry}
          material={nodes.NurbsPath001_1.material}
        />
        <mesh
          geometry={nodes.NurbsPath002_1.geometry}
          material={nodes.NurbsPath002_1.material}
        />
        <mesh
          geometry={nodes.NurbsPath003_1.geometry}
          material={nodes.NurbsPath003_1.material}
        />
        <mesh
          geometry={nodes.NurbsPath004_1.geometry}
          material={nodes.NurbsPath004_1.material}
        />
        <mesh
          geometry={nodes.Sphere_1.geometry}
          material={nodes.Sphere_1.material}
          position={[-0.16, 0.77, 0]}
          rotation={[0, 0, -0.36]}
        />
        <mesh
          geometry={nodes.Sphere001_1.geometry}
          material={nodes.Sphere001_1.material}
          position={[-0.16, 0.77, 0]}
          rotation={[0, 0, -0.36]}
          scale={[1, 1, 1.07]}
        />
      </group>
      <group
        position={[18.47, 0.28, 0.24]}
        rotation={[-3.12, 0.58, 2.92]}
        scale={0.65}
      >
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={nodes.Cube_2.material}
          scale={[1, 1, -1]}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={nodes.Cube001_2.material}
          position={[0.78, -0.37, 0]}
          scale={0.49}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={nodes.Cube002_2.material}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={nodes.Cube003_2.material}
          position={[0, 0.08, 0]}
        />
        <mesh
          geometry={nodes.NurbsPath_2.geometry}
          material={nodes.NurbsPath_2.material}
        />
        <mesh
          geometry={nodes.NurbsPath001_2.geometry}
          material={nodes.NurbsPath001_2.material}
        />
        <mesh
          geometry={nodes.NurbsPath002_2.geometry}
          material={nodes.NurbsPath002_2.material}
        />
        <mesh
          geometry={nodes.NurbsPath003_2.geometry}
          material={nodes.NurbsPath003_2.material}
        />
        <mesh
          geometry={nodes.NurbsPath004_2.geometry}
          material={nodes.NurbsPath004_2.material}
        />
        <mesh
          geometry={nodes.Sphere_2.geometry}
          material={nodes.Sphere_2.material}
          position={[-0.16, 0.77, 0]}
          rotation={[0, 0, -0.36]}
        />
        <mesh
          geometry={nodes.Sphere001_2.geometry}
          material={nodes.Sphere001_2.material}
          position={[-0.16, 0.77, 0]}
          rotation={[0, 0, -0.36]}
          scale={[1, 1, 1.07]}
        />
      </group>
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        scale={[1, 1, -1]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0.78, -0.37, 0]}
        scale={0.49}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[0, 0.08, 0]}
      />
      <mesh
        geometry={nodes.NurbsPath.geometry}
        material={nodes.NurbsPath.material}
      />
      <mesh
        geometry={nodes.NurbsPath001.geometry}
        material={nodes.NurbsPath001.material}
      />
      <mesh
        geometry={nodes.NurbsPath002.geometry}
        material={nodes.NurbsPath002.material}
      />
      <mesh
        geometry={nodes.NurbsPath003.geometry}
        material={nodes.NurbsPath003.material}
      />
      <mesh
        geometry={nodes.NurbsPath004.geometry}
        material={nodes.NurbsPath004.material}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[-0.16, 0.77, 0]}
        rotation={[0, 0, -0.36]}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[-0.16, 0.77, 0]}
        rotation={[0, 0, -0.36]}
        scale={[1, 1, 1.07]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[0, 0, -2]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[0.78, -0.37, -2]}
        scale={0.49}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[0, 0, -2]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[0, 0.08, -2]}
      />
      <mesh
        geometry={nodes.NurbsPath005.geometry}
        material={nodes.NurbsPath005.material}
        position={[0, 0, -2]}
      />
      <mesh
        geometry={nodes.NurbsPath006.geometry}
        material={nodes.NurbsPath006.material}
        position={[0, 0, -2]}
      />
      <mesh
        geometry={nodes.NurbsPath007.geometry}
        material={nodes.NurbsPath007.material}
        position={[0, 0, -2]}
      />
      <mesh
        geometry={nodes.NurbsPath008.geometry}
        material={nodes.NurbsPath008.material}
        position={[0, 0, -2]}
      />
      <mesh
        geometry={nodes.NurbsPath009.geometry}
        material={nodes.NurbsPath009.material}
        position={[0, 0, -2]}
      />
      <mesh
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[-0.16, 0.77, -2]}
        rotation={[0, 0, -0.36]}
      />
      <mesh
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[-0.16, 0.77, -2]}
        rotation={[0, 0, -0.36]}
        scale={[1, 1, 1.07]}
      />
    </group>
  );
}

const Canvasnew = () => {
  return (
    <Div>
      <Canvas
        camera={{
          fov: 70,
          zoom: 1.5,
          near: 1,
          far: 1000,
          position: [0, 0, 10],
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} position={[5, -20, 20]} />
        <spotLight intensity={0.3} position={[5, 60, 20]} />
        <spotLight intensity={0.3} position={[0, 0, 0]} />
        <Suspense fallback={null}>
          <Shoenew />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Div>
  );
};

export default Canvasnew;
