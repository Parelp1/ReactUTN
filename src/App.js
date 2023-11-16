
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Nav from './componentes/Nav';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav />
          <Routes>
          {/*<Route path="/" element={<Home />} />  Ruta para la página de inicio */}
          </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
