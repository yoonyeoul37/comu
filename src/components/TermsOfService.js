import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
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
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-200">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20L7 4H9L13 20H11L10 16H6L5 20H3ZM7.5 14H8.5L8 12L7.5 14Z"/>
                <path d="M15 20L19 4H21L25 20H23L22 16H18L17 20H15ZM17.5 14H18.5L18 12L17.5 14Z"/>
              </svg>
            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">위티</span>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">WITTY</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">이용약관</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">마지막 업데이트: 2024년 1월 1일</p>
        </div>

        {/* 내용 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. 서비스 이용</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              위티는 익명 커뮤니티 서비스입니다. 서비스 이용 시 다음 사항을 준수해 주세요.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. 금지 행위</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>타인을 비방하거나 명예를 훼손하는 게시글 및 댓글</li>
              <li>욕설, 폭력적 표현, 차별적 표현</li>
              <li>스팸, 광고성 게시글</li>
              <li>불법 콘텐츠 게시</li>
              <li>개인정보 유출</li>
              <li>서비스 운영을 방해하는 행위</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. 게시글 및 댓글 정책</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              모든 게시글과 댓글은 익명으로 작성됩니다. 작성된 내용에 대한 책임은 작성자에게 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>게시글과 댓글은 관리자에 의해 삭제될 수 있습니다</li>
              <li>부적절한 내용은 신고를 통해 검토됩니다</li>
              <li>반복적인 위반 시 서비스 이용이 제한될 수 있습니다</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. 신고 절차</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              부적절한 게시글이나 댓글을 발견하셨다면 신고해 주세요.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>신고는 해당 게시글/댓글의 신고 버튼을 통해 가능합니다</li>
              <li>신고된 내용은 24시간 내에 검토됩니다</li>
              <li>악의적인 신고는 제재 대상이 될 수 있습니다</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. 서비스 변경 및 중단</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              서비스 개선을 위해 일시적으로 서비스를 중단하거나 변경할 수 있습니다. 
              사전 공지가 불가능한 경우 사후 공지로 대체됩니다.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. 문의사항</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              이용약관에 대한 문의사항이 있으시면 관리자에게 연락해 주세요.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => navigate('/')}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                메인으로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 