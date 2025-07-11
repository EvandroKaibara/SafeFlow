import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';

import Home from "./routes/Home/Home.jsx"
import Login from "./routes/Login/Login.jsx"
import Cadastro from './routes/Cadastro/Cadastro.jsx';
import About from './routes/About/About.jsx';
import Error from './routes/Error/Error.jsx';
import Solucao from './routes/Solucao/Solucao.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/sobre' element={<About/>} />
          <Route path='/solucao' element={<Solucao/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;