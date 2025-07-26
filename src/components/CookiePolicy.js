import React from 'react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">쿠키 정책</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">마지막 업데이트: 2024년 1월 1일</p>
        </div>

        {/* 내용 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. 쿠키란?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              쿠키는 웹사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일입니다. 
              쿠키는 사용자가 웹사이트를 더 효율적으로 이용할 수 있도록 도와줍니다.
            </p>

                         <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. 위티에서 사용하는 쿠키</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b">쿠키명</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b">목적</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b">보관기간</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white border-b">필수여부</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">darkMode</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">다크모드 설정 저장</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">1년</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">선택</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">session</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">세션 관리</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">브라우저 종료 시</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">필수</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">adPreferences</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">광고 표시 설정</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">6개월</td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">선택</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. 쿠키 설정 방법</h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">브라우저별 쿠키 설정 방법:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Chrome:</strong> 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
                <li><strong>Firefox:</strong> 설정 → 개인정보 보호 → 쿠키 및 사이트 데이터</li>
                <li><strong>Safari:</strong> 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트 데이터</li>
                <li><strong>Edge:</strong> 설정 → 쿠키 및 사이트 권한 → 쿠키 및 사이트 데이터</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. 쿠키 거부 시 영향</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              쿠키를 거부하거나 삭제할 경우 다음과 같은 영향이 있을 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>다크모드 설정이 초기화됩니다</li>
              <li>광고 표시 설정이 초기화됩니다</li>
              <li>일부 서비스 기능이 제한될 수 있습니다</li>
              <li>매번 로그인해야 할 수 있습니다</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. 제3자 쿠키</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              위티는 현재 제3자 쿠키를 사용하지 않습니다. 향후 광고 서비스 등을 위해 제3자 쿠키를 도입할 경우, 
              이 정책을 업데이트하여 사전에 공지하겠습니다.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. 쿠키 정책 변경</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              이 쿠키 정책은 변경될 수 있습니다. 중요한 변경사항이 있을 경우, 
              웹사이트를 통해 사전에 공지하거나 이메일로 알려드리겠습니다.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">7. 문의사항</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              쿠키 정책에 대한 문의사항이 있으시면 관리자에게 연락해 주세요.
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

export default CookiePolicy; 