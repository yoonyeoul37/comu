import React from 'react';

const Sidebar = ({ isDarkMode }) => {
  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">인기 주제</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">#시댁</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">1.2k</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">#이혼</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">856</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">#남편</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">743</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">#동료</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">621</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">#친구</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">498</span>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">뉴스레터</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          최신 게시글과 인기 주제를 이메일로 받아보세요.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="이메일 주소"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button className="w-full bg-primary-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200">
            구독하기
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">커뮤니티 통계</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">총 게시글</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">12,847</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">오늘 게시글</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">156</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">총 댓글</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">89,234</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">활성 사용자</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">2,341</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 