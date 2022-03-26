import React from 'react';
import Project from '../project';

function Showcase() {
    return( 
        <section class="boxes showcase" id="projects">
            <div class="container showcase-row-1">
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
            <div class="container showcase-row-1">
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
        </section>
    )
}

export default Showcase;