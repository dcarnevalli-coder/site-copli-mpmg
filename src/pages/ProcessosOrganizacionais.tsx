import { Workflow } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Sidebar'

const breadcrumbItems = [
  { label: 'Conheça o MPMG', href: '/' },
  { label: 'Planejamento Institucional', href: '/' },
  { label: 'Processos Organizacionais' },
]

const competencias = [
  'Programar, coordenar, controlar, realizar e apresentar estudos sobre rotinas administrativas visando otimização e padronização de processos',
  'Programar, coordenar, promover e avaliar levantamento, modelagem, análise e proposição de melhorias dos processos de trabalho',
  'Planejar, coordenar e promover a construção de indicadores referentes aos processos',
  'Planejar, coordenar, avaliar e executar sistematização, pesquisa, coleta e tratamento de dados para construção de indicadores',
  'Elaborar, analisar e monitorar indicadores de desempenho dos processos',
  'Fomentar elaboração e manutenção de banco de dados estatísticos concernentes aos processos',
  'Elaborar relatórios estatísticos e gerenciais que subsidiem a gestão de processos',
  'Sugerir e subsidiar aquisição, desenvolvimento, customização e implantação de sistemas informatizados',
  'Dar suporte técnico às unidades na elaboração e implantação de normas, sistemas, métodos e documentos relativos à simplificação do trabalho',
  'Elaborar e manter atualizada a Metodologia de Gestão de Processos',
  'Programar, promover e avaliar a disseminação e implantação de boas práticas de gestão de processos',
]

export default function ProcessosOrganizacionais() {
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
                  <Workflow className="w-9 h-9 text-blue-200" aria-hidden="true" />
                </div>
                <div>
                  <h1 id="hero-title" className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    Processos Organizacionais
                  </h1>
                  <p className="mt-2 text-blue-200 text-base font-medium">
                    Diretoria de Estrutura e Processos Organizacionais — DEPO
                  </p>
                  <span className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 border border-white/20 text-blue-100">
                    Superintendência de Planejamento e Coordenação — SPC / COPLI
                  </span>
                </div>
              </div>
            </section>

            {/* Sobre a DEPO */}
            <section className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-mpmg-azul" aria-labelledby="sobre-title">
              <h2 id="sobre-title" className="text-xl font-bold text-mpmg-azulEscuro mb-3">O que é a DEPO?</h2>
              <p className="text-mpmg-cinzaTexto leading-relaxed text-sm">
                A Diretoria de Estrutura e Processos Organizacionais (DEPO) tem como finalidade{' '}
                <strong className="text-mpmg-azulEscuro">promover, orientar, coordenar, implementar e avaliar</strong>{' '}
                ações necessárias à modernização administrativa e à construção de indicadores. A DEPO subordina-se à
                Superintendência de Planejamento e Coordenação (SPC), que por sua vez se subordina à Coordenadoria de
                Planejamento Institucional (COPLI).
              </p>
            </section>

            {/* O que é um Processo + Diagrama */}
            <section className="bg-white rounded-2xl shadow-md p-6" aria-labelledby="processo-title">
              <h2 id="processo-title" className="text-xl font-bold text-mpmg-azulEscuro mb-2">O que é um Processo?</h2>
              <p className="text-mpmg-cinzaTexto leading-relaxed text-sm mb-6">
                Segundo a Metodologia de Gestão de Processos, a gestão de processos atua{' '}
                <em>identificando, monitorando, avaliando e revisando</em> rotinas de trabalho, com foco na melhoria
                contínua. Um <strong className="text-mpmg-azulEscuro">processo</strong> é definido como um conjunto de
                atividades sequenciadas e articuladas que se inicia com um insumo (entrada) a ser trabalhado e
                transformado em um resultado (saída), visando agregar valor.
              </p>

              {/* Diagrama SVG */}
              <div className="overflow-x-auto">
                <svg
                  viewBox="0 0 760 295"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full max-w-3xl mx-auto"
                  aria-label="Diagrama do modelo de processo: Entradas transformadas em Saídas por meio de Atividades que agregam valor"
                >
                  <defs>
                    <marker id="arrEnd" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#003DA5" />
                    </marker>
                  </defs>

                  {/* Rótulos topo */}
                  <text x="108" y="20" textAnchor="middle" fontSize="11" fontWeight="600" fill="#002269" fontFamily="system-ui,sans-serif">Fornecedor</text>
                  <text x="374" y="20" textAnchor="middle" fontSize="11" fontWeight="600" fill="#003DA5" fontFamily="system-ui,sans-serif">Processo</text>
                  <text x="652" y="20" textAnchor="middle" fontSize="11" fontWeight="600" fill="#1A5DC4" fontFamily="system-ui,sans-serif">Cliente</text>

                  {/* Arcos topo "Requisitos" (direita → esquerda: cliente exige do fornecedor) */}
                  <path d="M 283 38 Q 249 8 215 38" fill="none" stroke="#003DA5" strokeWidth="1.5" markerEnd="url(#arrEnd)" />
                  <text x="249" y="8" textAnchor="middle" fontSize="10" fill="#003DA5" fontFamily="system-ui,sans-serif">Requisitos</text>

                  <path d="M 543 38 Q 509 8 475 38" fill="none" stroke="#003DA5" strokeWidth="1.5" markerEnd="url(#arrEnd)" />
                  <text x="509" y="8" textAnchor="middle" fontSize="10" fill="#003DA5" fontFamily="system-ui,sans-serif">Requisitos</text>

                  {/* CAIXA ESQUERDA: Entradas */}
                  <rect x="2" y="38" width="213" height="200" fill="white" stroke="#002269" strokeWidth="1.5" rx="6" />
                  <rect x="2" y="38" width="213" height="32" fill="#002269" rx="6" />
                  <rect x="2" y="58" width="213" height="12" fill="#002269" />
                  <text x="108" y="59" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">Entradas</text>

                  <text x="40" y="98" fontSize="12" fill="#002269" fontFamily="system-ui,sans-serif">→ Informações</text>
                  <text x="40" y="124" fontSize="12" fill="#002269" fontFamily="system-ui,sans-serif">→ Materiais</text>
                  <text x="40" y="150" fontSize="12" fill="#002269" fontFamily="system-ui,sans-serif">→ Instruções</text>
                  <text x="40" y="176" fontSize="12" fill="#002269" fontFamily="system-ui,sans-serif">→ Serviços</text>

                  <text x="108" y="252" textAnchor="middle" fontSize="10" fill="#002269" fontStyle="italic" fontFamily="system-ui,sans-serif">Insumos</text>

                  {/* Setas horizontais Entradas → Processo */}
                  <line x1="215" y1="98" x2="272" y2="98" stroke="#003DA5" strokeWidth="1.5" markerEnd="url(#arrEnd)" />
                  <line x1="215" y1="124" x2="272" y2="124" stroke="#003DA5" strokeWidth="1.5" markerEnd="url(#arrEnd)" />
                  <line x1="215" y1="150" x2="272" y2="150" stroke="#003DA5" strokeWidth="1.5" markerEnd="url(#arrEnd)" />
                  <line x1="215" y1="176" x2="272" y2="176" stroke="#003DA5" strokeWidth="1.5" markerEnd="url(#arrEnd)" />

                  {/* CAIXA CENTRAL: Processo */}
                  <rect x="276" y="38" width="195" height="200" fill="#003DA5" rx="6" />
                  <text x="373" y="118" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">Atividades</text>
                  <text x="373" y="139" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">que</text>
                  <text x="373" y="160" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">agregam</text>
                  <text x="373" y="181" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">valor</text>

                  {/* Seta larga Processo → Saídas */}
                  <polygon points="471,122 510,122 510,105 543,138 510,171 510,154 471,154" fill="#002269" />

                  {/* CAIXA DIREITA: Saídas */}
                  <rect x="547" y="38" width="211" height="200" fill="white" stroke="#1A5DC4" strokeWidth="1.5" rx="6" />
                  <rect x="547" y="38" width="211" height="32" fill="#1A5DC4" rx="6" />
                  <rect x="547" y="58" width="211" height="12" fill="#1A5DC4" />
                  <text x="652" y="59" textAnchor="middle" fontSize="13" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">Saídas</text>

                  <text x="652" y="135" textAnchor="middle" fontSize="12" fill="#1A5DC4" fontFamily="system-ui,sans-serif">Produto</text>
                  <text x="652" y="155" textAnchor="middle" fontSize="12" fill="#1A5DC4" fontFamily="system-ui,sans-serif">ou</text>
                  <text x="652" y="175" textAnchor="middle" fontSize="12" fill="#1A5DC4" fontFamily="system-ui,sans-serif">Serviço</text>

                  {/* Arcos fundo "Atendimento" (esquerda → direita: entrega ao cliente) */}
                  <path d="M 215 242 Q 249 272 283 242" fill="none" stroke="#003DA5" strokeWidth="1.5" markerEnd="url(#arrEnd)" />
                  <text x="249" y="288" textAnchor="middle" fontSize="10" fill="#003DA5" fontFamily="system-ui,sans-serif">Atendimento</text>

                  <path d="M 475 242 Q 509 272 543 242" fill="none" stroke="#003DA5" strokeWidth="1.5" markerEnd="url(#arrEnd)" />
                  <text x="509" y="288" textAnchor="middle" fontSize="10" fill="#003DA5" fontFamily="system-ui,sans-serif">Atendimento</text>
                </svg>
              </div>

              <p className="text-[11px] text-mpmg-cinzaTexto mt-3 text-center italic">
                Fonte: Metodologia de Gestão de Processos — Fórum Nacional de Gestão, CNMP
              </p>
            </section>

            {/* Competências da DEPO */}
            <section className="bg-white rounded-2xl shadow-md p-6" aria-labelledby="competencias-title">
              <h2 id="competencias-title" className="text-xl font-bold text-mpmg-azulEscuro mb-1">Competências da DEPO</h2>
              <p className="text-xs text-mpmg-cinzaTexto mb-5">Conforme Resolução PGJ n.º 10, de 6 de abril de 2018</p>
              <ol className="space-y-3">
                {competencias.map((c, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-mpmg-azulEscuro text-white rounded-full text-[11px] font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-mpmg-cinzaTexto leading-relaxed">{c}</p>
                  </li>
                ))}
              </ol>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
