import React, { useState } from 'react';

const AuthWithGoogleFormPreview = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      setPassword('');
      setName('');
    }, 1500);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setName('');
  };
  
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-gray-800 p-6 md:p-8 shadow-2xl transition-all duration-300 hover:shadow-[0_0_80px_rgba(59,130,246,0.1)]">
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-xl"></div>
        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-50 blur-xl"></div>
        
        <div className="relative z-10 backdrop-blur-sm">
          <div className="mb-4 text-center">
            <h2 className="mb-1 text-2xl md:text-3xl font-bold text-white">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              {isSignUp 
                ? 'Sign up to get started' 
                : 'Sign in to continue'}
            </p>
          </div>

          <div className="mb-4">
            <button 
              type="button"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-2 px-3 md:py-3 md:px-4 text-sm md:text-base text-white transition-all duration-300 hover:bg-gray-600 hover:shadow-lg active:scale-[0.98]"
              onClick={() => setIsLoading(true)}
            >
              <span className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="flex h-5 w-5 md:h-6 md:w-6 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <svg className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </span>
              <span className="text-sm md:text-base font-medium">Continue with Google</span>
            </button>
          </div>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-xs md:text-sm">
              <span className="bg-gray-800 px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            {isSignUp && (
              <div className="group relative">
                <label className="mb-1 block text-xs font-medium text-gray-300">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2 pl-8 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1"
                    placeholder="John Doe"
                    required={isSignUp}
                  />
                </div>
                <div className="mt-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-focus-within:w-full group-hover:w-1/3"></div>
              </div>
            )}

            <div className="group relative">
              <label className="mb-1 block text-xs font-medium text-gray-300">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2 pl-8 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mt-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
            </div>

            <div className="group relative">
              <label className="mb-1 block text-xs font-medium text-gray-300">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                </span>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2 pl-8 pr-8 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 transition-all duration-300 hover:text-white active:scale-90"
                >
                  {passwordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="mt-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
            </div>

            {!isSignUp && (
              <div className="flex justify-end">
                <a href="#" className="text-xs text-blue-400 transition-all duration-300 hover:text-blue-300 hover:brightness-125 active:translate-y-0.5">Forgot Password?</a>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="group relative mt-2 w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-2 md:px-4 md:py-3 text-center text-sm md:text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative z-10 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
                {isLoading ? (
                  <svg className="mx-auto h-4 w-4 md:h-5 md:w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                )}
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 h-full w-8 -translate-x-10 rotate-12 transform bg-white opacity-0 blur-[10px] transition-all duration-1000 group-hover:translate-x-[200px] group-hover:opacity-30"></span>
            </button>
          </form>

          <div className="mt-4 text-center text-xs md:text-sm text-gray-400">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              onClick={toggleMode}
              className="relative font-medium text-blue-400 transition-all duration-300 hover:text-blue-300 active:top-0.5"
            >
              <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full">
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWithGoogleFormPreview;
