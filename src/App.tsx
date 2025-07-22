import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: #fff;
`;

const StyledContent = styled(Content)`
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <ConfigProvider locale={koKR}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledLayout>
          <Navbar />
          <StyledContent>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </StyledContent>
          <Footer />
        </StyledLayout>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
