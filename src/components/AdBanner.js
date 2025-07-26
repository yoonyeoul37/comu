import React, { useState } from 'react';

const AdBanner = ({ type = 'main', title, description, imageUrl, linkUrl, ctaText = '자세히 보기' }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    if (linkUrl) {
      window.open(linkUrl, '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`ad-banner ad-banner-${type} bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 mb-6 relative overflow-hidden`}>
      {/* 닫기 버튼 */}
      <button 
        onClick={handleClose}
        className="absolute top-2 right-2 text-white hover:text-gray-200 text-sm"
      >
        ✕
      </button>

      {/* 광고 내용 */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="text-xs text-blue-100 mb-1">광고</div>
          <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
          <p className="text-blue-100 text-sm mb-3">{description}</p>
          <button 
            onClick={handleClick}
            className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            {ctaText}
          </button>
        </div>
        
        {/* 광고 이미지 */}
        {imageUrl && (
          <div className="ml-4">
            <img 
              src={imageUrl} 
              alt="광고 이미지" 
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      {/* 애니메이션 효과 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"></div>
    </div>
  );
};

export default AdBanner; 