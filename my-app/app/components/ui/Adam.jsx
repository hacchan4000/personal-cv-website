import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Adam(props) {
  const { nodes, materials } = useGLTF('./adam.glb')
  console.log('ALL MATERIALS:', materials)
  console.log('HAIR MATERIAL:', materials['Material.002'])
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.badan.geometry}
        material={materials['Material.027']}
        position={[-0.034, 1.294, -0.09]}
        rotation={[-Math.PI, 1.5, -Math.PI]}
        scale={[0.517, 0.548, 0.535]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kaki.geometry}
        material={nodes.kaki.material}
        position={[-0.236, 0.048, -0.058]}
        rotation={[-Math.PI, 1.5, -Math.PI]}
        scale={[0.196, 0.133, 0.198]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kepala.geometry} 
        material={materials['Material.027']}
        position={[-0.028, 2.552, -0.016]}
        rotation={[0, -0.025, 0.014]}
        flatShading={false}
        scale={0.641}>
        <group
          position={[-0.378, 0.213, -0.504]}
          rotation={[-3.123, -0.272, -2.491]}
          scale={21.947}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tiny_Eye_1075.geometry}
            material={materials['Tiny Iris 1.3 (Style Honey).003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tiny_Eye_1075_1.geometry}
            material={materials['Tiny Sclera 1.3 (Style Honey).002']}
          />
        </group>
        <group position={[0.364, 0.219, -0.573]} rotation={[-3.037, 0.369, -2.395]} scale={21.947}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tiny_Eye_1009.geometry}
            material={materials['Tiny Iris 1.3 (Style Honey).003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tiny_Eye_1009_1.geometry}
            material={materials['Tiny Sclera 1.3 (Style Honey).002']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.027']}
          position={[-0.493, 0.616, -0.797]}
          rotation={[-1.98, 1.424, 1.941]}
          scale={[0.043, 0.039, 0.271]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.042']}
          position={[-0.458, 0.444, -1.008]}
          rotation={[-1.7, 1.125, 1.662]}
          scale={[0.043, 0.037, 0.261]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.045']}
          position={[-0.528, 0.493, -0.796]}
          rotation={[-1.732, 1.211, 1.694]}
          scale={[0.043, 0.039, 0.271]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath003.geometry}
          material={materials['Material.045']}
          position={[0.014, 1.018, -0.357]}
          rotation={[3, 0.49, -1.894]}
          scale={[0.306, 0.268, 0.279]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.045']}
          position={[0.043, 0.766, 0.204]}
          rotation={[2.719, 1.556, -2.74]}
          scale={[1.055, 0.517, 0.925]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lengan.geometry}
        material={materials['Material.027']}
        position={[-0.329, 1.817, -0.048]}
        rotation={[1.58, 0.133, -1.642]}
        scale={[0.138, 0.171, 0.138]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.paha.geometry}
        material={materials['skin.003']}
        position={[-0.221, 0.731, -0.06]}
        rotation={[3.003, 1.499, -3.003]}
        scale={[0.156, 0.493, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tangan.geometry}
        material={materials['skin.003']}
        position={[-0.718, 1.231, -0.01]}
        rotation={[2.07, 1.424, -2.074]}
        scale={[0.573, 0.503, 0.589]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={materials['Material.045']}
        position={[-0.083, 3.452, -0.452]}
        rotation={[-1.971, 0.928, 0.76]}
        scale={[-0.159, -0.115, -0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath002.geometry}
        material={materials['Material.045']}
        position={[-0.095, 3.194, 0.631]}
        rotation={[2.952, -0.899, -2.122]}
        scale={[0.197, 0.175, 0.183]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath005.geometry}
        material={materials['Material.045']}
        position={[-0.102, 3.178, -0.55]}
        rotation={[0.423, 1.28, 0.761]}
        scale={[0.196, 0.172, 0.179]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={materials['Material.045']}
        position={[0.048, 3.694, 0.089]}
        rotation={[-2.79, 0.625, 2.439]}
        scale={[0.093, 0.087, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.celana.geometry}
        material={materials['pants.002']}
        position={[-0.017, 1.016, -0.098]}
        rotation={[-Math.PI, 1.5, -Math.PI]}
        scale={[0.641, 0.229, 0.771]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sepatu.geometry}
        material={materials['shoes.002']}
        position={[-0.225, 0.096, -0.079]}
        rotation={[-Math.PI, 1.285, -Math.PI]}
        scale={[0.21, 0.125, 0.189]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.063']}
        position={[-0.026, 1.669, -0.088]}
        rotation={[-Math.PI, 1.5, -Math.PI]}
        scale={[0.476, 0.388, 0.497]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.064']}
        position={[-0.563, 1.664, -0.025]}
        rotation={[1.67, 0.951, -1.693]}
        scale={[0.184, 0.181, 0.178]}
      />
    </group>
  )
}

useGLTF.preload('./adam.glb')