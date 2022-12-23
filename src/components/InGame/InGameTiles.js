import React from 'react'
import { useState} from 'react';
import './styles.css';

export default function InGameTiles() {
    const username1 = localStorage.getItem('username1');
    const username2 = localStorage.getItem('username2');
    localStorage.removeItem('username1');
    localStorage.removeItem('username2');

    return(
        <div className="tiles">
            <h1 content={username1 + ' vs ' + username2}></h1>
        
        </div>
    );
}