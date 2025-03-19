## 📢 프로젝트 소개

League of Legends의 다양한 정보를 빠르게 확인할 수 있는 간단한 웹 애플리케이션입니다.
riot api를 통해 받아온 데이터를 기반으로 챔피언정보, 아이템 정보, 이번주 무료 로테이션 챔피언 목록을 확인 할 수 있습니다.

## 📅 프로젝트 기간

**2025.03.12 ~ 2025.03.18**

## 🔥 프로젝트 특징

Next.js 기반: SSR, SSG, CSR, ISR 방식을 모두 활용하여 최적화된 성능과 SEO를 제공합니다.

TypeScript 적용: 코드 품질과 안정성을 높이기 위해 TypeScript를 사용하였습니다.

Riot API 연동: 최신의 League of Legends 데이터를 실시간으로 제공받아 사용자가 원하는 정보를 정확히 전달합니다.

## 🛠 기술 스택
- Next.js
- TypeScript
- React
- Tailwind CSS
- Riot API


## 🚀 주요 기능

챔피언 목록: 각 챔피언에 대한 간단한 정보와 상세 정보를 제공합니다. 

무료 챔피언 목록 : 매주 바뀌는 로테이션 챔피언에 대한 정보를 제공합니다.

아이템 목록 : 존재하는 모든 아이템 목록을 제공하고 간단한 정보를 제공합니다.

## 📁 폴더 구조
```
├── public
│   └── images
│       ├── item.webp
│       ├── list.webp
│       └── rotation.webp
├── src
│   ├── app
│   │   ├── api
│   │   │   └── rotation
│   │   │       └── route.ts
│   │   ├── champions
│   │   │   ├── [id]
│   │   │   │   ├── Loading.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── global-error.tsx
│   │   ├── globals.css
│   │   ├── items
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── rotation
│   │       ├── page.tsx
│   │       └── provider.tsx
│   ├── components
│   │   ├── ChampionCard.tsx
│   │   ├── ChampionInfo.tsx
│   │   ├── ChampionSpell.tsx
│   │   ├── DarkMode.tsx
│   │   ├── DataList.tsx
│   │   └── ItemCard.tsx
│   ├── constants
│   │   └── constants.ts
│   ├── hooks
│   │   └── queries.ts
│   ├── types
│   │   ├── Champion.ts
│   │   └── Items.ts
│   └── utils
│       ├── riotApi.ts
│       └── serverApi.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 트러블 슈팅
https://velog.io/@woozi__zi/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85-k38cn930
https://velog.io/@woozi__zi/ff
