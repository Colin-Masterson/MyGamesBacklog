import { useEffect, useState } from 'react';
import GameCard from '../misc/GameCard';
import Header from '../misc/Header';
import { getGames, auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function GamesList() {
    const [user, loading] = useAuthState(auth);
    const [games, setGames] = useState([]);

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
                <GameCard key={game.id} game={game} />
            ))}
        </>
    );
}

export default GamesList;
