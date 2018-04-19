import React from 'react';
import {Link} from 'react-router-dom';

const SideBarList = props => (
        props.subs.map(sub => <li className="board" key={sub.id}><Link onClick={()=>props.click("board", sub.boardname, sub.id)} to={"/b/"+sub.boardname}>{sub.boardname}</Link></li>)
);

export default SideBarList;