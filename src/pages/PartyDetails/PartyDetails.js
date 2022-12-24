import React from "react";
import GameDetails from "../../components/PartyDetails/GameDetails";
import Header from "../../components/Header/Header";

function PartyDetails() {
  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Liste des parties */}
      <GameDetails />
    </div>
  );
}

export default PartyDetails;
