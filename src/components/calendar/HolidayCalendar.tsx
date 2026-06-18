import { useMemo, useState } from 'react'
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isToday,
  format,
} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChevronLeft, ChevronRight, CalendarDays, ExternalLink } from 'lucide-react'
import {
  holidays2026,
  holidayTypeColors,
  holidayTypeLabel,
  type Holiday,
  type HolidayType,
} from './holidayData'

const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

function getHoliday(date: Date): Holiday | undefined {
  const key = format(date, 'yyyy-MM-dd')
  return holidays2026.find((h) => h.date === key)
}

export default function HolidayCalendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(2026)

  const calendarDays = useMemo(() => {
    const firstDay = startOfMonth(new Date(currentYear, currentMonth))
    const lastDay = endOfMonth(firstDay)
    const startDate = startOfWeek(firstDay, { locale: ptBR })
    const endDate = endOfWeek(lastDay, { locale: ptBR })
    return eachDayOfInterval({ start: startDate, end: endDate })
  }, [currentMonth, currentYear])

  const monthHolidays = useMemo(() => {
    return holidays2026
      .filter((h) => {
        const d = new Date(h.date + 'T12:00:00')
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear
      })
      .sort((a, b) => a.date.localeCompare(b.date))
  }, [currentMonth, currentYear])

  const monthTitle = format(new Date(currentYear, currentMonth, 1), 'MMMM yyyy', { locale: ptBR })
  const monthTitleCapitalized = monthTitle.charAt(0).toUpperCase() + monthTitle.slice(1)

  function prev() {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((y) => y - 1)
    } else {
      setCurrentMonth((m) => m - 1)
    }
  }

  function next() {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((y) => y + 1)
    } else {
      setCurrentMonth((m) => m + 1)
    }
  }

  function goToday() {
    setCurrentMonth(today.getMonth())
    setCurrentYear(2026)
  }

  return (
    <section aria-label="Calendário de Feriados 2026" className="space-y-6">
      {/* Cabeçalho do calendário */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-mpmg-azulEscuro px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-blue-200" aria-hidden="true" />
            <h2 className="text-white font-bold text-lg">{monthTitleCapitalized}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goToday}
              className="text-xs text-blue-200 hover:text-white border border-blue-300/40 hover:border-white px-3 py-1 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Ir para o mês atual"
            >
              Hoje
            </button>
            <button
              onClick={prev}
              className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Mês anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Próximo mês"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid do calendário */}
        <div className="overflow-x-auto">
          <div className="min-w-[320px]">
            {/* Cabeçalho dias da semana */}
            <div className="grid grid-cols-7 bg-mpmg-azulEscuro/90">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="py-2 text-center text-xs font-semibold text-blue-100 uppercase tracking-wide"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Células do calendário */}
            <div className="grid grid-cols-7 border-l border-t border-mpmg-cinzaMedio">
              {calendarDays.map((day, idx) => {
                const holiday = getHoliday(day)
                const inCurrentMonth = isSameMonth(day, new Date(currentYear, currentMonth))
                const isCurrentDay = isToday(day)
                const colors = holiday ? holidayTypeColors[holiday.type] : null

                return (
                  <div
                    key={idx}
                    className="calendar-cell relative border-r border-b border-mpmg-cinzaMedio min-h-[52px] sm:min-h-[64px] p-1 sm:p-1.5 cursor-default"
                    style={holiday && inCurrentMonth ? { backgroundColor: colors!.bg } : {}}
                    tabIndex={holiday && inCurrentMonth ? 0 : -1}
                    role={holiday && inCurrentMonth ? 'button' : undefined}
                    aria-label={
                      holiday && inCurrentMonth
                        ? `${format(day, 'dd/MM/yyyy')} — ${holiday.name}`
                        : undefined
                    }
                  >
                    {/* Número do dia */}
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 text-xs sm:text-sm font-medium rounded-full transition-colors ${
                        isCurrentDay && inCurrentMonth
                          ? 'bg-mpmg-azulClaro text-white font-bold'
                          : inCurrentMonth
                          ? holiday
                            ? 'text-mpmg-preto font-semibold'
                            : 'text-mpmg-preto'
                          : 'text-mpmg-cinzaMedio'
                      }`}
                    >
                      {format(day, 'd')}
                    </span>

                    {/* Ponto indicador de feriado */}
                    {holiday && inCurrentMonth && (
                      <span
                        className="absolute top-1 right-1 w-2 h-2 rounded-full"
                        style={{ backgroundColor: colors!.dot }}
                        aria-hidden="true"
                      />
                    )}

                    {/* Tooltip */}
                    {holiday && inCurrentMonth && (
                      <span className="calendar-tooltip">
                        {holiday.name}
                        <br />
                        <span className="opacity-75 text-[10px]">
                          {holidayTypeLabel[holiday.type]}
                        </span>
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Legenda */}
        <div className="px-4 py-3 bg-mpmg-cinzaClaro border-t border-mpmg-cinzaMedio">
          <div className="flex flex-wrap gap-4 text-xs">
            {(Object.entries(holidayTypeColors) as [HolidayType, typeof holidayTypeColors[HolidayType]][]).map(
              ([type, colors]) => (
                <span key={type} className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors.dot }}
                    aria-hidden="true"
                  />
                  <span className="text-mpmg-cinzaTexto">{holidayTypeLabel[type]}</span>
                </span>
              )
            )}
          </div>
          <p className="mt-2 text-[11px] text-mpmg-cinzaTexto">
            Fonte:{' '}
            <a
              href="https://www.jornalminasgerais.mg.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mpmg-azul hover:underline inline-flex items-center gap-0.5"
            >
              Diário do Executivo — Jornal Minas Gerais
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>

      {/* Lista de feriados do mês */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-mpmg-azulEscuro mb-4">
          Feriados e Pontos Facultativos em {monthTitleCapitalized}
        </h3>

        {monthHolidays.length === 0 ? (
          <div className="text-center py-8">
            <CalendarDays className="w-10 h-10 text-mpmg-cinzaMedio mx-auto mb-2" aria-hidden="true" />
            <p className="text-mpmg-cinzaTexto">Nenhum feriado neste mês.</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {monthHolidays.map((holiday) => {
              const d = new Date(holiday.date + 'T12:00:00')
              const colors = holidayTypeColors[holiday.type]
              const dateLabel = format(d, "dd MMM, EEE", { locale: ptBR })

              return (
                <li
                  key={holiday.date}
                  className="flex items-center gap-4 p-3 rounded-lg bg-mpmg-cinzaClaro border border-mpmg-cinzaMedio"
                >
                  <div
                    className="w-1 self-stretch rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors.dot }}
                    aria-hidden="true"
                  />
                  <div className="min-w-[90px]">
                    <time
                      dateTime={holiday.date}
                      className="text-xs font-semibold text-mpmg-cinzaTexto uppercase tracking-wide"
                    >
                      {dateLabel}
                    </time>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-mpmg-preto">{holiday.name}</p>
                  </div>
                  <span
                    className={`hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${colors.badge}`}
                  >
                    {holidayTypeLabel[holiday.type]}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
