'use client'
import React, {useEffect} from 'react'
import {Adam} from '../components/ui/Adam.jsx'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
//import adam from '@/public/Assets/adam.glb'
import { Environment, OrbitControls } from '@react-three/drei';



const page = () => {
  
  
  return (
    <>
    
    <div id="canvas-container" style={{width:'100vw', height:'100vw',z:0}}>
      <Canvas camera={{
        position: [0.89, 2.5, -5.5],
        fov: 45,
      }}
      shadows> 
      <Environment preset="warehouse" />

      {/* Extra fill light */}
      <ambientLight intensity={0.5} />

      {/* Key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.9}
        castShadow
      />
      <Adam />
      <OrbitControls target={[0, 1.8, 0]}/>
        
      </Canvas>
    </div>
    </>
    
  )
}

export default page