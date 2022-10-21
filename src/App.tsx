

import { BrowserRouter, Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Routas } from './Routas'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routas />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

