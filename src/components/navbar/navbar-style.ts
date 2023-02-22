import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NavbarProps } from './navbar-type'

export const NavbarWrapper = styled.nav<Pick<NavbarProps, 'home'>>`
  display: flex;
  justify-content: flex-end;
  padding: 30px 40px;
  background: ${({ theme, home }) => (home ? '' :theme.colors.background )};
  position:sticky;
  top:0;
  z-index:2;
}
`

export const Item = styled(Link)`
  margin: 0px 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`
