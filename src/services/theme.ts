import { createGlobalStyle } from 'styled-components'
import { themeGet, variant } from 'styled-system'

const fontSizes = [12, 14, 16, 24, 32, 48, 64, 96, 128]

const space = [0, 4, 8, 16, 32, 64, 128, 256]

const colors = {
  primary: '#203f93',
  success: '#19b56b',
  failure: '#c2175b'
}

const layouts = {
  container: '1280px'
}

const buttonColors = {
  transparent: {
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    color: colors.primary
  },
  light: {
    borderRadius: '2px',
    fontWeight: 'bold',
    border: 'none'
  }
}

type Breakpoints = string[] & {
  sm: string
  md: string
  lg: string
  xl: string
}

const breakpoints = ['40em', '52em', '64em', '80em'] as Breakpoints

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const buttonSizes = {
  md: {
    padding: '9px 23px',

    '@media(min-width: 40em)': {
      padding: '13px 50px'
    }
  },
  sm: {
    padding: '8px 12px',
    '@media(min-width: 40em)': {
      padding: '8px 17px'
    }
  }
}

export const theme = {
  fontSizes,
  space,
  colors,
  layouts,
  buttonColors,
  buttonSizes,
  breakpoints
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto';
    margin: 0;
    padding: 0;
    min-width: 320px;
  }
`
