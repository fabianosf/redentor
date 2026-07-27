const BASE = 'https://gruporedentor.com.br/img'

interface FeatureCard {
  imageUrl: string
  imageAlt: string
  title: string
  text: string
}

const cards: FeatureCard[] = [
  {
    imageUrl: `${BASE}/Img06.png`,
    imageAlt: "2 pessoas com poste no meio 'LGPD'",
    title: 'Responsabilidade social',
    text: 'O grupo Redentor, tem adotado todos os protocolos de segurança definidos pelas autoridades, no sentido de coloborar para atenuarmos os efeitos da pandemia.',
  },
  {
    imageUrl: `${BASE}/Img07.jpg`,
    imageAlt: 'Frotas azul',
    title: 'Conforto e segurança',
    text: 'Com uma frota planejada para suprir os mais variados itinerários na cidade.',
  },
  {
    imageUrl: `${BASE}/Img08.jpeg`,
    imageAlt: '2 pessoas posando na câmera',
    title: 'Responsabilidade Social, é uma prioridade para o Grupo Redentor',
    text: 'Neste mês de abril, realizamos uma doação de material reciclável, para Casa de Betânia (Igreja Do Loreto).',
  },
]

export function FeatureCards() {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <img
              src={card.imageUrl}
              alt={card.imageAlt}
              className="w-full h-auto shadow-md"
              loading="lazy"
            />
            <h2 className="mt-4 mb-2 text-sm font-normal uppercase tracking-wide text-gray-700">
              {card.title}
            </h2>
            <p className="text-lg font-normal text-justify text-gray-700">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
