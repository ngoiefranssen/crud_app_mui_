import Header from '../Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CdIntervieuw from '../Components/CdIntervieuw'
import AllUser from '../Components/AllUser'
import AddUser from '../Components/AddUser'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<CdIntervieuw />} />
        <Route path='/allusers' element={<AllUser />} />
        <Route path='/adduser' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
