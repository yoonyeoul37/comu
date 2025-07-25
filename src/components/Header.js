import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../data/mockData.js';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const navigate = useNavigate();

  // 최신글 5개 선택
  const latestPosts = posts.slice(0, 5);

  // 3초마다 다음 게시글로 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prev) => (prev + 1) % latestPosts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [latestPosts.length]);

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handleWriteClick = () => {
    navigate('/write');
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Comu</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className={`block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                  isSearchFocused ? 'ring-2 ring-primary-500 border-transparent' : ''
                }`}
                placeholder="검색 (Ctrl+K)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
              출시
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
              상품
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
              뉴스
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
              포럼
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200">
              광고
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={handleWriteClick}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>글쓰기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                커뮤니티에 오신 것을 환영합니다! 고민을 나누거나 다른 분들의 이야기에 공감해주세요.
              </p>
            </div>

            {/* 스크롤되는 최신글 */}
            <div className="flex items-center space-x-3 ml-8">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">최신글</span>
              </div>

              <div className="relative overflow-hidden w-64">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentPostIndex * 100}%)` }}
                >
                  {latestPosts.map((post, index) => (
                    <div
                      key={post.id}
                      className="flex-shrink-0 w-full cursor-pointer group"
                      onClick={() => handlePostClick(post.id)}
                    >
                      <p className="text-sm text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 font-medium truncate transition-colors duration-200">
                        {post.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 인디케이터 */}
              <div className="flex space-x-1">
                {latestPosts.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      index === currentPostIndex
                        ? 'bg-primary-500 dark:bg-primary-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 