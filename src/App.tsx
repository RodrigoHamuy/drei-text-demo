import { Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
    <Canvas>
      <Suspense>
      <Text fontSize={1}>Some text</Text>
      </Suspense>
      <axesHelper />
    </Canvas>
    </div>
  )
}

export default App
