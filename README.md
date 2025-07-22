# 황지민 - 개발자 포트폴리오

React + TypeScript + Vite + Styled Components + Ant Design로 제작된 개발자 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Frontend**: React 19, TypeScript
- **Styling**: Styled Components, Ant Design
- **Build Tool**: Vite
- **배포**: GitHub Pages

## 📋 주요 기능

- 반응형 디자인
- 스무스 스크롤 네비게이션
- 모던한 UI/UX 디자인
- 인터랙티브 애니메이션
- 다크/라이트 테마 지원 준비
- 모바일 친화적 인터페이스

## 🛠️ 개발 환경 설정

### 필요 사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview

# GitHub Pages 배포
npm run deploy
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Navbar.tsx      # 네비게이션 바
│   ├── Hero.tsx        # 메인 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Skills.tsx      # 기술 스택 섹션
│   ├── Projects.tsx    # 프로젝트 섹션
│   ├── Contact.tsx     # 연락처 섹션
│   └── Footer.tsx      # 푸터
├── styles/             # 스타일 관련 파일
│   ├── theme.ts        # 테마 설정
│   └── GlobalStyles.ts # 글로벌 스타일
├── types/              # TypeScript 타입 정의
└── App.tsx            # 메인 앱 컴포넌트
```

## 🎨 커스터마이징

### 개인 정보 수정
- `src/components/` 폴더의 각 컴포넌트에서 개인 정보를 수정할 수 있습니다.
- 연락처, 프로젝트 정보, 기술 스택 등을 본인에 맞게 변경하세요.

### 테마 수정
- `src/styles/theme.ts`에서 색상, 폰트, 간격 등을 수정할 수 있습니다.

### 이메일 기능 설정 (선택사항)

현재는 기본적으로 mailto 링크를 사용하여 사용자의 이메일 클라이언트를 엽니다.

**EmailJS를 사용한 직접 이메일 전송:**

1. [EmailJS](https://www.emailjs.com/) 계정 생성
2. Service, Template, Public Key 설정
3. `src/services/emailService.ts`에서 설정값 변경:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id'; 
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```
4. `src/components/Contact.tsx`에서 EmailMethod 변경:
   ```typescript
   await sendEmailWithMethod(emailData, EmailMethod.EMAILJS);
   ```

## 📞 연락처

- **이메일**: jimin1286@gmail.com
- **GitHub**: [GitHub 프로필 링크]
- **LinkedIn**: [LinkedIn 프로필 링크]

---

Made with ❤️ by 황지민
