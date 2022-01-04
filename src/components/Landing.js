import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <header>
            <div>
                <h1>MyGamesBacklog</h1>
                <Link to='/signin'>Login</Link>
            </div>
        </header>
    );
}

export default Landing;
