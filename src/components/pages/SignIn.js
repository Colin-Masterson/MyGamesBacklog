import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import { warnMsg } from '../misc/Toast';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate(`/profile/${user.uid}`);
    }, [user, loading, navigate]);

    const signInHandler = () => {
        if (!email) {
            warnMsg('Email Required!');
            return;
        }
        if (!password) {
            warnMsg('Password Required!');
            return;
        }

        signin(email, password);

        setEmail('');
        setPassword('');
    };

    return (
        <section className='signin flex'>
            <div className='container align'>
                <ToastContainer />
                <h2>
                    Sign in to{' '}
                    <Link to={`/`}>
                        <span>MyGamesBacklog</span>
                    </Link>
                </h2>
                <form className='grid'>
                    <div className='form-input first'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='email@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-input second'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <input
                        type='button'
                        className='btn'
                        value='Login'
                        onClick={signInHandler}
                    />
                </form>
            </div>
        </section>
    );
}

export default SignIn;
