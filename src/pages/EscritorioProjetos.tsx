import { FolderKanban, Mail, Phone, ExternalLink, Download, FileText, Layers, CheckSquare } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

const breadcrumbItems = [
  { label: 'Conheça o MPMG', href: '/' },
  { label: 'Planejamento Institucional', href: '/' },
  { label: 'Escritório de Projetos' },
]

const atribuicoes = [
  { icon: Layers, titulo: 'Gerenciamento de Projetos', descricao: 'Implementa a Metodologia de Gerenciamento de Projetos (MGP), baseada no PMBOK/PMI, estabelecendo indicadores de desempenho e metas de resultados.' },
  { icon: CheckSquare, titulo: 'Portfólio Estratégico', descricao: 'Supervisiona projetos aprovados pelo Fórum Permanente de Gestão, Fórum de Resultados e Conselho de Gestão Estratégica.' },
  { icon: FolderKanban, titulo: 'Centralização de Propostas', descricao: 'Reúne e avalia projetos desenvolvidos por membros e servidores em suas unidades, promovendo soluções institucionais.' },
]

const documentos = [
  { titulo: 'Metodologia de Gerenciamento de Projetos', versao: 'v1.0', icone: FileText },
  { titulo: 'Modelo de Operação do Escritório de Projetos', versao: 'v1.0', icone: FileText },
  { titulo: 'Plano de Trabalho Anual', versao: null, icone: FileText },
  { titulo: 'Ficha de Proposta de Projeto (FPP)', versao: 'PDF e DOCX', icone: Download },
]

export default function EscritorioProjetos() {
  return (
    <div className="min-h-screen flex flex-col bg-mpmg-cinzaClaro">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 xl:w-72 flex-shrink-0"><Sidebar /></aside>

          <div className="flex-1 min-w-0 space-y-8">

            {/* Hero */}
            <section className="relative rounded-2xl p-8 text-white shadow-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #047857 60%, #10b981 100%)' }} aria-labelledby="ep-title">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, white 0%, transparent 60%)' }} aria-hidden="true" />
              <div className="relative flex items-start gap-5">
                <div className="bg-white/15 rounded-2xl p-3.5 flex-shrink-0">
                  <FolderKanban className="w-9 h-9 text-emerald-200" aria-hidden="true" />
                </div>
                <div>
                  <h1 id="ep-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight">Escritório de Projetos</h1>
                  <p className="mt-2 text-emerald-100 text-base">Diretoria de Planos, Projetos e Programas Institucionais — DPIN</p>
                </div>
              </div>
            </section>

            {/* O que é */}
            <section className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-emerald-500" aria-labelledby="ep-sobre-title">
              <h2 id="ep-sobre-title" className="text-xl font-bold text-mpmg-azulEscuro mb-3">O que é o Escritório de Projetos?</h2>
              <p className="text-mpmg-cinzaTexto leading-relaxed text-sm">
                O Escritório de Projetos (EPMP) é uma função desempenhada pela Diretoria de Planos,
                Projetos e Programas Institucionais (DPIN). Sua responsabilidade é gerenciar o processo
                de projetos do MPMG, manter o portfólio estratégico e centralizar a gestão de propostas
                desenvolvidas por membros e servidores nas suas unidades.
              </p>
            </section>

            {/* Atribuições */}
            <section aria-labelledby="ep-atr-title">
              <h2 id="ep-atr-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">Atribuições Principais</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {atribuicoes.map(({ icon: Icon, titulo, descricao }) => (
                  <article key={titulo} className="bg-white rounded-2xl p-5 border border-mpmg-cinzaMedio hover:shadow-lg hover:border-emerald-300 transition-all duration-200 group">
                    <div className="bg-emerald-50 rounded-xl w-10 h-10 flex items-center justify-center mb-3 group-hover:bg-emerald-500 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-mpmg-preto text-sm mb-1">{titulo}</h3>
                    <p className="text-xs text-mpmg-cinzaTexto leading-relaxed">{descricao}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Banco de Projetos */}
            <section className="bg-white rounded-2xl shadow-md overflow-hidden" aria-labelledby="ep-banco-title">
              <div className="bg-gradient-to-r from-emerald-700 to-emerald-500 px-6 py-4">
                <h2 id="ep-banco-title" className="text-white font-bold text-lg">Banco de Projetos</h2>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">
                  Todos os projetos cadastrados no MPMG podem ser consultados na plataforma
                  <strong className="text-mpmg-preto"> Channel</strong>. Para submeter uma proposta,
                  acesse Meu Channel → Portfólios → Proposição de Projetos.
                </p>
                <a
                  href="https://channel.mpmg.mp.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  aria-label="Acessar Banco de Projetos no Channel — abre em nova aba"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Acessar plataforma Channel
                </a>
              </div>
            </section>

            {/* Documentos */}
            <section aria-labelledby="ep-docs-title">
              <h2 id="ep-docs-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">Documentos Disponíveis</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {documentos.map(({ titulo, versao, icone: Icon }) => (
                  <div key={titulo} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-mpmg-cinzaMedio">
                    <div className="bg-mpmg-cinzaClaro rounded-lg p-2.5 flex-shrink-0">
                      <Icon className="w-5 h-5 text-mpmg-azul" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-mpmg-preto text-sm">{titulo}</p>
                      {versao && <p className="text-xs text-mpmg-cinzaTexto mt-0.5">{versao}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contato */}
            <section className="bg-mpmg-cinzaClaro rounded-2xl p-6 border border-mpmg-cinzaMedio" aria-labelledby="ep-contato-title">
              <h2 id="ep-contato-title" className="text-base font-bold text-mpmg-azulEscuro mb-4">Contato — Escritório de Projetos</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:projetos@mpmg.mp.br" className="flex items-center gap-2 text-sm text-mpmg-azul hover:underline focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded">
                  <Mail className="w-4 h-4" aria-hidden="true" /> projetos@mpmg.mp.br
                </a>
                <span className="flex items-center gap-2 text-sm text-mpmg-cinzaTexto">
                  <Phone className="w-4 h-4" aria-hidden="true" /> (31) 3330-9980
                </span>
              </div>
            </section>

            <div className="flex justify-end">
              <a href="https://www.mpmg.mp.br/portal/menu/conheca-o-mpmg/planejamento-institucional/escritorio-de-projetos.shtml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-mpmg-azul hover:text-mpmg-azulEscuro font-medium focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded">
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
