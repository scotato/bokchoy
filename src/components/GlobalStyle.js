import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'
 
const GlobalStyle = createGlobalStyle`
  ${props =>
    reboot({
      black: 'rgb(15,15,15)',
      fontFamilyBase:
        'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      fontFamilyMonospace:
        'Source Code Pro, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSizeBase: 18,
      fontWeightBase: 400,
      lineHeightBase: 1.6,
      linkHoverDecoration: 'none',
    })
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }
`
 
export default GlobalStyle
