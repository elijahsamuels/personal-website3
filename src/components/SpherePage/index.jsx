import "./Sphere.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Sphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 132, 132]} /> {/* Radius, width segments, height segments */}
      <meshStandardMaterial color="royalblue" metalness={0.8} roughness={0.2} />
    </mesh>
  );
};
const My3DScene = () => {
  return (
    <Canvas style={{ width: "1000px", height: "1000px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 5, 5]} intensity={0.5} />

      <OrbitControls minDistance={3} maxDistance={20} />
      <Sphere />
    </Canvas>

  );
};

const SpherePage = () => {
  return (
    <div className="about-container1">
      <div className="sphere">
        <h4>Sphere</h4>
        <My3DScene />
      </div>
    </div>
  );
};

export default SpherePage;
