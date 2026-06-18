import { BarChart2, ClipboardList, ExternalLink, Calendar } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

const breadcrumbItems = [
  { label: 'Conheça o MPMG', href: '/' },
  { label: 'Planejamento Institucional', href: '/' },
  { label: 'Planejamento Estratégico' },
]

const citacoes = [
  {
    texto: 'Nossos objetivos somente podem ser alcançados através de um veículo de planejamento no qual acreditamos fervorosamente, e com o qual devemos vigorosamente atuar. Não existe nenhum outro caminho para o sucesso.',
    autor: 'Pablo Picasso',
  },
  {
    texto: 'Planejamento estratégico é o processo contínuo de tomar decisões atuais com conhecimento do futuro, organizar as atividades necessárias para executar essas decisões e medir os resultados através de retroalimentação sistemática.',
    autor: 'Peter Drucker',
  },
]

const componentes = [
  { titulo: 'PGA Finalístico', descricao: 'Plano orientado às atividades-fim do Ministério Público, voltado à atuação de membros e unidades na defesa dos direitos dos cidadãos.', icone: ClipboardList, cor: 'bg-blue-50 text-mpmg-azul' },
  { titulo: 'PGA Administrativo', descricao: 'Plano orientado às atividades administrativas e de apoio, incorporando a metodologia OKR para acompanhamento de desempenho estratégico.', icone: BarChart2, cor: 'bg-indigo-50 text-indigo-600' },
]

export default function PlanejamentoEstrategico() {
  return (
    <div className="min-h-screen flex flex-col bg-mpmg-cinzaClaro">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 xl:w-72 flex-shrink-0"><Sidebar /></aside>

          <div className="flex-1 min-w-0 space-y-8">

            {/* Hero */}
            <section className="relative bg-mpmg-azulEscuro rounded-2xl p-8 text-white shadow-xl overflow-hidden" aria-labelledby="pe-title">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #003DA5 0%, transparent 60%)' }} aria-hidden="true" />
              <div className="relative flex items-start gap-5">
                <div className="bg-white/10 rounded-2xl p-3.5 flex-shrink-0">
                  <BarChart2 className="w-9 h-9 text-blue-200" aria-hidden="true" />
                </div>
                <div>
                  <h1 id="pe-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight">Planejamento Estratégico</h1>
                  <p className="mt-2 text-blue-200 text-base font-medium">Coordenadoria de Planejamento Institucional — COPLI</p>
                </div>
              </div>
            </section>

            {/* Conceito */}
            <section className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-mpmg-azul" aria-labelledby="conceito-title">
              <h2 id="conceito-title" className="text-xl font-bold text-mpmg-azulEscuro mb-4">O que é Planejamento Estratégico?</h2>
              <p className="text-mpmg-cinzaTexto leading-relaxed text-sm">
                O planejamento estratégico é o processo contínuo e sistemático pelo qual o MPMG define
                seus objetivos institucionais de longo prazo, estabelece metas mensuráveis e organiza
                as ações necessárias para alcançá-los, garantindo a entrega de resultados relevantes
                à sociedade mineira.
              </p>
            </section>

            {/* Missão, Visão e Valores */}
            <section className="bg-white rounded-2xl shadow-md overflow-hidden" aria-labelledby="mvv-title">
              <div className="bg-gradient-to-r from-mpmg-azul to-mpmg-azulClaro px-6 py-4 flex items-center gap-3">
                <BarChart2 className="w-6 h-6 text-white" aria-hidden="true" />
                <h2 id="mvv-title" className="text-white font-bold text-lg">Missão, Visão e Valores</h2>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-mpmg-azul">
                  <p className="text-xs font-bold uppercase tracking-widest text-mpmg-azul mb-2">Missão</p>
                  <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">
                    Defender a ordem jurídica, o regime democrático e os interesses sociais e individuais indisponíveis.
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 border-l-4 border-indigo-500">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Valores</p>
                  <ul className="space-y-1.5">
                    {['Resolutividade', 'Independência', 'Transparência', 'Efetividade', 'Inovação'].map((v) => (
                      <li key={v} className="flex items-center gap-2 text-sm text-mpmg-cinzaTexto">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border-l-4 border-emerald-500">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Visão</p>
                  <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">
                    Ser uma instituição transformadora da realidade social, comprometida com a resolutividade, a transparência, a ética e a concretização dos objetivos fundamentais da Constituição.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-mpmg-cinzaMedio space-y-3">
                <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">
                  Os enunciados da Missão, dos Valores e da Visão institucionais retratam, em conjunto, a identidade do Ministério Público de Minas Gerais.
                </p>
                <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">
                  A <strong className="text-mpmg-preto">missão</strong> define a razão de existir do MPMG e seu objetivo maior. Espelha o que a Instituição, ciente de sua finalidade constitucional, se propõe a fazer para a sociedade. A consciência de sua missão proporciona a seus membros e servidores o comprometimento com a importância e alcance social do trabalho realizado.
                </p>
                <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">
                  Os <strong className="text-mpmg-preto">valores</strong> enunciados correspondem aos princípios mais perenes da Instituição. Os valores são inegociáveis e guiam as decisões e as atitudes de todos os seus integrantes, no desempenho de suas responsabilidades.
                </p>
                <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">
                  O enunciado da <strong className="text-mpmg-preto">visão</strong> reflete o alvo a ser atingido no horizonte de 13 (treze) anos. O conhecimento da visão de futuro da organização orienta todo o esforço empreendido por seus integrantes, a alocação dos recursos necessários e o maior alinhamento das ações individuais e de equipes.
                </p>
                <p className="text-xs text-mpmg-cinzaTexto pt-1">
                  Fonte: Plano Estratégico MPMG 2020–2029 — Mapa Estratégico Nacional do Ministério Público.
                </p>
              </div>
            </section>

            {/* Citações */}
            <section aria-labelledby="cit-title">
              <h2 id="cit-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">Referências</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {citacoes.map((c) => (
                  <blockquote key={c.autor} className="bg-white rounded-2xl p-5 border border-mpmg-cinzaMedio shadow-sm relative">
                    <div className="text-5xl text-mpmg-azul/20 font-serif leading-none absolute top-3 left-4" aria-hidden="true">"</div>
                    <p className="text-mpmg-cinzaTexto text-sm leading-relaxed italic pt-4 relative z-10">{c.texto}</p>
                    <footer className="mt-3 text-xs font-semibold text-mpmg-azul">— {c.autor}</footer>
                  </blockquote>
                ))}
              </div>
            </section>

            {/* Plano Geral de Atuação */}
            <section className="bg-white rounded-2xl shadow-md overflow-hidden" aria-labelledby="pga-title">
              <div className="bg-gradient-to-r from-mpmg-azul to-mpmg-azulClaro px-6 py-4 flex items-center gap-3">
                <ClipboardList className="w-6 h-6 text-white" aria-hidden="true" />
                <h2 id="pga-title" className="text-white font-bold text-lg">Plano Geral de Atuação — PGA</h2>
              </div>
              <div className="p-6">
                <p className="text-mpmg-cinzaTexto leading-relaxed text-sm mb-6">
                  O PGA é o documento destinado a nortear as ações desenvolvidas pelo Ministério Público
                  na busca de seus objetivos estratégicos, entregando resultados que atendam às demandas
                  da sociedade nas diversas áreas de atuação institucional.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {componentes.map(({ titulo, descricao, icone: Icon, cor }) => (
                    <div key={titulo} className="rounded-xl border border-mpmg-cinzaMedio p-4 flex gap-3">
                      <div className={`rounded-lg p-2 flex-shrink-0 self-start ${cor}`}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-mpmg-preto text-sm">{titulo}</p>
                        <p className="text-xs text-mpmg-cinzaTexto mt-1 leading-relaxed">{descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-mpmg-cinzaTexto bg-mpmg-cinzaClaro rounded-xl px-4 py-3">
                  <Calendar className="w-4 h-4 text-mpmg-azul flex-shrink-0" aria-hidden="true" />
                  <span>Última atualização: <strong className="text-mpmg-preto">17/03/2026</strong></span>
                </div>
              </div>
            </section>

            {/* Link portal */}
            <div className="flex justify-end">
              <a
                href="https://www.mpmg.mp.br/portal/menu/conheca-o-mpmg/planejamento-institucional/planejamento-estrategico.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mpmg-azul hover:text-mpmg-azulEscuro font-medium focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Ver no portal MPMG
              </a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
