import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 실제 폼 제출 로직을 추가할 수 있습니다
    console.log('문의 내용:', formData);
    setIsSubmitted(true);
    
    // 3초 후 메인 페이지로 이동
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">문의가 접수되었습니다</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            빠른 시일 내에 답변드리겠습니다.
          </p>
          <div className="animate-pulse">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              메인 페이지로 이동 중...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">미미룸</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">문의하기</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">궁금한 점이나 건의사항이 있으시면 언제든 연락해 주세요.</p>
        </div>

        {/* 문의 폼 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                이름 *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="이름을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                이메일 *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="이메일 주소를 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                문의 제목 *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">문의 유형을 선택하세요</option>
                <option value="bug">버그 신고</option>
                <option value="feature">기능 제안</option>
                <option value="content">콘텐츠 관련</option>
                <option value="technical">기술적 문제</option>
                <option value="account">계정 관련</option>
                <option value="other">기타</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                문의 내용 *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="문의하실 내용을 자세히 작성해 주세요"
              ></textarea>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    문의하신 내용은 빠른 시일 내에 답변드리겠습니다. 
                    긴급한 문의사항은 관리자 페이지를 통해 직접 연락해 주세요.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                문의하기
              </button>
            </div>
          </form>
        </div>

        {/* 연락처 정보 */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">기타 연락 방법</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">관리자 페이지</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                관리자 페이지를 통해 직접 문의하실 수 있습니다.
              </p>
              <button
                onClick={() => navigate('/admin')}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                관리자 페이지로 이동 →
              </button>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">광고 문의</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                광고 게재에 대한 문의는 별도 페이지를 이용해 주세요.
              </p>
              <button
                onClick={() => navigate('/ad-inquiry')}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                광고 문의 페이지로 이동 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 