'use client';

import { Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

import Band from './band';

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload('/assets/3d/card.glb');
useTexture.preload('/assets/images/tag_texture.webp');

const Badge = () => {
    return (
        <Canvas
            camera={{ fov: 25, position: [0, 0, 13] }}
            style={{ backgroundColor: 'transparent', height: '100%', width: '100%' }}
        >
            <ambientLight intensity={Math.PI} />
            <Physics debug={false} gravity={[0, -40, 0]} interpolate timeStep={1 / 60}>
                <Band />
            </Physics>
            <Environment background blur={0.75}>
                <Lightformer
                    color="white"
                    intensity={2}
                    position={[0, -1, 5]}
                    rotation={[0, 0, Math.PI / 3]}
                    scale={[100, 0.1, 1]}
                />
                <Lightformer
                    color="white"
                    intensity={3}
                    position={[-1, -1, 1]}
                    rotation={[0, 0, Math.PI / 3]}
                    scale={[100, 0.1, 1]}
                />
                <Lightformer
                    color="white"
                    intensity={3}
                    position={[1, 1, 1]}
                    rotation={[0, 0, Math.PI / 3]}
                    scale={[100, 0.1, 1]}
                />
                <Lightformer
                    color="white"
                    intensity={10}
                    position={[-10, 0, 14]}
                    rotation={[0, Math.PI / 2, Math.PI / 3]}
                    scale={[100, 10, 1]}
                />
            </Environment>
        </Canvas>
    );
};

export default Badge;
