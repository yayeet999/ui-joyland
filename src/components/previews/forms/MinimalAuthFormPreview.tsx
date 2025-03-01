
import React, { useState, useEffect } from 'react';

const MinimalAuthFormPreview = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Show animation
    setTimeout(() => {
      setFormSubmitted(true);
      
      // Reset form after animation completes
      setTimeout(() => {
        setIsLoading(false);
        setFormSubmitted(false);
        setEmail('');
        setPassword('');
      }, 1500);
    }, 700);
  };

  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 to-black transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Simple background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjgtMTMuNDMyIDMwLTMwIDMwUzAgNDYuNTY4IDAgMzAgMTMuNDMyIDAgMzAgMHMzMCAxMy40MzIgMzAgMzB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMjIiIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Container */}
      <div className="relative w-full max-w-md z-10">
        {/* Success animation overlay */}
        {formSubmitted && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-90 rounded-xl overflow-hidden success-animation">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
        )}
        
        {/* Card with animated border */}
        <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl p-6">
          {/* Animated gradient border */}
          <div className="animate-border absolute inset-0 rounded-xl z-[-1]"></div>
          
          {/* Form header with typing animation */}
          <div className="text-center mb-6">
            <h1 className="text-white text-2xl font-bold tracking-tight typing-animation">
              {isSignUp ? 'Create your account' : 'Welcome back'}
            </h1>
            <p className="text-gray-400 text-sm mt-1 fade-in-animation">
              {isSignUp ? 'Join thousands of users today' : 'We\'re glad to see you again'}
            </p>
          </div>
          
          {/* Social login options with hover animations */}
          <div className="flex space-x-3 mb-5">
            <button className="w-1/2 bg-white text-black rounded-lg py-2.5 font-medium text-sm flex items-center justify-center transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg active:scale-95">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google</span>
            </button>
            <button className="w-1/2 bg-white text-black rounded-lg py-2.5 font-medium text-sm flex items-center justify-center transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg active:scale-95">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
              </svg>
              <span>Apple</span>
            </button>
          </div>
          
          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gray-900 text-sm text-gray-400">
                or continue with email
              </span>
            </div>
          </div>
          
          {/* Form with animated inputs */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <label htmlFor="email" className={`block text-sm font-medium transition-all duration-200 ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-400'} mb-1`}>
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-2.5 border bg-gray-900 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500 border-gray-700 group-hover:border-gray-500"
                  placeholder="name@example.com"
                  required
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className={`block text-sm font-medium transition-all duration-200 ${focusedField === 'password' ? 'text-blue-400' : 'text-gray-400'}`}>
                  Password
                </label>
                {!isSignUp && (
                  <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-2.5 border bg-gray-900 text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500 border-gray-700 group-hover:border-gray-500"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-300 transition-colors"
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
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${focusedField === 'password' ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
            
            <div className="pt-3">
              <button
                type="submit"
                disabled={isLoading || formSubmitted}
                className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-2.5 rounded-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transform hover:translate-y-[-2px] active:translate-y-[1px]"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-loader"></div>
                  </div>
                ) : (
                  <span className="relative">
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </span>
                )}
              </button>
            </div>
          </form>
          
          {/* Mode toggle with animation */}
          <div className="mt-5 text-center text-sm text-gray-400">
            {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="relative text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              <span>{isSignUp ? 'Sign in instead' : 'Create an account'}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
        </div>
        
        {/* Privacy text */}
        <p className="text-xs text-gray-500 text-center mt-5">
          By continuing, you agree to our <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Terms of Service</a> and <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>.
        </p>
      </div>
      
      <style>
        {`
        /* Gradient border animation */
        .animate-border {
          content: '';
          background: linear-gradient(90deg, #4f46e5, #2563eb, #3b82f6, #8b5cf6, #4f46e5);
          position: absolute;
          background-size: 400% 400%;
          animation: gradient-border 6s ease infinite;
          opacity: 0.3;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          top: -2px;
          left: -2px;
        }
        
        @keyframes gradient-border {
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
        
        /* Typing animation */
        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 1.5s steps(20, end);
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        /* Fade in animation */
        .fade-in-animation {
          animation: fadeIn 1s ease forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        /* Loader animation */
        .animate-loader {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top-color: white;
          animation: loader 1s infinite linear;
        }
        
        @keyframes loader {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        /* Success Animation */
        .success-animation {
          animation: scaleIn 0.3s ease-out;
        }
        
        @keyframes scaleIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: #4ade80;
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
          box-shadow: inset 0px 0px 0px #4ade80;
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
            box-shadow: inset 0px 0px 0px 30px #4ade80;
          }
        }
        `}
      </style>
    </div>
  );
};

export default MinimalAuthFormPreview; 
