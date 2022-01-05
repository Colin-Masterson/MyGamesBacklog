import React from 'react';

function SignUp() {
    return (
        <section className='signup flex'>
            <div className='container'>
                <h2>
                    Sign up to <span>MyGamesBacklog</span>
                </h2>
                <form>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Username'
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                    />
                    <label htmlFor='confpassword'>Confirm Password</label>
                    <input
                        type='password'
                        id='confpassword'
                        name='confpassword'
                        placeholder='Confirm Password'
                    />
                </form>
            </div>
        </section>
    );
}

export default SignUp;
