import React from 'react';
import "./Input.css";

const Input = props => (
    <form className="Input">
        {(props.type === "board") ?  
        <input type="text" class="title" name="title" placeholder="Title" onChange={props.change} required/> : null}
        <textarea className="textbox" name="text" onChange={props.change} placeholder={"Post in " + props.board}required/>
        <button id="postButton" onClick={(event)=> props.submit(event)}>Post</button>
    </form>
)

export default Input;