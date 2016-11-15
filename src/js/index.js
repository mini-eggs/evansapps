import React from 'react'
import ReactDOM from 'react-dom'
import getData from './data'
import Routes from './routes'

const node = document.getElementById('root')

getData().then(data => { ReactDOM.render(...[Routes(data), node]) })
