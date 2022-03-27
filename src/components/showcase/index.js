import React, { useEffect } from 'react';
import Project from '../project';
import reciplanner_pic from '../../assets/projects/reciplanner.png'
import brewdog_pic from '../../assets/projects/brewery_dog.png'
import weatherman_pic from '../../assets/projects/weatherman_ss.png'

function Showcase() {
    const projects = [
    {
        name:"Reciplanner", 
        img_src: reciplanner_pic, 
        github_url:"https://github.com/JConnrO/reciplanner", 
        website_url:"https://reciplanner.herokuapp.com/",
    },
    {
        name:"Brewery Dog", 
        img_src: brewdog_pic, 
        github_url:"https://github.com/JConnrO/brewery-dog", 
        website_url:"https://jconnro.github.io/brewery-dog/",
    },
    {
        name:"Weatherman", 
        img_src: weatherman_pic, 
        github_url:"https://github.com/JConnrO/weatherman", 
        website_url:"https://jconnro.github.io/weatherman/",
    },
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