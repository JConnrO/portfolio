import React from 'react';
import avatar from '../../assets/images/avatar.png';


function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="flex-row">
                    <h1>J. Connor O'Brien</h1>
                    <p>
                    Software developer channeling passions for strategy, solving puzzles and coffee into JavaScript code.
                    I enjoy building iteratively, figuring out life's efficiencies and fixing problems. Appreciation for team-driven and test-driven environments, learning new things and continuous improvement.  
                    </p>
                </div>
                <img src={avatar} alt=""></img>
            </div>
        </header>
    )
}

export default Header;