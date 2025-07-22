import React from 'react';
import { Card, Button, Tag, Typography, Row, Col } from 'antd';
import { 
  GithubOutlined, 
  LinkOutlined, 
  CodeOutlined,
  MobileOutlined,
  DatabaseOutlined
} from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.colors.backgroundLight};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 16px;
  }
`;

const SectionTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
    margin-bottom: 3rem !important;
    color: ${props => props.theme.colors.text} !important;
    font-size: 2.5rem !important;
    font-weight: 700 !important;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background: ${props => props.theme.colors.primary};
      border-radius: 2px;
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 2rem !important;
    }
  }
`;

const ProjectCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border-radius: ${props => props.theme.borderRadius.large} !important;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small} !important;
  border: 1px solid ${props => props.theme.colors.border} !important;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.large} !important;
  }

  .ant-card-body {
    padding: 24px !important;
  }

  .ant-card-cover {
    height: 200px;
    overflow: hidden;
  }
`;

const ProjectImagePlaceholder = styled.div<{ $bgColor: string }>`
  width: 100%;
  height: 200px;
  background: ${props => props.$bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }

  .anticon {
    position: relative;
    z-index: 1;
  }
`;

const ProjectTitle = styled(Title)`
  &.ant-typography {
    font-size: 1.3rem !important;
    font-weight: 600 !important;
    color: ${props => props.theme.colors.text} !important;
    margin-bottom: 1rem !important;
  }
`;

const ProjectDescription = styled(Paragraph)`
  &.ant-typography {
    color: ${props => props.theme.colors.textLight} !important;
    margin-bottom: 1rem !important;
    line-height: 1.6 !important;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.5rem;
`;

const TechTag = styled(Tag)`
  padding: 2px 8px !important;
  border-radius: 12px !important;
  font-size: 0.8rem !important;
  background: ${props => props.theme.colors.backgroundLight} !important;
  color: ${props => props.theme.colors.textLight} !important;
  border: 1px solid ${props => props.theme.colors.border} !important;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 8px;
`;

const LinkButton = styled(Button)`
  display: flex !important;
  align-items: center !important;
  gap: 4px !important;
  font-size: 0.9rem !important;
  height: 32px !important;
  
  &.primary {
    background: ${props => props.theme.colors.primary} !important;
    border-color: ${props => props.theme.colors.primary} !important;
  }
  
  &.secondary {
    color: ${props => props.theme.colors.text} !important;
    border-color: ${props => props.theme.colors.border} !important;
    
    &:hover {
      color: ${props => props.theme.colors.primary} !important;
      border-color: ${props => props.theme.colors.primary} !important;
    }
  }
`;

const projects = [
  {
    id: 1,
    title: 'React TypeScript 웹 애플리케이션',
    description: 'TypeScript와 React를 활용한 현대적인 SPA 웹 애플리케이션입니다. 타입 안정성을 보장하며 사용자 친화적인 인터페이스를 구현했습니다.',
    technologies: ['React', 'TypeScript', 'Styled Components', 'Ant Design'],
    icon: <CodeOutlined />,
    bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Nest.js 백엔드 API 서버',
    description: 'Nest.js 프레임워크를 사용한 확장 가능한 백엔드 API 서버입니다. TypeScript 기반으로 견고한 아키텍처를 구현했습니다.',
    technologies: ['Nest.js', 'TypeScript', 'MySQL', 'Docker'],
    icon: <DatabaseOutlined />,
    bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'FastAPI 마이크로서비스',
    description: 'FastAPI를 활용한 고성능 마이크로서비스 API입니다. 비동기 처리와 자동 API 문서화 기능을 활용했습니다.',
    technologies: ['FastAPI', 'Python', 'MySQL', 'Docker'],
    icon: <MobileOutlined />,
    bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Projects: React.FC = () => {
  const handleLinkClick = (url: string) => {
    if (url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle level={2}>프로젝트</SectionTitle>
        
        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} md={12} lg={8} key={project.id}>
              <ProjectCard
                cover={
                  <ProjectImagePlaceholder $bgColor={project.bgColor}>
                    {project.icon}
                  </ProjectImagePlaceholder>
                }
              >
                <ProjectTitle level={4}>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechTags>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechTags>
                
                <ProjectLinks>
                  <LinkButton
                    type="primary"
                    size="small"
                    className="primary"
                    icon={<LinkOutlined />}
                    onClick={() => handleLinkClick(project.liveUrl)}
                  >
                    Live Demo
                  </LinkButton>
                  <LinkButton
                    size="small"
                    className="secondary"
                    icon={<GithubOutlined />}
                    onClick={() => handleLinkClick(project.githubUrl)}
                  >
                    GitHub
                  </LinkButton>
                </ProjectLinks>
              </ProjectCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;