import React from 'react';
import SideBarList from '../SideBarList'
import "./SideBar.css";



const SideBar = props => (
    <div className="SideBar">
        <h2>Gourdchan</h2>
        {props.list.map(category => (
            <ul key={category.id}>
                <li className="category">{category.categoryname}</li>
                <SideBarList click={props.click} subs={category.subs} />
            </ul>
        ))}
        <h3>Login</h3>
    </div>

)


export default SideBar;
