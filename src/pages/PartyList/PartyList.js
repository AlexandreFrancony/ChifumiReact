import React from 'react'
import Header from '../../components/Header/Header'
import GameList from '../../components/PartyList/GamesList/GameList'
import CreateGame from '../../components/PartyList/CreateGame/CreateGame'


function PartyList() {
  return (
    <div>
    {/* Page Header */}
    <Header/>

    {/* Liste des parties */}
    <GameList/>

    {/* Créer une partie */}
    <CreateGame/>
    </div>
  )
}

export default PartyList