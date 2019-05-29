import React from 'react'
import ReactLoading from 'react-loading'

// Types
// blank
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes

export default ({ type, color, height, width }) => (
  <ReactLoading
    type={type}
    color={color}
    height={height}
    width={width}
  />
)
