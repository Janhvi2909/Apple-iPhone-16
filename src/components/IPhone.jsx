
import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb");

  const texture = useTexture(props.item.img);
  //four color, black ,white,natural,desert
  useEffect(() => {
    Object.entries(materials).map((material) => {
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(props.item.color[0]);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.phone16pro}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.phone16pro}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.phone16pro_transparent}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.phone16pro}
      />
    </group>
  );
}
export default Model;

useGLTF.preload("/models/scene.glb");
