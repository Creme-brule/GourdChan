import React from 'react';

const Input = props => (
    <form className="Input">
        <input type="text" name="title" placeholder="Title" onChange={props.change} required={props.required}/>
        <textarea className="textbox" name="text" onChange={props.change} placeholder={"Post in " + props.board}required/>
        <button onClick={(event)=> props.submit(event)}>Post</button>
    </form>
)

export default Input;