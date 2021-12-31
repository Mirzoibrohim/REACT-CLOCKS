import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, ClobalStyles } from './theme'

const StyledApp = styled.div`
  border: ${props => props.theme.fontColor};
`

const App = () => {
  let time = new Date().toLocaleTimeString()

  const [Ctime, setCtime] = useState(time)

  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }
  setInterval(updateTime, 1000)

  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <ClobalStyles />
      <StyledApp>
        <div className='text'>
          <h1>Dont waste ur time</h1>
        </div>
        <div className='clock'>
          <h1>{time}</h1>
        </div>
        <div className='btn'>
          <button onClick={themeToggler}>Change theme</button>
        </div>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
