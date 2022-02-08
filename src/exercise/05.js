// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// const smallBox = <div className="box box--small">small lightblue box</div>
// const mediumBox = <div className="box box--medium">medium pink box</div>
// const largeBox = <div className="box box--large">large orange box</div>

function Box({size, children, style}) {
  return (
    <div
      className={`box  box--${size}`}
      style={{fontStyle: 'italic', ...style}}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>

      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
