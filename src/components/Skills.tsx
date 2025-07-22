import React from "react";
import { Card, Typography, Tag, Row, Col } from "antd";
import {
  Html5Outlined,
  JavaScriptOutlined,
  DatabaseOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

const SkillsSection = styled.section`
  padding: 100px 0;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 16px;
  }
`;

const SectionTitle = styled(Title)`
  &.ant-typography {
    text-align: center;
    margin-bottom: 3rem !important;
    color: ${(props) => props.theme.colors.text} !important;
    font-size: 2.5rem !important;
    font-weight: 700 !important;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 2px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 2rem !important;
    }
  }
`;

const SkillCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border-radius: ${(props) => props.theme.borderRadius.large} !important;
  box-shadow: ${(props) => props.theme.shadows.small} !important;
  border: 1px solid ${(props) => props.theme.colors.border} !important;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.medium} !important;
  }

  .ant-card-head {
    border-bottom: 1px solid ${(props) => props.theme.colors.border} !important;
    text-align: center;
  }

  .ant-card-head-title {
    font-size: 1.2rem !important;
    font-weight: 600 !important;
    color: ${(props) => props.theme.colors.text} !important;
  }

  .ant-card-body {
    text-align: center;
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
`;

const SkillTag = styled(Tag)`
  padding: 4px 12px !important;
  border-radius: 20px !important;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  border: none !important;
  background: ${(props) => props.theme.colors.primary} !important;
  color: white !important;
  margin: 2px !important;
  transition: all 0.3s ease !important;

  &:hover {
    background: #40a9ff !important;
    transform: scale(1.05);
  }
`;

const skillCategories = [
  {
    title: "Frontend",
    icon: <Html5Outlined />,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Styled Components",
      "Ant Design",
    ],
  },
  {
    title: "Backend",
    icon: <JavaScriptOutlined />,
    skills: ["Nest.js", "FastAPI"],
  },
  {
    title: "Database",
    icon: <DatabaseOutlined />,
    skills: ["MySQL", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    title: "DevOps & Tools",
    icon: <ToolOutlined />,
    skills: ["Docker", "Git", "GitHub Actions"],
  },
];

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle level={2}>기술 스택</SectionTitle>

        <Row gutter={[24, 24]}>
          {skillCategories.map((category, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <SkillCard title={category.title} size="small">
                <SkillIcon>{category.icon}</SkillIcon>
                <SkillsGrid>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex}>{skill}</SkillTag>
                  ))}
                </SkillsGrid>
              </SkillCard>
            </Col>
          ))}
        </Row>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
