import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    white: '#fff',
    gray: '#f9faff',
    grayOutline: '#efefef',
    grayText:"#939393",
    background:"-webkit-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)",
    home:'linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)',
  },
  radius: {
    sm: '.5rem',
    md: '1rem',
    rounded: '50%',
  },
  fontSize: {
    title: '2rem',
    subtitle: '1.2rem',
    text: '1rem',
    caption: '.85rem',
  },
  breakPoint: {
    md: '680px',
  },
}
