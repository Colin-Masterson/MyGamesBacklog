import { useState } from 'react';
import Header from '../misc/Header';
import { addgame, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function AddGame() {
    const [gameName, setGameName] = useState('');
    const [gameSystem, setGameSystem] = useState('');
    const [gameStatus, setGameStatus] = useState('');

    const [user] = useAuthState(auth);

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
                            <input
                                type='text'
                                id='game'
                                name='game'
                                value={gameName}
                                onChange={(e) => setGameName(e.target.value)}
                            />
                        </div>
                        <div className='form-input'>
                            <label htmlFor='system'>System:</label>
                            <input
                                type='text'
                                id='system'
                                name='system'
                                value={gameSystem}
                                onChange={(e) => setGameSystem(e.target.value)}
                            />
                        </div>

                        <div className='radio-grid'>
                            <div>
                                <input
                                    id='1'
                                    type='radio'
                                    value='Backlog'
                                    name='status'
                                    checked={gameStatus === 'Backlog'}
                                    onChange={(e) =>
                                        setGameStatus(e.target.value)
                                    }
                                />{' '}
                                <label htmlFor='1'>Backlog</label>
                            </div>
                            <div>
                                <input
                                    id='2'
                                    type='radio'
                                    value='In Progress'
                                    name='status'
                                    checked={gameStatus === 'In Progress'}
                                    onChange={(e) =>
                                        setGameStatus(e.target.value)
                                    }
                                />{' '}
                                <label htmlFor='2'>In Progress</label>
                            </div>
                            <div>
                                <input
                                    id='3'
                                    type='radio'
                                    value='Finished'
                                    name='status'
                                    checked={gameStatus === 'Finished'}
                                    onChange={(e) =>
                                        setGameStatus(e.target.value)
                                    }
                                />{' '}
                                <label htmlFor='3'>Finished</label>
                            </div>
                            <div>
                                <input
                                    id='4'
                                    type='radio'
                                    value='Completed'
                                    name='status'
                                    checked={gameStatus === 'Completed'}
                                    onChange={(e) =>
                                        setGameStatus(e.target.value)
                                    }
                                />{' '}
                                <label htmlFor='4'>Completed</label>
                            </div>
                        </div>

                        <input
                            type='button'
                            className='btn'
                            value='Add Game'
                            onClick={() =>
                                addgame(gameName, gameSystem, gameStatus, user)
                            }
                        />
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddGame;
