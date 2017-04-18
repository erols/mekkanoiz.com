import React from 'react'
import {render} from 'react-dom'
import App from './App'

render(<App />, document.querySelector('main'))

var exports = module.exports ={};

exports.React = React;
exports.render = render;
exports.App = App;
