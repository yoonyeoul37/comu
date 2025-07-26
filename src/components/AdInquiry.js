import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdInquiry = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">광고문의</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">미미룸에서 광고를 게재하고 싶으신가요?</p>
        </div>

        {/* 광고 위치 안내 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">광고 위치 안내</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 메인 상단 광고 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">메인 상단 광고</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">메인 페이지 최상단</p>
                </div>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• 메인 페이지 상단에 고정 배치</li>
                <li>• 높은 노출률과 클릭률</li>
                <li>• 이미지 + 텍스트 형태 지원</li>
                <li>• 반응형 디자인</li>
              </ul>
            </div>

            {/* 메인 중앙 광고 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">메인 중앙 광고</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">게시글 목록 중간</p>
                </div>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• 게시글 목록 중간에 배치</li>
                <li>• 자연스러운 콘텐츠 흐름</li>
                <li>• 높은 참여도</li>
                <li>• 다양한 크기 지원</li>
              </ul>
            </div>

            {/* 메인 하단 광고 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">메인 하단 광고</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">게시글 목록 하단</p>
                </div>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• 게시글 목록 하단에 배치</li>
                <li>• 페이지 하단 고정</li>
                <li>• 지속적인 노출</li>
                <li>• 다양한 형태 지원</li>
              </ul>
            </div>

            {/* 스티키 광고 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">스티키 광고</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">화면 하단 고정</p>
                </div>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li>• 화면 하단에 고정 배치</li>
                <li>• 스크롤해도 항상 노출</li>
                <li>• 높은 클릭률</li>
                <li>• 컴팩트한 디자인</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 광고 문의 폼 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">광고 문의하기</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  회사명/브랜드명 *
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="회사명 또는 브랜드명을 입력하세요"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  담당자명 *
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="담당자명을 입력하세요"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="이메일 주소를 입력하세요"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="연락처를 입력하세요"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                희망 광고 위치 *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">메인 상단</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">메인 중앙</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">메인 하단</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">스티키</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                광고 기간
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="시작일"
                />
                <input
                  type="date"
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="종료일"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                광고 내용 및 요청사항 *
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="광고 내용, 요청사항, 예산 등을 자세히 작성해 주세요"
              ></textarea>
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
      </div>
    </div>
  );
};

export default AdInquiry; 