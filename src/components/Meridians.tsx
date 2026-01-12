import meridians from '../data/meridians.json'
import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Meridians() {
  const ref = useRef<any>()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.dashOffset = -clock.elapsedTime * 0.5
    }
  })

  return (
    <>
      {meridians.map((m, i) => (
        <Line
          ref={ref}
          key={i}
          points={m.points as any}
          color={m.color}
          dashed
        />
      ))}
    </>
  )
}
