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

        const getGameData = async () => {
            const data = await getGames(user);

            if (data.games) {
                setGames(data.games);
            }
        };

        getGameData();
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
