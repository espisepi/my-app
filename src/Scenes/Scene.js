import React from 'react'
import './Scene.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, CurveModifier } from '@react-three/drei'

// import CurveModifierScene from './CurveModifierScene'
import OrbitControlsFollowObject from './OrbitControlsFollowObject'
import Curve from './Curve'

export default function Scene() {

    const positions = React.useMemo(()=>(new Array(10).fill(0)));

    return (
        <Canvas className="canvas" >

            { positions.map((v,i)=>(
                <Box key={i} position={[i,i,0]} />
            )) }

            <Curve velocity={1.0} visibleLine={true}>
                <mesh name="mesh-curve-modifier">
                    <boxBufferGeometry attach="geometry" />
                    <meshBasicMaterial attach="material" color='red' />
                </mesh>
            </Curve>

            <OrbitControlsFollowObject nameFollowObject="mesh-curve-modifier"  />

        </Canvas>
    )
}
