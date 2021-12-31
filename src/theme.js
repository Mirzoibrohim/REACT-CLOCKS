import { createGlobalStyle } from 'styled-components'
export const darkTheme = {
  body: '#181818',
  fontColor: 'fff',
}

export const lightTheme = {
  body: 'rgb(255, 250, 209)',
  fontColor: '#181818',
}

export const ClobalStyles = createGlobalStyle`
    
body {
    background: ${props => props.theme.body}
}
`
