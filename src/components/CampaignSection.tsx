const BASE = 'https://gruporedentor.com.br'

interface CampaignItem {
  type: 'image' | 'video'
  src: string
  alt?: string
  title?: string
  text?: string
  portrait?: boolean
}

const items: CampaignItem[] = [
  {
    type: 'image',
    src: `${BASE}/img/oferta_vagas.jpeg`,
    alt: 'oferta de vagas',
    title: 'Trabalhe conosco',
    text: 'Inscrições de segunda a sexta-feira de 08 às 16 horas.\nEstrada do Gabinal nº 1395 – Freguesia / Jacarepaguá\nRua Anália Franco nº 150 – Vila Valqueire',
  },
  {
    type: 'image',
    src: `${BASE}/img/Aniversario_Grupo_Redentor.jpeg`,
    alt: 'Aniversário Grupo Redentor',
  },
  {
    type: 'image',
    src: `${BASE}/img/Hepatites_Virais.jpeg`,
    alt: 'Hepatites Virais',
  },
  {
    type: 'video',
    src: `${BASE}/video/Pacto_Ninguem_Se_Cala.mp4`,
    title: 'Pacto Ninguém se Cala',
    portrait: true,
  },
  {
    type: 'video',
    src: `${BASE}/video/Violencia_Contra_Mulher.mp4`,
    title: 'Violência Contra Mulher',
    portrait: true,
  },
  {
    type: 'image',
    src: `${BASE}/img/Jae.png`,
    alt: 'Jaé',
  },
  {
    type: 'video',
    src: `${BASE}/video/75_anos_Grupo_Redentor.mp4`,
    title: 'Aniversário Redentor',
    portrait: true,
  },
  {
    type: 'image',
    src: `${BASE}/img/Pontos_cegos.jpg`,
    alt: 'Pontos cegos',
  },
]

export function CampaignSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className={`w-full flex justify-center ${
              item.portrait ? 'max-w-xs' : 'max-w-2xl'
            }`}
          >
            {item.type === 'image' ? (
              <div className="w-full">
                <img
                  src={item.src}
                  alt={item.alt ?? ''}
                  title={item.title}
                  className="w-full h-auto shadow-md"
                  loading="lazy"
                />
                {item.text && (
                  <>
                    <hr className="my-3 border-gray-200" />
                    <p className="text-lg font-normal text-justify whitespace-pre-line">
                      {item.text}
                    </p>
                  </>
                )}
              </div>
            ) : (
              <div className={`w-full ${item.portrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
                <video
                  className="w-full h-full object-contain shadow-md bg-black"
                  controls
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                  Seu navegador não suporta o vídeo.
                </video>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
