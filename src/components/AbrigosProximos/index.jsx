import './AbrigosProximos.css';

const AbrigosProximos = () => {
    return(
        <>
        <div className="container--abrigos">
            <h2 className='h2--abrigos'>Abrigos próximos</h2>
            <div className='container--abrigo-elemento'>
                <img src="./img/Tambore.png" alt="Imagem abrigo proximo" />
                <h3 className='h3--abrigoNome'>Tamboré</h3>
                <span className="span--abrigoDescricao">Teste</span>
            </div>
        </div>
        </>
    );
}

export default AbrigosProximos;