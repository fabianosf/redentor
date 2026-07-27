interface VideoItem {
  youtubeId: string
  title: string
  description: string
}

const videos: VideoItem[] = [
  {
    youtubeId: 'AkIBJTUVrCU',
    title: 'MEMÓRIAS AFETIVAS',
    description:
      'Funcionário da empresa desde 1983, Noé está perto de completar 40 anos trabalhando no Grupo Redentor.',
  },
  {
    youtubeId: 'ekAoVTmyhps',
    title: 'TRABALHO DE PREPARO',
    description:
      'Como se dá o treinamento de motoristas antes de sair para as ruas. Noé, com 38 de experiência no "ramo", sempre trabalhando na Redentor, nos explica o passo a passo desse processo.',
  },
  {
    youtubeId: 'bId5n_cj2O4',
    title: 'CAPACITAÇÃO DE MOTORISTAS',
    description:
      'Saiba como são capacitados os motoristas que irão dirigir os ônibus nas ruas. Treinamento teórico e prático na garagem, incluindo os cuidados com ciclistas e cadeirantes.',
  },
]

export function YoutubeSection() {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {videos.map((v) => (
          <div key={v.youtubeId} className="flex flex-col">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                title={v.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              />
            </div>
            <h2 className="mt-4 mb-2 text-sm font-normal uppercase tracking-wide text-gray-700">
              {v.title}
            </h2>
            <p className="text-lg font-normal text-justify text-gray-700">
              {v.description}
            </p>
          </div>
        ))}
      </div>

      <hr className="mt-10 border-gray-200" />
    </div>
  )
}
