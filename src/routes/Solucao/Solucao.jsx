import './Solucao.css';

const Solucao = () =>{
    return(
        <>
        <div className='container--solucao'>
            <div className='solucao-titulo'>
                <h1 className='h1--solucao'>Nossa solução</h1>
            </div>
            <div className='container--bloco1'>
                <div className='bloco1-texto'>
                    <h2 className='h2--solucao'>SafeFlow: a tecnologia como aliada contra enchentes urbanas no Brasil</h2>
                    <p className='p--solucao'>As enchentes representam um dos maiores desafios enfrentados pelas cidades brasileiras, sobretudo nos períodos de chuva intensa. Ano após ano, milhares de famílias perdem bens, são forçadas a deixar suas casas ou, em casos mais graves, enfrentam riscos à própria vida. A ausência de informações confiáveis e atualizadas durante esses momentos críticos só agrava a situação, tornando a resposta das autoridades mais lenta e menos eficaz. Nesse cenário preocupante, nasce o SafeFlow — uma plataforma digital desenvolvida para oferecer, em tempo real, suporte direto à população em áreas vulneráveis a alagamentos.</p><br/>
                    <h2 className='h2--solucao'>Uma proposta baseada em conectividade e acesso à informação</h2>
                    <p className='p--solucao'>O SafeFlow tem como principal objetivo conectar pessoas a informações cruciais durante situações de emergência. Por meio de uma interface web e mobile leve e intuitiva, a ferramenta permite que os usuários visualizem mapas com rotas de evacuação seguras, acessem a lista de abrigos públicos próximos com dados sobre capacidade e localização, e recebam alertas automáticos sobre riscos iminentes nas redondezas. O diferencial está na atualização constante desses dados, com base em sensores — simulados ou reais — e relatórios de campo.</p>
                </div>
                <div className='bloco1-imagem'>
                    <img src="./img/Catastrofe.jpg" className='img-bloco1'/>
                </div>
            </div>
            <div className="container--bloco2">
                <h2 className="h2--solucao">Integração com a gestão pública e comunitária</h2>
                <p className='p--solucao'>Além disso, a plataforma se propõe a ser um elo entre a população e os gestores públicos. Autoridades municipais e agentes da Defesa Civil têm acesso a um painel administrativo exclusivo, onde podem monitorar as regiões mais críticas, enviar alertas direcionados e organizar a resposta emergencial de maneira mais coordenada. Voluntários e profissionais da linha de frente também podem se cadastrar no sistema para contribuir com o monitoramento local e apoio logístico.</p><br/>
                <h2 className="h2--solucao">Uma solução urgente para uma realidade recorrente</h2>
                <p className="p--solucao">A urgência de soluções como o SafeFlow é respaldada por dados. De acordo com o Instituto Brasileiro de Geografia e Estatística (IBGE), em 2022, mais de 800 municípios do país registraram ocorrências de enchentes. Entre 2013 e 2023, a Confederação Nacional de Municípios (CNM) contabilizou mais de 3 mil cidades afetadas por eventos climáticos extremos, principalmente inundações e deslizamentos. Em muitos desses casos, a falta de dados atualizados e acessíveis dificultou o trabalho das equipes de resgate e colocou ainda mais vidas em risco.</p><br/>
            </div>
            <div className="container--bloco3">
                <div className='bloco3-imagem'>
                    <img src="./img/Dirigindo.jpg" className='img-bloco3'/>
                </div>
                <div className="bloco3-texto">
                    <h2 className="h2--solucao">Tecnologia acessível para todos os perfis de usuário</h2>
                    <p className="p--solucao">Com foco em acessibilidade, a plataforma foi pensada para funcionar mesmo em dispositivos móveis com acesso limitado à internet. Sua interface responsiva garante que qualquer cidadão, independentemente da familiaridade com tecnologia, possa utilizar a ferramenta de forma rápida e eficiente. A atualização dos dados ocorre a cada poucos minutos, garantindo uma experiência confiável e dinâmica para os usuários.</p>
                </div>
            </div>
            <div className="container--bloco4">
                <div className="bloco4-texto">
                    <h2 className='h2--solucao'>Benefícios amplos e aplicáveis a diferentes públicos</h2>
                    <p className="p--solucao">Entre os benefícios esperados com a implementação do SafeFlow, destacam-se a redução do tempo de resposta em emergências, o apoio à tomada de decisão da população em risco, a otimização dos recursos públicos e a melhoria na comunicação entre moradores e órgãos oficiais. Mais do que uma plataforma digital, o ReAlerta se apresenta como uma estratégia integrada de gestão de crise.</p><br/>
                    <h2 className="h2--solucao">Casos de uso que demonstram impacto direto</h2>
                    <p className="p--solucao">Casos de uso da ferramenta ajudam a ilustrar seu impacto: um morador acessa a plataforma durante uma chuva intensa, identifica que sua rua está prestes a alagar e visualiza a rota segura até o abrigo mais próximo; um agente da Defesa Civil utiliza o painel administrativo para emitir alertas a bairros específicos com base em dados de sensores; gestores municipais integram o SafeFlow aos sistemas locais de emergência para obter uma visão consolidada das regiões em risco.</p><br/>
                    <h2 className="h2--solucao">Educação e prevenção como parte da solução</h2>
                    <p className="p--solucao">Além da resposta imediata, o SafeFlow tem também um papel educativo. A plataforma oferece uma seção dedicada a conteúdos de prevenção, orientações práticas de segurança e materiais que podem ser usados em escolas e programas comunitários. Isso reforça o papel da tecnologia não apenas como ferramenta de emergência, mas como instrumento de conscientização e transformação social.</p>
                </div>
                <div className="bloco4-imagem">
                    <img src="./img/Onibus.jpg" className='img-bloco4' />
                </div>
            </div>
            <div className="container--bloco5">
                <h2 className="h2--solucao">Conclusão</h2>
                <p className="p--solucao">Em resumo, o SafeFlow é uma solução tecnológica de grande potencial para cidades que enfrentam os desafios das enchentes urbanas. Sua proposta vai além do suporte técnico: ela busca salvar vidas, preservar estruturas urbanas e promover uma cultura de prevenção mais eficiente. Em um país marcado por eventos climáticos extremos, ferramentas como o SafeFlow são essenciais para preparar a população e fortalecer a resiliência das comunidades diante de futuras crises.</p>
            </div>
        </div>
        </>
    );
}

export default Solucao;