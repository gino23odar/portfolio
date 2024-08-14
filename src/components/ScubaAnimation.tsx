'use client'

import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';


const Model: React.FC = () => {
    const ref = useRef<THREE.Object3D>(null);
    //const gltf = useLoader(GLTFLoader, '/scubashiba.glb');
    const { scene } = useGLTF('/scubashiba.glb');
    const { mouse } = useThree();
    
    useFrame(() => {
        if (ref.current) {
            const target = new THREE.Vector3(mouse.x, mouse.y, 1); // Adjust the Z position for depth
            ref.current.lookAt(target);
          }
    });
  // Adjust the model's rotation so it faces the user
    scene.rotation.set(0, -(Math.PI / 6), 0); // Rotate 

    return <primitive ref={ref} object={scene} />;
}

const ScubaAnimation: React.FC = () => {
    
    return (
        <>
            <ambientLight intensity={1} />
            <pointLight position={[10,10,10]} />
            <Model />
            <OrbitControls />
        </>
    )
}

// const ScubaAnimation: React.FC = () => {
//     return (
//         <Canvas style={{width:'auto', height:'20vh'}} >
//             <Scene />
//         </Canvas>
//     );
//   };

export default ScubaAnimation