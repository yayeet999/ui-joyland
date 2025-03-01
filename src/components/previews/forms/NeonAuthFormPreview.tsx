import React, { useState, useEffect } from 'react';

const NeonAuthFormPreview = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

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
    <div>
      <div 
        className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          isSignUp 
            ? 'bg-gradient-to-b from-[#0284c7] via-[#0ea5e9] to-[#4ade80]'
            : 'bg-gradient-to-br from-[#0ea5e9] via-[#2563eb] to-[#1e40af]'
        } ${mounted ? 'opacity-100' : 'opacity-0'}`}
        onMouseMove={handleMouseMove}
      >
        {/* Container */}
        <div className="relative w-full max-w-md z-10 p-4">
          {/* Success animation overlay */}
          {formSubmitted && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden success-animation">
              <div className="relative">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
                <div className="checkmark-ripple"></div>
              </div>
            </div>
          )}
          
          {/* Glass card */}
          <div 
            className={`relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
              isSignUp ? 'bg-black/[0.8] shadow-lime-600/15' : 'bg-black/[0.8] shadow-blue-500/15'
            }`}
            style={{
              '--x': `${mousePosition.x * 100}%`,
              '--y': `${mousePosition.y * 100}%`,
            } as React.CSSProperties}
          >
            {/* Content */}
            <div className={`relative p-8 transition-all duration-700 ${
              isSignUp ? 'bg-gradient-to-b from-transparent to-black/[0.05]' : 'bg-gradient-to-b from-transparent to-black/[0.05]'
            }`}>
              <div className="text-center mb-8 space-y-2">
                <h2 className={`text-2xl font-bold text-white glow-text transition-all duration-700 ${
                  isSignUp ? 'text-shadow-purple' : 'text-shadow-blue'
                }`}>
                  {isSignUp ? 'Join Us' : 'Welcome'}
                </h2>
                <p className="text-white/70 text-balance">
                  {isSignUp ? 'Create your account' : 'Sign in to continue'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-lg border bg-black/15 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-white/40 ${
                      isSignUp 
                        ? 'border-white/25 focus:border-white/50' 
                        : 'border-white/20 focus:border-white/45'
                    }`}
                    placeholder="name@example.com"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                    isSignUp 
                      ? 'bg-gradient-to-r from-white/40 via-white/60 to-white/40' 
                      : 'bg-gradient-to-r from-white/30 via-white/50 to-white/30'
                    } ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                </div>
                
                <div className="relative group">
                  <div className="relative">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-lg border bg-black/15 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-white/40 ${
                        isSignUp 
                          ? 'border-white/25 focus:border-white/50' 
                          : 'border-white/20 focus:border-white/45'
                      }`}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/70 hover:text-white transition-colors"
                    >
                      {passwordVisible ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      )}
                    </button>
                    <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      isSignUp 
                        ? 'bg-gradient-to-r from-white/40 via-white/60 to-white/40' 
                      : 'bg-gradient-to-r from-white/30 via-white/50 to-white/30'
                    } ${focusedField === 'password' ? 'w-full' : 'w-0'}`}></div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || formSubmitted}
                  className={`relative w-full overflow-hidden rounded-lg py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 group ${
                    isSignUp 
                      ? 'bg-white/25 hover:bg-white/35 focus:ring-white/50' 
                      : 'bg-white/20 hover:bg-white/30 focus:ring-white/45'
                  }`}
                >
                  <div className="relative z-10">
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-loader"></div>
                      </div>
                    ) : (
                      <span>{isSignUp ? 'Create account' : 'Sign in'}</span>
                    )}
                  </div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500"></div>
                </button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-white/70 hover:text-white transition-colors relative group"
                >
                  <span>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</span>
                  <span className="block text-white font-medium mt-1 group-hover:scale-105 transition-transform text-base">
                    {isSignUp ? 'Sign in' : 'Create an account'}
                  </span>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isSignUp ? 'bg-white/40' : 'bg-white/35'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .animate-loader {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top-color: white;
          animation: loader 1s infinite linear;
        }

        @keyframes loader {
          to {
            transform: rotate(360deg);
          }
        }

        .success-animation {
          animation: scaleIn 0.3s ease-out;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #fff;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: block;
          stroke-width: 2;
          stroke: #fff;
          stroke-miterlimit: 10;
          margin: 10% auto;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
        }

        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }

        .checkmark-ripple {
          position: absolute;
          inset: -20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: ripple 1s cubic-bezier(0.65, 0, 0.45, 1) forwards;
          opacity: 0;
        }

        @keyframes ripple {
          from {
            transform: scale(0.8);
            opacity: 1;
          }
          to {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes scale {
          0%, 100% {
            transform: none;
          }
          50% {
            transform: scale3d(1.1, 1.1, 1);
          }
        }

        @keyframes fill {
          100% {
            box-shadow: inset 0px 0px 0px 30px transparent;
          }
        }
        `}
      </style>
    </div>
  );
};

export default NeonAuthFormPreview;
