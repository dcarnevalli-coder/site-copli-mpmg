import { Archive, BookOpen, FolderOpen, Database, Scan, Download, Trash2, Phone, Mail, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

const breadcrumbItems = [
  { label: 'Conheça o MPMG', href: '/' },
  { label: 'Planejamento Institucional', href: '/' },
  { label: 'Gestão de Documentos' },
]

const setores = [
  {
    icon: FolderOpen,
    title: 'Diretoria de Gestão Documental',
    setor: 'DIGD',
    phone: '(31) 3330-9979',
    email: 'gestaodocumental@mpmg.mp.br',
    colorClass: 'border-gray-500',
    iconColor: 'text-gray-600',
    bgColor: 'bg-gray-100',
  },
  {
    icon: Database,
    title: 'Arquivo Central',
    setor: 'Arquivo Central — DIGD',
    phone: '(31) 3313-7900',
    email: null,
    colorClass: 'border-gray-400',
    iconColor: 'text-gray-500',
    bgColor: 'bg-gray-100',
  },
  {
    icon: Scan,
    title: 'Central de Digitalização',
    setor: 'Central de Digitalização — DIGD',
    phone: '(31) 3295-4599',
    email: null,
    colorClass: 'border-gray-400',
    iconColor: 'text-gray-500',
    bgColor: 'bg-gray-100',
  },
]

const documentos = [
  {
    icon: Download,
    title: 'Plano de Classificação e Tabela de Temporalidade',
    subtitle: 'PCTTD — Unificado',
    href: 'https://www.mpmg.mp.br/data/files/9E/A1/F9/B2/BFBE591061202D49760849A8/PCTTD%20-%20Unificado%20arq%2031_03_25.pdf',
    iconColor: 'text-mpmg-azul',
    bg: 'bg-mpmg-cinzaClaro',
  },
  {
    icon: Trash2,
    title: 'Procedimento para Eliminação de Documentos',
    subtitle: 'Documentos de Arquivo',
    href: 'https://www.mpmg.mp.br/data/files/D5/65/45/FE/76F1C91073438EB9B9A8F9C2/PROCEDIMENTO%20PARA%20ELIMINACAO%20DE%20DOCUMENTOS%20DE%20ARQUIVO%20-%20FINAL.pdf',
    iconColor: 'text-red-500',
    bg: 'bg-red-50',
  },
]

export default function GestaoDocumentos() {
  return (
    <div className="min-h-screen flex flex-col bg-mpmg-cinzaClaro">
      <Header />
      <Breadcrumb items={breadcrumbItems} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 xl:w-72 flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Conteúdo principal */}
          <div className="flex-1 space-y-8">

            {/* Hero */}
            <section
              className="relative rounded-2xl p-8 text-white shadow-xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #374151 0%, #4B5563 60%, #6B7280 100%)' }}
              aria-labelledby="ged-hero-title"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, white 0%, transparent 60%)' }} aria-hidden="true" />
              <div className="relative flex items-start gap-5">
                <div className="bg-white/15 rounded-2xl p-3.5 flex-shrink-0">
                  <Archive className="w-9 h-9 text-gray-200" aria-hidden="true" />
                </div>
                <div>
                  <h1
                    id="ged-hero-title"
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight"
                  >
                    Gestão de Documentos
                  </h1>
                  <p className="mt-2 text-gray-200 text-base font-medium">
                    Diretoria de Gestão Documental — DIGD
                  </p>
                  <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-gray-100 border border-gray-400/30">
                    Vinculada à COPLI — Coordenadoria de Planejamento Institucional
                  </span>
                </div>
              </div>
            </section>

            {/* Definição Legal */}
            <section
              className="bg-mpmg-cinzaClaro rounded-xl shadow-md p-6 border-l-4 border-gray-400"
              aria-labelledby="ged-legal-title"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-gray-500" aria-hidden="true" />
                <h2 id="ged-legal-title" className="text-xl font-bold text-mpmg-azulEscuro">
                  Fundamento Legal
                </h2>
              </div>
              <blockquote className="border-l-2 border-gray-400 pl-4 mb-4">
                <p className="italic text-mpmg-cinzaTexto leading-relaxed text-sm">
                  "Gestão de documentos é o conjunto de procedimentos e operações técnicas
                  referentes à sua produção, tramitação, uso, avaliação e arquivamento em fase
                  corrente e intermediária, visando a sua eliminação ou seu recolhimento para
                  guarda permanente."
                </p>
              </blockquote>
              <a
                href="http://www.planalto.gov.br/ccivil_03/Leis/L8159.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-mpmg-azul hover:text-mpmg-azulEscuro hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Lei nº 8.159/91 no Planalto — Lei Nacional de Arquivos
              </a>
            </section>

            {/* Sobre a DIGD */}
            <section
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-gray-500"
              aria-labelledby="ged-digd-title"
            >
              <h2 id="ged-digd-title" className="text-xl font-bold text-mpmg-azulEscuro mb-4">
                Diretoria de Gestão Documental (DIGD)
              </h2>
              <p className="text-mpmg-cinzaTexto leading-relaxed">
                A Diretoria de Gestão Documental é responsável por planejar, coordenar, orientar,
                promover e supervisionar as atividades relativas à gestão documental do MPMG, com
                o objetivo de assegurar a autenticidade, integridade, segurança, preservação e o
                acesso a longo prazo dos documentos e processos.
              </p>
            </section>

            {/* Setores */}
            <section aria-labelledby="ged-setores-title">
              <h2 id="ged-setores-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">
                Setores da DIGD
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {setores.map(({ icon: Icon, title, setor, phone, email, colorClass, iconColor, bgColor }) => (
                  <article
                    key={setor}
                    className={`bg-white rounded-xl shadow-md border-t-4 ${colorClass} hover:shadow-lg transition-shadow duration-200 overflow-hidden`}
                  >
                    <div className="p-5">
                      <div className={`${bgColor} rounded-lg w-10 h-10 flex items-center justify-center mb-4`}>
                        <Icon className={`w-5 h-5 ${iconColor}`} aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-mpmg-preto text-sm leading-tight mb-1">
                        {title}
                      </h3>
                      <p className="text-xs text-mpmg-cinzaTexto mb-4">{setor}</p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-mpmg-cinzaTexto">
                          <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                          <span>{phone}</span>
                        </div>
                        {email && (
                          <div className="flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-mpmg-cinzaTexto flex-shrink-0" aria-hidden="true" />
                            <a
                              href={`mailto:${email}`}
                              className="text-mpmg-azul text-xs hover:underline focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded truncate"
                            >
                              {email}
                            </a>
                          </div>
                        )}
                      </div>

                      {email && (
                        <a
                          href={`mailto:${email}`}
                          className="mt-4 flex items-center justify-center gap-2 w-full bg-gray-700 text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                          aria-label={`Enviar e-mail para ${title}`}
                        >
                          <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                          Enviar e-mail
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Documentos e Recursos */}
            <section aria-labelledby="ged-docs-title">
              <h2 id="ged-docs-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">
                Documentos e Recursos
              </h2>
              <div className="space-y-4">
                {documentos.map(({ icon: Icon, title, subtitle, href, iconColor, bg }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 ${bg} rounded-xl p-5 border border-mpmg-cinzaMedio hover:shadow-md hover:border-mpmg-azul transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-mpmg-azul`}
                    aria-label={`${title} — baixar PDF, abre em nova aba`}
                  >
                    <div className="bg-white rounded-lg w-12 h-12 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:shadow-md transition-shadow">
                      <Icon className={`w-6 h-6 ${iconColor}`} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-mpmg-preto text-sm">{title}</p>
                      <p className="text-xs text-mpmg-cinzaTexto mt-0.5">{subtitle}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-mpmg-azul font-medium flex-shrink-0 group-hover:text-mpmg-azulEscuro transition-colors">
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      <span className="hidden sm:inline">Abrir PDF</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
