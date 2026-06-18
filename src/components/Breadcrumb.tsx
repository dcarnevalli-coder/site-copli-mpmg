import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Navegação de localização"
      className="bg-white border-b border-mpmg-cinzaMedio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 text-mpmg-azul hover:text-mpmg-azulEscuro transition-colors focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded"
              aria-label="Página inicial"
            >
              <Home className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={index} className="flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5 text-mpmg-cinzaTexto" aria-hidden="true" />
                {isLast || !item.href ? (
                  <span
                    className={isLast ? 'text-mpmg-azul font-medium' : 'text-mpmg-cinzaTexto'}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-mpmg-cinzaTexto hover:text-mpmg-azul transition-colors focus:outline-none focus:ring-2 focus:ring-mpmg-azul rounded"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
