import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PartyList from './pages/PartyList/PartyList';
import InGame from './pages/InGame/InGame';
import PartyDetails from './pages/PartyDetails/PartyDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/partylist" element={<PartyList />} ></Route>
      <Route path="/partylist/:id" element={<PartyDetails />} ></Route>
      <Route path="/matches/:id" element={<InGame />} ></Route>
    </Routes>
  );
}

export default App;