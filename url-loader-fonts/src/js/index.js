import '../css/estilos.css';
import { firstMessage, delayedMessage } from './message.js';
import devImg from '../img/dev.png';

document.write(firstMessage)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', devImg)
document.body.append(img)
console.log(firstMessage)