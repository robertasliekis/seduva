import React, { Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, draco } from "drei";

function Keen() {
  const { nodes, materials } = useLoader(GLTFLoader, "/scene-draco.glb", draco());
  return (
    <group position={[0, -7, 0]} rotation={[-Math.PI / 2, 0, 0]} dispose={null}>
      <mesh
        // material={materials["Scene_-_Root"]}
        // geometry={nodes.mesh_0.geometry}
        geometry={nodes.teapot.geometry}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial attach="material" color="grey" roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
}

export default function ModelViewer() {
  return (
    <div className="model-view-window">
      <Canvas shadowMap invalidateFrameloop camera={{ position: [0, 40, 50], far: 200 }}>
        <ambientLight />
        <spotLight
          intensity={2}
          position={[20, 20, 200]}
          shadow-bias={-0.00005}
          angle={Math.PI / 6}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          castShadow
        />
        <Suspense fallback={null}>
          <Keen />
        </Suspense>
        <OrbitControls
          enableDamping
          enableZoom={true}
          enablePan={false}
          dampingFactor={0.05}
          rotateSpeed={1.1}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
