

import { BrowserRouter, Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AllRoutes } from './AllRoutes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

