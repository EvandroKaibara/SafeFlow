import './Home.css'

import AbrigosProximos from '../../components/AbrigosProximos'
import AlertasDeRisco from '../../components/AlertasDeRisco'
import Banner from '../../components/Banner'
import InformacoesUteis from '../../components/InformacoesUteis'
import Mudanca from '../../components/Mudancas'
import SobreNos from '../../components/SobreNos'

const Home = () => {

  return (
    <>
      <main>
        <Banner />
        <AbrigosProximos />
        <AlertasDeRisco />
        <InformacoesUteis />
        <Mudanca />
        <SobreNos />
      </main>
    </>
  )
}

export default Home
