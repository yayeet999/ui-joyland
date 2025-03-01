import React, { useState, useEffect } from 'react';

const GlassAuthFormPreview = () => {
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
    
    // Initialize random gradient positions
    const gradients = document.querySelectorAll('.floating-gradient');
    gradients.forEach((gradient: HTMLElement) => {
      gradient.style.setProperty('--x', `${Math.random() * 100}%`);
      gradient.style.setProperty('--y', `${Math.random() * 100}%`);
    });
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
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isSignUp 
          ? 'bg-gradient-to-b from-[#0284c7] via-[#0ea5e9] to-[#4ade80]'
          : 'bg-gradient-to-br from-[#0ea5e9] via-[#2563eb] to-[#1e40af]'
      } ${mounted ? 'opacity-100' : 'opacity-0'}`}
      onMouseMove={handleMouseMove}
    >
      {/* Sky background with sun */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7dd3fc] via-[#38bdf8] to-[#0284c7] opacity-40"></div>
        
        {/* Sun */}
        <div className={`absolute transition-all duration-1000 ${
          isSignUp ? 'top-12 right-12' : 'top-32 right-32'
        }`}>
          <div className="relative animate-sun-glow">
            <div className="w-32 h-32 rounded-full bg-[#fbbf24] blur-xl"></div>
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b]"></div>
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-[#f59e0b] mix-blend-soft-light"></div>
          </div>
        </div>
      </div>

      {/* Grass field */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="grass-blade absolute bottom-0"
            style={{
              left: `${(i / 80) * 100}%`,
              height: `${30 + Math.random() * 40}px`,
              width: '4px',
              background: `linear-gradient(to top, ${
                isSignUp ? '#15803d' : '#166534'
              }, ${
                isSignUp ? '#22c55e' : '#15803d'
              })`,
              transformOrigin: 'bottom center',
              animation: `sway ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${-Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Floating particles (pollen/light specs) */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${-Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Animated background gradients - more subtle now */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`floating-gradient absolute w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-700 ${
          isSignUp ? 'bg-[#86efac]/10' : 'bg-[#60a5fa]/10'
        }`}></div>
        <div className={`floating-gradient absolute w-[400px] h-[400px] rounded-full blur-3xl transition-all duration-700 ${
          isSignUp ? 'bg-[#4ade80]/10' : 'bg-[#93c5fd]/10'
        }`} style={{ animationDelay: '-5s' }}></div>
      </div>

      {/* Nature elements (butterflies/flowers for sign-up, clouds for sign-in) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isSignUp ? 'opacity-100' : 'opacity-0'}`}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="butterfly absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `butterfly-float ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * -15}s`
            }}
          >
            <div className="w-2 h-2 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute -top-1 -left-2 w-2 h-2 bg-white/20 rounded-full blur-sm animate-wing"></div>
            <div className="absolute -top-1 left-2 w-2 h-2 bg-white/20 rounded-full blur-sm animate-wing"></div>
          </div>
        ))}
      </div>

      {/* Clouds (visible during sign-in mode) */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isSignUp ? 'opacity-0' : 'opacity-100'}`}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="cloud absolute bg-white/10 rounded-full"
            style={{
              width: `${100 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`
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
          className={`relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
            isSignUp ? 'bg-white/[0.12] shadow-lime-600/15' : 'bg-white/[0.12] shadow-blue-500/15'
          }`}
          style={{
            '--x': `${mousePosition.x * 100}%`,
            '--y': `${mousePosition.y * 100}%`,
          } as React.CSSProperties}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-tr pointer-events-none transition-all duration-700 ${
            isSignUp 
              ? 'from-white/[0.15] to-white/[0.08]' 
              : 'from-white/[0.15] to-white/[0.08]'
          }`}></div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 shine-effect"></div>
          
          {/* Content */}
          <div className={`relative p-8 transition-all duration-700 ${
            isSignUp ? 'bg-gradient-to-b from-transparent to-white/[0.05]' : 'bg-gradient-to-b from-transparent to-white/[0.05]'
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
                  className={`w-full px-4 py-3 rounded-lg border bg-white/15 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-white/40 ${
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
                    className={`w-full px-4 py-3 rounded-lg border bg-white/15 text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-white/40 ${
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

      <style jsx>{`
        .floating-gradient {
          animation: float 20s ease-in-out infinite;
          left: var(--x);
          top: var(--y);
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(10%, 10%) scale(1.1) rotate(5deg);
          }
          50% {
            transform: translate(-5%, 5%) scale(0.9) rotate(-5deg);
          }
          75% {
            transform: translate(5%, -10%) scale(1.05) rotate(3deg);
          }
        }

        .star {
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(0.7);
          }
        }

        .cloud {
          animation: float-cloud 30s linear infinite;
          backdrop-filter: blur(8px);
        }

        @keyframes float-cloud {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(1000%);
          }
        }

        @keyframes sun-glow {
          0%, 100% {
            filter: brightness(1) blur(20px);
          }
          50% {
            filter: brightness(1.2) blur(25px);
          }
        }

        .animate-sun-glow {
          animation: sun-glow 5s ease-in-out infinite;
        }

        .shine-effect {
          background: radial-gradient(
            800px circle at var(--x) var(--y),
            rgba(255, 255, 255, 0.1),
            transparent 40%
          );
        }

        .text-shadow-purple {
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
        }

        .text-shadow-blue {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .glow-text {
          transition: text-shadow 0.7s ease;
        }

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

        .leaf {
          animation: leaf-float 10s ease-in-out infinite;
          backdrop-filter: blur(2px);
        }

        @keyframes leaf-float {
          0%, 100% {
            transform: rotate(45deg) translate(0, 0) scale(1);
          }
          25% {
            transform: rotate(90deg) translate(20px, -10px) scale(1.1);
          }
          50% {
            transform: rotate(135deg) translate(0, 20px) scale(0.9);
          }
          75% {
            transform: rotate(180deg) translate(-20px, 10px) scale(1.05);
          }
        }

        @keyframes flower-petal-sway {
          0%, 100% {
            transform: rotate(var(--rotation)) scale(1);
          }
          50% {
            transform: rotate(calc(var(--rotation) + 5deg)) scale(1.1);
          }
        }

        @keyframes butterfly-float {
          0% {
            transform: translate(-10vw, 0) rotate(10deg);
          }
          25% {
            transform: translate(30vw, -20vh) rotate(-5deg);
          }
          50% {
            transform: translate(70vw, 0) rotate(10deg);
          }
          75% {
            transform: translate(110vw, 20vh) rotate(-5deg);
          }
          100% {
            transform: translate(150vw, 0) rotate(10deg);
          }
        }

        .animate-wing {
          animation: wing-flap 0.2s ease-in-out infinite alternate;
        }

        @keyframes wing-flap {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(1.5);
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() * 200 - 100}px, -100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .grass-blade {
          transform-origin: bottom center;
          border-radius: 50% 50% 0 0;
          filter: blur(0.5px);
        }

        .grass-blade::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent);
          border-radius: 50% 50% 0 0;
        }
      `}</style>
    </div>
  );
};

export default GlassAuthFormPreview;
