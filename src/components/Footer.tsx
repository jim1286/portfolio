import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { 
  MailOutlined, 
  GithubOutlined, 
  FileTextOutlined,
  HeartFilled
} from '@ant-design/icons';
import styled from 'styled-components';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const StyledFooter = styled(AntFooter)`
  background: #001529 !important;
  color: white !important;
  text-align: center;
  padding: 48px 24px !important;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 32px 16px !important;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled(Text)`
  &.ant-typography {
    color: rgba(255, 255, 255, 0.85) !important;
    font-size: 1rem !important;
    margin-bottom: 1rem !important;
    display: block;
  }
`;

const SocialLinks = styled(Space)`
  margin-top: 16px;
  
  .ant-space-item {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.65) !important;
    font-size: 1.5rem !important;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.primary} !important;
      transform: translateY(-2px);
    }
  }
`;

const CopyrightText = styled(Text)`
  &.ant-typography {
    color: rgba(255, 255, 255, 0.45) !important;
    font-size: 0.9rem !important;
    margin-top: 24px !important;
    display: block;
  }
`;

const HeartIcon = styled(HeartFilled)`
  color: #ff4d4f !important;
  margin: 0 4px !important;
  animation: heartbeat 1.5s ease-in-out infinite both;

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.1);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.1);
    }
    70% {
      transform: scale(1);
    }
  }
`;

const socialLinks = [
  {
    icon: <MailOutlined />,
    action: () => window.location.href = 'mailto:jimin1286@gmail.com',
    label: 'Email'
  },
  {
    icon: <GithubOutlined />,
    action: () => window.open('https://github.com/jim1286', '_blank'),
    label: 'GitHub'
  },
  {
    icon: <FileTextOutlined />,
    action: () => window.open('https://faint-cylinder-a1b.notion.site/b3c16979ae834419834011c018e3079e', '_blank'),
    label: 'Notion'
  }
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <FooterContent>
        <FooterText>
          함께 멋진 것들을 만들어 나가요!
        </FooterText>
        
        <SocialLinks size="large">
          {socialLinks.map((link, index) => (
            <span
              key={index}
              onClick={link.action}
              title={link.label}
            >
              {link.icon}
            </span>
          ))}
        </SocialLinks>
        
        <CopyrightText>
          © {currentYear} 황지민. Made with <HeartIcon /> in South Korea.
        </CopyrightText>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;