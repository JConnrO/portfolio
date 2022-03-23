import React from 'react';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';

function Icons() {
    return(
        <ul className="icons">
            <li className="icon">
                <a href="https://github.com/JConnrO" target="_blank" id="github-link">
                    <img alt='github' id="github-icon" src={github} style={{ height:"32px", width: "32px" }}/>
                </a>
            </li>
            <li className="icon">
                <a href="https://www.linkedin.com/in/jconnorobrien/" target="_blank"  id="linkedin-link">
                    <img alt='linkedin' id="linkedin-icon" src={linkedin} style={{ height:"32px", width: "32px" }}/>
                </a>
            </li>
        </ul>
    )
}
export default Icons;