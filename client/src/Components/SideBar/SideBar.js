import React from 'react';
import SideBarList from '../SideBarList'
import "./SideBar.css";



const SideBar = props => (
    <div className="SideBar">
        <h2>Gourdchan</h2>
        {props.list.map(catagory => (
            <ul key={catagory.id}>
                <li className="category">{catagory.name}</li>
                <SideBarList click={props.boardClick} subs={catagory.subs}/>
            </ul>
        ))}
    </div>
)

export default SideBar;