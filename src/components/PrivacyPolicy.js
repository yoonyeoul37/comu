import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">개인정보처리방침</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">마지막 업데이트: 2024년 1월 1일</p>
        </div>

        {/* 내용 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {/* 목차 */}
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">목차</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li><a href="#collection" className="hover:text-gray-900 dark:hover:text-white">1. 개인정보 수집 항목</a></li>
                <li><a href="#purpose" className="hover:text-gray-900 dark:hover:text-white">2. 개인정보 수집 목적</a></li>
                <li><a href="#retention" className="hover:text-gray-900 dark:hover:text-white">3. 개인정보 보관 기간</a></li>
                <li><a href="#sharing" className="hover:text-gray-900 dark:hover:text-white">4. 개인정보 제3자 제공</a></li>
                <li><a href="#deletion" className="hover:text-gray-900 dark:hover:text-white">5. 개인정보 삭제 요청</a></li>
                <li><a href="#officer" className="hover:text-gray-900 dark:hover:text-white">6. 개인정보 보호책임자</a></li>
                <li><a href="#changes" className="hover:text-gray-900 dark:hover:text-white">7. 개인정보처리방침 변경</a></li>
              </ul>
            </div>

            <div id="collection" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                개인정보 수집 항목
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                달녀들은 익명 커뮤니티 서비스로, 최소한의 개인정보만 수집합니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 border-l-4 border-gray-400 p-4 rounded-r-lg mb-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>익명성 보장:</strong> 개인을 식별할 수 있는 정보는 수집하지 않습니다.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>IP 주소:</strong> 서버 로그에 자동으로 기록되는 기술적 정보</li>
                <li><strong>브라우저 정보:</strong> User-Agent, 접속 시간, 페이지 방문 기록</li>
                <li><strong>쿠키:</strong> 서비스 이용 편의를 위한 설정 정보</li>
                <li><strong>게시글 및 댓글:</strong> 사용자가 작성한 콘텐츠</li>
              </ul>
            </div>

            <div id="purpose" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                개인정보 수집 목적
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="text-gray-900 dark:text-white font-medium mb-2">✅ 주요 목적</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 서비스 제공 및 운영</li>
                    <li>• 부적절한 콘텐츠 차단</li>
                    <li>• 서비스 개선 및 통계</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="text-gray-900 dark:text-white font-medium mb-2">🔒 보안 목적</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 법적 분쟁 해결</li>
                    <li>• 서비스 안정성 확보</li>
                    <li>• 악의적 사용자 차단</li>
                  </ul>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>서비스 제공 및 운영</li>
                <li>부적절한 콘텐츠 차단 및 관리</li>
                <li>서비스 개선 및 통계 분석</li>
                <li>법적 분쟁 해결</li>
              </ul>
            </div>

            <div id="retention" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                개인정보 보관 기간
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">보관 기간 안내</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">최소한의 기간만 보관하며, 목적 달성 시 즉시 삭제합니다</p>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li><strong>서버 로그:</strong> 3개월</li>
                <li><strong>게시글 및 댓글:</strong> 서비스 운영 기간 동안</li>
                <li><strong>쿠키:</strong> 브라우저 설정에 따라 다름 (보통 1년)</li>
              </ul>
            </div>

            <div id="sharing" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                개인정보 제3자 제공
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">원칙적으로 개인정보를 제3자에게 제공하지 않습니다.</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                달녀들은 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 
                다만, 법령에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우 제공할 수 있습니다.
              </p>
            </div>

            <div id="deletion" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                개인정보 삭제 요청
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                개인정보 삭제를 원하시는 경우 다음 방법으로 요청하실 수 있습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-center">
                  <svg className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">관리자 연락</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-center">
                  <svg className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">신고 기능</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-center">
                  <svg className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">자체 삭제</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>관리자에게 직접 연락</li>
                <li>신고 기능을 통한 삭제 요청</li>
                <li>게시글/댓글 작성자의 자체 삭제</li>
              </ul>
            </div>

            <div id="officer" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                개인정보 보호책임자
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6 border-l-4 border-gray-400">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">개인정보 보호책임자</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">이메일: privacy@dny.co.kr</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">연락처: 관리자 페이지를 통한 문의</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="changes" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                개인정보처리방침 변경
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
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

export default PrivacyPolicy; 