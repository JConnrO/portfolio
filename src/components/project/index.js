import React from 'react';

function Project(props) {
    const {
        project = []
    } = props;

    return( 
        <div class="box">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </div> 
    )
}

export default Project;