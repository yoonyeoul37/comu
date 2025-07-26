import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import PostDetail from './components/PostDetail.js';
import WritePost from './components/WritePost.js';
import AdminPanel from './components/AdminPanel.js';
import Footer from './components/Footer.js';
import { posts, categories } from './data/mockData.js';

interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: number;
  views: number;
  comments: number;
  createdAt: string;
  images?: string[] | File[]; // 이미지 파일 또는 URL 배열
}

interface HomePageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface ProductCardProps {
  post: Post;
  rank: number;
}

// 메인 페이지 컴포넌트
const HomePage: React.FC<HomePageProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setCurrentPage(1); // 카테고리 변경 시 첫 페이지로
  };

  // 선택된 카테고리에 따라 글 필터링
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  const ProductCard: React.FC<ProductCardProps> = ({ post, rank }) => {
    const [isUpvoted, setIsUpvoted] = useState(false);
    const [upvotes, setUpvotes] = useState(post.likes);

    const handleUpvote = () => {
      if (isUpvoted) {
        setUpvotes(upvotes - 1);
      } else {
        setUpvotes(upvotes + 1);
      }
      setIsUpvoted(!isUpvoted);
    };

    return (
             <div className="flex items-start space-x-4 p-4 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-lg transition-all duration-200">
        {/* Rank */}
        <div className="flex-shrink-0 w-8 text-center">
          <span className="text-lg font-bold text-gray-400 dark:text-gray-500">{rank}.</span>
        </div>

                 {/* Product Info */}
         <div className="flex-1 min-w-0">
           <div className="flex items-start space-x-3">
                          {/* Category Circle */}
              <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                   <span className="text-lg text-gray-600 dark:text-gray-400">
                                        {post.category === '시댁' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '친구' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                       </svg>
                     )}
                     {post.category === '이혼' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '남편' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '동료' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                       </svg>
                     )}
                     {post.category === '여자' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 9a5 5 0 00-4.546-2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '군대' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '가족' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                       </svg>
                     )}
                     {post.category === '결혼' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '시모' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '직장' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '취업' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '선배' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                     )}
                     {post.category === '후배' && (
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                       </svg>
                     )}
                  </span>
                </div>
              </div>

             {/* Content */}
             <div className="flex-1 min-w-0">
                               <h3 
                  className="text-lg font-semibold text-gray-900 dark:text-white mb-1 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer"
                  onClick={() => handlePostClick(post.id)}
                >
                  {post.title}
                </h3>
               <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                 {post.summary}
               </p>
                              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{new Date(post.createdAt).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.author.name}</span>
                  <span>•</span>
                                     <span className="flex items-center space-x-1">
                     <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path
                         d="M10 17.5l-1.45-1.32C4.4 12.36 2 10.28 2 7.75 2 5.68 3.68 4 5.75 4c1.04 0 2.08.41 2.85 1.18L10 5.58l1.4-1.4A4.01 4.01 0 0114.25 4C16.32 4 18 5.68 18 7.75c0 2.53-2.4 4.61-6.55 8.43L10 17.5z"
                         fill="#6b7280"
                       />
                     </svg>
                     <span>{post.likes}</span>
                    </span>
                    {/* 이미지 등록 아이콘 */}
                    {post.images && post.images.length > 0 && (
                      <span title="이미지 포함" className="ml-1">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
                          <path d="M21 15l-5-5a2 2 0 00-2.828 0l-7 7" strokeWidth="2" />
                          <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" />
                        </svg>
                      </span>
                    )}
                </div>
             </div>
           </div>
         </div>

         {/* 오른쪽 끝 조회수/댓글수 디자인 블록 */}
         <div className="flex-shrink-0 flex space-x-2">
           {/* 댓글수 */}
           <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
             <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
             </svg>
             <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{post.comments}</span>
           </div>
           
           {/* 조회수 */}
           <div className="flex flex-col items-center p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
             <svg className="w-4 h-4 text-gray-600 dark:text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
             </svg>
             <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{post.views}</span>
           </div>
         </div>        
      </div>
    );
  };

  const Pagination = () => {
    const totalPages = Math.ceil(filteredPosts.length / 20);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="flex items-center justify-center space-x-2 mt-8">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          이전
        </button>
        
        {pages.map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 text-sm font-medium rounded-lg ${
              currentPage === page
                ? 'bg-primary-600 text-white'
                : 'text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          다음
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  {/* Welcome Banner */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg border border-primary-200 dark:border-primary-700">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">qkRnjwnj</h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">새로운 기능 제품을 출시하고 싶으신가요? 없는 경우, 투표를 해주세요.</p>
                      </div>
                    </div>
                  </div>

                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-6">
                                         <div>
                       <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                         {selectedCategory ? `${selectedCategory} 게시글` : '인기 게시글'}
                       </h2>
                       <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                         {selectedCategory 
                           ? `${selectedCategory} 카테고리의 게시글들을 확인하세요` 
                           : '커뮤니티에서 가장 인기 있는 게시글들을 확인하세요'
                         }
                       </p>
                     </div>
                                         <button 
                       onClick={() => {
                         setSelectedCategory(null);
                         setCurrentPage(1);
                       }}
                       className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                     >
                       전체글
                     </button>
                  </div>

                                     {/* Category Labels */}
                   <div className="mb-6">
                     <div className="flex flex-wrap gap-2">
                       {['친구', '가족', '이혼', '결혼', '남편', '시댁', '시모', '직장', '동료', '취업', '선배', '후배', '여자', '군대'].map((category) => (
                         <button
                           key={category}
                           onClick={() => handleCategoryClick(category)}
                           className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                             selectedCategory === category
                               ? 'bg-primary-600 text-white'
                               : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                           }`}
                         >
                           {category}
                         </button>
                       ))}
                     </div>
                   </div>

                                     {/* All Posts with Advertisements */}
                   <div className="space-y-1">
                     {filteredPosts.map((post, index) => (
                      <React.Fragment key={post.id}>
                        <ProductCard post={post} rank={index + 1} />
                        {/* Advertisement after 10th post */}
                        {index === 9 && (
                          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 dark:text-white">Boost your productivity with our premium tools</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Discover powerful features that will transform your workflow and save you hours every day.</p>
                              </div>
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                                Learn more
                              </button>
                            </div>
                          </div>
                        )}
                        {/* Advertisement after 20th post */}
                        {index === 19 && (
                          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">B</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 dark:text-white">Launching products is hard. Managing projects shouldn't be.</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Try Basecamp, the famously straightforward project management system from 37signals.</p>
                              </div>
                              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200">
                                Sign up free
                              </button>
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block w-72">
              <div className="sticky top-4">
                <Sidebar isDarkMode={isDarkMode} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// 상세페이지 컴포넌트
interface PostDetailPageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ isDarkMode, toggleDarkMode }) => {
  const { postId } = useParams<{ postId: string }>();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-1">
        <PostDetail postId={postId} isDarkMode={isDarkMode} />
      </div>
      <Footer />
    </div>
  );
};

// 글쓰기 페이지 컴포넌트
interface WritePostPageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const WritePostPage: React.FC<WritePostPageProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-1">
        <WritePost />
      </div>
      <Footer />
    </div>
  );
};

// 관리자 페이지 컴포넌트
interface AdminPageProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-1">
        <AdminPanel />
      </div>
      <Footer />
    </div>
  );
};

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드 토글
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 다크모드 상태에 따라 body 클래스 변경
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/post/:postId" element={<PostDetailPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/write" element={<WritePostPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/admin" element={<AdminPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </Router>
  );
};

export default App; 