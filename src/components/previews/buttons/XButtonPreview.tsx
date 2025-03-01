import React from 'react';

const XButtonPreview: React.FC = () => {
  return (
    <button className="x-auth-btn-card">
      <div className="x-icon-wrapper-card">
        <svg className="x-icon-card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="#ffffff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
      <span className="button-text-card">Sign in with X</span>
    </button>
  );
};

export default XButtonPreview;
