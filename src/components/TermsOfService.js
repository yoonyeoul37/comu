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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">이용약관</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">마지막 업데이트: 2024년 1월 1일</p>
        </div>

        {/* 내용 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {/* 목차 */}
            <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">목차</h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li><a href="#service" className="hover:text-gray-900 dark:hover:text-white">1. 서비스 이용</a></li>
                <li><a href="#prohibited" className="hover:text-gray-900 dark:hover:text-white">2. 금지 행위</a></li>
                <li><a href="#content" className="hover:text-gray-900 dark:hover:text-white">3. 게시글 및 댓글 정책</a></li>
                <li><a href="#report" className="hover:text-gray-900 dark:hover:text-white">4. 신고 절차</a></li>
                <li><a href="#changes" className="hover:text-gray-900 dark:hover:text-white">5. 서비스 변경 및 중단</a></li>
                <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white">6. 문의사항</a></li>
              </ul>
            </div>

            <div id="service" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                서비스 이용
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                달녀들은 익명 커뮤니티 서비스입니다. 서비스 이용 시 다음 사항을 준수해 주세요.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>중요:</strong> 본 서비스는 19세 이상 사용자만 이용 가능합니다.
                </p>
              </div>
            </div>

            <div id="prohibited" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                금지 행위
              </h2>
              <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">다음 행위는 엄격히 금지됩니다:</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>타인을 비방하거나 명예를 훼손하는 게시글 및 댓글</li>
                <li>욕설, 폭력적 표현, 차별적 표현</li>
                <li>스팸, 광고성 게시글</li>
                <li>불법 콘텐츠 게시</li>
                <li>개인정보 유출</li>
                <li>서비스 운영을 방해하는 행위</li>
              </ul>
            </div>

            <div id="content" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                게시글 및 댓글 정책
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                모든 게시글과 댓글은 익명으로 작성됩니다. 작성된 내용에 대한 책임은 작성자에게 있습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="text-gray-900 dark:text-white font-medium mb-2">✅ 허용되는 내용</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 건설적인 토론</li>
                    <li>• 경험 공유</li>
                    <li>• 정보 교환</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <h4 className="text-gray-900 dark:text-white font-medium mb-2">❌ 금지되는 내용</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 타인 비방</li>
                    <li>• 불법 콘텐츠</li>
                    <li>• 스팸/광고</li>
                  </ul>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>게시글과 댓글은 관리자에 의해 삭제될 수 있습니다</li>
                <li>부적절한 내용은 신고를 통해 검토됩니다</li>
                <li>반복적인 위반 시 서비스 이용이 제한될 수 있습니다</li>
              </ul>
            </div>

            <div id="report" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                신고 절차
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                부적절한 게시글이나 댓글을 발견하셨다면 신고해 주세요.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mb-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">신고 처리 시간</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">신고된 내용은 24시간 내에 검토됩니다</p>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                <li>신고는 해당 게시글/댓글의 신고 버튼을 통해 가능합니다</li>
                <li>신고된 내용은 24시간 내에 검토됩니다</li>
                <li>악의적인 신고는 제재 대상이 될 수 있습니다</li>
              </ul>
            </div>

            <div id="changes" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                서비스 변경 및 중단
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                서비스 개선을 위해 일시적으로 서비스를 중단하거나 변경할 수 있습니다. 
                사전 공지가 불가능한 경우 사후 공지로 대체됩니다.
              </p>
            </div>

            <div id="contact" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                문의사항
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                이용약관에 대한 문의사항이 있으시면 관리자에게 연락해 주세요.
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

export default TermsOfService; 