import { Link } from 'react-router-dom'

export function Historia() {
  return (
    <main className="container mx-auto px-4 pt-20 pb-10">
      <div className="flex items-center p-4 my-4 rounded shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">Nossa História</h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <h4 className="text-lg font-semibold text-gray-500 ml-4 mb-4">Grupo Redentor</h4>

        <div className="text-gray-700 text-base leading-relaxed space-y-4 text-justify">
          <p className="indent-10">
            O Grupo Redentor, contendo uma ampla frota e com cerca de 3500 funcionários, é o resultado
            bem sucedido de um conceito de negócios, com mais de 70 anos de trabalho árduo, diário e
            complexo, que teve início em 1950. Era impossível imaginar que naquela época estivesse tendo
            início sem suporte técnico e operacional, com apenas 06 (seis) ônibus usados em sua frota e
            com menos de 20 colaboradores, uma empresa de Transporte Coletivo, e que a mesma teria
            imensa significância ao longo do seu trajeto.
          </p>

          <p className="indent-10">
            A história começa numa simples garagem na Estrada Intendente Magalhães, Vila Valqueire, com
            o nome escolhido de Viação Redentor Ltda. Nessa sede trabalhavam funcionários e familiares
            juntos com um só objetivo, de fornecer melhor qualidade de transporte urbano para a região,
            que abrangia desde a Mallet até Cascadura, onde teve a sua primeira linha S-16.
          </p>

          <p className="indent-10">
            A empresa basicamente familiar com atendimento condizente com a necessidade do seu público,
            cresceu e expandiu seus horizontes para outras regiões, seguindo assim o caminho de
            desenvolvimento da cidade do Rio de Janeiro. Em poucos anos o progresso da empresa Viação
            Redentor estava refletido na aquisição contínua de novos carros e contratação de mão de obra
            especializada. Estabelecendo assim o protagonismo que garantia o sucesso por muitos anos,
            mesmo através de muitas dificuldades.
          </p>

          <p className="indent-10">
            Uma nova e moderna sede foi inaugurada nos anos de 1970, na Estrada do Gabinal, capacitada
            dos mais avançados mecanismos de manutenção e estabelecendo a tecnologia nos seus sistemas
            de operação interna, se adequando assim ao início de uma nova era no sistema de transportes
            do Município do Rio de Janeiro. Com uma expansão ainda maior para várias regiões da cidade e
            com a clara necessidade de atender ao público, Viação Redentor criou e implementou um sistema
            de ônibus urbano com ar condicionado para passageiros apenas sentados. Os coletivos de alta
            qualidade e conforto foram os primeiros em transporte urbano no Brasil, popularmente chamados
            de <strong>Fresquinhos</strong>.
          </p>

          <p className="indent-10">
            Foi em Dezembro de 1985 que a política modificou o curso da história, quando por decisão o
            Governo do Estado encampou as empresas de transportes do Rio de Janeiro. A administração
            desse governo desfez o trabalho de 35 anos, até ali realizado com sucesso. Entretanto feita
            a justiça e em conformidade com a Lei vigente, quase 02 (dois) anos após, os sócios são
            convocados a restabelecer o negócio, com a obrigatoriedade de cumprir em curto prazo as
            diretrizes da Lei Municipal. Imenso desafio aguardava a Viação Redentor, iniciando um novo
            momento de expansão.
          </p>

          <p className="indent-10">
            A recente encampação sofrida transformou o conceito de negócios, exigindo novas medidas
            operacionais e imprescindível trabalho árduo para alcançar o sucesso.
          </p>

          <p className="indent-10">
            O indevido desmando político que havia afetado profundamente toda estrutura do negócio
            serviu como aprendizado para a necessidade de um novo conceito organizacional. Deu-se então
            início ao processo de desmembramento da Viação Redentor. Ao longo dos anos sob o imenso
            trabalho e cuidado, foi-se transferindo, sob a anuência do poder público, suas linhas e
            frotas para outras empresas, do mesmo grupo societário, estabelecidas em outras garagens e
            novas nomeações. Surgindo assim em Fevereiro do ano 1991 a criação da empresa Transportes
            Barra Ltda. Em junho do ano 1994, a criação da Litoral Rio Transportes Ltda. e em abril do
            ano 1997, a empresa Transportes Futuro Ltda. Dando então razão ao que ficou informalmente
            denominado Grupo Redentor. Essa configuração "Empresas Irmãs" com sedes em garagens
            diferentes, mas com uma única administração ficou estabelecida até o ano de 2003, quando
            houve uma remodelação na estrutura vigente com a saída da Litoral Rio Ltda. Ficando assim o
            Grupo Redentor com sua formação atual com as empresas: Viação Redentor Ltda., Transportes
            Barra Ltda. e Transportes Futuro Ltda.
          </p>

          <p className="indent-10">
            Para completar a trajetória do Grupo até então, em 2010, o Governo Municipal reformulou o
            sistema de Transportes do Município do Rio de Janeiro, criando o sistema de Consórcios que
            estabelecia 04 (quatro) regiões na cidade com base na distribuição de linhas. Coube ao Grupo
            Redentor por sua importância no sistema, o que hoje é denominado Consórcio Transcarioca.
            Nascia mais uma etapa de gerenciamento diante de uma nova configuração do sistema, sendo
            necessário reaprender a gerir um complexo e inovador negócio, carregado de novas
            responsabilidades atrelou-se ao eixo já existente o que hoje é conhecido como BRT.
          </p>

          <p className="indent-10">
            A história do Grupo Redentor é longa, repleta de sucessos e adversidades, de prosperidade
            e retrocessos, de inovações e capacitações. As rodas desse sistema não param. Não há freios
            para a busca do desenvolvimento e melhorias do serviço que pretendemos, em sintonia, prestar
            aos nossos clientes. E, com as melhores práticas, estamos implementando o Compliance como
            ferramenta garantidora da transparência do nosso gerenciamento de negócio e da conduta ética
            de cada um de nós que compõe o Grupo Redentor.
          </p>
        </div>
      </div>

      <hr className="my-10 border-gray-200" />

      <div className="text-center">
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
          ← Voltar para Home
        </Link>
      </div>
    </main>
  )
}
