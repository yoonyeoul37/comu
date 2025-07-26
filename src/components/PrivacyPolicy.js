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
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. 개인정보 수집 항목</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              달녀들은 익명 커뮤니티 서비스로, 최소한의 개인정보만 수집합니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li><strong>IP 주소:</strong> 서버 로그에 자동으로 기록되는 기술적 정보</li>
              <li><strong>브라우저 정보:</strong> User-Agent, 접속 시간, 페이지 방문 기록</li>
              <li><strong>쿠키:</strong> 서비스 이용 편의를 위한 설정 정보</li>
              <li><strong>게시글 및 댓글:</strong> 사용자가 작성한 콘텐츠</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. 개인정보 수집 목적</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>서비스 제공 및 운영</li>
              <li>부적절한 콘텐츠 차단 및 관리</li>
              <li>서비스 개선 및 통계 분석</li>
              <li>법적 분쟁 해결</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. 개인정보 보관 기간</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li><strong>서버 로그:</strong> 3개월</li>
              <li><strong>게시글 및 댓글:</strong> 서비스 운영 기간 동안</li>
              <li><strong>쿠키:</strong> 브라우저 설정에 따라 다름 (보통 1년)</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4. 개인정보 제3자 제공</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              달녀들은 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 
              다만, 법령에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우 제공할 수 있습니다.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5. 개인정보 삭제 요청</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              개인정보 삭제를 원하시는 경우 다음 방법으로 요청하실 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>관리자에게 직접 연락</li>
              <li>신고 기능을 통한 삭제 요청</li>
              <li>게시글/댓글 작성자의 자체 삭제</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">6. 개인정보 보호책임자</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>개인정보 보호책임자</strong><br />
                                 이메일: privacy@witty.com<br />
                연락처: 관리자 페이지를 통한 문의
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">7. 개인정보처리방침 변경</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
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

export default PrivacyPolicy; 