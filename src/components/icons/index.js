import React from 'react';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import Icon from '../icon';

function Icons() {
    return(
        <ul className="icons">
            <li>
                <Icon
                    icon_url={"https://github.com/JConnrO"}
                    icon_src={github}
                    img_alt={"Link to Personal Github"}
                    img_id={"github_home"}  
                />
            </li>
            <li>
                <Icon
                    icon_url={"https://www.linkedin.com/in/jconnorobrien/"}
                    icon_src={linkedin}
                    img_alt={"Link to Linkedin"}
                    img_id={"linkedin-icon"}  
                />
            </li>
        </ul>
    )
}
export default Icons;