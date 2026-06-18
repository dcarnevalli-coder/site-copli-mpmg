import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const SEI = lazy(() => import('./pages/SEI'))
const GestaoDocumentos = lazy(() => import('./pages/GestaoDocumentos'))
const PlanejamentoEstrategico = lazy(() => import('./pages/PlanejamentoEstrategico'))
const OKResultados = lazy(() => import('./pages/OKResultados'))
const Inovacao = lazy(() => import('./pages/Inovacao'))
const EscritorioProjetos = lazy(() => import('./pages/EscritorioProjetos'))
const Premiacoes = lazy(() => import('./pages/Premiacoes'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mpmg-cinzaClaro">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-mpmg-azul border-t-transparent rounded-full animate-spin" />
        <p className="text-mpmg-cinzaTexto text-sm font-medium">Carregando...</p>
      </div>
    </div>
  )
}

// routes: home, sei, gestao, planejamento, okresultados, inovacao, escritorio, premiacoes
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sei" element={<SEI />} />
          <Route path="/gestao-documentos" element={<GestaoDocumentos />} />
          <Route path="/planejamento-estrategico" element={<PlanejamentoEstrategico />} />
          <Route path="/okresultados" element={<OKResultados />} />
          <Route path="/inovacao" element={<Inovacao />} />
          <Route path="/escritorio-de-projetos" element={<EscritorioProjetos />} />
          <Route path="/premiacoes" element={<Premiacoes />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
