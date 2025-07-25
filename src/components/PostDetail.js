import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/mockData.js';
import Sidebar from './Sidebar.js';

const PostDetail = ({ postId, isDarkMode }) => {
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState('');
  const [commentNickname, setCommentNickname] = useState('');
  const [commentPassword, setCommentPassword] = useState('');
  const [showPostMenu, setShowPostMenu] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: '익명1',
      content: '정말 공감되는 이야기네요. 저도 비슷한 경험이 있어서 더욱 이해가 됩니다.',
      createdAt: '2024-01-15 14:30',
      likes: 12,
      parentId: null
    },
    {
      id: 2,
      author: '익명2',
      content: '이런 상황에서 어떻게 대처하셨는지 궁금합니다. 조언 부탁드려요.',
      createdAt: '2024-01-15 15:45',
      likes: 8,
      parentId: null
    },
    {
      id: 3,
      author: '익명3',
      content: '저도 비슷한 경험이 있어요. 정말 힘들었죠.',
      createdAt: '2024-01-15 16:00',
      likes: 5,
      parentId: 1
    },
    {
      id: 4,
      author: '익명4',
      content: '조언 감사합니다!',
      createdAt: '2024-01-15 16:15',
      likes: 3,
      parentId: 2
    }
  ]);

  const post = posts.find(p => p.id === postId);

  // 드롭다운 메뉴 외부 클릭 시 닫기
  const handleClickOutside = (event) => {
    if (showPostMenu && !event.target.closest('.post-menu-dropdown')) {
      setShowPostMenu(false);
    }
    if (showShareMenu && !event.target.closest('.share-menu-dropdown')) {
      setShowShareMenu(false);
    }
  };

  // 컴포넌트 마운트 시 이벤트 리스너 추가
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showPostMenu, showShareMenu]);

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
    if (!commentText.trim() || !commentNickname.trim() || commentPassword.length !== 4) return;

    // 답글인 경우 원본 댓글 찾기
    let replyToAuthor = null;
    if (replyTo) {
      const parentComment = comments.find(c => c.id === replyTo);
      replyToAuthor = parentComment ? parentComment.author : null;
    }

    const newComment = {
      id: comments.length + 1,
      author: commentNickname,
      content: commentText,
      createdAt: new Date().toLocaleString('ko-KR'),
      likes: 0,
      parentId: replyTo,
      replyToAuthor: replyToAuthor
    };

    setComments([...comments, newComment]);
    setCommentText('');
    setCommentNickname('');
    setCommentPassword('');
    setReplyTo(null);
  };

  const handleReply = (commentId, authorName) => {
    setReplyTo(commentId);
    setCommentText(`@${authorName} `);
  };

  const cancelReply = () => {
    setReplyTo(null);
    setCommentText('');
    setCommentNickname('');
    setCommentPassword('');
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  // 공유 관련 함수들
  const handleShare = (platform) => {
    const currentUrl = window.location.href;
    const title = post.title;
    const text = post.summary;

    switch (platform) {
      case 'kakao':
        // 카카오톡 공유 (카카오 SDK 필요)
        window.open(`https://story.kakao.com/share?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(text)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(currentUrl).then(() => {
          alert('링크가 클립보드에 복사되었습니다!');
        });
        break;
      default:
        break;
    }
    setShowShareMenu(false);
  };

  const toggleShareMenu = () => {
    setShowShareMenu(!showShareMenu);
    setShowPostMenu(false);
  };

  const ProductCard = ({ post, rank }) => {
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
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
                 
                                   {/* Share Button */}
                  <div className="relative share-menu-dropdown">
                    <button
                      onClick={toggleShareMenu}
                      className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      title="공유하기"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                    
                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                        <div className="py-1">
                          <button
                            onClick={() => handleShare('kakao')}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 3c5.799 0 10.5 3.29 10.5 7.35 0 1.95-.74 3.73-1.95 5.21l-1.95 1.95c-.35.35-.35.92 0 1.27.35.35.92.35 1.27 0l1.95-1.95c1.48-1.48 2.43-3.3 2.43-5.21C24.5 6.29 19.799 3 14 3S3.5 6.29 3.5 10.35c0 1.95.95 3.73 2.43 5.21l1.95 1.95c.35.35.35.92 0 1.27-.35.35-.92.35-1.27 0l-1.95-1.95C2.24 14.08 1.5 12.3 1.5 10.35 1.5 6.29 6.201 3 12 3z"/>
                            </svg>
                            <span>카카오톡</span>
                          </button>
                          <button
                            onClick={() => handleShare('facebook')}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span>페이스북</span>
                          </button>
                          <button
                            onClick={() => handleShare('twitter')}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                            <span>트위터</span>
                          </button>
                          <button
                            onClick={() => handleShare('copy')}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>링크 복사</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Post Menu Dropdown */}
                  <div className="relative post-menu-dropdown">
                    <button
                      onClick={() => setShowPostMenu(!showPostMenu)}
                      className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                   
                   {showPostMenu && (
                     <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                       <div className="py-1">
                         <button
                           onClick={() => {
                             setShowPostMenu(false);
                             // 수정 기능 구현
                             console.log('수정');
                           }}
                           className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                         >
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                           </svg>
                           <span>수정</span>
                         </button>
                         <button
                           onClick={() => {
                             setShowPostMenu(false);
                             // 삭제 기능 구현
                             console.log('삭제');
                           }}
                           className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                         >
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                           </svg>
                           <span>삭제</span>
                         </button>
                         <button
                           onClick={() => {
                             setShowPostMenu(false);
                             // 신고 기능 구현
                             console.log('신고');
                           }}
                           className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                         >
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                           </svg>
                           <span>신고</span>
                         </button>
                       </div>
                     </div>
                   )}
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">댓글 ({comments.length})</h3>

                             {/* Comment Form */}
               <form onSubmit={handleSubmitComment} className="mb-8">
                 {replyTo && (
                   <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                     <div className="flex items-center justify-between">
                       <span className="text-sm text-blue-700 dark:text-blue-300">
                         <span className="font-medium">@{replyTo}</span>에게 답글 작성 중
                       </span>
                       <button
                         type="button"
                         onClick={cancelReply}
                         className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm"
                       >
                         취소
                       </button>
                     </div>
                   </div>
                 )}
                 
                 {/* 닉네임과 비밀번호 입력 필드 */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                   <div>
                     <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                       닉네임
                     </label>
                                           <input
                        type="text"
                        id="nickname"
                        value={commentNickname}
                        onChange={(e) => {
                          const value = e.target.value;
                          // 한글 8자 제한
                          if (value.length <= 8) {
                            setCommentNickname(value);
                          }
                        }}
                        placeholder="닉네임을 입력하세요 (최대 8자)"
                        maxLength={8}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-white"
                        required
                      />
                     <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                       {commentNickname.length}/8
                     </div>
                   </div>
                   
                   <div>
                     <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                       비밀번호
                     </label>
                                           <input
                        type="password"
                        id="password"
                        value={commentPassword}
                        onChange={(e) => {
                          const value = e.target.value;
                          // 숫자 4자 제한
                          if (value.length <= 4 && /^\d*$/.test(value)) {
                            setCommentPassword(value);
                          }
                        }}
                        placeholder="비밀번호를 입력하세요 (4자리 숫자)"
                        maxLength={4}
                        pattern="[0-9]{4}"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-white"
                        required
                      />
                     <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                       {commentPassword.length}/4
                     </div>
                   </div>
                 </div>
                 
                                   <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder={replyTo ? `@${replyTo}에게 답글을 작성해주세요...` : "댓글을 작성해주세요..."}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 dark:bg-gray-700 dark:text-white resize-none"
                  />
                 <div className="flex justify-end mt-3">
                   <button
                     type="submit"
                     disabled={!commentText.trim() || !commentNickname.trim() || commentPassword.length !== 4}
                     className="bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                   >
                     {replyTo ? '답글 작성' : '댓글 작성'}
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
                         <div className="flex items-center justify-between mb-2">
                           <div className="flex items-center space-x-2">
                             <span className="text-sm font-medium text-gray-900 dark:text-white">{comment.author}</span>
                             <span className="text-xs text-gray-500 dark:text-gray-400">{comment.createdAt}</span>
                           </div>
                           
                           {/* Comment Menu Dropdown */}
                           <div className="relative comment-menu-dropdown">
                             <button
                               onClick={() => {
                                 // 각 댓글별로 드롭다운 상태 관리
                                 const newComments = comments.map(c => 
                                   c.id === comment.id 
                                     ? { ...c, showMenu: !c.showMenu }
                                     : { ...c, showMenu: false }
                                 );
                                 setComments(newComments);
                               }}
                               className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                             >
                               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                 <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                               </svg>
                             </button>
                             
                             {comment.showMenu && (
                               <div className="absolute right-0 mt-1 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
                                 <div className="py-1">
                                   <button
                                     onClick={() => {
                                       const newComments = comments.map(c => 
                                         c.id === comment.id 
                                           ? { ...c, showMenu: false }
                                           : c
                                       );
                                       setComments(newComments);
                                       console.log('댓글 수정:', comment.id);
                                     }}
                                     className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                                   >
                                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                     </svg>
                                     <span>수정</span>
                                   </button>
                                   <button
                                     onClick={() => {
                                       const newComments = comments.map(c => 
                                         c.id === comment.id 
                                           ? { ...c, showMenu: false }
                                           : c
                                       );
                                       setComments(newComments);
                                       console.log('댓글 삭제:', comment.id);
                                     }}
                                     className="w-full text-left px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                                   >
                                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                     </svg>
                                     <span>삭제</span>
                                   </button>
                                   <button
                                     onClick={() => {
                                       const newComments = comments.map(c => 
                                         c.id === comment.id 
                                           ? { ...c, showMenu: false }
                                           : c
                                       );
                                       setComments(newComments);
                                       console.log('댓글 신고:', comment.id);
                                     }}
                                     className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                                   >
                                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                     </svg>
                                     <span>신고</span>
                                   </button>
                                 </div>
                               </div>
                             )}
                           </div>
                         </div>
                                                   {/* 답글 표시 */}
                          {comment.parentId && (
                            <div className="mb-2">
                              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                @{comment.replyToAuthor}에게 답글
                              </span>
                            </div>
                          )}
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{comment.content}</p>
                          <div className="flex items-center space-x-4 mt-3">
                            <button className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                              <span>❤️</span>
                              <span>{comment.likes}</span>
                            </button>
                            <button 
                              onClick={() => handleReply(comment.id, comment.author)}
                              className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                            >
                              답글
                            </button>
                          </div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* 전체글 목록 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">전체글</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      커뮤니티의 모든 게시글을 확인하세요
                    </p>
                  </div>
                </div>

                {/* All Posts */}
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
    </div>
  );
};

export default PostDetail; 