import React from 'react';
import {Link} from 'react-router-dom';
import "./SideBarList.css";



const SideBarList = props => (
        props.subs.map(sub => <li className="board" key={sub.id}><Link to={"/b/"+sub.boardname} style={{ textDecoration: 'none', color: '#FFF' }}>{sub.boardname }</Link></li>)
);


export default SideBarList;