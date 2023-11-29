
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import './App.css';
import HomePage from './pages/HomePage';
import Ejemplo01 from './pages/Ejemplo01';
import Ejemplo02 from './pages/Ejemplo02';
import Mapas from './pages/Mapas';
import Json from './pages/json';
import Api from './pages/Api';



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav />
          <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/ejemplo01" element={<Ejemplo01/>}/>
          <Route path="/ejemplo02" element={<Ejemplo02/>}/>
          <Route path="/mapas" element={<Mapas/>}/>
          <Route path="/json" element={<Json/>}/>
          <Route path="/api" element={<Api/>}/>
        
          </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
