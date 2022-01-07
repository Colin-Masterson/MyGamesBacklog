import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { signout, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }

        if (!user) navigate('/');
    }, [user, loading, navigate]);

    return (
        <>
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
                                <Link className='navlink' to='/addgame'>
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
                    <Icon
                        className='icon signout'
                        icon='gg:log-off'
                        onClick={() => signout()}
                    />
                    <Icon
                        className='icon hidden'
                        icon='icon-park-outline:hamburger-button'
                    />
                </div>
            </header>
            <div className='mobile-nav'>
                <nav>
                    <ul className='flex'>
                        <li>
                            <Link className='navlink' to='/games'>
                                My Games
                            </Link>
                        </li>
                        <li>
                            <Link className='navlink' to='/addgame'>
                                Add Game
                            </Link>
                        </li>
                        <li>
                            <Link className='navlink' to='/profile'>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <p className='navlink' onClick={() => signout()}>
                                Sign Out
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
