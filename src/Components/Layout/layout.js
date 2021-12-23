import { Layout } from "antd";

import { HeaderView } from "../Header";
import { FooterView } from "../Footer";
import "./style.css";

export const AppLayout = ({ children }) => {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header>
        <HeaderView />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <FooterView />
      </Footer>
    </Layout>
  );
};
