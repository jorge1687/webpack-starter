import '../css/components.css';
//import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'sin nombre') => {
    console.log('Creando etiqueta');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre } !!`;

    document.body.append(h1);

    /*const image=document.createElement('img');
    image.src=webpacklogo;
    document.body.append(image);*/

}