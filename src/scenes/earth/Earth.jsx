import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Moon from "./Moon";
import ISS from "./ISS";

const Earth = ({ displacementScale }) => {

    const earthRef = useRef();

    useFrame(() => {
        earthRef.current.rotation.y += 0.002;
    });
    const [
        earthTexture,
        earthNormalMap,
        earthSpecularMap,
        earthDisplacementMap,
    ] = useTexture([
        "/assets/earth_day.jpg",
        "/assets/earth_normal.jpeg",
        "/assets/earth_specular.jpeg",
        "/assets/earth_displacement.jpeg",
    ]);
    return (
        <group>

            <mesh receiveShadow ref={earthRef}>
                {/* radius, X-axis, Y-axis */}
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial
                    map={earthTexture}
                    normalMap={earthNormalMap}
                    specularMap={earthSpecularMap}
                    shininess={1000}
                    displacementMap={earthDisplacementMap}
                    displacementScale={displacementScale}
                />
            </mesh>
            <ISS />
            <Moon />
        </group>
    );
};

export default Earth;
