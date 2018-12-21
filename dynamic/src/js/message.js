import {renderToDom } from './renderToDom.js'

const waitTime = new Promise((ok, error) =>{
    setTimeout( () => {
        ok('pasaron 2 segundos')
    }, 2000)
})


export const firstMessage = 'hola mundo desde modulo'

export const delayedMessage= async () =>{
        const message = await waitTime
        const element = document.createElement('p')
        element.textContent = message
        renderToDom(element)
    }


