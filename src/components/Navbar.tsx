import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Header } = Layout;

const StyledHeader = styled(Header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${props => props.theme.zIndex.sticky};
  background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(0, 0, 0, 0.06)' : 'none'};
  transition: all 0.3s ease;
  height: 70px;
  line-height: 70px;
  padding: 0 24px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 16px;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const DesktopMenu = styled(Menu)`
  background: transparent !important;
  border: none !important;
  line-height: 70px;

  .ant-menu-item {
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    
    &:hover {
      color: ${props => props.theme.colors.primary} !important;
    }
  }

  .ant-menu-item-selected {
    color: ${props => props.theme.colors.primary} !important;
    background: transparent !important;
    
    &::after {
      border-bottom-color: ${props => props.theme.colors.primary} !important;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  border: none;
  background: transparent;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
`;

const MobileMenu = styled(Menu)`
  border: none !important;
  
  .ant-menu-item {
    font-size: 16px;
    padding: 16px 24px;
    height: auto;
    line-height: 1.5;
    
    &:hover {
      color: ${props => props.theme.colors.primary} !important;
    }
  }
`;

const menuItems = [
  { key: 'home', label: '홈', href: '#home' },
  { key: 'about', label: '소개', href: '#about' },
  { key: 'skills', label: '기술', href: '#skills' },
  { key: 'projects', label: '프로젝트', href: '#projects' },
  { key: 'contact', label: '연락처', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeKey, setActiveKey] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    const handleSectionChange = () => {
      const sections = menuItems.map(item => item.key);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveKey(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const handleMenuClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledHeader $scrolled={scrolled}>
      <NavContainer>
        <Logo onClick={handleLogoClick}>황지민</Logo>
        
        <DesktopMenu
          mode="horizontal"
          selectedKeys={[activeKey]}
          items={menuItems.map(item => ({
            key: item.key,
            label: item.label,
            onClick: () => handleMenuClick(item.href),
          }))}
        />

        <MobileMenuButton
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuOpen(true)}
        />

        <MobileDrawer
          title="메뉴"
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          width={250}
        >
          <MobileMenu
            mode="vertical"
            selectedKeys={[activeKey]}
            items={menuItems.map(item => ({
              key: item.key,
              label: item.label,
              onClick: () => handleMenuClick(item.href),
            }))}
          />
        </MobileDrawer>
      </NavContainer>
    </StyledHeader>
  );
};

export default Navbar;