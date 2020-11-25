import React, { Suspense } from "react";
import "./App.styles.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";
import { Canvas } from "react-three-fiber";
import { Html, useGLTFLoader } from "drei";

const Model = () => {
  const gltf = useGLTFLoader("/armchairYellow.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = () => {
  return (
    <Section factor={-1} offset={-1}>
      <group postion={[0, 250, 0]}>
        <mesh position={[0, 35, 0]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Hello</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
};

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 100, 120], fov: 30 }}>
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}
