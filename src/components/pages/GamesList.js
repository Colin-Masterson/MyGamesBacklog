import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getGames, auth } from '../../firebase';
import Header from '../misc/Header';
import { Icon } from '@iconify/react';

function GamesList() {
    const [user, loading] = useAuthState(auth);
    const [games, setGames] = useState([]);

    const deleteGame = async (id) => {
        try {
            await fetch(`http://localhost:5000/games/${id}`, {
                method: 'DELETE',
            });

            setGames(games.filter((game) => game.game_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        if (loading) {
            return;
        }

        getGames(user).then((data) => {
            setGames(data);
        });
    }, [user, loading]);

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
}

export default GamesList;
