import { Link } from 'react-router-dom'
import {
  BarChart2, Settings, FileText, TrendingUp, Globe,
  Monitor, Archive, ExternalLink, Building2,
  Lightbulb, Target, FolderKanban, Trophy, ChevronRight,
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

const atribuicoes = [
  { icon: BarChart2, title: 'Planejamento Estratégico', description: 'Programar, orientar e avaliar as atividades de planejamento institucional.' },
  { icon: Settings, title: 'Modernização Administrativa', description: 'Desenvolver e avaliar atividades de modernização e inovação.' },
  { icon: FileText, title: 'Gestão de Documentos', description: 'Controle e supervisão da gestão documental do MPMG.' },
  { icon: TrendingUp, title: 'Indicadores de Desempenho', description: 'Construção e acompanhamento de indicadores institucionais.' },
  { icon: Globe, title: 'Análise de Macroambiente', description: 'Monitoramento do macroambiente interno do MPMG.' },
]

const conteudos = [
  { icon: BarChart2, title: 'Planejamento Estratégico', description: 'Planos estratégicos, PGA e metas institucionais', to: '/planejamento-estrategico', color: 'bg-blue-50 text-mpmg-azul', border: 'border-mpmg-azul' },
  { icon: Target, title: 'Programa OKResultados', description: 'Metodologia OKR para gestão estratégica', to: '/okresultados', color: 'bg-indigo-50 text-indigo-600', border: 'border-indigo-400' },
  { icon: Lightbulb, title: 'Inovação', description: 'Iniciativas e projetos inovadores no MPMG', to: '/inovacao', color: 'bg-amber-50 text-amber-600', border: 'border-amber-400' },
  { icon: FolderKanban, title: 'Escritório de Projetos', description: 'Portfólio estratégico e gestão de projetos', to: '/escritorio-de-projetos', color: 'bg-emerald-50 text-emerald-600', border: 'border-emerald-400' },
  { icon: Trophy, title: 'Premiações de Projetos', description: 'Prêmios de Inovação J.Ex e CNMP', to: '/premiacoes', color: 'bg-orange-50 text-orange-600', border: 'border-orange-400' },
  { icon: Monitor, title: 'SEI', description: 'Sistema Eletrônico de Informações', to: '/sei', color: 'bg-sky-50 text-sky-600', border: 'border-sky-400' },
  { icon: Archive, title: 'Gestão de Documentos', description: 'Diretoria de Gestão Documental — DIGD', to: '/gestao-documentos', color: 'bg-green-50 text-mpmg-verde', border: 'border-mpmg-verde' },
  { icon: ExternalLink, title: 'Portal MPMG', description: 'Site institucional completo', to: 'https://www.mpmg.mp.br', color: 'bg-gray-50 text-mpmg-cinzaTexto', external: true },
]

const breadcrumbItems = [
  { label: 'Conheça o MPMG', href: '/' },
  { label: 'Planejamento Institucional' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-mpmg-cinzaClaro">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 xl:w-72 flex-shrink-0">
            <Sidebar />
          </aside>

          <div className="flex-1 min-w-0 space-y-8">

            {/* Hero */}
            <section className="relative bg-mpmg-azulEscuro rounded-2xl p-8 text-white shadow-xl overflow-hidden" aria-labelledby="hero-title">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #1A5DC4 0%, transparent 60%)' }} aria-hidden="true" />
              <div className="relative flex items-start gap-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 flex-shrink-0">
                  <Building2 className="w-9 h-9 text-blue-200" aria-hidden="true" />
                </div>
                <div>
                  <h1 id="hero-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    Planejamento Institucional
                  </h1>
                  <p className="mt-2 text-blue-200 text-base font-medium">
                    Coordenadoria de Planejamento Institucional — COPLI
                  </p>
                  <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20 text-blue-100">
                    Criada em setembro de 2001
                  </span>
                </div>
              </div>
            </section>

            {/* Sobre */}
            <section className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-mpmg-azul" aria-labelledby="sobre-title">
              <h2 id="sobre-title" className="text-xl font-bold text-mpmg-azulEscuro mb-3">O que é a COPLI?</h2>
              <p className="text-mpmg-cinzaTexto leading-relaxed text-sm">
                A Coordenadoria de Planejamento Institucional (COPLI) é órgão de assessoramento do Procurador-Geral de Justiça e tem como
                finalidade programar, desenvolver, orientar, acompanhar e avaliar as atividades
                de planejamento, de modernização administrativa e de gestão de documentos, bem
                como as de construção de indicadores de desempenho institucional e de
                macroambiente interno do Ministério Público do Estado de Minas Gerais (MPMG).
              </p>
            </section>

            {/* Conteúdos desta área */}
            <section aria-labelledby="conteudos-title">
              <div className="flex items-center justify-between mb-5">
                <h2 id="conteudos-title" className="text-xl font-bold text-mpmg-azulEscuro">
                  Conteúdos desta área
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-3">
                {conteudos.map(({ icon: Icon, title, description, to, color, external }) => (
                  external ? (
                    <a key={title} href={to} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-white rounded-xl p-4 border border-mpmg-cinzaMedio hover:shadow-md hover:border-mpmg-azulClaro transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-mpmg-azul"
                    >
                      <div className={`rounded-xl p-2.5 flex-shrink-0 ${color}`}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-mpmg-preto text-sm">{title}</p>
                        <p className="text-xs text-mpmg-cinzaTexto mt-0.5 truncate">{description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-mpmg-cinzaMedio group-hover:text-mpmg-azul transition-colors flex-shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link key={title} to={to}
                      className="flex items-center gap-4 bg-white rounded-xl p-4 border border-mpmg-cinzaMedio hover:shadow-md hover:border-mpmg-azulClaro transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-mpmg-azul"
                    >
                      <div className={`rounded-xl p-2.5 flex-shrink-0 ${color}`}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-mpmg-preto text-sm">{title}</p>
                        <p className="text-xs text-mpmg-cinzaTexto mt-0.5 truncate">{description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-mpmg-cinzaMedio group-hover:text-mpmg-azul transition-colors flex-shrink-0" aria-hidden="true" />
                    </Link>
                  )
                ))}
              </div>
            </section>

            {/* Atribuições */}
            <section aria-labelledby="atribuicoes-title">
              <h2 id="atribuicoes-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">Atribuições da COPLI</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {atribuicoes.map(({ icon: Icon, title, description }) => (
                  <article key={title} className="bg-white rounded-2xl p-5 border border-mpmg-cinzaMedio hover:shadow-lg hover:border-mpmg-azulClaro transition-all duration-200 group">
                    <div className="bg-mpmg-cinzaClaro rounded-xl w-10 h-10 flex items-center justify-center mb-3 group-hover:bg-mpmg-azul transition-colors duration-200">
                      <Icon className="w-5 h-5 text-mpmg-azul group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-mpmg-preto text-sm mb-1">{title}</h3>
                    <p className="text-xs text-mpmg-cinzaTexto leading-relaxed">{description}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Organograma */}
            <section className="bg-white rounded-2xl shadow-md p-6" aria-labelledby="org-title">
              <h2 id="org-title" className="text-xl font-bold text-mpmg-azulEscuro mb-6">Estrutura Orgânica</h2>
              <div className="flex flex-col items-center gap-0 select-none">

                {/* PGJ — Chefia */}
                <div className="bg-mpmg-azulEscuro text-white px-6 py-3 rounded-xl shadow-md text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-0.5">Chefia</p>
                  <p className="font-bold text-sm">Procurador-Geral de Justiça</p>
                </div>

                {/* Linha tracejada — assessoramento */}
                <div className="h-6" style={{ width: 2, borderLeft: '2px dashed #003DA5' }} aria-hidden="true" />

                {/* COPLI */}
                <div className="bg-mpmg-azul text-white px-6 py-3 rounded-xl shadow-md text-center">
                  <p className="font-bold text-sm leading-tight">Coordenadoria de Planejamento Institucional</p>
                  <p className="text-xs font-bold text-blue-200 mt-0.5">COPLI</p>
                </div>

                {/* Linha sólida → SPC */}
                <div className="w-0.5 h-6 bg-mpmg-azul" aria-hidden="true" />

                {/* SPC — texto em 2 linhas */}
                <div className="bg-mpmg-azulClaro text-white px-6 py-3 rounded-xl shadow-md text-center">
                  <p className="font-bold text-sm leading-tight">Superintendência de Planejamento e Coordenação</p>
                  <p className="text-xs font-bold text-blue-200 mt-0.5">SPC</p>
                </div>

                {/* Linha vertical central → T */}
                <div className="w-0.5 h-6 bg-mpmg-azul" aria-hidden="true" />

                {/* 3 Diretorias — barra horizontal alinhada aos centros das colunas */}
                <div className="relative w-full max-w-2xl">
                  {/* Barra horizontal: do centro da col-1 (1/6) ao centro da col-3 (5/6) */}
                  <div
                    className="absolute top-0 h-px bg-mpmg-azul"
                    style={{ left: 'calc(100% / 6)', right: 'calc(100% / 6)' }}
                    aria-hidden="true"
                  />
                  {/* Mobile: coluna simples */}
                  <div className="flex flex-col items-center gap-2 sm:hidden">
                    {[
                      'Diretoria de Estrutura e Processos Organizacionais',
                      'Diretoria de Gestão Documental',
                      'Diretoria de Planos, Projetos e Programas Institucionais',
                    ].map((d) => (
                      <div key={d} className="flex flex-col items-center w-full">
                        <div className="w-0.5 h-4 bg-mpmg-azul" aria-hidden="true" />
                        <div className="bg-blue-50 border-2 border-mpmg-azul text-mpmg-azulEscuro px-4 py-3 rounded-xl text-center w-full">
                          <p className="font-semibold text-xs leading-tight">{d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Desktop: flex row, conectores verticais saindo da barra */}
                  <div className="hidden sm:flex">
                    {[
                      'Diretoria de Estrutura e Processos Organizacionais',
                      'Diretoria de Gestão Documental',
                      'Diretoria de Planos, Projetos e Programas Institucionais',
                    ].map((d, i) => (
                      <div key={d} className="flex-1 flex flex-col items-center">
                        <div className="w-0.5 h-6 bg-mpmg-azul" aria-hidden="true" />
                        <div className={`w-full ${i === 0 ? 'pr-2' : i === 2 ? 'pl-2' : 'px-2'}`}>
                          <div className="bg-blue-50 border-2 border-mpmg-azul text-mpmg-azulEscuro px-3 py-3 rounded-xl text-center">
                            <p className="font-semibold text-xs leading-tight">{d}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
