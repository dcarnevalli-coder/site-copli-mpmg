export type HolidayType = 'feriado_nacional' | 'feriado_municipal' | 'ponto_facultativo'

export interface Holiday {
  date: string // formato 'YYYY-MM-DD'
  name: string
  type: HolidayType
}

export const holidays2026: Holiday[] = [
  { date: '2026-01-01', name: 'Confraternização Universal', type: 'feriado_nacional' },
  { date: '2026-01-02', name: 'Ponto Facultativo', type: 'ponto_facultativo' },
  { date: '2026-02-16', name: 'Carnaval (Segunda-feira)', type: 'ponto_facultativo' },
  { date: '2026-02-17', name: 'Carnaval (Terça-feira)', type: 'ponto_facultativo' },
  { date: '2026-02-18', name: 'Quarta-feira de Cinzas (meio expediente)', type: 'ponto_facultativo' },
  { date: '2026-04-02', name: 'Quinta-feira Santa', type: 'ponto_facultativo' },
  { date: '2026-04-03', name: 'Sexta-feira Santa', type: 'feriado_nacional' },
  { date: '2026-04-20', name: 'Ponto Facultativo', type: 'ponto_facultativo' },
  { date: '2026-04-21', name: 'Tiradentes', type: 'feriado_nacional' },
  { date: '2026-05-01', name: 'Dia Mundial do Trabalho', type: 'feriado_nacional' },
  { date: '2026-06-04', name: 'Corpus Christi', type: 'ponto_facultativo' },
  { date: '2026-06-05', name: 'Ponto Facultativo', type: 'ponto_facultativo' },
  { date: '2026-08-15', name: 'Assunção de Nossa Senhora (BH)', type: 'feriado_municipal' },
  { date: '2026-09-07', name: 'Independência do Brasil', type: 'feriado_nacional' },
  { date: '2026-10-12', name: 'Nossa Senhora Aparecida', type: 'feriado_nacional' },
  { date: '2026-10-30', name: 'Dia do Servidor Público', type: 'ponto_facultativo' },
  { date: '2026-11-02', name: 'Finados', type: 'feriado_nacional' },
  { date: '2026-11-15', name: 'Proclamação da República', type: 'feriado_nacional' },
  { date: '2026-11-20', name: 'Dia Nacional de Zumbi e da Consciência Negra', type: 'feriado_nacional' },
  { date: '2026-12-07', name: 'Imaculada Conceição (ponto facultativo BH)', type: 'ponto_facultativo' },
  { date: '2026-12-08', name: 'Consagração à Imaculada Conceição (BH)', type: 'feriado_municipal' },
  { date: '2026-12-24', name: 'Véspera de Natal (Ponto Facultativo)', type: 'ponto_facultativo' },
  { date: '2026-12-25', name: 'Natal', type: 'feriado_nacional' },
  { date: '2026-12-31', name: 'Véspera de Ano Novo (Ponto Facultativo)', type: 'ponto_facultativo' },
]

export const holidayTypeLabel: Record<HolidayType, string> = {
  feriado_nacional: 'Feriado Nacional',
  feriado_municipal: 'Feriado Municipal (BH)',
  ponto_facultativo: 'Ponto Facultativo',
}

export const holidayTypeColors: Record<HolidayType, {
  bg: string
  dot: string
  badge: string
  text: string
}> = {
  feriado_nacional: {
    bg: '#DCFCE7',
    dot: '#00843D',
    badge: 'bg-green-100 text-green-800',
    text: 'text-green-800',
  },
  ponto_facultativo: {
    bg: '#FEF3C7',
    dot: '#E87722',
    badge: 'bg-amber-100 text-amber-800',
    text: 'text-amber-800',
  },
  feriado_municipal: {
    bg: '#DBEAFE',
    dot: '#1A5DC4',
    badge: 'bg-blue-100 text-blue-800',
    text: 'text-blue-800',
  },
}
