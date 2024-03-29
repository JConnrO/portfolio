import React from 'react';
import Icon from '../icon';
import github from '../../assets/icons/github.png';
import website from '../../assets/icons/website.png';

function Project(props) {
    const {
        project = []
    } = props;

    return( 
        <div className="box project flex-row" onclick={project.website_url}>
            <h2 className="flex-row">{project.name}</h2>
            <img src={project.img_src} className="flex-row project_img"/>
            <div className="flex-row project_buttons">
                <a href={project.github_url}>
                    <button type="button" className="project_button github_button">
                        <Icon 
                            icon_url={project.github_url}
                            icon_src={github}
                            img_alt={"Link to Personal Github"}
                            img_id={"github_home"}  
                        />
                    </button>
                </a>
                <a href={project.website_url}>
                    <button type="button" className="project_button website_button">
                            <Icon 
                                icon_url={project.website_url}
                                icon_src={website}
                                img_alt={"Link to Personal Github"}
                                img_id={"github_home"}  
                            />
                    </button>
                </a>
            </div>
        </div> 
    )
}

export default Project;