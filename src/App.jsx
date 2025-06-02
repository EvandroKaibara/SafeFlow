
import AbrigosProximos from './components/AbrigosProximos'
import AlertasDeRisco from './components/AlertasDeRisco'
import Banner from './components/Banner'
import Header from './components/header'
import InformacoesUteis from './components/InformacoesUteis'
import Mudanca from './components/Mudancas'
import SobreNos from './components/SobreNos'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <AbrigosProximos />
        <AlertasDeRisco />
        <InformacoesUteis />
        <Mudanca />
        <SobreNos />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
