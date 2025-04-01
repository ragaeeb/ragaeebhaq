'use client';

import { useGLTF, useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import {
    BallCollider,
    CuboidCollider,
    RapierRigidBody,
    RigidBody,
    useRopeJoint,
    useSphericalJoint,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { RefObject, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

const segmentProps = {
    angularDamping: 2,
    canSleep: true,
    colliders: false,
    linearDamping: 2,
    type: 'dynamic',
} as const;

export default function Band({ maxSpeed = 50, minSpeed = 10 }) {
    const band = useRef<THREE.Mesh<MeshLineGeometry, MeshLineMaterial>>(null);
    const fixed = useRef<RapierRigidBody>(null);
    const j1 = useRef<RapierRigidBody>(null);
    const j2 = useRef<RapierRigidBody>(null);
    const j3 = useRef<RapierRigidBody>(null);

    const card = useRef<RapierRigidBody>(null);
    const vec = new THREE.Vector3();
    const ang = new THREE.Vector3();
    const rot = new THREE.Vector3();
    const dir = new THREE.Vector3();
    const [dragged, drag] = useState<false | THREE.Vector3>(false);
    const [hovered, hover] = useState(false);

    const { materials, nodes } = useGLTF('/assets/3d/card.glb');
    const texture = useTexture('/assets/images/tag_texture.webp');

    const [curve] = useState(
        () =>
            new THREE.CatmullRomCurve3([
                new THREE.Vector3(),
                new THREE.Vector3(),
                new THREE.Vector3(),
                new THREE.Vector3(),
            ]),
    );

    useRopeJoint(fixed as RefObject<RapierRigidBody>, j1 as RefObject<RapierRigidBody>, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j1 as RefObject<RapierRigidBody>, j2 as RefObject<RapierRigidBody>, [[0, 0, 0], [0, 0, 0], 1]);
    useRopeJoint(j2 as RefObject<RapierRigidBody>, j3 as RefObject<RapierRigidBody>, [[0, 0, 0], [0, 0, 0], 1]);

    useSphericalJoint(j3 as RefObject<RapierRigidBody>, card as RefObject<RapierRigidBody>, [
        [0, 0, 0],
        [0, 1.45, 0],
    ]);

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? 'grabbing' : 'grab';
            return () => void (document.body.style.cursor = 'auto');
        }
        return () => void (document.body.style.cursor = 'auto');
    }, [hovered, dragged]);

    useFrame((state, delta) => {
        if (!fixed.current || !j1.current || !j2.current || !j3.current || !band.current || !card.current) return;

        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
            dir.copy(vec).sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));
            [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z,
            });
        }

        if (fixed.current) {
            const [j1Lerped, j2Lerped] = [j1, j2].map((ref) => {
                if (ref.current) {
                    const lerped = new THREE.Vector3().copy(ref.current.translation());

                    const clampedDistance = Math.max(0.1, Math.min(1, lerped.distanceTo(ref.current.translation())));

                    return lerped.lerp(
                        ref.current.translation(),
                        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
                    );
                }
            });

            curve.points[0].copy(j3.current.translation());
            curve.points[1].copy(j2Lerped ?? j2.current.translation());
            curve.points[2].copy(j1Lerped ?? j1.current.translation());
            curve.points[3].copy(fixed.current.translation());
            band.current.geometry.setPoints(curve.getPoints(32));

            ang.copy(card.current.angvel());
            rot.copy(card.current.rotation());
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, false);
        }
    });

    curve.curveType = 'chordal';
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <>
            <group position={[0, 4.6, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type="fixed" />
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>

                <RigidBody
                    position={[2, 0, 0]}
                    ref={card}
                    {...segmentProps}
                    type={dragged ? 'kinematicPosition' : 'dynamic'}
                >
                    <CuboidCollider args={[0.8, 1.125, 0.01]} />
                    <group
                        onPointerDown={(e) => (
                            (e.target as Element)?.setPointerCapture(e.pointerId),
                            card.current &&
                                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
                        )}
                        onPointerOut={() => hover(false)}
                        onPointerOver={() => hover(true)}
                        onPointerUp={(e) => ((e.target as Element)?.releasePointerCapture(e.pointerId), drag(false))}
                        position={[0, -1.25, -0.05]}
                        scale={2.25}
                    >
                        {/* @ts-expect-error geometry/map are not declared? */}
                        <mesh geometry={nodes.card.geometry}>
                            <meshPhysicalMaterial
                                clearcoat={1}
                                clearcoatRoughness={0.15}
                                // @ts-expect-error geometry/map are not declared?
                                map={materials.base.map}
                                map-anisotropy={16}
                                metalness={0.5}
                                roughness={0.3}
                            />
                        </mesh>
                        <mesh
                            // @ts-expect-error geometry/map are not declared?
                            geometry={nodes.clip.geometry}
                            material={materials.metal}
                            material-roughness={0.3}
                        />
                        {/* @ts-expect-error geometry/map are not declared? */}
                        <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
                    </group>
                </RigidBody>
            </group>
            <mesh ref={band}>
                <meshLineGeometry />
                <meshLineMaterial
                    color="white"
                    depthTest={false}
                    lineWidth={1}
                    map={texture}
                    repeat={new THREE.Vector2(-3, 1)}
                    resolution={new THREE.Vector2(2, 1)}
                    useMap={1}
                />
            </mesh>
        </>
    );
}
