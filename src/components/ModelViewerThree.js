import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader, MeshStandardMaterial } from "three";

import OrbitControls from "three-orbitcontrols";

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

class ModelViewerThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelLoading: false
    };
  }
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    this.scene = new THREE.Scene({ alpha: true });

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    this.addCamera(width, height);
    this.addLights();
    this.addModels();
    this.renderScene();
    this.start();
  }

  setModelTransforms() {
    const { position, rotation, scale } = this.model;
    const modelTransfors = [position, rotation, scale];
    modelTransfors.map((transform, index) => {
      transform.x = objectTransforms[this.props.contentIndex - 1][index][0];
      transform.y = objectTransforms[this.props.contentIndex - 1][index][1];
      transform.z = objectTransforms[this.props.contentIndex - 1][index][2];
      return null;
    });
  }

  addCamera(width, height) {
    let FOV;
    let positionZ;
    let positionY;
    switch (this.props.containerType) {
      case "gallery":
        FOV = 75;
        positionZ = 100;
        positionY = 25;
        break;
      case "audio":
        FOV = 50;
        positionZ = 20;
        positionY = 0;
        break;
      default:
    }
    this.camera = new THREE.PerspectiveCamera(FOV, width / height, 0.1, 1000);
    this.camera.position.z = positionZ;
    this.camera.position.y = positionY;
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.rotateSpeed = 0.4;
  }

  addLights() {
    var lights = [];
    switch (this.props.containerType) {
      case "gallery":
        lights[0] = new THREE.PointLight("white", 1, 0);
        lights[1] = new THREE.AmbientLight("white", 0.75, 0);
        lights[0].position.set(0, 0, 400);
        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        break;
      case "audio":
        lights[0] = new THREE.AmbientLight("white", 0.75, 0);
        this.scene.add(lights[0]);
        break;
      default:
    }
  }

  addModels() {
    let modelUrl;
    let textureUrl;

    switch (this.props.containerType) {
      case "gallery":
        modelUrl = `./models/model_${this.props.contentIndex}.glb`;
        textureUrl = `./textures/model_${this.props.contentIndex}.jpg`;
        break;
      case "audio":
        modelUrl = `./models/sphere.glb`;
        textureUrl = `./textures/panorama0${this.props.contentIndex}.jpg`;
        break;
      default:
    }

    const manager = new THREE.LoadingManager();
    manager.onStart = () => {
      this.setState({ modelLoading: true });
    };

    manager.onLoad = () => {
      this.setState({ modelLoading: false });
    };

    manager.onProgress = function () {};

    this.loader = new GLTFLoader();
    if (modelUrl !== undefined) {
      this.loader.load(
        modelUrl,
        (gltf) => {
          this.model = gltf.scene;
          this.setModelTransforms();
          const textureLoader = new TextureLoader(manager);
          const texture = textureLoader.load(textureUrl);
          texture.wrapS = THREE.RepeatWrapping;
          texture.flipY = false;
          const modelMaterial = new MeshStandardMaterial({
            roughness: 0.7,
            map: texture
          });
          modelMaterial.side = THREE.DoubleSide;
          this.model.traverse(function (object) {
            if (object.isMesh) {
              object.material = modelMaterial;
            }
          });
          this.scene.add(this.model);
        },
        function (xhr) {
          // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          //console.log("An error happened");
        }
      );
    }
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    let rotationSpeed;
    switch (this.props.containerType) {
      case "gallery":
        rotationSpeed = 0.005;
        break;
      case "audio":
        rotationSpeed = 0.001;
        break;
      default:
    }
    if (this.model) this.model.rotation.y += rotationSpeed;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        className="model-view-container"
        ref={(mount) => {
          this.mount = mount;
        }}
      >
        <div className="loading-screen" style={{ display: this.state.modelLoading ? "flex" : "none" }}>
          <div className="icon"></div>
        </div>
      </div>
    );
  }
}
export default ModelViewerThree;
