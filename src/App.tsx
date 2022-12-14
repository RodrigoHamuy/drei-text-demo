import { Text, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import './App.css'

export function App() {

  return (
    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
      <Canvas>
        <Suspense fallback={<Html>waiting for {'<Text\>'} to load</Html>}>
          <Text fontSize={1}>Some text</Text>
        </Suspense>
        <axesHelper />
      </Canvas>
    </div>
  )
}