import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signup } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validpassword, setValidPassword] = useState('');

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/profile');
    }, [user]);

    const signUpHandler = () => {
        if (!username) {
            console.log('Username Required!');
            return;
        }
        if (!email) {
            alert('Email Required!');
            return;
        }
        if (!password) {
            alert('Password Required!');
            return;
        }

        if (validpassword !== password) {
            alert('You used two different passwords!');
            return;
        }

        signup(username, email, password);

        setUsername('');
        setEmail('');
        setPassword('');
        setValidPassword('');

        alert('Signup successfull!');
    };

    return (
        <section className='signup flex'>
            <div className='container align'>
                <h2>
                    Sign up to{' '}
                    <Link to='/'>
                        <span>MyGamesBacklog</span>
                    </Link>
                </h2>
                <form className='grid'>
                    <div className='form-input'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='Username'
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            value={username}
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='email@example.com'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                        />
                    </div>
                    <div className='form-input last'>
                        <label htmlFor='confpassword'>Re-type Password:</label>
                        <input
                            type='password'
                            id='confpassword'
                            name='confpassword'
                            placeholder='Re-type Password'
                            value={validpassword}
                            onChange={(e) => {
                                setValidPassword(e.target.value);
                            }}
                        />
                    </div>
                    <p>
                        Already have an account?{' '}
                        <Link to='/signin' className='login'>
                            Login
                        </Link>
                    </p>
                    <input
                        type='button'
                        className='btn'
                        value='Create Account'
                        onClick={signUpHandler}
                    />
                </form>
            </div>
        </section>
    );
}

export default SignUp;
