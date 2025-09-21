# node_stagram

> Node.js 기반 인스타그램 스타일의 샘플 애플리케이션

---

## 주요 기능 (초안)
- 사용자 인증/프로필/피드/게시물/댓글/좋아요 등 **SNS 핵심 도메인** 구현을 목표로 한 구조
- 라우팅(`routes/`) → 컨트롤러(`controllers/`) → 서비스(`services/`) → 모델(`models/`) 계층 분리
- `config/`에 환경설정, `db/`에 데이터베이스 초기화/연결 관련 코드가 위치


---

## 폴더 구조
```
node_stagram/
├─ bin/               # 실행 스크립트
├─ config/            # 환경설정(.env 로딩/키 등)
├─ controllers/       # 요청 처리(입력 검증/DTO 등)
├─ db/                # DB 연결/마이그레이션/시드
├─ models/            # 도메인 모델(Schema/ORM)
├─ routes/            # Express 라우트 매핑
├─ services/          # 비즈니스 로직(트랜잭션 등)
├─ app.js             # 앱 초기화/미들웨어/라우팅
├─ package.json       # 의존성/스크립트
└─ package-lock.json
```

---

## 실행 방법

### 1) 요구 사항
- Node.js LTS 버전

### 2) 설치
```bash
git clone https://github.com/jiminnote/node_stagram.git
cd node_stagram
npm install
```

### 3) 환경 변수
루트에 `.env` 파일 생성:
```
# 서버
PORT=3000
NODE_ENV=development

# DB
DB_URI=TODO                     # ex) mongodb://... 또는 RDB 커넥션
DB_USER=TODO
DB_PASS=TODO

# 인증/보안
JWT_SECRET=TODO
SESSION_SECRET=TODO

# 스토리지/이미지(선택)
S3_BUCKET=TODO
S3_ACCESS_KEY=TODO
S3_SECRET_KEY=TODO
```

### 4) 개발 서버 실행
```bash
# package.json의 scripts 확인 후 사용
npm run dev     # nodemon 등 개발 모드
# 또는
npm start       # start 스크립트
```
### 예시
- `POST /api/v1/auth/signup` — 회원가입  
- `POST /api/v1/auth/login` — 로그인(JWT/세션)  
- `GET /api/v1/posts` — 피드 조회 (페이징/정렬)  
- `POST /api/v1/posts` — 게시물 생성  
- `POST /api/v1/posts/:id/like` — 좋아요 토글  
- `POST /api/v1/posts/:id/comments` — 댓글 등록  

---

## 개발 규칙
- ESLint/Prettier 적용
- Controller: 입출력/검증  
- Service: 도메인 규칙  
- Model: 데이터 영속성  
- 에러 처리: 에러 미들웨어 통합  
- 보안: Helmet, rate-limit, CORS 정책  
- 테스트: Jest + Supertest  
- 문서화: OpenAPI(Swagger) 자동화




