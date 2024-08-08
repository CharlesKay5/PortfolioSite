"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useEffect, useState } from 'react';
import { Group, Box3, Vector3 } from 'three';

const Model = () => {
    const { scene } = useGLTF('/david_head/scene.gltf');
    const ref = useRef<Group>(null);

    useEffect(() => {
        if (ref.current) {
            const box = new Box3().setFromObject(scene);
            const center = new Vector3();
            box.getCenter(center);
            scene.position.sub(center);
        }
    }, [scene]);

    useFrame(({ clock }) => {
        if (ref.current) {
            const elapsedTime = clock.getElapsedTime();
            ref.current.rotation.y = elapsedTime * 0.1;
        }
    });

    return (
        <group ref={ref}>
            <primitive object={scene} />
        </group>
    );
};

export default function DavidHead() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="model flex justify-center scale-20 xl:scale-100 z-10" style={{ height: '500px', width: '500px' }}>
            {isVisible && (
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 10 }}>
                    <ambientLight intensity={3} />
                    <spotLight intensity={1300} angle={Math.PI / 6} penumbra={2} position={[0, 10, 10]} castShadow />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
                </Canvas>
            )}
        </div>
    );
}
