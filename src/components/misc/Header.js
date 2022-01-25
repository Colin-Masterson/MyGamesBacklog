import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { signout, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
    const [user, loading] = useAuthState(auth);
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();

    const menuHandler = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        if (loading) {
            return;
        }

        if (!user) navigate(`/${user.uid}`);
    }, [user, loading, navigate]);

    return (
        <>
            <header className='header'>
                <div className='container flex'>
                    <h1>MyGamesBacklog</h1>
                    <nav>
                        <ul className='flex'>
                            <li>
                                <Link
                                    className='navlink'
                                    to={`/games/${user.uid}`}
                                >
                                    My Games
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='navlink'
                                    to={`/addgame/${user.uid}`}
                                >
                                    Add Game
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='navlink'
                                    to={`/profile/${user.uid}`}
                                >
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
                        onClick={menuHandler}
                    />
                </div>
            </header>
            <div
                className='mobile-nav'
                style={{ display: `${toggle} ? 'block' : 'none'` }}
            >
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

            <style jsx='true'>{`
                .mobile-nav {
                    display: ${toggle ? 'block' : 'none'};
                }
            `}</style>
        </>
    );
}

export default Header;
