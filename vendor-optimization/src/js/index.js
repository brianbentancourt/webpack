import '../css/estilos.css';
import { firstMessage, delayedMessage } from './message.js';
import devImg from '../img/dev.png';
import data from '../../teachers.json';
import { renderToDom } from './renderToDom';
import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';



render(<Teachers data={data}/>, document.getElementById('container'))



// data.teachers.forEach(teacher => {
//     const element = document.createElement('li')
//     element.textContent = teacher.name
//     renderToDom(element)
// })

// document.write(firstMessage)
// delayedMessage()

// const img = document.createElement('img')
// img.setAttribute('src', devImg)
// document.body.append(img)


