// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import PropTypes from 'prop-types'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

//01 e 02
function Box({size, color = 'grey', ...props}) {
  const sizeClass = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClass}`.trim()}
      style={{fontStyle: 'italic', backgroundColor: color}}
    >
      {Object.values(props)}
    </div>
  )
}

Box.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  text: PropTypes.string,
}

function App() {
  return (
    <div>
      <Box size="large" color="red">
        outro box
      </Box>
      <Box size="small" color="lightblue" text="small box" />
      <Box size="medium" color="pink" text="medium box" />
      <Box size="large" color="orange" text="large box" />
      <Box size="large" text="large box" />
    </div>
  )
}

/* 
PROF VERSION
const smallBox = (
  <div className="box box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </div>
)
const mediumBox = (
  <div className="box box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </div>
)
const largeBox = (
  <div className="box box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </div>
)
// 01 e 02
function Box({size, style = {backgroundColor: 'grey'}, ...props}) {
  const sizeClass = size ? `box--size` : ''
  return (
    <div
      className={`box ${sizeClass}`.trim()}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

Box.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string,
  text: PropTypes.string,
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="large" style={{backgroundColor: 'red'}}>
        outro box
      </Box>
      <Box size="medium" style={{backgroundColor: 'purple'}}>
        another box
      </Box>
      <Box size="small" style={{backgroundColor: 'green'}}>
        little box
      </Box>
      <Box>sizeless box</Box>
      <Box style={{backgroundColor: 'cyan'}}>other box</Box>
    </div>
  )
}
*/

export default App
