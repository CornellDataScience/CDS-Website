import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

const cdsLight = {
  dark: false,
  primary: colors.deepPurple,
  navColor: colors.deepPurple,
  secondary: '#595B86',
  accent: '#F3A93C',
}
const cdsDark = {
  dark: true,
  primary: colors.deepPurple.lighten3,
  navColor: colors.deepPurple,
  accent: '#F3A93C',
  secondary: '#8587AD',
  info: colors.teal.lighten1,
  warning: colors.amber.base,
  error: colors.deepOrange.accent4,
  success: colors.green.accent3,
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'cdsDark',
      themes: {
        cdsLight,
        cdsDark,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
