import { useState } from 'react'
import { HashRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme/defaultTheme'
import { GlobalStyle } from '../styles/global'
import { Router} from '../Router'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <GlobalStyle/>
        <Router />
      </HashRouter>
    </ThemeProvider>
  )
}

