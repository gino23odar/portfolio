'use client'

import React from 'react'
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment, useGLTF, OrbitControls  } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Group } from "three";

interface ModelProps {
    r: number;
    position: [number, number, number];
    url: string;
    soundEffects: HTMLAudioElement[];
    s: number;
    clickable: boolean;
  }

const BonFire = () => {
  return (
    <div style={{ width: '80vw', height: '35vh' }}>
        <Canvas
            className="min-h-[15lvh] z-0"
            shadows
            gl={{ antialias: false }}
            dpr={[1, 1.5]}
            camera={{ position: [6, 3, -6], fov: 20, near: 1, far: 40 }}
        >
            <OrbitControls enablePan={false} enableZoom={false} />
            <Suspense fallback={null}>
                <Fireplacement />
                <ContactShadows
                    position={[0, -3.5, 0]}
                    opacity={0.65}
                    scale={40}
                    blur={1}
                    far={9}
                />
                <Environment preset="forest" />
            </Suspense>
        </Canvas>
    </div>
  )
}

const Fireplacement = () =>{
    const objects = [
        {
            position: [0, 0, 0],
            r: 0,
            s: 1,
            url: "/models/bonfire.glb",
            clickable: false,
          },
          {
            position: [-0.6, 0, 0],
            r: 0,
            s:1,
            url: "/models/lowPolyKnight.glb",
            clickable: false,
          },
          {
            position: [0.1, 0.3, -0.1],
            r: 1.3,
            s: 0.2,
            url: "/models/flame.glb",
            clickable: true,
          },
          {
            position: [-0.1, 0.4, 0],
            r: 0.9,
            s: 0.2,
            url: "/models/flame2.glb",
            clickable: true,
          },
          {
            position: [0.3, 0.3, 0],
            r: 0.9,
            s: 0.2,
            url: "/models/flame3.glb",
            clickable: true,
          },
          {
            position: [0, 0.3, 0],
            r: 0.9,
            s: 0.2,
            url: "/models/lowPolyFlame.glb",
            clickable: true,
          },
          
    ];

    const soundEffects = [
        new Audio ('/sounds/bonfire_effect.mp3'),
    ]

    return objects.map(({position, r, s, url, clickable}) => (
        <Fire 
            key={JSON.stringify(position)}
            position={position.map((p) => p * 2) as [number, number, number]}
            url={url}
            soundEffects={soundEffects}
            r={r}
            s={s}
            clickable={clickable}
        />
    ))
}

const Fire = ({position, url, soundEffects, r, s, clickable}: ModelProps) => {
    const { scene } = useGLTF(url);
    const meshRef = useRef<Group>(null);
    const [visible, setVisible] = useState(false);
  
    const handleClick = (e: THREE.Event) => {
        if (!clickable) return;
        const mesh = meshRef.current;
        
        gsap.utils.random(soundEffects).play();
        
        gsap.to(mesh!.rotation, {
            x: `+=${gsap.utils.random(0, 2)}`,
            y: `+=${gsap.utils.random(0, 1)}`,
            z: `+=${gsap.utils.random(0, 1)}`,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            yoyo: true,
        });
    }
  
    const handlePointerOver = () => {
      document.body.style.cursor = "pointer";
    };
  
    const handlePointerOut = () => {
      document.body.style.cursor = "default";
    };
  
    useEffect(() => {
      let ctx = gsap.context(() => {
        setVisible(true);
        gsap.from(meshRef.current?.scale ?? { x: 0, y: 0, z: 0 }, {
          x: 1,
          y: 1,
          z: 1,
          duration: gsap.utils.random(0.8, 1.2),
          ease: "elastic.out(1,0.3)",
          delay: gsap.utils.random(0, 0.5),
        });

      });
      return () => ctx.revert();
    }, []);

    return (
        <group position={position} ref={meshRef}>
            <Float speed={3 * r} rotationIntensity={2 * r} floatIntensity={2 * r}>
                <primitive
                    object={scene}
                    scale={[s, s, s]}
                    onClick={handleClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    visible={visible}
                />
            </Float>
        </group>
    );
};

useGLTF.preload("/models/bonfire.glb");
useGLTF.preload("/models/lowPolyKnight.glb");
useGLTF.preload("/models/flame.glb");
useGLTF.preload("/models/flame2.glb");
useGLTF.preload("/models/flame3.glb");
useGLTF.preload("/models/lowPolyFlame.glb");

export default BonFire;