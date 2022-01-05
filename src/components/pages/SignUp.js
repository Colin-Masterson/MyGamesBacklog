import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <section className='signup flex'>
            <div className='container align'>
                <h2>
                    Sign up to <span>MyGamesBacklog</span>
                </h2>
                <form className='grid'>
                    <div className='form-input'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='Username'
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='email@example.com'
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                    <div className='form-input last'>
                        <label htmlFor='confpassword'>Re-type Password:</label>
                        <input
                            type='password'
                            id='confpassword'
                            name='confpassword'
                            placeholder='Re-type Password'
                        />
                    </div>
                    <p>
                        Already have an account?{' '}
                        <Link to='/login' className='login'>
                            Login
                        </Link>
                    </p>
                </form>
                <input type='button' className='btn' value='Create Account' />
            </div>
        </section>
    );
}

export default SignUp;
