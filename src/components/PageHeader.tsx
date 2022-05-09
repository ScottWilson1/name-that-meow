import React, {useState} from 'react';


const MenuButton = ({toggle}) => {
    
    return (
        <button onClick={toggle}>&#x2630;</button>
    );
}

const SideMenu = ({toggle}) => {
    return (
        <div>
            <button onClick={toggle}>X</button>
            <ul>
                <li>
                    Start Game
                </li>
                <li>
                    Leaderboard
                </li>
            </ul>
        </div>
    )
}

export {MenuButton, SideMenu};