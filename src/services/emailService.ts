import emailjs from '@emailjs/browser';

// EmailJS 설정
const EMAILJS_SERVICE_ID = 'your_service_id'; // EmailJS에서 받은 Service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // EmailJS에서 받은 Template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // EmailJS에서 받은 Public Key

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// EmailJS 초기화
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_email: 'jimin1286@gmail.com',
      reply_to: data.email,
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (result.status !== 200) {
      throw new Error('Email sending failed');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('이메일 전송에 실패했습니다.');
  }
};

// Mailto 링크 생성 함수
export const createMailtoLink = (data: EmailData): string => {
  const emailBody = `안녕하세요 황지민님,

보내는 사람: ${data.name}
이메일: ${data.email}

메시지:
${data.message}

---
이 메시지는 포트폴리오 웹사이트에서 전송되었습니다.`;

  return `mailto:jimin1286@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;
};

// 이메일 전송 옵션
export const EmailMethod = {
  MAILTO: 'mailto',
  EMAILJS: 'emailjs',
  API: 'api'
} as const;

export type EmailMethodType = typeof EmailMethod[keyof typeof EmailMethod];

export const sendEmailWithMethod = async (
  data: EmailData, 
  method: EmailMethodType = EmailMethod.MAILTO
): Promise<void> => {
  switch (method) {
    case EmailMethod.EMAILJS:
      await sendEmail(data);
      break;
    case EmailMethod.MAILTO:
      window.location.href = createMailtoLink(data);
      break;
    case EmailMethod.API:
      // 백엔드 API 호출 구현
      throw new Error('API 방식은 아직 구현되지 않았습니다.');
    default:
      throw new Error('지원하지 않는 이메일 전송 방식입니다.');
  }
};