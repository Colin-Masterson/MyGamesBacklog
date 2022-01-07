import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Header() {
    return (
        <header className='header'>
            <div className='container flex'>
                <h1>MyGamesBacklog</h1>
                <nav>
                    <ul className='flex'>
                        <li>
                            <Link className='navlink' to='/games'>
                                My Games
                            </Link>
                        </li>
                        <li>
                            <Link className='navlink' to='/addgames'>
                                Add Game
                            </Link>
                        </li>
                        <li>
                            <Link className='navlink' to='/profile'>
                                Profile
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Icon className='icon' icon='gg:log-off' />
            </div>
        </header>
    );
}

export default Header;
