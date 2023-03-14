import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

import GlobalStyles from './styles/global'

import { Preview } from './pages/Preview'
import { Create } from './pages/Create'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile/>
    </ThemeProvider>
  </React.StrictMode>,
)
