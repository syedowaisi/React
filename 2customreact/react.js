// import { Children } from "react";
function customrender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.Children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target) OR

    for (const prop in reactElement.props) { //using LOOP
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement= {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'Click me to visit google'
}

const mainContainer=document.getElementById('root');

customrender(reactElement,mainContainer)

