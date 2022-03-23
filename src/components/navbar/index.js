import React from 'react';
import Icons from '../icons';

function Navbar() {
    return(
        <nav class="navbar">
            <div class="container">
                <ul class="nav">
                    <li>
                        <a href="#">Bio</a>
                    </li>
                    <li>
                        <a href="#portfolio">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a id='resume' target="_blank" href="https://drive.google.com/file/d/1sY6MGYYcJ07u5dt5vdSd4UPRn-GGm4xU/view?usp=sharing" rel="noreferrer">
                        Resume
                        </a>
                    </li>
                </ul>
                <Icons></Icons>
            </div>
        </nav>
    )
}

export default Navbar;