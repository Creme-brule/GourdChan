import React from 'react';
import SideBarList from '../SideBarList'

const SideBar = props => (
    <div className="SideBar">
        {props.list.map(catagory => (
            <ul key={catagory.id}>
                <li className="category">{catagory.name}</li>
                <SideBarList click={props.boardClick} subs={catagory.subs}/>
            </ul>
        ))}
    </div>
)

export default SideBar;