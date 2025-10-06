import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const QSphere = ({ numqbits = 0, chances = { 0: 1000, 1: 0 } }) => {
  const mountRef = useRef(null);

  const position = [0, 0, 0];
  const size = 5;
  const color = "rgb(0, 0, 255)0)";
  const colorVSQ = "rgb(140, 62, 62)0)";

  useEffect(() => {
    // Инициализация Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // Настройка сцены
    renderer.setSize(500, 500);
    mountRef.current.appendChild(renderer.domElement);

    const midOfSphere = new THREE.TorusGeometry(4.9, 0.05, 5, 60);
    const topOfSphere = new THREE.TorusGeometry(4.2, 0.05, 5, 60);
    const StVectorMesh = new THREE.CylinderGeometry(0.1, 0.1, 5);
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshToonMaterial({
      color,
      opacity: 0.3,
      transparent: true,
      fog: true,
      roughness: 0.5,
      metalness: 0,
      side: THREE.DoubleSide,
    });

    const VSQmaterial = new THREE.MeshToonMaterial({
      colorVSQ,
      opacity: 1,
      transparent: false,
      fog: false,
      roughness: 0,
      metalness: 0.3,
      side: THREE.FrontSide,
    });

    const RingMaterial = new THREE.MeshToonMaterial({
      colorVSQ,
      opacity: 0.5,
      transparent: false,
      fog: false,
      roughness: 0,
      metalness: 0.3,
      side: THREE.DoubleSide,
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    // Создание спрайта с текстом
    const createTextSprite = (text, position_z, position_y) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext("2d");

      context.fillStyle = "rgba(255, 255, 255, 0)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#000000";
      context.font = "Bold 150px Arial";
      context.textAlign = "center";
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(1, 1, 1);
      sprite.position.set(position_y, position_z, 0);

      return sprite;
    };

    //Текст и состояния
    switch (numqbits) {
      case 1:
        const text_0 = createTextSprite("|0⟩", 6, 0);
        const text_1 = createTextSprite("|1⟩", -6, 0);
        scene.add(text_0);
        scene.add(text_1);
        if (chances["0"] != null && chances["0"] != 0) {
          const vector_0 = new THREE.Mesh(StVectorMesh, material);
          scene.add(vector_0);
          const geometryC = new THREE.SphereGeometry(chances["0"], 0.1, 0.1);
          const sphere_C = new THREE.Mesh(geometry, material);
          scene.add(sphere_C);
        }
        if (chances["1"] != null && chances["1"] != 0) {
          const vector_1 = new THREE.Mesh(StVectorMesh, material);
          scene.add(vector_1);
        }
        break;
      case 2:
        const text_00 = createTextSprite("|00⟩", 6, 0);
        const text_11 = createTextSprite("|11⟩", -6, 0);
        const text_01 = createTextSprite("|01⟩", 0, -6);
        const text_10 = createTextSprite("|10⟩", 0, 6);
        scene.add(text_00);
        scene.add(text_11);
        scene.add(text_01);
        scene.add(text_10);
        if (chances["00"] != null && chances["00"] != 0) {
          const vector_00 = new THREE.Mesh(StVectorMesh, VSQmaterial);
          vector_00.position.set(...[0, 2.5, 0]);
          scene.add(vector_00);
          const geometryC_00 = new THREE.SphereGeometry(
            chances["00"] / 1000,
            32,
            32
          );
          const sphere_C_00 = new THREE.Mesh(geometryC_00, VSQmaterial);
          scene.add(sphere_C_00);
          sphere_C_00.position.set(...[0, 5, 0]);
        }
        if (chances[11] != null && chances[11] != 0) {
          const vector_11 = new THREE.Mesh(StVectorMesh, VSQmaterial);
          scene.add(vector_11);
          vector_11.position.set(...[0, -2.5, 0]);
          const geometryC_11 = new THREE.SphereGeometry(
            chances["11"] / 1000,
            32,
            32
          );
          const sphere_C_11 = new THREE.Mesh(geometryC_11, VSQmaterial);
          scene.add(sphere_C_11);
          sphere_C_11.position.set(...[0, -5, 0]);
        }
        if (chances["01"] != null && chances["01"] != 0) {
          const vector_01 = new THREE.Mesh(StVectorMesh, material);
          scene.add(vector_01);
        }
        if (chances["10"] != null && chances["10"] != 0) {
          const vector_10 = new THREE.Mesh(StVectorMesh, material);
          scene.add(vector_10);
        }
        break;
    }

    // Сфера и кольца
    const mid = new THREE.Mesh(midOfSphere, RingMaterial);
    mid.rotateX(1.57);
    scene.add(mid);
    const top = new THREE.Mesh(topOfSphere, RingMaterial);
    top.rotateX(1.57);
    scene.add(top);
    top.position.set(...[0, 2.5, 0]);
    const bottom = new THREE.Mesh(topOfSphere, RingMaterial);
    bottom.rotateX(1.57);
    scene.add(bottom);
    bottom.position.set(...[0, -2.5, 0]);
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    /*const d_light = new THREE.DirectionalLight(0x224499, 100);
    scene.add(d_light);*/

    const am_light = new THREE.AmbientLight(0x224499, 10);
    scene.add(am_light);

    /*const p_light = new THREE.PointLight(0x224499, 3000);
    p_light.position.set(0, 10, 10);
    scene.add(p_light);*/

    // Позиционирование
    camera.position.z = 10;
    sphere.position.set(...position);

    // Анимация
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Очистка
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [position, size, color]);

  return <div ref={mountRef} style={{ width: "500px", height: "500px" }} />;
};

export default QSphere;
