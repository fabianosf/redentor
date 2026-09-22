import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Historia } from '@/pages/Historia'
import { TrabAlhe } from '@/pages/TrabAlhe'
import { FaleConosco } from '@/pages/FaleConosco'
import { AchadosPerdidos } from '@/pages/AchadosPerdidos'
import { FiquePorDentro } from '@/pages/FiquePorDentro'
import { Placeholder } from '@/pages/Placeholder'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
      <div className="flex min-h-screen flex-col bg-offwhite">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/trabalhe-aqui" element={<TrabAlhe />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
            <Route path="/achados-e-perdidos" element={<AchadosPerdidos />} />
            <Route path="/fique-por-dentro" element={<FiquePorDentro />} />
            <Route path="/fique-por-dentro/:slug" element={<FiquePorDentro />} />
            <Route path="/viacao-redentor" element={<Historia />} />
            <Route path="/transportes-futuro" element={<Historia />} />
            <Route path="/transportes-barra" element={<Historia />} />
            <Route
              path="*"
              element={
                <Placeholder
                  title="Página não encontrada"
                  description="A página que você procura não existe ou foi movida."
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
