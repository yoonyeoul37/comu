import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/mockData.js';

const PostDetail = ({ postId }) => {
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: '익명1',
      content: '정말 공감되는 이야기네요. 저도 비슷한 경험이 있어서 더욱 이해가 됩니다.',
      createdAt: '2024-01-15 14:30',
      likes: 12
    },
    {
      id: 2,
      author: '익명2',
      content: '이런 상황에서 어떻게 대처하셨는지 궁금합니다. 조언 부탁드려요.',
      createdAt: '2024-01-15 15:45',
      likes: 8
    }
  ]);

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">게시글을 찾을 수 없습니다</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      id: comments.length + 1,
      author: '익명',
      content: commentText,
      createdAt: new Date().toLocaleString('ko-KR'),
      likes: 0
    };

    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">목록으로 돌아가기</span>
        </button>
      </div>

      {/* Post Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        {/* Post Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-2xl">
              {post.category === '시댁' && '😤'}
              {post.category === '친구' && '😊'}
              {post.category === '이혼' && '😢'}
              {post.category === '남편' && '💕'}
              {post.category === '동료' && '👥'}
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{post.author.name}</span>
              <span>•</span>
              <span>{new Date(post.createdAt).toLocaleDateString('ko-KR')}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>❤️</span>
                <span>{post.likes}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{post.comments}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {post.summary}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">댓글 ({comments.length})</h3>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="mb-8">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="댓글을 작성해주세요..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
          />
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              disabled={!commentText.trim()}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              댓글 작성
            </button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {comment.author.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{comment.author}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{comment.createdAt}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{comment.content}</p>
                  <div className="flex items-center space-x-4 mt-3">
                    <button className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                      <span>❤️</span>
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                      답글
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail; 