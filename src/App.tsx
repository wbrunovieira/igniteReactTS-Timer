

import { BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AllRoutes } from './AllRoutes'
import {  CyclesContextProvider } from './contexts/CyclesContexts'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <AllRoutes />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

