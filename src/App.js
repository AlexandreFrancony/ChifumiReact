import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} ></Route>
      {/* <Route path="/register" element={<Register />} ></Route> /}
      <Route path="/partylist" element={<PartyList />} ></Route>
      {/ <Route path="/partydetails" element={<PartyDetails />} ></Route> */}
    </Routes>
  );
}