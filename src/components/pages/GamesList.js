import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getGames, auth } from '../../firebase';
import Header from '../misc/Header';
import { Icon } from '@iconify/react';
import Loader from '../misc/Loader';
import GameUpdate from '../misc/GameUpdate';

import host from '../../host';

function GamesList() {
    const [user, loading] = useAuthState(auth);
    const [games, setGames] = useState([]);
    const [show, setShow] = useState(false);

    const [gameId, setGameId] = useState('');
    const [gamename, setGameName] = useState('');
    const [gamesystem, setGameSystem] = useState('');
    const [gamestatus, setGameStatus] = useState('');

    const deleteGame = async (id) => {
        try {
            await fetch(`${host}/games/${id}`, {
                method: 'DELETE',
            });

            setGames(games.filter((game) => game.game_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const updateGame = async (id, index) => {
        try {
            const response = await fetch(`${host}/game/${id}`, {
                method: 'GET',
            });
            const json = await response.json();

            setGameId(json.game_id);
            setGameName(json.gamename);
            setGameSystem(json.gamesystem);
            setGameStatus(json.gamestatus);
        } catch (err) {
            console.log(err.message);
        }

        setShow(true);
    };

    useEffect(() => {
        if (loading) {
            return <Loader />;
        }

        getGames(user).then((data) => {
            setGames(data);
        });
    }, [user, loading]);

    if (games) {
        return (
            <>
                <Header />
                <GameUpdate
                    show={show}
                    setShow={setShow}
                    gameId={gameId}
                    gamename={gamename}
                    gamesystem={gamesystem}
                    gamestatus={gamestatus}
                    setGameName={setGameName}
                    setGameSystem={setGameSystem}
                    setGameStatus={setGameStatus}
                    setGames={setGames}
                />
                {games.map((game, index) => {
                    return (
                        <div key={game.game_id} className='game-card'>
                            <div className='grid container'>
                                <h5 className='game-name'>{game.gamename}</h5>
                                <p className='game-system'>{game.gamesystem}</p>
                                <p className='game-status'>{game.gamestatus}</p>

                                <div className='icons'>
                                    <Icon
                                        className='icon'
                                        icon='akar-icons:edit'
                                        onClick={() =>
                                            updateGame(game.game_id, index)
                                        }
                                    />
                                    <Icon
                                        className='icon'
                                        icon='ant-design:delete-filled'
                                        onClick={() => deleteGame(game.game_id)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    } else {
        return <Loader />;
    }
}

export default GamesList;
