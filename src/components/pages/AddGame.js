import { useState } from 'react';
import Header from '../misc/Header';

function AddGame() {
    const [gameName, setGameName] = useState('');
    const [gameSystem, setGameSystem] = useState('');
    const [gameStatus, setGameStatus] = useState('');

    return (
        <>
            <Header />
            <section className='addgame flex'>
                <div className='container align'>
                    <h2>
                        Add <span>Game</span>
                    </h2>
                    <form className='grid'>
                        <div className='form-input'>
                            <label htmlFor='game'>Game Name:</label>
                            <input type='text' id='game' name='game' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor='system'>System:</label>
                            <input type='text' id='system' name='system' />
                        </div>

                        <div className='radio-grid'>
                            <div>
                                <input
                                    id='1'
                                    type='radio'
                                    value='Backlog'
                                    name='status'
                                />{' '}
                                <label htmlFor='1'>Backlog</label>
                            </div>
                            <div>
                                <input
                                    id='2'
                                    type='radio'
                                    value='In Progress'
                                    name='status'
                                />{' '}
                                <label htmlFor='2'>In Progress</label>
                            </div>
                            <div>
                                <input
                                    id='3'
                                    type='radio'
                                    value='Finished'
                                    name='status'
                                />{' '}
                                <label htmlFor='3'>Finished</label>
                            </div>
                            <div>
                                <input
                                    id='4'
                                    type='radio'
                                    value='Completed'
                                    name='status'
                                />{' '}
                                <label htmlFor='4'>Completed</label>
                            </div>
                        </div>

                        <input type='button' className='btn' value='Add Game' />
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddGame;
