import { useGLTF } from '@react-three/drei'

export default function HumanBody() {
  const { scene } = useGLTF('/models/human_body.glb')
  return <primitive object={scene} scale={1.2} />
}
