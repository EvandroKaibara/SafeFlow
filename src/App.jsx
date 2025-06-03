import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';

import Home from "./routes/Home/Home.jsx"
import Login from "./routes/Login/Login.jsx"
import Cadastro from './routes/Cadastro/Cadastro.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;