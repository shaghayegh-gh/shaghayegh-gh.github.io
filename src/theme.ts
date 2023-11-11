import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    white: '#fff',
    gray: '#f9faff',
    grayOutline: '#efefef',
    grayText:"#939393",
    background:' radial-gradient(590px at 8.2% 13.8%, rgb(18, 35, 60) 0%, rgb(187, 187, 187) 90%)',

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



