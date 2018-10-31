import React from 'react'
import ReactDOM from 'react-dom'
import Media from './src/playlist/components/media'

// react sive para crear componentes
// reactDOM para renderizar y ponerlos en algún lugar

const app = document.getElementById('app')
/* const holaMundo = <h1>Hola Mundo!</h1> */

/* ReactDOM.render(qué renderizo, dónde lo hago)*/
ReactDOM.render(
    <Media 
        title="¿Por qué aprender React?" 
        author="Leonidas Esteban"
        image="./images/covers/responsive.jpg"
        alt="Responsive Design" 
    />,
    app
)