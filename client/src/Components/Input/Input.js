import React from 'react';
import "./Input.css";

const Input = props => (
    <form className="Input" id="Input">
        <input type="text" className="title" name="title" placeholder="Title" value={props.titleValue} onChange={props.change} required={props.required}/>
        <textarea className="textbox" name="text" onChange={props.change} value={props.textValue} placeholder={"Post in " + props.board}required/>
        <button id="postButton" onClick={(event)=> props.submit(event)}>Post</button>
    </form>
)

export default Input;