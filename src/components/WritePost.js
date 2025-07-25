import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WritePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    content: '',
    tags: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: '친구', label: '친구', emoji: '😊' },
    { value: '가족', label: '가족', emoji: '👨‍👩‍👧‍👦' },
    { value: '이혼', label: '이혼', emoji: '😢' },
    { value: '결혼', label: '결혼', emoji: '💒' },
    { value: '남편', label: '남편', emoji: '💕' },
    { value: '시댁', label: '시댁', emoji: '😤' },
    { value: '시모', label: '시모', emoji: '😤' },
    { value: '직장', label: '직장', emoji: '💼' },
    { value: '동료', label: '동료', emoji: '👥' },
    { value: '취업', label: '취업', emoji: '💼' },
    { value: '선배', label: '선배', emoji: '👨‍💼' },
    { value: '후배', label: '후배', emoji: '👨‍🎓' },
    { value: '여자', label: '여자', emoji: '👩' },
    { value: '군대', label: '군대', emoji: '🎖️' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.category || !formData.title || !formData.content) {
      alert('카테고리, 제목, 내용을 모두 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 실제 구현에서는 API 호출
      console.log('게시글 작성:', formData);

      // 성공 시 메인 페이지로 이동
      setTimeout(() => {
        alert('게시글이 성공적으로 작성되었습니다!');
        navigate('/');
      }, 1000);
    } catch (error) {
      alert('게시글 작성 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (formData.title || formData.content) {
      if (window.confirm('작성 중인 내용이 있습니다. 정말 나가시겠습니까?')) {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleCancel}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium">목록으로 돌아가기</span>
              </button>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">새 게시글 작성</h1>
            <div className="w-32"></div> {/* 균형을 위한 빈 공간 */}
          </div>
        </div>

        {/* 글쓰기 폼 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="p-6">
            {/* 카테고리 선택 */}
            <div className="mb-6">
              <div className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                카테고리 선택 *
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, category: category.value }))}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      formData.category === category.value
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{category.emoji}</span>
                      <span className="text-sm font-medium">{category.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 제목 입력 */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                제목 *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="게시글 제목을 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
                maxLength={100}
              />
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  익명으로 작성됩니다
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formData.title.length}/100
                </span>
              </div>
            </div>

            {/* 내용 입력 */}
            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                내용 *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="게시글 내용을 입력하세요"
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:bg-gray-700 dark:text-white resize-none transition-all duration-200"
                maxLength={2000}
              />
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  개인정보나 타인을 비방하는 내용은 삼가해주세요
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {formData.content.length}/2000
                </span>
              </div>
            </div>

            {/* 태그 입력 */}
            <div className="mb-8">
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                태그 (선택사항)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="태그를 쉼표로 구분하여 입력하세요 (예: 고민, 조언, 공감)"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                관련 태그를 입력하면 다른 사용자가 쉽게 찾을 수 있습니다
              </p>
            </div>

            {/* 버튼 그룹 */}
            <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.category || !formData.title || !formData.content}
                className="px-6 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>작성 중...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>게시글 작성</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WritePost; 