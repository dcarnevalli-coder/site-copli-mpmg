import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mpmg: {
          azul:       '#003DA5',
          azulEscuro: '#002269',
          azulClaro:  '#1A5DC4',
          verde:      '#00843D',
          laranja:    '#E87722',
          cinzaClaro: '#F4F6FA',
          cinzaMedio: '#E2E8F0',
          cinzaTexto: '#4A5568',
          branco:     '#FFFFFF',
          preto:      '#1A202C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
