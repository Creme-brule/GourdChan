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
         <form id="signup" name="signup" method="post" action="/auth/signup">

<label for="username"></label>
<input class="text" name="username" type="text" placeholder="Username" />

<label for="firstname"></label>
<input name="firstname" type="text" placeholder="First Name" />

<label for="lastname"></label>
<input name="lastname" type="text" placeholder="Last Name" />

<label for="password"></label>
<input name="password" type="password" placeholder="Password" />


<button class="waves-effect waves-light btn black" id="button2" type="submit" value="Sign Up">Create Account</button>
</form>
            <br/>
            <form id="signin" name="signin" method="post" action="/auth/signin">

<label for="username"></label>
<input class="text" name="username" type="text" placeholder="Username" />

<label for="password"></label>
<input name="password" type="password" placeholder="Password" />


<button class="waves-effect waves-light btn black" id="button2" type="submit" value="Sign In">LOG IN</button>
</form>
    </div>

)

export default SideBar;