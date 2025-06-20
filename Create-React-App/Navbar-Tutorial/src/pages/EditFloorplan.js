import React from 'react'
// import {Canvas} from './pages/index'; This is not working somehow, so importing directly for now
import Canvas from './Canvas';

function EditFloorplan() {
  return (
    <div style={{ padding: '20px' }}>
      <div>
        <button style={{ marginRight: '10px' }}>Add Wall</button>
        <button style={{ marginRight: '10px' }}>Move Wall</button>
        <button>Delete Wall</button>
      </div>
      <Canvas />
    </div>
  )
}

export default EditFloorplan