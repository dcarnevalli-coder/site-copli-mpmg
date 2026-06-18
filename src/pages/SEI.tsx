import { LogIn, UserCheck, Clock, Phone, Mail, Monitor } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'
import HolidayCalendar from '../components/calendar/HolidayCalendar'

const breadcrumbItems = [
  { label: 'Serviços', href: '/' },
  { label: 'Acesso à Informação' },
  { label: 'SEI' },
]

export default function SEI() {
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
              className="bg-mpmg-azulEscuro rounded-2xl p-8 text-white shadow-lg"
              aria-labelledby="sei-hero-title"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/10 rounded-xl p-3">
                  <Monitor className="w-8 h-8 text-blue-200" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <h1
                      id="sei-hero-title"
                      className="text-5xl font-extrabold tracking-tight text-white"
                      style={{ fontSize: '48px' }}
                    >
                      SEI
                    </h1>
                    <span className="hidden sm:block text-blue-300 text-lg font-medium">
                      Sistema Eletrônico de Informações
                    </span>
                  </div>
                  <p className="sm:hidden text-blue-200 font-medium mb-3">
                    Sistema Eletrônico de Informações
                  </p>
                  <p className="text-blue-200 text-sm leading-relaxed max-w-2xl">
                    Sistema de produção e gestão de documentos e processos eletrônicos,
                    desenvolvido pelo TRF4 e cedido ao MPMG e a outros órgãos da administração
                    pública.
                  </p>
                </div>
              </div>
            </section>

            {/* Sobre o SEI */}
            <section
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-mpmg-azul"
              aria-labelledby="sei-sobre-title"
            >
              <h2 id="sei-sobre-title" className="text-xl font-bold text-mpmg-azulEscuro mb-4">
                Sobre o SEI
              </h2>
              <div className="space-y-3 text-mpmg-cinzaTexto leading-relaxed">
                <p>
                  O SEI (Sistema Eletrônico de Informações) é uma plataforma que engloba um
                  conjunto de módulos e funcionalidades que promovem a eficiência administrativa.
                  É um sistema de gestão de processos e documentos eletrônicos, com interface
                  amigável e práticas inovadoras de trabalho.
                </p>
                <p>
                  Uma de suas principais características é a possibilidade de multi-plataforma,
                  ou seja, sua utilização em diferentes dispositivos (computadores, tablets e
                  aparelhos de telefonia celular do tipo smartphone). Além disso, tem foco na
                  libertação do paradigma do papel como suporte físico para documentos
                  institucionais e o compartilhamento do conhecimento com atualização e
                  comunicação de novos eventos em tempo real.
                </p>
                <p>
                  O sistema foi desenvolvido pelo Tribunal Regional Federal da 4ª Região (TRF4) e
                  cedido ao MPMG por meio de Acordo de Cooperação Técnica.
                </p>
              </div>
            </section>

            {/* Acesso ao sistema */}
            <section
              className="bg-mpmg-cinzaClaro rounded-xl shadow-md p-6 border border-mpmg-cinzaMedio"
              aria-labelledby="sei-acesso-title"
            >
              <h2 id="sei-acesso-title" className="text-xl font-bold text-mpmg-azulEscuro mb-2">
                Acesso ao Sistema
              </h2>
              <p className="text-sm text-mpmg-cinzaTexto mb-6">
                Escolha seu perfil de acesso para entrar no SEI:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://sei.mpmg.mp.br/sei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-mpmg-azulEscuro text-white px-6 py-4 rounded-xl font-semibold hover:bg-mpmg-azulClaro transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-mpmg-azul focus:ring-offset-2 shadow-md"
                  aria-label="Acessar SEI como Usuário Interno — abre em nova aba"
                >
                  <LogIn className="w-5 h-5" aria-hidden="true" />
                  Usuário Interno
                </a>
                <a
                  href="http://sei.mpmg.mp.br/sei/controlador_externo.php?acao=usuario_externo_logar&id_orgao_acesso_externo=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-mpmg-azul text-mpmg-azul px-6 py-4 rounded-xl font-semibold hover:bg-mpmg-azul hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-mpmg-azul focus:ring-offset-2"
                  aria-label="Acessar SEI como Usuário Externo — abre em nova aba"
                >
                  <UserCheck className="w-5 h-5" aria-hidden="true" />
                  Usuário Externo
                </a>
              </div>
            </section>

            {/* Horário e Suporte */}
            <section
              className="bg-white rounded-xl shadow-md p-6"
              aria-labelledby="sei-suporte-title"
            >
              <h2 id="sei-suporte-title" className="text-xl font-bold text-mpmg-azulEscuro mb-5">
                Horário de Atendimento e Suporte
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-mpmg-cinzaClaro rounded-xl border border-mpmg-cinzaMedio">
                  <Clock className="w-5 h-5 text-mpmg-azul flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-mpmg-azulEscuro uppercase tracking-wide mb-1">
                      Horário
                    </p>
                    <p className="text-sm text-mpmg-cinzaTexto">Dias úteis<br />08h às 19h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mpmg-cinzaClaro rounded-xl border border-mpmg-cinzaMedio">
                  <Phone className="w-5 h-5 text-mpmg-azul flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-mpmg-azulEscuro uppercase tracking-wide mb-1">
                      SEI Suporte
                    </p>
                    <p className="text-sm text-mpmg-cinzaTexto">(031) 3330-8458</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-mpmg-cinzaClaro rounded-xl border border-mpmg-cinzaMedio">
                  <Mail className="w-5 h-5 text-mpmg-azul flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-mpmg-azulEscuro uppercase tracking-wide mb-1">
                      E-mail
                    </p>
                    <a
                      href="mailto:seisuporte@mpmg.mp.br"
                      className="text-sm text-mpmg-azul hover:underline focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded"
                    >
                      seisuporte@mpmg.mp.br
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Calendário */}
            <section aria-labelledby="calendario-title">
              <div className="flex items-center gap-3 mb-5">
                <h2 id="calendario-title" className="text-xl font-bold text-mpmg-azulEscuro">
                  Calendário de Feriados e Pontos Facultativos 2026
                </h2>
              </div>
              <p className="text-sm text-mpmg-cinzaTexto mb-6 -mt-3">
                Confira os dias sem expediente no âmbito do MPMG em Belo Horizonte.
              </p>
              <HolidayCalendar />
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
