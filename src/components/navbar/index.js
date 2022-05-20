import React from 'react';
import Icons from '../icons';

function Navbar() {
    return(
        <nav class="navbar">
            <div class="container">
                <ul class="nav">
                    <li>
                        <a id='resume' target="_blank" href="https://drive.google.com/file/d/1sY6MGYYcJ07u5dt5vdSd4UPRn-GGm4xU/view?usp=sharing" rel="noreferrer">
                        Resume
                        </a>
                    </li>
                    <li>
                        <a href="#bio">Bio</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
                <Icons></Icons>
            </div>
        </nav>
    )
}

export default Navbar;