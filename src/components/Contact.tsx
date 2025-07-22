import React, { useState } from 'react';
import { Card, Form, Input, Button, Row, Col, Typography, Space, message } from 'antd';
import { sendEmailWithMethod, EmailMethod, type EmailData } from '../services/emailService';
import { 
  MailOutlined, 
  GithubOutlined, 
  FileTextOutlined,
  SendOutlined
} from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactSection = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.colors.background};

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

const ContactInfo = styled(Card)`
  height: 100%;
  border-radius: ${props => props.theme.borderRadius.large} !important;
  box-shadow: ${props => props.theme.shadows.small} !important;
  border: 1px solid ${props => props.theme.colors.border} !important;

  .ant-card-body {
    padding: 32px !important;
  }
`;

const ContactForm = styled(Card)`
  height: 100%;
  border-radius: ${props => props.theme.borderRadius.large} !important;
  box-shadow: ${props => props.theme.shadows.small} !important;
  border: 1px solid ${props => props.theme.colors.border} !important;

  .ant-card-body {
    padding: 32px !important;
  }
`;

const InfoTitle = styled(Title)`
  &.ant-typography {
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    color: ${props => props.theme.colors.text} !important;
    margin-bottom: 1rem !important;
  }
`;

const InfoDescription = styled(Paragraph)`
  &.ant-typography {
    font-size: 1.1rem !important;
    color: ${props => props.theme.colors.textLight} !important;
    line-height: 1.6 !important;
    margin-bottom: 2rem !important;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.borderRadius.medium};
  margin-bottom: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #e6f7ff;
    transform: translateX(5px);
  }

  .anticon {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
    width: 20px;
  }

  span {
    font-weight: 500;
    color: ${props => props.theme.colors.text};
  }
`;

const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    font-weight: 500;
    color: ${props => props.theme.colors.text};
  }

  .ant-input,
  .ant-input:focus,
  .ant-input-focused {
    border-radius: ${props => props.theme.borderRadius.medium} !important;
  }

  .ant-input:focus,
  .ant-input-focused {
    border-color: ${props => props.theme.colors.primary} !important;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2) !important;
  }
`;

const SubmitButton = styled(Button)`
  width: 100% !important;
  height: 48px !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  border-radius: ${props => props.theme.borderRadius.medium} !important;
  background: ${props => props.theme.colors.primary} !important;
  border-color: ${props => props.theme.colors.primary} !important;

  &:hover {
    background: #40a9ff !important;
    border-color: #40a9ff !important;
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium} !important;
  }
`;

const contactDetails = [
  {
    icon: <MailOutlined />,
    text: 'jimin1286@gmail.com',
    action: () => window.location.href = 'mailto:jimin1286@gmail.com'
  },
  {
    icon: <GithubOutlined />,
    text: 'GitHub Profile',
    action: () => window.open('https://github.com/jim1286', '_blank')
  },
  {
    icon: <FileTextOutlined />,
    text: 'Notion Portfolio',
    action: () => window.open('https://faint-cylinder-a1b.notion.site/b3c16979ae834419834011c018e3079e', '_blank')
  }
];

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: unknown) => {
    const formValues = values as FormValues;
    setLoading(true);
    
    try {
      const emailData: EmailData = {
        name: formValues.name,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message
      };

      // 현재는 mailto 방식을 사용 (GitHub Pages에서 안전)
      // EmailJS를 사용하려면 EmailMethod.EMAILJS로 변경
      await sendEmailWithMethod(emailData, EmailMethod.MAILTO);
      
      // 성공 메시지 표시
      message.success({
        content: '이메일 클라이언트가 열렸습니다. 메시지를 확인하고 전송해주세요!',
        duration: 3,
      });
      
      // 폼 초기화
      form.resetFields();
      
    } catch (error) {
      console.error('Error sending email:', error);
      message.error({
        content: '메시지 전송 중 오류가 발생했습니다. 직접 이메일(jimin1286@gmail.com)로 연락해주세요.',
        duration: 5,
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle level={2}>연락처</SectionTitle>
        
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <ContactInfo>
              <InfoTitle level={3}>함께 일하고 싶으시다면</InfoTitle>
              <InfoDescription>
                새로운 프로젝트나 협업 기회에 대해 언제든지 연락주세요! 
                함께 멋진 것들을 만들어 나가고 싶습니다.
              </InfoDescription>
              
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                {contactDetails.map((contact, index) => (
                  <ContactItem key={index} onClick={contact.action}>
                    {contact.icon}
                    <span>{contact.text}</span>
                  </ContactItem>
                ))}
              </Space>
            </ContactInfo>
          </Col>
          
          <Col xs={24} lg={12}>
            <ContactForm>
              <StyledForm
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                size="large"
              >
                <Form.Item
                  name="name"
                  label="이름"
                  rules={[{ required: true, message: '이름을 입력해주세요.' }]}
                >
                  <Input placeholder="이름을 입력해주세요" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="이메일"
                  rules={[
                    { required: true, message: '이메일을 입력해주세요.' },
                    { type: 'email', message: '올바른 이메일 형식이 아닙니다.' }
                  ]}
                >
                  <Input placeholder="이메일을 입력해주세요" />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="제목"
                  rules={[{ required: true, message: '제목을 입력해주세요.' }]}
                >
                  <Input placeholder="제목을 입력해주세요" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="메시지"
                  rules={[{ required: true, message: '메시지를 입력해주세요.' }]}
                >
                  <TextArea
                    rows={4}
                    placeholder="메시지를 입력해주세요"
                    showCount
                    maxLength={1000}
                  />
                </Form.Item>

                <Form.Item>
                  <SubmitButton
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={!loading ? <SendOutlined /> : undefined}
                  >
                    {loading ? '전송 중...' : '메시지 보내기'}
                  </SubmitButton>
                </Form.Item>
              </StyledForm>
            </ContactForm>
          </Col>
        </Row>
      </Container>
    </ContactSection>
  );
};

export default Contact;