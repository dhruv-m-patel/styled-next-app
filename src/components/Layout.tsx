import React from 'react';
import styled from 'styled-components';
import Meta from './Meta';

const Container = styled.section`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
`;

const Layout = ({ children }: { children: React.ReactNode | undefined }) => (
  <React.Fragment>
    <Meta />
    <Container>
      <Main>{children}</Main>
    </Container>
  </React.Fragment>
);

export default Layout;
