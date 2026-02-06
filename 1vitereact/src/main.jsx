
import React from 'react';
import ReactDOM from  'react-dom/client';

import App from './App'

function MyApp(){
    return(
        <div>
            <h1>Custom app !</h1>
        </div>
    )
}

// const ReactElement= {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     Children:'Click me to visit google'
// } since already in js form,can't execute see below for correct execution way


const anotherUser="chai aur react"
const ReactElement=React.createElement(
    'a',
    {'href':'https://google.com','target':'_blank'},
    'Click me to visit google',
    anotherUser
)

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google </a>
)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
        // <React.StrictMode>
        // {/* ReactElement */}
    // anotherElement,
    // <>
        ReactElement
        // {/* <App/> */}
    // </>
        // <h2>Wow!</h2>
    // </React.StrictMode>
);
