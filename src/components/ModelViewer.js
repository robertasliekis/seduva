import React, { Suspense } from "react";
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

  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(`./textures/model_${modelIndex}.jpg`);
  texture.wrapS = THREE.RepeatWrapping;
  // texture.repeat.x = -1;
  texture.flipY = false;

  texture.encoding = sRGBEncoding;

  const modelGeometry = nodes.object_1.geometry;

  const modelMaterial = new MeshStandardMaterial({
    roughness: 0.7,
    //metallness: 0,
    map: texture
  });

  modelMaterial.side = THREE.DoubleSide;
  const objectTransforms = [
    [
      [0, 0, 0],
      [0, 0.7, 0],
      [1.1, 1.1, 1.1]
    ],
    [
      [0, 0, 0],
      [0, 0.7, 0],
      [1.2, 1.2, 1.2]
    ],
    [
      [0, 0, 0],
      [0, 0.2, 0],
      [1.5, 1.5, 1.5]
    ],
    [
      [0, 0, 0],
      [0, 90, 0],
      [1.5, 1.5, 1.5]
    ],
    [
      [0, 0, 0],
      [0, 90, 0],
      [1.5, 1.5, 1.5]
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [1.3, 1.3, 1.3]
    ],
    [
      [0, 0, 0],
      [0, 0.7, 0],
      [1.2, 1.2, 1.2]
    ],
    [
      [0, 0, 0],
      [0, 1.3, 0],
      [1, 1, 1]
    ],
    [
      [0, 0, 0],
      [0, 3, 0],
      [1.5, 1.5, 1.5]
    ],
    [
      [0, 0, 0],
      [0, 0.9, 0],
      [1.5, 1.5, 1.5]
    ]
  ];

  return (
    <group
      position={objectTransforms[modelIndex - 1][0]}
      rotation={objectTransforms[modelIndex - 1][1]}
      scale={objectTransforms[modelIndex - 1][2]}
      dispose={null}
    >
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
      <Canvas shadowMap invalidateFrameloop camera={{ position: [0, 20, 120], far: 1500 }}>
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
          rotateSpeed={1.1}
          // minPolarAngle={Math.PI / 3.5}
          // maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
