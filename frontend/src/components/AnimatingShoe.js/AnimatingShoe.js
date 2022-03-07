import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Wrapper } from "./AnimateElements";
// import texture from "../../images/model/png/18thmodel0001.png";
import { TextureLoader } from "three";
const AnimatingShoe = () => {
  // const colorMap = useLoader(TextureLoader, texture);
  return (
    <Wrapper>
      <Canvas className="">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[-2, 5, 2]} intensity={1} />
        <mesh rotation={[0.6, 0.6, 0]}>
          <boxGeometry attach="geometry" args={[2, 2, 2]} />
          {/* <meshStandardMaterial map={colorMap} /> */}
        </mesh>
      </Canvas>
    </Wrapper>
  );
};

export default AnimatingShoe;
