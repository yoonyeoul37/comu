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
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-200">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                {/* 달 모양 */}
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                {/* 여성 실루엣 */}
                <path d="M12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                <path d="M12 14c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span 
                className="text-2xl font-bold text-gray-900 dark:text-white hover:animate-float" 
                style={{ 
                  fontFamily: 'Noto Sans KR, sans-serif', 
                  transform: 'skewX(5deg)',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                달녀들
              </span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 italic hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all duration-300">DNY.CO.KR</span>
            </div>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">쿠키 정책</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">마지막 업데이트: 2024년 1월 1일</p>
        </div>

        {/* 내용 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {/* 목차 */}
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">목차</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li><a href="#what" className="hover:text-gray-900 dark:hover:text-white">1. 쿠키란?</a></li>
                <li><a href="#usage" className="hover:text-gray-900 dark:hover:text-white">2. 달녀들에서 사용하는 쿠키</a></li>
                <li><a href="#settings" className="hover:text-gray-900 dark:hover:text-white">3. 쿠키 설정 방법</a></li>
                <li><a href="#impact" className="hover:text-gray-900 dark:hover:text-white">4. 쿠키 거부 시 영향</a></li>
                <li><a href="#thirdparty" className="hover:text-gray-900 dark:hover:text-white">5. 제3자 쿠키</a></li>
                <li><a href="#changes" className="hover:text-gray-900 dark:hover:text-white">6. 쿠키 정책 변경</a></li>
                <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white">7. 문의사항</a></li>
              </ul>
            </div>

            <div id="what" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                쿠키란?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                쿠키는 웹사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일입니다. 
                쿠키는 사용자가 웹사이트를 더 효율적으로 이용할 수 있도록 도와줍니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">쿠키의 역할</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">사용자 설정 저장, 서비스 개선, 보안 강화</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="usage" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                달녀들에서 사용하는 쿠키
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">쿠키명</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">목적</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">보관기간</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">필수여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="font-medium">darkMode</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">다크모드 설정 저장</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">1년</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">선택</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="font-medium">session</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">세션 관리</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">브라우저 종료 시</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">필수</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="font-medium">adPreferences</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">광고 표시 설정</td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">6개월</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">선택</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="settings" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                쿠키 설정 방법
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6 border-l-4 border-gray-400">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">브라우저별 쿠키 설정 방법:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Chrome</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 ml-6">설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Firefox</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 ml-6">설정 → 개인정보 보호 → 쿠키 및 사이트 데이터</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Safari</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 ml-6">환경설정 → 개인정보 보호 → 쿠키 및 웹사이트 데이터</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Edge</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 ml-6">설정 → 쿠키 및 사이트 권한 → 쿠키 및 사이트 데이터</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="impact" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                쿠키 거부 시 영향
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                쿠키를 거부하거나 삭제할 경우 다음과 같은 영향이 있을 수 있습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">주의사항</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">쿠키 거부 시 일부 기능이 제한될 수 있습니다</p>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>다크모드 설정이 초기화됩니다</li>
                <li>광고 표시 설정이 초기화됩니다</li>
                <li>일부 서비스 기능이 제한될 수 있습니다</li>
                <li>매번 로그인해야 할 수 있습니다</li>
              </ul>
            </div>

            <div id="thirdparty" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                제3자 쿠키
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">현재 제3자 쿠키를 사용하지 않습니다.</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                달녀들은 현재 제3자 쿠키를 사용하지 않습니다. 향후 광고 서비스 등을 위해 제3자 쿠키를 도입할 경우, 
                이 정책을 업데이트하여 사전에 공지하겠습니다.
              </p>
            </div>

            <div id="changes" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                쿠키 정책 변경
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                이 쿠키 정책은 변경될 수 있습니다. 중요한 변경사항이 있을 경우, 
                웹사이트를 통해 사전에 공지하거나 이메일로 알려드리겠습니다.
              </p>
            </div>

            <div id="contact" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                문의사항
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                쿠키 정책에 대한 문의사항이 있으시면 관리자에게 연락해 주세요.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => navigate('/')}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>메인으로 돌아가기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 