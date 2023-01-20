import Header from '../Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IconMaterial from '../Components/IconMaterial'
import AllUser from '../Components/AllUser'
import AddUser from '../Components/AddUser'
import './App.css';
import EditUser from '../Components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<IconMaterial />} />
        <Route path='/allusers' element={<AllUser />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/edituser/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
