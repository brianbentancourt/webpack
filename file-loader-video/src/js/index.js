import '../css/estilos.css';
import { firstMessage, delayedMessage } from './message.js';
import devImg from '../img/dev.png';
import video1 from '../video/video1.mp4';
import video2 from '../video/video2.webm';

document.write(firstMessage)
delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', devImg)
document.body.append(img)

const video = document.createElement('video')
video.setAttribute('src', video1)
video.setAttribute('width', 480)
video.setAttribute('autoplay', true)
video.setAttribute('controls', true)
document.body.append(video)
