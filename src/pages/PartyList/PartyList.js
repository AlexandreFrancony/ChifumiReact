import React from 'react'
import Header from '../../components/Header/Header'
import GameList from '../../components/PartyList/GamesList/GameList'
import './styles.css';


function PartyList() {
  return (
    <div>
    {/* Page Header */}
    <Header/>

    {/* Liste des parties */}
    <GameList/>
    </div>
  )
}

export default PartyList