import React from 'react'
import { render } from 'react-dom'
import ListComponent from './components/List'
import './main.css'


const MOUNT_NODE = document.getElementById('root')

const App = () => (
  <div className="container">
    <ListComponent/>
  </div>
)

render(<App />, MOUNT_NODE)
