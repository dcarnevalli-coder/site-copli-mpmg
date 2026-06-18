import { Target, Mail, Phone, ExternalLink, Zap, BookOpen } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

const breadcrumbItems = [
  { label: 'Conheça o MPMG', href: '/' },
  { label: 'Planejamento Institucional', href: '/' },
  { label: 'Programa OKResultados' },
]

const timeline = [
  { ano: '2021', evento: 'Primeiro contato com a metodologia OKR via Programa de Eficiência Administrativa (PEAD)' },
  { ano: '2022', evento: 'Intercâmbio com órgãos públicos de Santa Catarina e Mato Grosso do Sul para aprofundamento' },
  { ano: '1º sem. 2023', evento: 'Decisão institucional de adotar OKR e capacitação das lideranças do MPMG' },
  { ano: '2º sem. 2023', evento: 'Criação formal do Programa OKResultados e desenvolvimento das ferramentas' },
  { ano: 'Dez. 2023', evento: 'Lançamento oficial em solenidade, com implementação no PGA Administrativo 2024' },
]

const ferramentas = [
  {
    nome: 'Sistema Águias do MP',
    descricao: 'Aplicativo desenvolvido em Microsoft Power Apps (cedido pelo MPMS), acessível via Teams, para documentar e acompanhar os OKRs institucionais.',
    icone: Zap,
    cor: 'bg-indigo-50 text-indigo-600',
  },
  {
    nome: 'BSC + OKR',
    descricao: 'Combinação do Balanced Scorecard para definir e comunicar a estratégia com OKR para converter objetivos em resultados operacionais mensuráveis.',
    icone: Target,
    cor: 'bg-blue-50 text-mpmg-azul',
  },
  {
    nome: 'PGA Administrativo',
    descricao: 'Plano que incorpora a metodologia OKR para o acompanhamento de desempenho estratégico nas atividades administrativas do MPMG.',
    icone: BookOpen,
    cor: 'bg-emerald-50 text-emerald-600',
  },
]

export default function OKResultados() {
  return (
    <div className="min-h-screen flex flex-col bg-mpmg-cinzaClaro">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 xl:w-72 flex-shrink-0"><Sidebar /></aside>

          <div className="flex-1 min-w-0 space-y-8">

            {/* Hero */}
            <section className="relative rounded-2xl p-8 text-white shadow-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #002269 0%, #003DA5 60%, #1A5DC4 100%)' }} aria-labelledby="okr-title">
              <div className="absolute right-0 top-0 w-64 h-64 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white, transparent 70%)' }} aria-hidden="true" />
              <div className="relative flex items-start gap-5">
                <div className="bg-white/15 rounded-2xl p-3.5 flex-shrink-0">
                  <Target className="w-9 h-9 text-blue-200" aria-hidden="true" />
                </div>
                <div>
                  <h1 id="okr-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight">Programa OKResultados</h1>
                  <p className="mt-2 text-blue-200 text-base">Gestão estratégica por Objetivos e Resultados-Chave</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20 text-blue-100">Metodologia OKR</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20 text-blue-100">Lançado em dez. 2023</span>
                  </div>
                </div>
              </div>
            </section>

            {/* O que é */}
            <section className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-mpmg-azul" aria-labelledby="okr-sobre-title">
              <h2 id="okr-sobre-title" className="text-xl font-bold text-mpmg-azulEscuro mb-3">O que é o Programa OKResultados?</h2>
              <p className="text-mpmg-cinzaTexto leading-relaxed text-sm">
                O Programa OKResultados foi criado para tornar mais <strong className="text-mpmg-preto">ágil e transparente</strong> o
                acompanhamento e a execução das atividades relacionadas ao Planejamento Estratégico no MPMG.
                Ele define o processo a ser adotado para a definição, execução e acompanhamento dos OKRs
                estratégicos da instituição, combinando o BSC (Balanced Scorecard) para comunicação da
                estratégia com o OKR (Objectives and Key Results) para conversão de objetivos em
                resultados operacionais mensuráveis.
              </p>
            </section>

            {/* Ferramentas */}
            <section aria-labelledby="okr-ferramentas-title">
              <h2 id="okr-ferramentas-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">Ferramentas e Metodologia</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ferramentas.map(({ nome, descricao, icone: Icon, cor }) => (
                  <article key={nome} className="bg-white rounded-2xl p-5 border border-mpmg-cinzaMedio hover:shadow-lg transition-shadow duration-200">
                    <div className={`rounded-xl p-2.5 inline-flex mb-3 ${cor}`}>
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-mpmg-preto text-sm mb-2">{nome}</h3>
                    <p className="text-xs text-mpmg-cinzaTexto leading-relaxed">{descricao}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Histórico */}
            <section className="bg-white rounded-2xl shadow-md p-6" aria-labelledby="okr-hist-title">
              <h2 id="okr-hist-title" className="text-xl font-bold text-mpmg-azulEscuro mb-6">Histórico de Implantação</h2>
              <div className="relative">
                <div className="absolute left-[68px] top-0 bottom-0 w-0.5 bg-mpmg-cinzaMedio" aria-hidden="true" />
                <ul className="space-y-5">
                  {timeline.map((item, idx) => (
                    <li key={idx} className="flex gap-4 relative">
                      <div className="w-[68px] flex-shrink-0 text-right">
                        <span className="text-xs font-bold text-mpmg-azul bg-blue-50 px-2 py-0.5 rounded-full whitespace-nowrap">{item.ano}</span>
                      </div>
                      <div className="relative pl-4">
                        <div className="absolute left-[-3px] top-[5px] w-2 h-2 rounded-full bg-mpmg-azul ring-2 ring-white" aria-hidden="true" />
                        <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">{item.evento}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-mpmg-cinzaClaro rounded-2xl p-6 border border-mpmg-cinzaMedio" aria-labelledby="okr-contato-title">
              <h2 id="okr-contato-title" className="text-base font-bold text-mpmg-azulEscuro mb-4">Contato — OKResultados</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:okresultados@mpmg.mp.br" className="flex items-center gap-2 text-sm text-mpmg-azul hover:underline focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded">
                  <Mail className="w-4 h-4" aria-hidden="true" /> okresultados@mpmg.mp.br
                </a>
                <span className="flex items-center gap-2 text-sm text-mpmg-cinzaTexto">
                  <Phone className="w-4 h-4" aria-hidden="true" /> (31) 3330-9980
                </span>
              </div>
            </section>

            <div className="flex justify-end">
              <a href="https://www.mpmg.mp.br/portal/menu/conheca-o-mpmg/planejamento-institucional/programa-okresultados.shtml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-mpmg-azul hover:text-mpmg-azulEscuro font-medium focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded">
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
