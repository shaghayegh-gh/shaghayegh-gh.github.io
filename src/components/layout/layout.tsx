import { LayoutProps } from "./layout-type";
import { LayoutWrapper, Main } from "./layout-style";

const Layout = ({ children}: LayoutProps) => {
  return (
    <LayoutWrapper >
      <Main >{children}</Main>
    </LayoutWrapper>
  );
};

export default Layout;
