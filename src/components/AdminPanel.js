import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    username: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('ads');
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [ads, setAds] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);
  const [newAd, setNewAd] = useState({
    title: '',
    content: '',
    position: 'main',
    status: 'active',
    startDate: '',
    endDate: '',
    imageUrl: ''
  });
  const navigate = useNavigate();

  // 관리자 계정 정보 (실제로는 서버에서 검증)
  const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  // 로그인 처리
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    if (loginCredentials.username === adminCredentials.username && 
        loginCredentials.password === adminCredentials.password) {
      setIsLoggedIn(true);
      setLoginCredentials({ username: '', password: '' });
    } else {
      setLoginError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  // 로그아웃 처리
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('ads');
    setSelectedItems([]);
    setShowAdModal(false);
  };

  // 로그인 폼 렌더링
  const renderLoginForm = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 bg-primary-600 rounded-full flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.27-.165.57-.293.88-.38z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            관리자 로그인
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            관리자 계정으로 로그인하세요
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">아이디</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={loginCredentials.username}
                onChange={(e) => setLoginCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm dark:bg-gray-700"
                placeholder="아이디"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">비밀번호</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={loginCredentials.password}
                onChange={(e) => setLoginCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm dark:bg-gray-700"
                placeholder="비밀번호"
              />
            </div>
          </div>

          {loginError && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800 dark:text-red-200">{loginError}</p>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              로그인
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              메인으로 돌아가기
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // 탭 목록
  const tabs = [
    { id: 'ads', name: '광고 관리', icon: '📢' },
    { id: 'posts', name: '게시글 관리', icon: '📝' },
    { id: 'comments', name: '댓글 관리', icon: '💬' },
    { id: 'bulk', name: '일괄 삭제', icon: '🗑️' }
  ];

  // 모의 데이터 로드
  useEffect(() => {
    if (isLoggedIn) {
      loadMockData();
    }
  }, [isLoggedIn]);

  // 로그인하지 않은 경우 로그인 폼 표시
  if (!isLoggedIn) {
    return renderLoginForm();
  }

  const loadMockData = () => {
    // 게시글 데이터
    const mockPosts = [
      { id: 1, title: '새로운 기능 제안', author: 'user1', date: '2024-01-15', likes: 25, comments: 8, status: 'active' },
      { id: 2, title: 'UI 개선 아이디어', author: 'user2', date: '2024-01-14', likes: 18, comments: 5, status: 'active' },
      { id: 3, title: '버그 리포트', author: 'user3', date: '2024-01-13', likes: 12, comments: 3, status: 'reported' },
      { id: 4, title: '커뮤니티 가이드라인', author: 'admin', date: '2024-01-12', likes: 45, comments: 12, status: 'active' },
      { id: 5, title: '스팸 게시글', author: 'spammer', date: '2024-01-11', likes: 0, comments: 0, status: 'reported' }
    ];

    // 댓글 데이터
    const mockComments = [
      { id: 1, postId: 1, author: 'user1', content: '좋은 아이디어네요!', date: '2024-01-15', status: 'active' },
      { id: 2, postId: 1, author: 'user2', content: '동의합니다', date: '2024-01-15', status: 'active' },
      { id: 3, postId: 2, author: 'user3', content: '스팸 댓글입니다', date: '2024-01-14', status: 'reported' },
      { id: 4, postId: 3, author: 'user4', content: '도움이 되었어요', date: '2024-01-13', status: 'active' },
      { id: 5, postId: 4, author: 'user5', content: '감사합니다', date: '2024-01-12', status: 'active' }
    ];

    // 광고 데이터
    const mockAds = [
      { id: 1, title: 'qkRnjwnj 새로운 기능 제품', content: '새로운 기능 제품을 출시하고 싶으신가요? 없는 경우, 투표를 해주세요.', position: 'main', status: 'active', views: 1250, clicks: 89, startDate: '2024-01-01', endDate: '2024-12-31', imageUrl: '' },
      { id: 2, title: '메인 중앙 광고', content: '메인 중앙에 표시되는 광고입니다.', position: 'list-middle', status: 'active', views: 650, clicks: 32, startDate: '2024-01-01', endDate: '2024-12-31', imageUrl: '' },
      { id: 3, title: '메인 하단 광고', content: '메인 하단에 표시되는 광고입니다.', position: 'list-end', status: 'active', views: 420, clicks: 18, startDate: '2024-01-01', endDate: '2024-12-31', imageUrl: '' },
      { id: 4, title: '스티키 하단 광고', content: '화면 하단에 고정된 스티키 광고입니다.', position: 'sticky-bottom', status: 'active', views: 1200, clicks: 95, startDate: '2024-01-01', endDate: '2024-12-31', imageUrl: '' }
    ];

    setPosts(mockPosts);
    setComments(mockComments);
    setAds(mockAds);
  };

  const handleSelectItem = (itemId, type) => {
    setSelectedItems(prev => {
      const key = `${type}-${itemId}`;
      if (prev.includes(key)) {
        return prev.filter(id => id !== key);
      } else {
        return [...prev, key];
      }
    });
  };

  const handleSelectAll = (type, items) => {
    const allSelected = items.every(item => selectedItems.includes(`${type}-${item.id}`));
    if (allSelected) {
      setSelectedItems(prev => prev.filter(id => !id.startsWith(`${type}-`)));
    } else {
      const newSelected = items.map(item => `${type}-${item.id}`);
      setSelectedItems(prev => [...prev.filter(id => !id.startsWith(`${type}-`)), ...newSelected]);
    }
  };

  const handleDelete = (type) => {
    setIsLoading(true);
    setTimeout(() => {
      const selectedIds = selectedItems
        .filter(id => id.startsWith(`${type}-`))
        .map(id => parseInt(id.split('-')[1]));

      if (type === 'posts') {
        setPosts(prev => prev.filter(post => !selectedIds.includes(post.id)));
      } else if (type === 'comments') {
        setComments(prev => prev.filter(comment => !selectedIds.includes(comment.id)));
      } else if (type === 'ads') {
        setAds(prev => prev.filter(ad => !selectedIds.includes(ad.id)));
      }

      setSelectedItems(prev => prev.filter(id => !id.startsWith(`${type}-`)));
      setIsLoading(false);
    }, 1000);
  };

  const handleAddAd = () => {
    if (!newAd.title || !newAd.content || !newAd.startDate || !newAd.endDate) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    if (newAd.id) {
      // 광고 수정
      setAds(prev => prev.map(ad => ad.id === newAd.id ? newAd : ad));
    } else {
      // 새 광고 등록
      const newAdData = {
        id: Date.now(),
        ...newAd,
        views: 0,
        clicks: 0
      };
      setAds(prev => [...prev, newAdData]);
    }

    setNewAd({
      title: '',
      content: '',
      position: 'main',
      status: 'active',
      startDate: '',
      endDate: '',
      imageUrl: ''
    });
    setShowAdModal(false);
  };

  const handleEditAd = (adId) => {
    const ad = ads.find(a => a.id === adId);
    if (ad) {
      setNewAd(ad);
      setShowAdModal(true);
    }
  };

  const handleBulkDelete = () => {
    setIsLoading(true);
    setTimeout(() => {
      // 선택된 모든 항목 삭제
      setPosts(prev => prev.filter(post => !selectedItems.includes(`posts-${post.id}`)));
      setComments(prev => prev.filter(comment => !selectedItems.includes(`comments-${comment.id}`)));
      setAds(prev => prev.filter(ad => !selectedItems.includes(`ads-${ad.id}`)));
      setSelectedItems([]);
      setIsLoading(false);
    }, 1500);
  };

  const renderAdsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">광고 관리</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowAdModal(true)}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            광고 등록
          </button>
          <button
            onClick={() => handleDelete('ads')}
            disabled={!selectedItems.some(id => id.startsWith('ads-')) || isLoading}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? '삭제 중...' : '선택 삭제'}
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={ads.length > 0 && ads.every(ad => selectedItems.includes(`ads-${ad.id}`))}
              onChange={() => handleSelectAll('ads', ads)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">전체 선택</span>
          </label>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {ads.map(ad => (
            <div key={ad.id} className="p-4 flex items-center space-x-4">
              <input
                type="checkbox"
                checked={selectedItems.includes(`ads-${ad.id}`)}
                onChange={() => handleSelectItem(ad.id, 'ads')}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{ad.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{ad.content}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    ad.position === 'main' ? 'bg-blue-100 text-blue-800' :
                    ad.position === 'detail' ? 'bg-purple-100 text-purple-800' :
                    ad.position === 'comments' ? 'bg-orange-100 text-orange-800' :
                    ad.position === 'list-middle' ? 'bg-green-100 text-green-800' :
                    ad.position === 'list-end' ? 'bg-gray-100 text-gray-800' :
                    ad.position === 'sticky-bottom' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {ad.position === 'main' ? '메인 상단' :
                     ad.position === 'detail' ? '상세페이지 상단' :
                     ad.position === 'comments' ? '상세페이지 댓글' :
                     ad.position === 'list-middle' ? '메인 중앙' :
                     ad.position === 'list-end' ? '메인 하단' :
                     ad.position === 'sticky-bottom' ? '스티키' : ad.position}
                  </span>
                  <span>조회수: {ad.views}</span>
                  <span>클릭수: {ad.clicks}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    ad.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {ad.status === 'active' ? '활성' : '비활성'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleEditAd(ad.id)}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
              >
                편집
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPostsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">게시글 관리</h3>
        <button
          onClick={() => handleDelete('posts')}
          disabled={!selectedItems.some(id => id.startsWith('posts-')) || isLoading}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '삭제 중...' : '선택 삭제'}
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={posts.length > 0 && posts.every(post => selectedItems.includes(`posts-${post.id}`))}
              onChange={() => handleSelectAll('posts', posts)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">전체 선택</span>
          </label>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map(post => (
            <div key={post.id} className="p-4 flex items-center space-x-4">
              <input
                type="checkbox"
                checked={selectedItems.includes(`posts-${post.id}`)}
                onChange={() => handleSelectItem(post.id, 'posts')}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{post.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <span>작성자: {post.author}</span>
                  <span>날짜: {post.date}</span>
                  <span>좋아요: {post.likes}</span>
                  <span>댓글: {post.comments}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    post.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {post.status === 'active' ? '정상' : '신고됨'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCommentsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">댓글 관리</h3>
        <button
          onClick={() => handleDelete('comments')}
          disabled={!selectedItems.some(id => id.startsWith('comments-')) || isLoading}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '삭제 중...' : '선택 삭제'}
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={comments.length > 0 && comments.every(comment => selectedItems.includes(`comments-${comment.id}`))}
              onChange={() => handleSelectAll('comments', comments)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">전체 선택</span>
          </label>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {comments.map(comment => (
            <div key={comment.id} className="p-4 flex items-center space-x-4">
              <input
                type="checkbox"
                checked={selectedItems.includes(`comments-${comment.id}`)}
                onChange={() => handleSelectItem(comment.id, 'comments')}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">게시글 ID: {comment.postId}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    comment.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {comment.status === 'active' ? '정상' : '신고됨'}
                  </span>
                </div>
                <p className="text-gray-900 dark:text-white mt-1">{comment.content}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <span>작성자: {comment.author}</span>
                  <span>날짜: {comment.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBulkTab = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">주의</h3>
            <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
              <p>일괄 삭제는 되돌릴 수 없습니다. 신중하게 선택해주세요.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">일괄 삭제</h3>
        <button
          onClick={handleBulkDelete}
          disabled={selectedItems.length === 0 || isLoading}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '삭제 중...' : `선택된 ${selectedItems.length}개 항목 삭제`}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">선택된 항목</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">광고:</span>
              <span className="text-sm font-medium">{selectedItems.filter(id => id.startsWith('ads-')).length}개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">게시글:</span>
              <span className="text-sm font-medium">{selectedItems.filter(id => id.startsWith('posts-')).length}개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">댓글:</span>
              <span className="text-sm font-medium">{selectedItems.filter(id => id.startsWith('comments-')).length}개</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">전체 통계</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">총 광고:</span>
              <span className="text-sm font-medium">{ads.length}개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">총 게시글:</span>
              <span className="text-sm font-medium">{posts.length}개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">총 댓글:</span>
              <span className="text-sm font-medium">{comments.length}개</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">신고된 항목</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">신고된 게시글:</span>
              <span className="text-sm font-medium text-red-600">{posts.filter(p => p.status === 'reported').length}개</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">신고된 댓글:</span>
              <span className="text-sm font-medium text-red-600">{comments.filter(c => c.status === 'reported').length}개</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">관리자 패널</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">커뮤니티 관리 및 모니터링</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                로그아웃
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                메인으로 돌아가기
              </button>
            </div>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* 탭 컨텐츠 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6">
            {activeTab === 'ads' && renderAdsTab()}
            {activeTab === 'posts' && renderPostsTab()}
            {activeTab === 'comments' && renderCommentsTab()}
            {activeTab === 'bulk' && renderBulkTab()}
          </div>
        </div>

        {/* 광고 등록 모달 */}
        {showAdModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {newAd.id ? '광고 수정' : '광고 등록'}
                  </h3>
                  <button
                    onClick={() => setShowAdModal(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      광고 제목 *
                    </label>
                    <input
                      type="text"
                      value={newAd.title}
                      onChange={(e) => setNewAd(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                      placeholder="광고 제목을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      광고 내용 *
                    </label>
                    <textarea
                      value={newAd.content}
                      onChange={(e) => setNewAd(prev => ({ ...prev, content: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                      placeholder="광고 내용을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      표시 위치 *
                    </label>
                    <select
                      value={newAd.position}
                      onChange={(e) => setNewAd(prev => ({ ...prev, position: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    >
                      <option value="main">메인 상단 (상세페이지 상단에 자동 표시)</option>
                      <option value="list-middle">메인 중앙 (상세페이지 댓글 사이에 자동 표시)</option>
                      <option value="list-end">메인 하단 (상세페이지 미표시)</option>
                      <option value="sticky-bottom">스티키 (전체 페이지 하단 고정)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        시작 날짜 *
                      </label>
                      <input
                        type="date"
                        value={newAd.startDate}
                        onChange={(e) => setNewAd(prev => ({ ...prev, startDate: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        종료 날짜 *
                      </label>
                      <input
                        type="date"
                        value={newAd.endDate}
                        onChange={(e) => setNewAd(prev => ({ ...prev, endDate: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이미지 URL (선택사항)
                    </label>
                    <input
                      type="url"
                      value={newAd.imageUrl}
                      onChange={(e) => setNewAd(prev => ({ ...prev, imageUrl: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      상태
                    </label>
                    <select
                      value={newAd.status}
                      onChange={(e) => setNewAd(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
                    >
                      <option value="active">활성</option>
                      <option value="inactive">비활성</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => setShowAdModal(false)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    취소
                  </button>
                  <button
                    onClick={handleAddAd}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    {newAd.id ? '수정' : '등록'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 