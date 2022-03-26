import React, { useEffect } from 'react';
import Project from '../project';

function Showcase() {
    const projects = [
        {name:"Reciplanner", description: "Lorem"},
        {name:"Brewery Dog", description: "Lorem2"},
        {name:"Weatherman", description: "Lorem3"},
    ];
    console.log(projects[0]);

    return( 
        <section class="boxes showcase" id="projects">
            <div class="container showcase-row-1">
                <Project project={projects[0]}/>
                <Project project={projects[1]}/>
                <Project project={projects[2]}/>
            </div>
        </section>
    )
}

export default Showcase;