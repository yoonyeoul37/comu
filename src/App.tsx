import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import PostDetail from './components/PostDetail.js';
import WritePost from './components/WritePost.js';
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
  const navigate = useNavigate();

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

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
      <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
        {/* Rank */}
        <div className="flex-shrink-0 w-8 text-center">
          <span className="text-lg font-bold text-gray-400 dark:text-gray-500">{rank}.</span>
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start space-x-3">
            {/* Category Circle */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl">
                  {post.category === '시댁' && '😤'}
                  {post.category === '친구' && '😊'}
                  {post.category === '이혼' && '😢'}
                  {post.category === '남편' && '💕'}
                  {post.category === '동료' && '👥'}
                  {post.category === '여자' && '👩'}
                  {post.category === '군대' && '🎖️'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 
                className="text-lg font-semibold text-gray-900 dark:text-white mb-1 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
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
                  <span>❤️</span>
                  <span>{post.likes}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <span>👁️</span>
                  <span>{post.views}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Upvote Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleUpvote}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors duration-200 ${
              isUpvoted 
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400'
            }`}
          >
            <svg className="w-5 h-5" fill={isUpvoted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            <span className="text-sm font-medium">{upvotes}</span>
          </button>
        </div>

        {/* Comments */}
        <div className="flex-shrink-0 flex items-center space-x-1 text-gray-500 dark:text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-sm">{post.comments}</span>
        </div>
      </div>
    );
  };

  const Pagination = () => {
    const totalPages = Math.ceil(posts.length / 20);
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
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">인기 게시글</h2>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">커뮤니티에서 가장 인기 있는 게시글들을 확인하세요</p>
                    </div>
                    <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                      모든 게시글 보기
                    </button>
                  </div>

                  {/* Category Labels */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {['친구', '가족', '이혼', '결혼', '남편', '시댁', '시모', '직장', '동료', '취업', '선배', '후배', '여자', '군대'].map((category) => (
                        <button
                          key={category}
                          className="px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* All Posts with Advertisements */}
                  <div className="space-y-1">
                    {posts.map((post, index) => (
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
              <Sidebar isDarkMode={isDarkMode} />
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
        <PostDetail postId={postId} />
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
      </Routes>
    </Router>
  );
};

export default App; 