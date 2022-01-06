import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
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
                        />
                    </div>
                    <div className='form-input second'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                    <input type='button' className='btn' value='Login' />
                </form>
            </div>
        </section>
    );
}

export default SignIn;
