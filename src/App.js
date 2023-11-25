
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import './App.css';
import HomePage from './pages/HomePage';
import Ejemplo01 from './pages/Ejemplo01';



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav />
          <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/ejemplo01" element={<Ejemplo01/>}/>
        
          </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
