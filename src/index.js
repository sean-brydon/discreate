import ReactDOM from 'react-dom'
import Routes from './Routes'
import React from 'react'
import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from '@chakra-ui/core'

ReactDOM.render(
  // Setting a theme provider - Only relevent to the CSS framework i am using
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      {/* Render Routes component*/}
      <Routes />
    </ColorModeProvider>
  </ThemeProvider>,
  //Renders all of the above inside of #root inside of ../Public/index.html
  document.getElementById('root')
)
