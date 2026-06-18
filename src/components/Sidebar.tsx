import { NavLink } from 'react-router-dom'
import {
  Home,
  Monitor,
  Archive,
  BarChart2,
  Lightbulb,
  Target,
  FolderKanban,
  Trophy,
} from 'lucide-react'

const sidebarItems = [
  { label: 'COPLI', to: '/', icon: Home, description: 'Planejamento Institucional', end: true },
  { label: 'Planejamento Estratégico', to: '/planejamento-estrategico', icon: BarChart2, description: 'Estratégia e PGA', end: false },
  { label: 'Programa OKResultados', to: '/okresultados', icon: Target, description: 'Metodologia OKR', end: false },
  { label: 'Inovação', to: '/inovacao', icon: Lightbulb, description: 'Iniciativas inovadoras', end: false },
  { label: 'Escritório de Projetos', to: '/escritorio-de-projetos', icon: FolderKanban, description: 'Gestão de projetos', end: false },
  { label: 'Premiações', to: '/premiacoes', icon: Trophy, description: 'Prêmios e reconhecimentos', end: false },
  { label: 'SEI', to: '/sei', icon: Monitor, description: 'Sistema Eletrônico de Informações', end: false },
  { label: 'Gestão de Documentos', to: '/gestao-documentos', icon: Archive, description: 'Diretoria de Gestão Documental', end: false },
]

export default function Sidebar() {
  return (
    <aside className="w-full" aria-label="Menu lateral">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-mpmg-cinzaMedio">
        <div className="bg-gradient-to-r from-mpmg-azulEscuro to-mpmg-azul px-4 py-3">
          <h2 className="text-white font-semibold text-xs uppercase tracking-widest">
            Planejamento Institucional
          </h2>
        </div>
        <nav>
          <ul>
            {sidebarItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <li key={item.to} className={idx < sidebarItems.length - 1 ? 'border-b border-mpmg-cinzaMedio/60' : ''}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mpmg-azul group ${
                        isActive
                          ? 'border-l-[3px] border-mpmg-azul bg-blue-50 pl-[13px]'
                          : 'border-l-[3px] border-transparent hover:bg-mpmg-cinzaClaro hover:border-mpmg-cinzaMedio pl-[13px]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className={`rounded-lg p-1.5 flex-shrink-0 transition-colors ${isActive ? 'bg-mpmg-azul' : 'bg-mpmg-cinzaClaro group-hover:bg-mpmg-cinzaMedio'}`}>
                          <Icon
                            className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-mpmg-cinzaTexto'}`}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs font-semibold leading-tight truncate ${isActive ? 'text-mpmg-azul' : 'text-mpmg-preto'}`}>
                            {item.label}
                          </p>
                          <p className="text-[10px] text-mpmg-cinzaTexto mt-0.5 leading-tight truncate">
                            {item.description}
                          </p>
                        </div>
                      </>
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
