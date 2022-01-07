import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/profile');
    }, [user]);

    const signInHandler = () => {
        if (!email) {
            alert('Email Required');
            return;
        }
        if (!email) {
            alert('Email Required');
            return;
        }

        signin(email, password);

        setEmail('');
        setPassword('');
    };

    return (
        <section className='signin flex'>
            <div className='container align'>
                <h2>
                    Sign in to{' '}
                    <Link to='/'>
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
