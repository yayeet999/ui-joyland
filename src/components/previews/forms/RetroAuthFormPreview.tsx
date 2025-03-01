import React, { useState, useEffect } from 'react';

const RetroAuthFormPreview = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setFormSubmitted(true);
      
      setTimeout(() => {
        setIsLoading(false);
        setFormSubmitted(false);
        setEmail('');
        setPassword('');
      }, 1500);
    }, 700);
  };

  return (
    <div className="retro-bg min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ imageRendering: 'pixelated' }}>
      
      <div className="scanlines"></div>
      <div className="crt absolute inset-0"></div>

      <div className={`relative retro-container w-full max-w-md z-10 p-4 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {formSubmitted && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden">
            <div className="relative">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          </div>
        )}
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative p-8">
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-3xl font-bold text-white retro-text flicker">{isSignUp ? 'Join the Grid' : 'Login to the System'}</h2>
              <p className="text-white/70 text-balance">
                {isSignUp ? 'Create your 8-bit account' : 'Enter your credentials'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-cyan-400 bg-black/30 text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-300 transition-colors duration-300"
                  placeholder="user@matrix.io"
                  required
                />
              </div>
              
              <div className="relative group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-cyan-400 bg-black/30 text-white placeholder-cyan-200 focus:outline-none focus:border-cyan-300 transition-colors duration-300"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || formSubmitted}
                className="relative w-full overflow-hidden rounded-lg py-3 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <span>{isSignUp ? 'Create Account' : 'Enter the Matrix'}</span>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-white/70 hover:text-white transition-colors relative group"
              >
                <span>{isSignUp ? 'Back to Login' : 'Create a new account'}</span>
                <span className="block text-white font-medium mt-1 group-hover:scale-105 transition-transform text-base">
                  {isSignUp ? 'Login' : 'Sign Up'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          .retro-bg {
            background-color: #000;
            background-image: 
              linear-gradient(0deg, transparent 24%, 
                rgba(32, 255, 255, 0.07) 25%, 
                rgba(32, 255, 255, 0.07) 26%, 
                transparent 27%, 
                transparent 74%, 
                rgba(32, 255, 255, 0.07) 75%, 
                rgba(32, 255, 255, 0.07) 76%, 
                transparent 77%, 
                transparent),
              linear-gradient(90deg, transparent 24%, 
                rgba(32, 255, 255, 0.07) 25%, 
                rgba(32, 255, 255, 0.07) 26%, 
                transparent 27%, 
                transparent 74%, 
                rgba(32, 255, 255, 0.07) 75%, 
                rgba(32, 255, 255, 0.07) 76%, 
                transparent 77%, 
                transparent);
            background-size: 50px 50px;
          }

          .scanlines {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            pointer-events: none;
          }

          .scanlines:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: repeating-linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0, 0, 0, 0.1) 0.1%,
              transparent 0.2%
            );
            animation: scanlines 10ms infinite;
          }

          @keyframes scanlines {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 0 100%;
            }
          }

          .crt:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
              circle at center,
              transparent 60%,
              rgba(0, 0, 0, 0.5) 100%
            );
            pointer-events: none;
          }

          .retro-text {
            text-shadow: 
              0 0 5px rgba(32, 255, 255, 0.8),
              0 0 10px rgba(32, 255, 255, 0.5);
          }
        `}
      </style>
      
      <style>
        {`
          @keyframes colorShift {
            0%, 100% {
              filter: hue-rotate(0deg);
            }
            33% {
              filter: hue-rotate(5deg);
            }
            66% {
              filter: hue-rotate(-5deg);
            }
          }

          .retro-container {
            animation: colorShift 10s ease infinite;
          }

          .flicker {
            animation: flicker 0.3s infinite alternate;
          }

          @keyframes flicker {
            0%, 100% {
              opacity: 1;
            }
            25% {
              opacity: 0.95;
            }
            50% {
              opacity: 0.97;
            }
            75% {
              opacity: 0.93;
            }
          }

          .crt-startup {
            animation: startup 2s 1;
          }

          @keyframes startup {
            0% {
              height: 0%;
            }
            100% {
              height: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RetroAuthFormPreview;
