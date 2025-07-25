export const categories = [
  { id: '1', name: '시댁', slug: 'in-laws', color: 'bg-red-500' },
  { id: '2', name: '친구', slug: 'friends', color: 'bg-blue-500' },
  { id: '3', name: '이혼', slug: 'divorce', color: 'bg-purple-500' },
  { id: '4', name: '남편', slug: 'husband', color: 'bg-green-500' },
  { id: '5', name: '동료', slug: 'colleagues', color: 'bg-orange-500' },
  { id: '6', name: '여자', slug: 'women', color: 'bg-pink-500' },
  { id: '7', name: '군대', slug: 'military', color: 'bg-gray-500' },
];

export const posts = [
  {
    id: '1',
    title: '시댁과의 첫 만남 준비하기',
    summary: '시댁과의 첫 만남에서 좋은 인상을 남기는 방법과 준비해야 할 것들을 공유합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
    author: {
      name: '김시댁',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    likes: 128,
    views: 1280,
    comments: 23,
    category: '시댁',
    createdAt: '2024-01-15',
    tags: ['시댁', '첫만남', '준비']
  },
  {
    id: '2',
    title: '친구와의 갈등 해결 방법',
    summary: '친구와의 갈등 상황에서 관계를 회복하고 더 깊은 우정을 나누는 방법을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop',
    author: {
      name: '이친구',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    likes: 89,
    views: 956,
    comments: 15,
    category: '친구',
    createdAt: '2024-01-14',
    tags: ['친구', '갈등', '관계']
  },
  {
    id: '3',
    title: '이혼 후 새로운 시작',
    summary: '이혼 후 새로운 삶을 시작하는 방법과 마음의 치유 과정을 공유합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=200&fit=crop',
    author: {
      name: '박이혼',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    likes: 156,
    views: 2340,
    comments: 31,
    category: '이혼',
    createdAt: '2024-01-13',
    tags: ['이혼', '새시작', '치유']
  },
  {
    id: '4',
    title: '남편과의 소통 개선하기',
    summary: '남편과의 소통을 개선하고 더 나은 부부 관계를 만드는 방법을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    author: {
      name: '최부부',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    },
    likes: 203,
    views: 3456,
    comments: 42,
    category: '남편',
    createdAt: '2024-01-12',
    tags: ['남편', '소통', '부부관계']
  },
  {
    id: '5',
    title: '동료와의 갈등 해결',
    summary: '직장에서 동료와의 갈등을 해결하고 좋은 관계를 유지하는 방법을 소개합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop',
    author: {
      name: '정동료',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    },
    likes: 167,
    views: 1890,
    comments: 28,
    category: '동료',
    createdAt: '2024-01-11',
    tags: ['동료', '갈등', '직장']
  },
  {
    id: '6',
    title: '시댁과의 거리두기 전략',
    summary: '시댁과 적절한 거리를 두면서도 좋은 관계를 유지하는 방법을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
    author: {
      name: '김시댁',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    likes: 145,
    views: 1678,
    comments: 19,
    category: '시댁',
    createdAt: '2024-01-10',
    tags: ['시댁', '거리두기', '관계']
  },
  {
    id: '7',
    title: '친구와의 오해 풀기',
    summary: '친구와의 오해를 풀고 관계를 회복하는 효과적인 방법들을 공유합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
    author: {
      name: '박친구',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    likes: 98,
    views: 1234,
    comments: 12,
    category: '친구',
    createdAt: '2024-01-09',
    tags: ['친구', '오해', '화해']
  },
  {
    id: '8',
    title: '이혼 후 자녀 양육',
    summary: '이혼 후 자녀와의 관계를 유지하고 건강하게 양육하는 방법을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
    author: {
      name: '이이혼',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    likes: 76,
    views: 890,
    comments: 8,
    category: '이혼',
    createdAt: '2024-01-08',
    tags: ['이혼', '자녀', '양육']
  },
  {
    id: '9',
    title: '남편과의 데이트 아이디어',
    summary: '결혼 후에도 로맨틱한 데이트를 즐길 수 있는 창의적인 아이디어들을 소개합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=400&h=200&fit=crop',
    author: {
      name: '김부부',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    likes: 134,
    views: 2345,
    comments: 25,
    category: '남편',
    createdAt: '2024-01-07',
    tags: ['남편', '데이트', '로맨틱']
  },
  {
    id: '10',
    title: '동료와의 협업 개선',
    summary: '직장에서 동료와의 협업을 개선하고 팀워크를 향상시키는 방법을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop',
    author: {
      name: '최동료',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    },
    likes: 112,
    views: 1456,
    comments: 18,
    category: '동료',
    createdAt: '2024-01-06',
    tags: ['동료', '협업', '팀워크']
  },
  {
    id: '11',
    title: '시댁과의 선물 고르기',
    summary: '시댁이 좋아할 만한 선물을 고르는 팁과 주의사항을 공유합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop',
    author: {
      name: '박시댁',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    },
    likes: 89,
    comments: 14,
    category: '시댁',
    createdAt: '2024-01-05',
    tags: ['시댁', '선물', '관계']
  },
  {
    id: '12',
    title: '친구와의 여행 계획',
    summary: '친구와 함께하는 여행을 더욱 즐겁게 만드는 계획 방법과 팁을 소개합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop',
    author: {
      name: '김친구',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    likes: 156,
    comments: 32,
    category: '친구',
    createdAt: '2024-01-04',
    tags: ['친구', '여행', '계획']
  },
  {
    id: '13',
    title: '이혼 후 재혼 준비',
    summary: '이혼 후 새로운 사랑을 찾고 재혼을 준비하는 과정에서 고려해야 할 사항들을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop',
    author: {
      name: '이재혼',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    likes: 78,
    comments: 11,
    category: '이혼',
    createdAt: '2024-01-03',
    tags: ['이혼', '재혼', '새사랑']
  },
  {
    id: '14',
    title: '남편과의 재정 계획',
    summary: '부부가 함께하는 재정 계획과 가계부 관리 방법을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    author: {
      name: '최부부',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    likes: 92,
    comments: 16,
    category: '남편',
    createdAt: '2024-01-02',
    tags: ['남편', '재정', '가계부']
  },
  {
    id: '15',
    title: '동료와의 네트워킹',
    summary: '직장에서 동료와의 네트워킹을 통해 경력을 발전시키는 방법을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    author: {
      name: '박동료',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    },
    likes: 67,
    comments: 9,
    category: '동료',
    createdAt: '2024-01-01',
    tags: ['동료', '네트워킹', '경력']
  },
  {
    id: '16',
    title: '시댁과의 대화 기술',
    summary: '시댁과의 대화에서 갈등을 줄이고 좋은 관계를 만드는 대화 기술을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
    author: {
      name: '김시댁',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    },
    likes: 95,
    comments: 13,
    category: '시댁',
    createdAt: '2023-12-31',
    tags: ['시댁', '대화', '기술']
  },
  {
    id: '17',
    title: '친구와의 신뢰 회복',
    summary: '친구와의 신뢰가 깨진 상황에서 관계를 회복하는 방법을 공유합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop',
    author: {
      name: '이친구',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    likes: 123,
    comments: 21,
    category: '친구',
    createdAt: '2023-12-30',
    tags: ['친구', '신뢰', '회복']
  },
  {
    id: '18',
    title: '이혼 후 경제적 독립',
    summary: '이혼 후 경제적으로 독립적인 삶을 살기 위한 방법과 계획을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=200&fit=crop',
    author: {
      name: '박이혼',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    likes: 88,
    comments: 17,
    category: '이혼',
    createdAt: '2023-12-29',
    tags: ['이혼', '경제', '독립']
  },
  {
    id: '19',
    title: '남편과의 취미 공유',
    summary: '부부가 함께 즐길 수 있는 취미를 찾고 공유하는 방법을 소개합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    author: {
      name: '최부부',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
    },
    likes: 145,
    comments: 28,
    category: '남편',
    createdAt: '2023-12-28',
    tags: ['남편', '취미', '공유']
  },
  {
    id: '20',
    title: '동료와의 경쟁 관계',
    summary: '직장에서 동료와의 경쟁 관계를 건강하게 관리하는 방법을 알아보세요.',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop',
    author: {
      name: '정동료',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    },
    likes: 76,
    comments: 12,
    category: '동료',
    createdAt: '2023-12-27',
    tags: ['동료', '경쟁', '관계']
  }
].map(post => ({
  ...post,
  content: post.content || '본문 예시입니다.',
  views: post.views || Math.floor(Math.random() * 2001) + 1000
})); 