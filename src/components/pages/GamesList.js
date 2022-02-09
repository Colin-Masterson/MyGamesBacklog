import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getGames, auth } from '../../firebase';
import Header from '../misc/Header';
import { Icon } from '@iconify/react';
import Loader from '../misc/Loader';

import host from '../../host';

function GamesList() {
    const [user, loading] = useAuthState(auth);
    const [games, setGames] = useState([]);

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

                {games.map((game) => {
                    return (
                        <div key={game.game_id} className='game-card'>
                            <div className='grid container'>
                                <h5 className='game-name'>{game.gamename}</h5>
                                <p className='game-system'>{game.gamesystem}</p>
                                <p className='game-status'>{game.gamestatus}</p>

                                <Icon
                                    className='icon'
                                    icon='ant-design:delete-filled'
                                    onClick={() => deleteGame(game.game_id)}
                                />
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
