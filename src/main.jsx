import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'styled-components';
import { SingIn } from './pages/SingIn/index'
import { Home } from './pages/Home/index'

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { ColumLeft } from './components/Calendar';


createRoot(document.getElementById('root')).render(
   <StrictMode> 
    
      <ThemeProvider theme={ theme }>
    
        <Home />
        <ColumLeft />
        <GlobalStyles />
    
      </ThemeProvider>
    
    </StrictMode> 
)
