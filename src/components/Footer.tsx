import { MapPin, Phone, Clock, ExternalLink, Scale } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-mpmg-azulEscuro text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Identidade */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg p-1.5">
                <Scale className="w-5 h-5 text-mpmg-azulEscuro" aria-hidden="true" />
              </div>
              <div>
                <p className="font-extrabold text-lg leading-none">MPMG</p>
                <p className="text-blue-300 text-xs">Ministério Público de Minas Gerais</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Coordenadoria de Planejamento Institucional — COPLI
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-300 flex-shrink-0" aria-hidden="true" />
                <span>Av. Álvares Cabral, 1690 – Santo Agostinho<br />Belo Horizonte – MG – CEP: 30170-008</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" aria-hidden="true" />
                <span>(31) 3330-8100</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-300 flex-shrink-0" aria-hidden="true" />
                <span>Segunda a sexta das 9h às 19h</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
              Links Úteis
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.mpmg.mp.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Portal MPMG
                </a>
              </li>
              <li>
                <a
                  href="http://sei.mpmg.mp.br/sei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Sistema SEI
                </a>
              </li>
              <li>
                <a
                  href="https://www.jornalminasgerais.mg.gov.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  Diário do Executivo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <p>© 2026 MPMG – Todos os direitos reservados</p>
          <p>Coordenadoria de Planejamento Institucional — COPLI</p>
        </div>
      </div>
    </footer>
  )
}
