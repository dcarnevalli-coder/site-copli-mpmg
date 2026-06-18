import { Trophy, Mail, Phone, ExternalLink, Calendar, Award, Star } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

const breadcrumbItems = [
  { label: 'Conheça o MPMG', href: '/' },
  { label: 'Planejamento Institucional', href: '/' },
  { label: 'Premiações de Projetos' },
]

const premios = [
  {
    nome: 'Prêmio de Inovação J.Ex 2026',
    prazo: 'Inscrições até 14 de junho de 2026',
    descricao: 'Reconhece e incentiva iniciativas e projetos inovadores no âmbito tecnológico, de gestão e novas metodologias aplicadas no Ecossistema de Justiça.',
    areas: ['Tecnologia', 'Gestão', 'Novas Metodologias'],
    responsavel: 'Escritório de Projetos do MPMG (EPMP)',
    plataforma: 'Formulários eletrônicos específicos para projetos e indicação de pessoas',
    destaque: true,
    cor: 'from-orange-500 to-amber-400',
    corBorder: 'border-orange-400',
    corBadge: 'bg-orange-50 text-orange-700',
  },
  {
    nome: 'Prêmio CNMP 2026',
    prazo: 'Inscrições até 21 de junho de 2026',
    descricao: 'Prêmio nacional do Conselho Nacional do Ministério Público, aberto a membros e servidores de todos os ramos e unidades do MP com projetos de resultados comprovados.',
    areas: ['Atuação Finalística', 'Atividade Administrativa', 'Categoria Especial'],
    responsavel: 'Conselho Nacional do Ministério Público (CNMP)',
    plataforma: 'Banco Nacional de Projetos (BNP) / Plataforma Channel',
    destaque: false,
    cor: 'from-mpmg-azulEscuro to-mpmg-azul',
    corBorder: 'border-mpmg-azul',
    corBadge: 'bg-blue-50 text-mpmg-azul',
  },
]

const requisitosCNMP = [
  'Projetos não podem estar em fase experimental',
  'Devem apresentar resultados comprovados nos últimos 3 anos',
  'Cadastramento via Banco Nacional de Projetos (BNP)',
  'Submissão através da plataforma Channel',
  'Projetos anteriormente premiados podem recandidatar-se com evolução significativa',
]

export default function Premiacoes() {
  return (
    <div className="min-h-screen flex flex-col bg-mpmg-cinzaClaro">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 xl:w-72 flex-shrink-0"><Sidebar /></aside>

          <div className="flex-1 min-w-0 space-y-8">

            {/* Hero */}
            <section className="relative rounded-2xl p-8 text-white shadow-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)' }} aria-labelledby="prem-title">
              <div className="absolute right-4 top-4 opacity-20" aria-hidden="true">
                <Trophy className="w-32 h-32 text-yellow-200" />
              </div>
              <div className="relative flex items-start gap-5">
                <div className="bg-white/15 rounded-2xl p-3.5 flex-shrink-0">
                  <Trophy className="w-9 h-9 text-yellow-200" aria-hidden="true" />
                </div>
                <div>
                  <h1 id="prem-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight">Premiações de Projetos</h1>
                  <p className="mt-2 text-amber-100 text-base">Reconhecimento de iniciativas inovadoras no MPMG</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20 text-amber-50">J.Ex 2026</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20 text-amber-50">CNMP 2026</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Prêmios */}
            {premios.map((premio) => (
              <section key={premio.nome} className={`bg-white rounded-2xl shadow-md overflow-hidden border-t-4 ${premio.corBorder}`} aria-labelledby={`premio-${premio.nome}`}>
                <div className={`bg-gradient-to-r ${premio.cor} px-6 py-4 flex items-center gap-3`}>
                  <Award className="w-6 h-6 text-white" aria-hidden="true" />
                  <h2 id={`premio-${premio.nome}`} className="text-white font-bold text-lg">{premio.nome}</h2>
                  {premio.destaque && (
                    <span className="ml-auto flex items-center gap-1 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-current" aria-hidden="true" /> Em aberto
                    </span>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-mpmg-azulEscuro bg-mpmg-cinzaClaro px-4 py-2.5 rounded-xl">
                    <Calendar className="w-4 h-4 text-mpmg-azul flex-shrink-0" aria-hidden="true" />
                    {premio.prazo}
                  </div>

                  <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">{premio.descricao}</p>

                  <div>
                    <p className="text-xs font-bold text-mpmg-azulEscuro uppercase tracking-wider mb-2">Categorias / Áreas</p>
                    <div className="flex flex-wrap gap-2">
                      {premio.areas.map((area) => (
                        <span key={area} className={`text-xs font-medium px-3 py-1 rounded-full border ${premio.corBadge} border-current/20`}>
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs font-bold text-mpmg-azulEscuro uppercase tracking-wider mb-1">Responsável</p>
                      <p className="text-mpmg-cinzaTexto">{premio.responsavel}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-mpmg-azulEscuro uppercase tracking-wider mb-1">Plataforma de inscrição</p>
                      <p className="text-mpmg-cinzaTexto">{premio.plataforma}</p>
                    </div>
                  </div>

                  {premio.nome.includes('CNMP') && (
                    <div>
                      <p className="text-xs font-bold text-mpmg-azulEscuro uppercase tracking-wider mb-2">Requisitos</p>
                      <ul className="space-y-1.5">
                        {requisitosCNMP.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-mpmg-cinzaTexto">
                            <span className="w-1.5 h-1.5 rounded-full bg-mpmg-azul mt-1.5 flex-shrink-0" aria-hidden="true" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* Contato */}
            <section className="bg-mpmg-cinzaClaro rounded-2xl p-6 border border-mpmg-cinzaMedio" aria-labelledby="prem-contato-title">
              <h2 id="prem-contato-title" className="text-base font-bold text-mpmg-azulEscuro mb-4">Dúvidas e Inscrições</h2>
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
              <a href="https://www.mpmg.mp.br/portal/menu/conheca-o-mpmg/planejamento-institucional/premiacoes-de-projetos.shtml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-mpmg-azul hover:text-mpmg-azulEscuro font-medium focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded">
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
