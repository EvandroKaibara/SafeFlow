
import AbrigosProximos from './components/AbrigosProximos'
import AlertasDeRisco from './components/AlertasDeRisco'
import Banner from './components/Banner'
import Header from './components/header'

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
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
