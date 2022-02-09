import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
    //State variables
    const [text, setText] = useState('Mon textarea par defaut')
    //functions
    const markdownToHTML = () => {
        return { __html: marked(text) }
    }

    const changeTexHandler = (event) => {
        setText(event.target.value); 

    }

    return ( <
        div className = "App" >
        <
        div className = "elements" >

        <
        div className = "element" >
        < 
        textarea rows = "30"
        value = { text }
        onChange = {
            (e) => changeTexHandler(e)
        } > < /textarea> < /
        div >


        <
        div className = "element" >
        <
        div dangerouslySetInnerHTML = { markdownToHTML() } >
        <
        /div> </
        div>
        <
        /div> < /
        div >
    );
}

export default App;