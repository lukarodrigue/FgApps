import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'styled-components';
import { SingIn } from './pages/SingIn/index'
import { Home } from './pages/Home/index'

import theme from './styles/theme';
import GlobalStyles from './styles/global';


createRoot(document.getElementById('root')).render(
   <StrictMode> 
    
      <ThemeProvider theme={ theme }>
    
        <Home />
    
        <GlobalStyles />
    
      </ThemeProvider>
    
    </StrictMode> 
)