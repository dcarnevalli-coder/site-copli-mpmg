import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Scale, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Início', to: '/', end: true },
  { label: 'SEI', to: '/sei', end: false },
  { label: 'Gestão de Documentos', to: '/gestao-documentos', end: false },
]

const planejamentoItems = [
  { label: 'Planejamento Estratégico', to: '/planejamento-estrategico' },
  { label: 'Programa OKResultados', to: '/okresultados' },
  { label: 'Inovação', to: '/inovacao' },
  { label: 'Escritório de Projetos', to: '/escritorio-de-projetos' },
  { label: 'Premiações de Projetos', to: '/premiacoes' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-mpmg-azulEscuro text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group" aria-label="Página inicial COPLI MPMG">
            <div className="bg-white rounded-lg p-1.5 flex items-center justify-center">
              <Scale className="w-6 h-6 text-mpmg-azulEscuro" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white">MPMG</span>
                <span className="hidden sm:inline text-xs text-blue-200 font-normal">
                  Ministério Público de Minas Gerais
                </span>
              </div>
              <p className="text-[10px] text-blue-300 leading-none hidden sm:block">
                Coordenadoria de Planejamento Institucional — COPLI
              </p>
            </div>
          </NavLink>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-mpmg-azulEscuro ${
                    isActive ? 'text-white border-b-2 border-white font-bold bg-white/10' : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Dropdown COPLI */}
            <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-mpmg-azulEscuro"
              >
                COPLI
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${dropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-mpmg-cinzaMedio py-1 z-50" role="menu">
                  {planejamentoItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm transition-colors focus:outline-none focus:bg-mpmg-cinzaClaro ${
                          isActive ? 'text-mpmg-azul font-semibold bg-blue-50' : 'text-mpmg-preto hover:bg-mpmg-cinzaClaro hover:text-mpmg-azul'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Hambúrguer mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-mpmg-azulEscuro border-t border-white/10" aria-label="Menu mobile">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                    isActive ? 'bg-white/15 text-white font-bold' : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-1 border-t border-white/10">
              <p className="px-4 py-1 text-[10px] text-blue-400 uppercase tracking-widest font-semibold">COPLI</p>
              {planejamentoItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
                      isActive ? 'bg-white/15 text-white font-bold' : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
