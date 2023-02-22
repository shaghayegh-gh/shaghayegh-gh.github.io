import { NavbarWrapper, Item } from './navbar-style'
import { NavbarProps } from './navbar-type'
import { Items } from 'data/navbar-data'

const Navbar = ({ home = false }: NavbarProps) => {
  return (
    <NavbarWrapper home={home}>
      {Items.map((item,i) =>  <Item key={`navbar-item-${i}`} to={item.path}>{item.name}</Item> )}
    </NavbarWrapper>
  )
}

export default Navbar
