import React, { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, draco, Html } from "drei";

import { TextureLoader, MeshStandardMaterial, sRGBEncoding } from "three";
import * as THREE from "three";

function Keen(props) {
  const { nodes } = useLoader(GLTFLoader, `./models/sphere.glb`, draco());

  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(`./textures/panorama01.jpg`);
  texture.wrapS = THREE.RepeatWrapping;
  // texture.repeat.x = -1;
  texture.flipY = false;

  texture.encoding = sRGBEncoding;

  const modelGeometry = nodes.object_1.geometry;

  const modelMaterial = new MeshStandardMaterial({
    roughness: 0.7,
    map: texture
  });

  modelMaterial.side = THREE.DoubleSide;

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} dispose={null}>
      <mesh {...props} geometry={modelGeometry} castShadow receiveShadow material={modelMaterial}>
        {/* <meshStandardMaterial attach="material" roughness={0.5} metalness={0} map={texture} DoubleSide /> */}
      </mesh>
    </group>
  );
}

export default function App(props) {
  return (
    <div className="panorama-view-container model-view-container">
      <Canvas shadowMap invalidateFrameloop camera={{ position: [0, 0, 20], far: 1500, fov: 50 }}>
        <ambientLight />
        <spotLight
          intensity={0}
          position={[200, 20, 1000]}
          shadow-bias={-0.00005}
          angle={Math.PI / 6}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <Suspense
          fallback={
            <Html>
              <div className="loading-text">Loading...</div>
            </Html>
          }
        >
          <Keen contentIndex={props.contentIndex} />
        </Suspense>
        <OrbitControls
          enableDamping
          enableZoom={true}
          enablePan={false}
          dampingFactor={0.05}
          rotateSpeed={0.4}
          // minPolarAngle={Math.PI / 3.5}
          // maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
