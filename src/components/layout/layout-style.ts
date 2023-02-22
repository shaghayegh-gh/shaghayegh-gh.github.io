import styled from 'styled-components'
import { LayoutProps } from './layout-type'

export const LayoutWrapper = styled.div<Pick<LayoutProps, 'home'>>`
  ${({ theme, home }) =>
    home &&
    `
  background: ${theme.colors.home};
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  `}

  ${({ theme, home }) =>
    !home &&
    `
   background: ${theme.colors.white}
   `}
`

export const Main = styled.main<Pick<LayoutProps, 'home'>>`
  min-height: calc(100vh - 78px);
  ${({ home }) =>
    home &&
    `
  display: flex;
  justify-content: center;
  align-items: center;
 `}
`
