import React, { useState } from 'react';

const SteppedAuthFormPreview = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault();

    if (!isSignUp && !showPassword && email) {
      setShowPassword(true);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      setPassword('');
      setShowPassword(false);
    }, 1000);
  };

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setShowPassword(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form onSubmit={handleContinue} className="form">
        <p className="welcome-text">
          {isSignUp ? 'Create Account' : 'Welcome,'}
          <span>{isSignUp ? 'join to get started' : 'sign in to continue'}</span>
        </p>

        <button type="button" className="oauthButton">
          <svg className="icon google-icon" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          Continue with Google
        </button>

        <button type="button" className="oauthButton">
          <svg className="icon github-icon" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          Continue with Github
        </button>

        <div className="separator">
          <div></div>
          <span>OR</span>
          <div></div>
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="auth-input"
        />

        {(isSignUp || showPassword) && (
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="auth-input password-field"
          />
        )}

        <button type="submit" className="oauthButton submit-button" disabled={isLoading}>
          {isLoading ? 'Processing...' : (!isSignUp && !showPassword) ? 'Continue' : (isSignUp ? 'Sign Up' : 'Sign In')}
          {!isLoading && (
            <svg className="icon arrow-icon" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
          )}
        </button>

        <div className="toggle-section">
          <button type="button" onClick={handleToggle} className="toggle-button">
            {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
        </div>
      </form>

      <style jsx>{`
        /* Variables */
        :root {
          --background: #efefef;
          --input-focus: #4b9bd8;
          --font-color: #2f2f2f;
          --font-color-sub: #5c5c5c;
          --bg-color: #ffffff;
          --main-color: #4b4b4b;
        }

        /* Container styles */
        .auth-form-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f1f8fb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Form styles */
        .form {
          background: var(--background);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 15px;
          border-radius: 5px;
          border: 2px solid var(--main-color);
          box-shadow: 4px 4px var(--main-color);
          width: 380px; /* Slightly more wide */
          transition: all 0.3s ease;
        }

        /* Welcome text */
        .welcome-text {
          font-weight: 700;
          font-size: 20px;
          color: var(--font-color);
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
        }

        .welcome-text > span {
          color: var(--font-color-sub);
          font-weight: 600;
          font-size: 17px;
          margin-top: 3px;
        }

        /* Separator */
        .separator {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 5px 0;
        }

        .separator > div {
          width: 100px;
          height: 3px;
          border-radius: 5px;
          background-color: var(--font-color-sub);
        }

        .separator > span {
          color: var(--font-color);
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
        }

        /* OAuth buttons */
        .oauthButton {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          width: 100%;
          height: 40px;
          border-radius: 5px;
          border: 2px solid var(--main-color);
          background-color: var(--bg-color);
          box-shadow: 4px 4px var(--main-color);
          font-size: 16px;
          font-weight: 600;
          color: var(--font-color);
          cursor: pointer;
          transition: all 250ms;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .oauthButton::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background-color: #303c44;
          z-index: -1;
          box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
          transition: all 250ms;
        }

        .oauthButton:hover {
          color: #e8e8e8;
        }

        .oauthButton:hover::before {
          width: 100%;
        }

        /* Icons */
        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .google-icon {
          margin-right: 4px;
        }

        .github-icon {
          margin-right: 4px;
          fill: currentColor;
        }

        .arrow-icon {
          margin-left: 4px;
        }

        /* Input fields */
        .auth-input {
          width: 100%;
          height: 40px;
          border-radius: 5px;
          border: 2px solid var(--main-color);
          background-color: var(--bg-color);
          box-shadow: 4px 4px var(--main-color);
          font-size: 15px;
          font-weight: 600;
          color: var(--font-color);
          padding: 5px 10px;
          outline: none;
        }

        .auth-input:focus {
          border-color: var(--input-focus);
        }

        /* Password field animation */
        .password-field {
          animation: slideIn 0.3s ease forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Toggle section */
        .toggle-section {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 5px;
        }

        .toggle-button {
          background: none;
          border: none;
          color: var(--font-color);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
          padding: 0;
        }

        .toggle-button:hover {
          color: var(--input-focus);
        }
      `}</style>

      <style jsx>{`
        .step-dots .dot {
          transition: all 0.3s;
        }
        
        .step-dots .dot.active {
          background-color: white;
          transform: scale(1.2);
        }
        
        .step-content {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.3s, transform 0.3s;
        }
        
        .step-content.active {
          opacity: 1;
          transform: translateX(0);
          transition-delay: 0.2s;
        }
        
        .step-number {
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .step-number.completed {
          background-color: #34d399;
        }
        
        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .bg-animated-gradient {
          background-size: 400% 400%;
          animation: gradient-flow 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SteppedAuthFormPreview;
