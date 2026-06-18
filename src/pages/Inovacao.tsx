import { Lightbulb, Rocket, Users, RefreshCw, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

const breadcrumbItems = [
  { label: 'Conheça o MPMG', href: '/' },
  { label: 'Planejamento Institucional', href: '/' },
  { label: 'Inovação' },
]

const principios = [
  { icon: Lightbulb, titulo: 'Cultura Aberta à Mudança', descricao: 'Valorização do pensamento disruptivo e incentivo à colaboração entre setores para geração de novas ideias.' },
  { icon: Rocket, titulo: 'Transformação em Resultados', descricao: 'Aplicação da criatividade para melhorar processos, produtos e serviços por meio tecnológico ou não.' },
  { icon: RefreshCw, titulo: 'Melhoria Contínua', descricao: 'Ciclos de inovação e retroalimentação para aprimoramento constante dos serviços prestados ao cidadão.' },
  { icon: Users, titulo: 'Colaboração Intersetorial', descricao: 'Engajamento de membros, servidores e parceiros externos na construção de soluções inovadoras.' },
]

export default function Inovacao() {
  return (
    <div className="min-h-screen flex flex-col bg-mpmg-cinzaClaro">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 xl:w-72 flex-shrink-0"><Sidebar /></aside>

          <div className="flex-1 min-w-0 space-y-8">

            {/* Hero */}
            <section className="relative rounded-2xl p-8 text-white shadow-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #92400e 0%, #d97706 60%, #fbbf24 100%)' }} aria-labelledby="inov-title">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 0%, transparent 50%)' }} aria-hidden="true" />
              <div className="relative flex items-start gap-5">
                <div className="bg-white/15 rounded-2xl p-3.5 flex-shrink-0">
                  <Lightbulb className="w-9 h-9 text-yellow-100" aria-hidden="true" />
                </div>
                <div>
                  <h1 id="inov-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight">Inovação</h1>
                  <p className="mt-2 text-yellow-100 text-base">A força motriz que transforma ideias em realidade</p>
                  <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20 text-yellow-50">
                    Res. PGJ nº 25 — 06/05/2023
                  </span>
                </div>
              </div>
            </section>

            {/* Definição */}
            <section className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-amber-400" aria-labelledby="inov-def-title">
              <h2 id="inov-def-title" className="text-xl font-bold text-mpmg-azulEscuro mb-3">O que é Inovação no MPMG?</h2>
              <p className="text-mpmg-cinzaTexto leading-relaxed text-sm mb-4">
                Inovação é a aplicação da <strong className="text-mpmg-preto">criatividade</strong> para melhorar processos,
                produtos e serviços — seja por meio de tecnologias ou de novas metodologias de gestão.
                No MPMG, a inovação é encarada como desafios transformados em oportunidades de melhoria
                no serviço prestado à sociedade.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
                <strong>Responsabilidade institucional:</strong> A Superintendência de Planejamento e
                Coordenação (SPC) é responsável por fomentar, prospectar e monitorar iniciativas
                inovadoras, conforme a Resolução PGJ nº 25 de 6 de maio de 2023.
              </div>
            </section>

            {/* Princípios */}
            <section aria-labelledby="inov-princ-title">
              <h2 id="inov-princ-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">Princípios da Inovação</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principios.map(({ icon: Icon, titulo, descricao }) => (
                  <article key={titulo} className="bg-white rounded-2xl p-5 border border-mpmg-cinzaMedio hover:shadow-lg hover:border-amber-300 transition-all duration-200 group">
                    <div className="bg-amber-50 rounded-xl w-10 h-10 flex items-center justify-center mb-3 group-hover:bg-amber-400 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-mpmg-preto text-sm mb-1">{titulo}</h3>
                    <p className="text-xs text-mpmg-cinzaTexto leading-relaxed">{descricao}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Escritório de Projetos */}
            <section className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-mpmg-azul" aria-labelledby="inov-ep-title">
              <h2 id="inov-ep-title" className="text-base font-bold text-mpmg-azulEscuro mb-2">Relacionado: Escritório de Projetos</h2>
              <p className="text-sm text-mpmg-cinzaTexto mb-4">
                As iniciativas inovadoras do MPMG são gerenciadas e acompanhadas pelo Escritório de
                Projetos (DPIN), que mantém o portfólio estratégico e centraliza as propostas
                desenvolvidas por membros e servidores.
              </p>
              <a href="/escritorio-de-projetos" className="inline-flex items-center gap-2 text-sm text-mpmg-azul hover:text-mpmg-azulEscuro font-medium focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded">
                <Rocket className="w-4 h-4" aria-hidden="true" /> Acessar Escritório de Projetos
              </a>
            </section>

            <div className="flex justify-end">
              <a href="https://www.mpmg.mp.br/portal/menu/conheca-o-mpmg/planejamento-institucional/inovacao.shtml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-mpmg-azul hover:text-mpmg-azulEscuro font-medium focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded">
                <ExternalLink className="w-4 h-4" aria-hidden="true" /> Ver no portal MPMG
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
