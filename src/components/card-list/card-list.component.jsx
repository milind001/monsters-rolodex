import React from 'react';
import { Card } from '../card/card.component';

import './card-list.style.css'; 

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monsters => ( 
            <Card key={monsters.id} monsters={monsters} />
        ))}
    </div>
);
    // another way
    // return <div className='card-list'>{props.children}</div>
    //{props.monsters.map(monsters => ( 
    //         <div>
    //           <h1 key={monsters.id}>{monsters.name}</h1>
    //         </div>
    //         )
    // )}
