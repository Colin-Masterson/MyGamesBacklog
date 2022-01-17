import React from 'react';

function GameCard(props) {
    return (
        <div className='game-card'>
            <div className='grid container'>
                <h5 className='game-name'>{props.game.name}</h5>
                <p className='game-system'>{props.game.system}</p>
                <p className='game-status'>{props.game.status}</p>
            </div>
        </div>
    );
}

export default GameCard;
