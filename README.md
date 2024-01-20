# (주) 두번째 프론트엔드 개발자 채용 과제

- 전유영
- bitterns96@gmail.com
- 2024.01.18 ~ 2024.01.20

## 배포 주소

- [https://houstep-assignment-186905236668.herokuapp.com/](https://houstep-assignment-186905236668.herokuapp.com/)

## 사용 라이브러리

- typescript
- next.js
- recoil
- json-server
- concurrently
- cross-env
- ts-node

## 실행 방법

1. git bash 에서 아래 명령어 실행

```bash
git clone https://github.com/PollyGotACracker/houstep-assignment.git
```

2. 프로젝트를 열고 터미널에서 `npm install`, `npm run dev` 실행
   - 클라이언트와 서버 동시 실행
   - `"dev": "concurrently \"next dev\" \"npm run server\""`
3. http://localhost:3000 ctrl + 클릭

## 실행 화면

![screen](https://github.com/PollyGotACracker/houstep-assignment/assets/92136750/fc2e88e9-3356-40f7-8936-b12ca6259814)

## 구현 과제

- [Mockup: figma](https://www.figma.com/file/hSJI4HpRvmZjm77vJfJest/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B3%BC%EC%A0%9C?type=design&node-id=0-1&mode=design&t=UiKlJzqviAib8HgT-0)

### [/]

1. 버튼을 클릭하면 /order 페이지로 이동

### [/order]

1.  로고가 있는 헤더는 상단에, 총 가격 및 주문하기 버튼이 있는 부분은 하단에 스크롤에 상관없이 고정
2.  주문 아이템 요청 로딩 표시
3.  주문 아이템의 개수 counter 조작 :

- 수량은 음수가 될 수 없음
- 주문할 수 있는 최대 수량은 999개

4. 주문 아이템의 개수가 변하면 각 아이템의 가격, 하단 총 가격, 총 수량도 함께 변경
5. 주문 아이템의 합계 수량이 0일 때는 주문할 수 없음
6. 수량이 1 이상인 아이템의 배경색 변경
7. 주문하기 클릭 후 로딩 중인 상태를 하단 버튼에 표시
<hr />

- 아이템 목록 로딩 화면은 `lazy()` 및 `Suspense` 으로 표시하였습니다.
- 장바구니 목록은 `orderCart` 전역변수를 사용하였습니다.  
  수량 증감 버튼을 클릭하면 수정된 장바구니 목록 배열을 변수에 재할당합니다.
- 배경색은 수량 값을 체크하여 `.selected` class 의 스타일을 적용하였습니다.
- 주문 버튼의 로딩 텍스트는 전역변수인 `isOrdered` 가 `true` 일 때 나타나도록 했습니다.

### [/complete, /error]

1. 주문이 성공 / 실패했을 때 노출
2. 3초 뒤 다시 /order 페이지로 이동
<hr />

- 공통 redirection 로직을 별도의 레이아웃 (afterOrder)/layout.tsx 로 분리하였습니다.
- /order 에서 주문 버튼을 클릭하지 않고 /compelete 또는 /error 페이지에 접근하는 경우,
  `isOrdered` 변수가 `false` 임을 체크 후 이전 페이지로 되돌아가도록 처리하였습니다.
