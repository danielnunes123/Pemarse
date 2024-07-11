import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Entrar from './components/pages/Entrar';
import Registo from './components/pages/Registo';
import Recuperacao from './components/pages/Recuperacao';
import Privacidade from './components/pages/Privacidade';
import Condicoes from './components/pages/Condicoes';
import InfoPage from './Infopages';

function App() {
  return (
    <Router>
      <div id='gg'>
    <Navbar />
    <Container>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/entrar" element={<Entrar />} /> 
      <Route  path="/registro" element={<Registo />} /> 
      <Route  path="/recuperacao" element={<Recuperacao />} /> 
      <Route  path="/privacidade" element={<Privacidade />} /> 
      <Route  path="/condicoes" element={<Condicoes />} /> 
      <Route path="/produto/:id" element={<InfoPage/>} />
    </Routes>
    </Container>
    </div>
  </Router>
  );
}

export default App;
