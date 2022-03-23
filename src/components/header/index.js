import React from 'react';
import avatar from '../../assets/images/avatar.png';


function Header() {
    return(
        <header class="header">
            <div class="container">
                <div>
                    <h1>J. Connor O'Brien</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <img src={avatar} alt=""></img>
            </div>
        </header>
    )
}

export default Header;