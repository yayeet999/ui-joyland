import React from 'react';
import '@/styles/components/buttons/social-buttons-card.css';

const XAuth2ButtonPreview: React.FC = () => {
  return (
    <button className="x-auth2-btn-card">
      <div className="x-icon2-wrapper-card">
        <svg className="x-icon2-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.317 10.846 19.3 4h-1.418l-5.193 5.943L8.071 4H3l6.291 8.988L3 20h1.418l5.51-6.308L15.929 20H21l-7.683-10.154Zm-1.953 2.235-.635-.903L5.659 5.04h1.814l4.502 6.402.635.903 5.289 7.521h-1.814l-4.721-6.785Z"/>
        </svg>
      </div>
      <span className="button-text2-card">Continue with X</span>
    </button>
  );
};

export default XAuth2ButtonPreview; 