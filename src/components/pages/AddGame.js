import { useState } from 'react';
import Header from '../misc/Header';
import { addgame, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function AddGame() {
    const [gameName, setGameName] = useState('');
    const [gameSystem, setGameSystem] = useState('');
    const [gameStatus, setGameStatus] = useState('');

    const [user] = useAuthState(auth);

    const submitHandler = () => {
        if (!gameName) {
            alert('Name Required');
            return;
        }
        if (!gameSystem) {
            alert('System Required');
            return;
        }
        if (!gameStatus) {
            alert('Status Required');
            return;
        }

        addgame(gameName, gameSystem, gameStatus, user);

        alert('Game Added!!');

        setGameName('');
        setGameSystem('');
        setGameStatus('');

        return;
    };

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
                            {/* <input
                                type='text'
                                id='system'
                                name='system'
                                value={gameSystem}
                                onChange={(e) => setGameSystem(e.target.value)}
                            /> */}
                            <select
                                value={gameSystem}
                                onChange={(e) => setGameSystem(e.target.value)}
                            >
                                <option value='Select System'>
                                    Select System
                                </option>
                                <option value='N64'>Nintendo 64</option>
                                <option value='Gamecube'>Gamecube</option>
                                <option value='Wii'>Nintendo Wii</option>
                                <option value='Wii U'>Nintendo Wii U</option>
                                <option value='Switch'>Nintendo Switch</option>
                                <option value='PS1'>Playstation</option>
                                <option value='PS2'>Playstation 2</option>
                                <option value='PS3'>Playstation 3</option>
                                <option value='PS4'>Playstation 4</option>
                                <option value='PS5'>Playstation 5</option>
                                <option value='Xbox'>Xbox</option>
                                <option value='Xbox 360'>Xbox 360</option>
                                <option value='Xbox One'>Xbox One</option>
                                <option value='Xbox S-S'>Xbox Series S</option>
                                <option value='Xbox S-X'>Xbox Series X</option>
                            </select>
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
                            onClick={submitHandler}
                        />
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddGame;
