
import React, { useState } from 'react';

const DownloadProgressButtonPreview: React.FC = () => {
  const [buttonState, setButtonState] = useState<'idle' | 'downloading' | 'complete'>('idle');

  const handleClick = () => {
    if (buttonState !== 'idle') return;
    
    setButtonState('downloading');
    
    setTimeout(() => {
      setButtonState('complete');
      
      setTimeout(() => {
        setButtonState('idle');
      }, 3000);
    }, 3000);
  };

  return (
    <div className="button-container">
      <button 
        className={`download-progress-button ${buttonState === 'downloading' ? 'downloading' : ''} ${buttonState === 'complete' ? 'complete' : ''}`}
        onClick={handleClick}
      >
        <span className="button-content">
          <span className="button-text">Download</span>
          <span className="button-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="arrow-path" d="M12 4L12 16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path className="progress-path" d="M3 20H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </span>
        <div className="progress-indicator">
          <div className="progress-bar"></div>
        </div>
      </button>
    </div>
  );
};

export default DownloadProgressButtonPreview;
