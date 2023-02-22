import { LayoutProps } from "./layout-type";
import { LayoutWrapper, Main } from "./layout-style";
import Navbar from "components/navbar/navbar";

const Layout = ({ children, home = false }: LayoutProps) => {
  return (
    <LayoutWrapper home={home}>
      <Navbar home={home} />
      <Main home={home} >{children}</Main>
    </LayoutWrapper>
  );
};

export default Layout;
