import '../css/estilos.css';
import { firstMessage, delayedMessage } from './message.js';
import devImg from '../img/dev.png';
import data from '../../teachers.json';
import { renderToDom } from './renderToDom';
import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';



render(<Teachers data={data}/>, document.getElementById('container'))