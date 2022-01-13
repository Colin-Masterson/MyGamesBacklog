import { useEffect, useState } from 'react';
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

        getGames(user).then((data) => setGames(data.games));
    }, [user, loading]);
    return (
        <>
            <Header />
            {games.map((game) => (
                <li>{game.name}</li>
            ))}
        </>
    );
}

export default GamesList;
