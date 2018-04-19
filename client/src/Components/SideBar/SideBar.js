import React from 'react';
import SideBarList from '../SideBarList'

const SideBar = props => (
    <div className="SideBar">
        {props.list.map(category => (
            <ul key={category.id}>
                <li className="category">{category.categoryname}</li>
                <SideBarList click={props.click} subs={category.subs}/>
            </ul>
        ))}
    </div>
    
)


export default SideBar;