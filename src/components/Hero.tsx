import React, { useEffect, useState } from 'react';
import { Button, Typography } from 'antd';
import { MailOutlined, DownOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';

const { Title, Paragraph } = Typography;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 24px;
  text-align: center;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 16px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  width: 100%;
`;

const StyledTitle = styled(Title)`
  &.ant-typography {
    color: white !important;
    font-size: 3.5rem !important;
    font-weight: 700 !important;
    margin-bottom: 1rem !important;
    opacity: 0;
    animation: ${fadeInUp} 1s ease 0.5s forwards;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 2.5rem !important;
    }

    @media (max-width: ${props => props.theme.breakpoints.xs}) {
      font-size: 2rem !important;
    }
  }
`;

const HighlightText = styled.span`
  color: #ffa940;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const StyledParagraph = styled(Paragraph)`
  &.ant-typography {
    color: white !important;
    font-size: 1.3rem !important;
    font-weight: 300 !important;
    margin-bottom: 2rem !important;
    opacity: 0;
    animation: ${fadeInUp} 1s ease 0.7s forwards;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 1.1rem !important;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 0.9s forwards;

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Button)`
  height: 48px !important;
  padding: 0 32px !important;
  font-size: 16px !important;
  border-radius: 24px !important;
  border: none !important;
  background: ${props => props.theme.colors.primary} !important;
  
  &:hover {
    background: #40a9ff !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(24, 144, 255, 0.3) !important;
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 200px;
  }
`;

const SecondaryButton = styled(Button)`
  height: 48px !important;
  padding: 0 32px !important;
  font-size: 16px !important;
  border-radius: 24px !important;
  background: transparent !important;
  border: 2px solid white !important;
  color: white !important;
  
  &:hover {
    background: white !important;
    color: ${props => props.theme.colors.text} !important;
    transform: translateY(-2px);
    border-color: white !important;
  }

  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    width: 200px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: white;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeInUp} 1s ease 1.5s forwards;

  &:hover {
    opacity: 0.8;
  }
`;

const ScrollText = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

const ScrollIcon = styled(DownOutlined)`
  font-size: 16px;
  animation: ${bounce} 2s infinite;
`;

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <HeroSection id="home">
      <HeroContent>
        <StyledTitle level={1}>
          안녕하세요, <HighlightText>황지민</HighlightText>입니다
        </StyledTitle>
        <StyledParagraph>
          열정적인 개발자로서 창의적인 솔루션을 만들어갑니다
        </StyledParagraph>
        <ButtonGroup>
          <PrimaryButton 
            size="large" 
            onClick={handleScrollToProjects}
          >
            프로젝트 보기
          </PrimaryButton>
          <SecondaryButton 
            size="large" 
            icon={<MailOutlined />}
            onClick={handleScrollToContact}
          >
            연락하기
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
      <ScrollIndicator onClick={handleScrollToAbout}>
        <ScrollText>더 알아보기</ScrollText>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;