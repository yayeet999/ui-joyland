
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
    <div 
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-950 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      onMouseMove={handleMouseMove}
    >
      {/* Neon grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#000_1px),_linear-gradient(90deg,_transparent_1px,_#000_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-transparent"></div>
        </div>
      </div>

      {/* Animated neon lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-[2px] animate-neon-scan"
            style={{
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(90deg, transparent, #0ff, transparent)',
              animationDelay: `${i * -3}s`
            }}
          ></div>
        ))}
      </div>

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
          className={`relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 bg-black/20`}
          style={{
            '--x': `${mousePosition.x * 100}%`,
            '--y': `${mousePosition.y * 100}%`,
          } as React.CSSProperties}
        >
          {/* Neon border */}
          <div className="absolute inset-0 rounded-2xl neon-border"></div>
          
          {/* Content */}
          <div className="relative p-8">
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-white neon-text">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-[#0ff]/70">
                {isSignUp ? 'Join the digital frontier' : 'Access your account'}
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
                  className="w-full px-4 py-3 rounded-lg border bg-black/30 text-white placeholder-[#0ff]/30 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-[#0ff]/40 border-[#0ff]/20 focus:border-[#0ff]/50"
                  placeholder="name@example.com"
                  required
                />
                <div className={`absolute bottom-0 left-0 h-[2px] bg-[#0ff] transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
              </div>
              
              <div className="relative group">
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg border bg-black/30 text-white placeholder-[#0ff]/30 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-[#0ff]/40 border-[#0ff]/20 focus:border-[#0ff]/50"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#0ff]/70 hover:text-[#0ff] transition-colors"
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
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-[#0ff] transition-all duration-300 ${focusedField === 'password' ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || formSubmitted}
                className="relative w-full overflow-hidden rounded-lg bg-[#0ff]/20 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#0ff]/30 focus:outline-none focus:ring-2 focus:ring-[#0ff]/50 disabled:cursor-not-allowed disabled:opacity-50 group"
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
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-[#0ff]/10 to-transparent transition-transform duration-500"></div>
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#0ff]/70 hover:text-[#0ff] transition-colors relative group"
              >
                <span>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</span>
                <span className="block text-white font-medium mt-1 group-hover:scale-105 transition-transform">
                  {isSignUp ? 'Sign in' : 'Create an account'}
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#0ff]/40 transition-all duration-300 group-hover:w-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .neon-border {
          box-shadow: 0 0 5px #0ff,
                      inset 0 0 5px #0ff;
          animation: neon-pulse 2s ease-in-out infinite;
        }

        .neon-text {
          text-shadow: 0 0 10px #0ff,
                       0 0 20px #0ff,
                       0 0 30px #0ff;
        }

        @keyframes neon-pulse {
          0%, 100% {
            box-shadow: 0 0 5px #0ff,
                        inset 0 0 5px #0ff;
          }
          50% {
            box-shadow: 0 0 20px #0ff,
                        inset 0 0 10px #0ff;
          }
        }

        @keyframes neon-scan {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-neon-scan {
          animation: neon-scan 3s linear infinite;
        }

        .animate-loader {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid rgba(0, 255, 255, 0.2);
          border-top-color: #0ff;
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
          stroke: #0ff;
          fill: none;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }

        .checkmark {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: block;
          stroke-width: 2;
          stroke: #0ff;
          stroke-miterlimit: 10;
          margin: 10% auto;
          box-shadow: 0 0 20px #0ff;
          animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
        }

        .checkmark__check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
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
            box-shadow: 0 0 20px #0ff;
          }
        }
        `}
      </style>
    </div>
  );
};

export default NeonAuthFormPreview; 
