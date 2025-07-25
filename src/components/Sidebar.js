import React from 'react';
import { posts } from '../data/mockData.js';

const Sidebar = ({ isDarkMode }) => {
  // 인기글 (좋아요 수 기준)
  const popularPosts = [...posts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 5);

  // 최신글 (작성일 기준)
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  // 댓글 많은 글 (댓글 수 기준)
  const topCommentedPosts = [...posts]
    .sort((a, b) => b.comments - a.comments)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* 인기글 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">인기글</h3>
        <div className="space-y-3">
          {popularPosts.map((post, index) => (
            <div key={post.id} className="flex items-start space-x-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-6">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    ❤️ {post.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 최신글 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">최신글</h3>
        <div className="space-y-3">
          {recentPosts.map((post, index) => (
            <div key={post.id} className="flex items-start space-x-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-6">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google AdSense 광고 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center" style={{ height: '75px' }}>
          <div className="text-center">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">광고</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Google AdSense</div>
          </div>
        </div>
      </div>

      {/* 댓글 많은 글 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">댓글 많은 글</h3>
        <div className="space-y-3">
          {topCommentedPosts.map((post, index) => (
            <div key={post.id} className="flex items-start space-x-3">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-6">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    💬 {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
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