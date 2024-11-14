# Datarize Frontend 과제 전형

안녕하세요, 지원자님. Datarize Frontend Developer 서류 전형에 합격하신 것을 축하드립니다.  
본 과제는 수신 후 24시간 동안 풀어주시면 됩니다.

## 정책서

쇼핑몰 구매 데이터 대시보드 애플리케이션

### 과제 개요

지원자님은 쇼핑몰의 구매 데이터를 시각화하고 분석할 수 있는 간단한 대시보드 애플리케이션을 개발하게 됩니다.  
이 애플리케이션은 `7월 한 달` 동안 발생한 구매 데이터를 기반으로 몇 가지 주요 정보를 제공해야 합니다.

**해당 프로젝트는 `node 20.13.1`, `yarn 1.22.22` 버전으로 세팅되었습니다**

**`apps/backend` 폴더 내의 코드는 임의로 수정하지 마세요**  
**문의 사항은 메일에 첨부된 전화번호로 문자주시면 답변 드리겠습니다 (과제 특성 상 휴일에도 답변 드립니다)**

 ㄴ백엔드 코드에서 Internal 500 에러를 일으키는 라인을 수정하는 작업을 진행하였습니다. 관련한 내용은 담당자 님과 소통하여 진행하였습니다.

**제출 시에는 fork된 본인의 레포지토리 링크를 첨부하여 메일로 회신 주시면 확인하겠습니다 :) (원본 저장소에 PR 금지)**
**README 파일에 프로젝트 설정 및 실행 방법을 포함하세요.**

```cmd
cd apps
yarn install
yarn start-server
yarn start-client
```

### 요구 사항

- 가격대별 구매 빈도 차트

  - 한 달 동안 발생한 구매 데이터를 바탕으로, 각 가격대의 제품이 얼마나 많이 구매되었는지 보여주는 차트를 구현하세요. 가격대는 2만원 이하부터 10만원 이상까지 만원 단위로 구분됩니다. 차트는 바 차트 형태로 시각화되어야 합니다. 날짜를 선택해서 특정 기간을 조회할 수 있도록 구현해주세요.

- 가장 많이 구매한 고객 목록 및 검색 기능

  - 한 달 동안 가장 많이 구매한 고객을 내림차순/오름차순으로 정렬하여 보여주는 목록을 구현하세요. 기본 정렬은 ID입니다. 각 고객의 ID, 이름, 총 구매 횟수, 총 구매 금액을 표시하세요. 고객의 이름을 통해서 검색 가능해야 합니다.

- 고객 ID 기반 상세 기능

  - 특정 고객 Row를 클릭하면 해당 고객의 상세 구매 내역을 표시할 수 있는 기능을 구현하세요. 검색 결과에는 해당 고객의 구매 날짜, 구매한 제품 목록, 각 제품의 가격, 상품 썸네일이 포함되어야 합니다.

### 세부 구현 사항

- 데이터 제공 방식

  - 서버에서 제공되는 API 엔드포인트를 통해 데이터를 가져와야 합니다.
  - API 명세
    1. GET `/api/purchase-frequency` 한 달 동안의 모든 구매 데이터를 반환합니다.
       - 쿼리 파라미터 (optional)
         - from: 시작 날짜 (ISO 8601 형식)
         - to: 종료 날짜 (ISO 8601 형식)
    2. GET `/api/customers` 고객 목록을 반환합니다.
       - 쿼리 파라미터 (optional)
         - sortBy: 정렬 기준 (가능한 값: asc, desc - 구매 금액 순 정렬)
         - name: 이름 검색
    3. GET `/api/customer/{id}/purchases` 특정 고객의 구매 내역을 반환합니다.
       - **오타가 있습니다.** /api/customer**s**/{id}/purchases  

- 프론트엔드 기술 스택
  - `apps/frontend` 폴더 안에 미리 React 프로젝트를 세팅해 두었습니다. 이것을 사용하여 애플리케이션을 개발하세요. 상태 관리, 차트 라이브러리, CSS 프레임워크는 기호에 맞게 사용하셔도 좋습니다.

### 기능 요구 사항

데이터는 클라이언트 사이드에서 비동기 요청을 통해 가져와야 합니다. 모든 데이터 요청에 대한 로딩 상태와 에러 처리를 구현하세요.

### 추가 요구 사항

코드의 가독성을 위해 적절한 주석을 추가하세요. 필요한 경우, 유닛 테스트를 작성하여 주요 기능을 검증하세요.



----------------------------------------------------
### frontend 상단에 .env 파일 생성 
VITE_API_BASE_URL=http://localhost:4000

### Tailwind CSS 사용 이유
가장 익숙하고 빠르게 사용할 수 있는 스타일링 라이브러리 입니다. 또한, Tailwind CSS를 추가하면 리액트 프론트엔드코드에서 빠르고 일관된 스타일링을 쉽게 적용할 수 있습니다. Tailwind는 다양한 유틸리티 클래스를 제공하므로 별도의 CSS 파일을 작성하는 시간을 절약하면서도 사용자 정의 스타일을 손쉽게 적용하고 관리할 수 있습니다. 특히, React 프로젝트에서는 Tailwind의 클래스 네이밍 방식 덕분에 컴포넌트 스타일링이 직관적이고 반복 작업이 줄어듭니다.

### react-router-dom 사용 이유
react-router-dom을 추가하는 이유는 React 애플리케이션에서 URL 경로에 따라 다른 페이지를 렌더링하기 위해서입니다. 

### zustand 사용 이유
기본적으로 서버 상태 관리와 클라이언트 측 전역 상태 관리를 별도로 관리합니다. 이는 React Query가 강력한 캐싱 기능과 상태 동기화 기능을 제공하기 때문입니다. 전역 상태 관리로는 Zustand를 선택했으며, Recoil, Jotai, Context API와 비교했을 때 사용자 수가 많고 업데이트가 활발하기 때문입니다. 또한, Recoil은 커뮤니티 지원과 업데이트 속도가 다소 느리며, 비즈니스 로직이 복잡해질 때는 상태와 로직을 분리해 관리하는 것이 유리하기 때문에 Zustand가 더 적합하다고 판단했습니다.

### react-query 사용 이유
React Query는 React 애플리케이션에서 서버 데이터를 효율적으로 캐싱하고 동기화하여 성능과 사용자 경험을 개선하는 라이브러리입니다. 자동 캐싱과 데이터 무효화, 로딩과 에러 상태 관리 등을 통해 서버 요청을 최적화하고, 최신 데이터를 유지하면서 불필요한 요청을 줄일 수 있습니다. 또한, 백그라운드에서 데이터 갱신 및 포커싱 재시도 기능으로 리소스를 절약하며 개발 도구를 통해 쿼리 상태를 실시간으로 모니터링하여 디버깅을 간편하게 만듭니다. React Query는 특히 자주 갱신되는 데이터가 필요한 프로젝트에서 큰 장점을 발휘합니다.

### react-datepicker && nivo 사용 이유
날짜 선택에는 react-datepicker 라이브러리를, 바 차트를 위해서는 nivo 라이브러리를 사용했습니다. nivo의 경우 사용한 경험이 있어서 빠르게 적용할 수 있으며 https://nivo.rocks/bar/ 에서 처럼 어느정도 커스타마이징을 실제로 설정할 수 있는 문서 페이지를 제공해주어 적용 및 커스텀에 용이하다는 장점이 있습니다. /purchase-frequency 에서 date를 zustand로 이용하여 전역상태 관리하였는데 이로 인해 프롭스 드릴링 및 최상단에서 스테이트로 관리하고 있는 것을 삭제하여 각각의 컴포넌트에서 필요한 코드라인만 쓸 수 있어서 컴팩트하게 컴포넌트를 관리할 수 있습니다.

src
├── App.css
├── App.tsx
├── api
│   └── axiosInstance.ts ( 모든 axios 요청에 대한 request, response console.log ) 
├── assets
│   └── react.svg
├── components ( UI 공통 컴포넌트 )
│   ├── Button.tsx
│   └── DashboardLayout.tsx
├── features
│   ├── CustomerDetail ( customer/detail ) 
│   │   ├── components
│   │   │   ├── CustomerDetailHeader.tsx
│   │   │   ├── CustomerDetailList.tsx
│   │   │   └── CustomerDetailPage.tsx ( Main Component ) 
│   │   └── hooks
│   │       └── useCustomerDetail.ts ( Data Fetching ) 
│   ├── CustomerList ( customer/list ) 
│   │   ├── components
│   │   │   ├── CustomerListHeader.tsx
│   │   │   ├── CustomerListPage.tsx  ( Main Component ) 
│   │   │   └── CustomerListTable.tsx
│   │   └── hooks
│   │       └── useCustomerList.ts ( Data Fetching ) 
│   ├── Dashboard (/)
│   │   └── components
│   │       └── DashboardPage.tsx  ( Main Component ) 
│   └── PurchaseFrequency ( purchase/chart/frequency ) 
│       ├── components
│       │   ├── PurcahseFrequencyHeader.tsx
│       │   ├── PurchaseFrequencyChart.tsx
│       │   └── PurchaseFrequencyPage.tsx ( Main Component ) 
│       └── hooks
│           └── usePurchaseFrequency.ts ( Data Fetching ) 
├── folder_structure.txt
├── hooks
│   └── useTranslation.ts ( 워딩 처리를 위한 훅 )
├── index.css
├── main.tsx
├── stores
│   ├── useCustomerStore.ts ( 전역 상태 관리 : customer 검색 및 정렬 데이터 )  
│   └── useDateStore.ts ( 전역 상태 관리 : 차트 날짜 ) 
├── utils
│   ├── apis.ts ( api endpoint 관리 )
│   ├── const.ts ( 상수 관리 )
│   └── i18n
│       └── wording.ts ( 워딩 관리 )
└── vite-env.d.ts

20 directories, 29 files


