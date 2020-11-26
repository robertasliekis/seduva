import React, { Suspense, Component } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, draco, Html } from "drei";

import { TextureLoader, MeshStandardMaterial, sRGBEncoding } from "three";
import * as THREE from "three";

// const modelPaths = ["/scene-draco1.glb", "/scene-draco2.glb"];

function Keen(props) {
  let modelIndex = 1;
  if (props.contentIndex < 11) {
    modelIndex = props.contentIndex;
  }
  //const { nodes, materials } = useLoader(GLTFLoader, `./scene-draco${modelIndex}.glb`, draco());
  const { nodes } = useLoader(GLTFLoader, `./models/model_${modelIndex}.glb`, draco());
  console.log(nodes);

  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(`./textures/model_${modelIndex}.jpg`);
  //const texture = textureLoader.load("./checker.png");
  texture.wrapS = THREE.RepeatWrapping;
  // texture.repeat.x = -1;
  texture.flipY = false;
  // texture.repeat.set(-1, 0.9);
  texture.encoding = sRGBEncoding;

  const modelGeometry = nodes.object_1.geometry;

  const modelMaterial = new MeshStandardMaterial({
    roughness: 0.7,
    metallness: 0,
    map: texture
  });

  modelMaterial.side = THREE.DoubleSide;

  return (
    <group position={[0, 0, 0]} scale={[0.2, 0.2, 0.2]} rotation={[-Math.PI / 180, 0, 0]} dispose={null}>
      <mesh {...props} geometry={modelGeometry} castShadow receiveShadow material={modelMaterial}>
        {/* <meshStandardMaterial attach="material" roughness={0.5} metalness={0} map={texture} DoubleSide /> */}
      </mesh>
    </group>
  );
}

export default function App(props) {
  return (
    <div className="model-view-container">
      {/* {console.log(props.contentIndex)} */}
      <Canvas shadowMap invalidateFrameloop camera={{ position: [0, 0, 25], far: 1500 }}>
        <ambientLight />
        <spotLight
          intensity={1}
          position={[200, 20, 1000]}
          shadow-bias={-0.00005}
          angle={Math.PI / 6}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <Suspense fallback={<Html>loading..</Html>}>
          <Keen contentIndex={props.contentIndex} />
        </Suspense>
        <OrbitControls
          enableDamping
          enableZoom={true}
          enablePan={false}
          dampingFactor={0.05}
          rotateSpeed={1.1}
          // minPolarAngle={Math.PI / 3.5}
          // maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
