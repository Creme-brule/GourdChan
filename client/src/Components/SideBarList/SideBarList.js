import React from 'react';
import {Link} from 'react-router-dom';

const SideBarList = props => (
        props.subs.map(sub => <li className="board"><Link to={"/b/"+sub.name} onClick={() => props.click(sub.name)}>{sub.name}</Link></li>)
);

export default SideBarList;