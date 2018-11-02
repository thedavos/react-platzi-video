import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../pages/containers/home'
/* import Category from './../categories/components/category' */
import data from './../api.json'

// react sive para crear componentes
// reactDOM para renderizar y ponerlos en algún lugar

const app = document.getElementById('app')
/* const holaMundo = <h1>Hola Mundo!</h1> */

/* ReactDOM.render(qué renderizo, dónde lo hago)*/
ReactDOM.render(
    <Home data={ data } />,
    app
)