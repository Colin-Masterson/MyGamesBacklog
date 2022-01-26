import { useEffect, useState } from 'react';

import Header from '../misc/Header';
import { getGames, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

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

            {games.map((game) => (
                <div key={game.game_id} className='game-card'>
                    <div className='grid container'>
                        <h5 className='game-name'>{game.gamename}</h5>
                        <p className='game-system'>{game.gamesystem}</p>
                        <p className='game-status'>{game.gamestatus}</p>
                        <button onClick={() => deleteGame(game.game_id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default GamesList;
