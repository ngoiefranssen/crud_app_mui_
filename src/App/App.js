import Header from '../Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CdIntervieuw from '../Components/CdIntervieuw'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<CdIntervieuw />} />
        <Route path='' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
