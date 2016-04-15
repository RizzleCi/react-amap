import React from 'react'
import CSSModules from 'react-css-modules'
import { render } from 'react-dom'
import styles from './style.css'

class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>hi</div>
    )
  }
}

export default CSSModules(Map, styles)
