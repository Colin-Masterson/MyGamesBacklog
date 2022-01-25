import React from 'react';

function GameCard(props) {
    return (
        <div className='game-card'>
            <div className='grid container'>
                <h5 className='game-name'>{props.game.gamename}</h5>
                <p className='game-system'>{props.game.gamesystem}</p>
                <p className='game-status'>{props.game.gamestatus}</p>
            </div>
        </div>
    );
}

export default GameCard;
