import { ComponentItem } from "@/types/components";

// Data for form components
export const forms: ComponentItem[] = [
  { 
    id: 1, 
    name: "Auth with Google Form",
    description: "A modern authentication form with Google sign-in and email/password options",
    category: "forms",
    type: "auth",
    code: `import React, { useState } from 'react';

const ModernAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Reset form after "successful" submission
      setEmail('');
      setPassword('');
      setName('');
    }, 1500);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    // Reset form when switching modes
    setEmail('');
    setPassword('');
    setName('');
  };
  
  return (
    <div className="flex min-h-full w-full items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-gray-800 p-8 shadow-2xl transition-all duration-300 hover:shadow-[0_0_80px_rgba(59,130,246,0.1)]">
        {/* Background decoration */}
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-50 blur-xl"></div>
        
        {/* Content overlay with glassmorphism */}
        <div className="relative z-10 backdrop-blur-sm">
          {/* Header section */}
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-400">
              {isSignUp 
                ? 'Sign up to get started with our platform' 
                : 'Sign in to continue to your account'}
            </p>
          </div>

          {/* Google login button */}
          <div className="mb-6">
            <button 
              type="button"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg border border-gray-600 bg-gray-700 bg-opacity-50 py-3 px-4 text-white transition-all duration-300 hover:bg-gray-600 hover:shadow-lg active:scale-[0.98]"
              onClick={() => setIsLoading(true)}
            >
              {/* Button hover effect */}
              <span className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              
              {/* Google icon with animation */}
              <span className="flex h-6 w-6 items-center justify-center transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </span>
              
              <span className="font-medium">Continue with Google</span>
              
              {/* Ripple effect on click */}
              <span className="ripple-effect absolute -z-10 h-full w-full"></span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-800 px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field - only shown for signup */}
            {isSignUp && (
              <div className="group relative">
                <label className="mb-1 block text-sm font-medium text-gray-300">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="focus:ring-primary-500 block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1"
                    placeholder="John Doe"
                    required={isSignUp}
                  />
                </div>
                <div className="mt-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-focus-within:w-full group-hover:w-1/3"></div>
              </div>
            )}

            {/* Email field */}
            <div className="group relative">
              <label className="mb-1 block text-sm font-medium text-gray-300">Email Address</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-primary-500 block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mt-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
            </div>

            {/* Password field */}
            <div className="group relative">
              <label className="mb-1 block text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                </span>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:ring-primary-500 block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 pl-10 pr-10 text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 transition-all duration-300 hover:text-white active:scale-90"
                >
                  {passwordVisible ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="mt-0.5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
            </div>

            {/* Forgot password link - only shown for signin */}
            {!isSignUp && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-400 transition-all duration-300 hover:text-blue-300 hover:brightness-125 active:translate-y-0.5">Forgot Password?</a>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative mt-2 w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-center font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative z-10 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
                {isLoading ? (
                  <svg className="mx-auto h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                )}
              </span>
              
              {/* Button background animation */}
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              
              {/* Shine effect */}
              <span className="absolute top-0 left-0 h-full w-8 -translate-x-10 rotate-12 transform bg-white opacity-0 blur-[10px] transition-all duration-1000 group-hover:translate-x-[400px] group-hover:opacity-30"></span>
            </button>
          </form>

          {/* Mode toggle */}
          <div className="mt-6 text-center text-sm text-gray-400">
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

export default ModernAuthForm;`
  },
  { 
    id: 2, 
    name: "Retro-game Auth Form", 
    description: "A cyberpunk-inspired authentication form with retro game aesthetics",
    category: "forms",
    type: "auth",
    code: `import React, { useState, useEffect } from 'react';

const RetroAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Calculate form completion score
  useEffect(() => {
    let score = 0;
    if (email) score += 25;
    if (password) score += 25;
    if (username && isSignUp) score += 25;
    if (password.length >= 8) score += 25;
    else if (password.length > 0) score += 10;
    
    // Update XP based on form activities
    if (score > 50 && xp < 50) setXp(50);
    else if (score > 75 && xp < 75) setXp(75);
  }, [email, password, username, isSignUp, xp]);

  // Level up when XP reaches certain thresholds
  useEffect(() => {
    if (xp >= 75 && currentLevel === 1) {
      setCurrentLevel(2);
      triggerGlitch();
    }
  }, [xp, currentLevel]);

  const triggerGlitch = () => {
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    triggerGlitch();
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setXp(100);
      setCurrentLevel(3);
    }, 1500);
  };

  const handleAuthProvider = (provider) => {
    setIsLoading(true);
    triggerGlitch();
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setXp(100);
      setCurrentLevel(3);
    }, 1500);
  };

  return (
    <div className={\`retro-bg min-h-screen flex items-center justify-center p-6 overflow-hidden \${glitchEffect ? 'glitch-bg' : ''}\`}>
      {/* Animated grid background */}
      <div className="grid-overlay absolute inset-0 z-0"></div>
      
      {/* Game-inspired container */}
      <div className={\`retro-container relative w-full max-w-md rounded-lg border-4 border-neon-pink shadow-neon overflow-hidden z-10 \${glitchEffect ? 'glitch' : ''}\`}>
        {/* Header with game UI elements */}
        <div className="retro-header p-6 text-center relative">
          <div className="scanline"></div>
          <h2 className="text-3xl font-bold text-neon-blue mb-2 retro-text tracking-wide">
            {isSignUp ? 'NEW PLAYER' : 'PLAYER LOGIN'}
          </h2>
          <p className="retro-subtext text-cyan-400 mb-4">LEVEL {currentLevel} ACCESS</p>
          
          {/* XP progress bar */}
          <div className="w-full bg-gray-800 h-6 rounded-full mb-4 relative overflow-hidden border-2 border-cyan-800">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 pixel-corners transition-all duration-500 ease-in-out" 
              style={{ width: \`\${xp}%\` }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full scanline-thin"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="text-sm font-mono text-white z-10 font-bold tracking-wider text-shadow">
                XP: {xp}/100
              </div>
            </div>
          </div>
          
          {/* Form status */}
          <div className="flex items-center justify-between px-2">
            <div className="text-xs font-mono text-green-400">SYSTEM.READY</div>
            <div className="text-xs font-mono text-green-400 blink">{isLoading ? 'PROCESSING...' : 'AWAITING INPUT'}</div>
          </div>
        </div>
        
        {/* Main form section */}
        <div className="p-6 relative">
          <div className="mb-6 relative">
            {/* Social auth options */}
            <div className="grid grid-cols-3 gap-3 mb-6 mt-6">
              <button 
                type="button"
                onClick={() => handleAuthProvider('google')}
                className="retro-button bg-blue-950 hover:bg-blue-900 text-white py-2 px-3 rounded-md border-b-4 border-blue-700 hover:border-blue-600 active:border-b-0 active:border-t-4 transition-all duration-150"
              >
                <div className="flex justify-center items-center">
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </button>
              
              <button 
                type="button"
                onClick={() => handleAuthProvider('x')}
                className="retro-button bg-gray-950 hover:bg-gray-900 text-white py-2 px-3 rounded-md border-b-4 border-gray-700 hover:border-gray-600 active:border-b-0 active:border-t-4 transition-all duration-150"
              >
                <div className="flex justify-center items-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </button>
              
              <button 
                type="button"
                onClick={() => handleAuthProvider('github')}
                className="retro-button bg-purple-950 hover:bg-purple-900 text-white py-2 px-3 rounded-md border-b-4 border-purple-700 hover:border-purple-600 active:border-b-0 active:border-t-4 transition-all duration-150"
              >
                <div className="flex justify-center items-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          
          {/* Form divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-cyan-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-950 px-4 text-xs text-cyan-400 font-mono">OR MANUAL LOGIN</span>
            </div>
          </div>
          
          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="retro-input-group">
                <label className="text-sm text-cyan-400 font-mono mb-1 block">USERNAME</label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="retro-input w-full bg-blue-950 border-2 border-cyan-800 text-white px-4 py-2 rounded-md focus:border-neon-pink focus:outline-none placeholder-cyan-700"
                    placeholder="Enter your username"
                    required={isSignUp}
                  />
                  <div className="absolute right-2 top-2 h-4 w-4">
                    {username && <div className="h-full w-full bg-green-500 rounded-full pulse-success"></div>}
                  </div>
                </div>
              </div>
            )}
            
            <div className="retro-input-group">
              <label className="text-sm text-cyan-400 font-mono mb-1 block">EMAIL</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="retro-input w-full bg-blue-950 border-2 border-cyan-800 text-white px-4 py-2 rounded-md focus:border-neon-pink focus:outline-none placeholder-cyan-700"
                  placeholder="Enter your email"
                  required
                />
                <div className="absolute right-2 top-2 h-4 w-4">
                  {email && <div className="h-full w-full bg-green-500 rounded-full pulse-success"></div>}
                </div>
              </div>
            </div>
            
            <div className="retro-input-group">
              <div className="flex justify-between mb-1">
                <label className="text-sm text-cyan-400 font-mono">PASSWORD</label>
                {!isSignUp && (
                  <a href="#" className="text-xs text-pink-400 hover:text-pink-300">FORGOT?</a>
                )}
              </div>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="retro-input w-full bg-blue-950 border-2 border-cyan-800 text-white px-4 py-2 rounded-md focus:border-neon-pink focus:outline-none placeholder-cyan-700 pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-2.5 text-cyan-500 hover:text-cyan-400 active:scale-90 transition-all duration-150"
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
                <div className="absolute right-12 top-2 h-4 w-4">
                  {password && <div className="h-full w-full bg-green-500 rounded-full pulse-success"></div>}
                </div>
              </div>
              {password && (
                <div className="mt-1">
                  <div className="text-xs text-cyan-500 font-mono">SECURITY LEVEL:</div>
                  <div className="w-full bg-gray-800 h-1 mt-1 rounded-full">
                    <div 
                      className={\`h-full transition-all duration-300 \${
                        password.length > 8 ? 'bg-green-500 w-full' : 
                        password.length > 5 ? 'bg-yellow-500 w-2/3' : 
                        'bg-red-500 w-1/3'
                      }\`}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="retro-submit-button w-full py-3 text-center text-white font-bold relative overflow-hidden transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="retro-btn-bg absolute inset-0 z-0"></div>
                <span className="relative z-10 tracking-wider text-lg">
                  {isLoading ? (
                    <span className="loading-text">PROCESSING...</span>
                  ) : (
                    <span>{isSignUp ? 'CREATE ACCOUNT' : 'ACCESS SYSTEM'}</span>
                  )}
                </span>
              </button>
            </div>
          </form>
          
          {/* Mode toggle */}
          <div className="mt-6 text-center text-sm text-cyan-400 font-mono">
            {isSignUp ? "ALREADY REGISTERED? " : "NEW USER? "}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                triggerGlitch();
              }}
              className="text-neon-pink hover:text-pink-400 font-bold transition-colors duration-200"
            >
              {isSignUp ? 'LOGIN' : 'SIGN UP'}
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for retro styling */}
      <style jsx>{\`
        :root {
          --neon-pink: #FF00FF;
          --neon-blue: #00FFFF;
          --bg-dark: #000235;
        }
        
        .retro-bg {
          background-color: var(--bg-dark);
          background-image: radial-gradient(circle at 2% 50%, rgba(0, 255, 255, 0.2) 0%, transparent 100%), 
                           radial-gradient(circle at 98% 50%, rgba(255, 0, 255, 0.2) 0%, transparent 100%);
        }
        
        .grid-overlay {
          background-image: 
            linear-gradient(rgba(5, 30, 100, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(5, 30, 100, 0.5) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-movement 20s linear infinite;
        }
        
        @keyframes grid-movement {
          0% {
            background-position: 0px 0px;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        
        .retro-container {
          background-color: rgba(0, 10, 40, 0.9);
          box-shadow: 
            0 0 10px rgba(0, 255, 255, 0.5),
            0 0 20px rgba(0, 255, 255, 0.3),
            0 0 30px rgba(0, 255, 255, 0.1);
        }
        
        .shadow-neon {
          box-shadow: 
            0 0 5px rgba(0, 255, 255, 0.5),
            0 0 10px rgba(0, 255, 255, 0.3),
            0 0 15px rgba(0, 255, 255, 0.1);
        }
        
        .border-neon-pink {
          border-color: var(--neon-pink);
        }
        
        .text-neon-blue {
          color: var(--neon-blue);
        }
        
        .text-neon-pink {
          color: var(--neon-pink);
        }
        
        .retro-text {
          text-shadow: 
            0 0 5px rgba(0, 255, 255, 0.7),
            0 0 10px rgba(0, 255, 255, 0.5);
        }
        
        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 255, 255, 0.03) 50%,
            transparent 100%
          );
          animation: scanline 4s linear infinite;
          pointer-events: none;
        }
        
        .scanline-thin {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          background-size: 100% 4px;
          animation: scanline 8s linear infinite;
        }
        
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        .blink {
          animation: blink 1.5s infinite;
        }
        
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
        
        .pixel-corners {
          clip-path: polygon(
            0 4px, 4px 4px, 4px 0,
            calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
            100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
            4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
          );
        }
        
        .retro-input {
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .retro-input:focus {
          box-shadow: 0 0 8px rgba(255, 0, 255, 0.6);
        }
        
        .retro-submit-button {
          background: transparent;
          border: 2px solid;
          border-image: linear-gradient(to right, #00FFFF, #FF00FF) 1;
        }
        
        .retro-btn-bg {
          background: linear-gradient(135deg, #FF00FF, #00FFFF);
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .retro-submit-button:hover .retro-btn-bg {
          opacity: 1;
          transform: scale(1.03);
        }
        
        .retro-submit-button:active .retro-btn-bg {
          transform: scale(0.97);
        }
        
        .pulse-success {
          animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }
        
        .glitch {
          animation: glitch 0.5s cubic-bezier(.25, .46, .45, .94) both;
        }
        
        .glitch-bg {
          animation: glitchBg 0.5s cubic-bezier(.25, .46, .45, .94) both;
        }
        
        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-5px, 5px);
          }
          40% {
            transform: translate(-5px, -5px);
          }
          60% {
            transform: translate(5px, 5px);
          }
          80% {
            transform: translate(5px, -5px);
          }
        }
        
        @keyframes glitchBg {
          0%, 100% {
            background-position: 0 0;
          }
          20% {
            background-position: -5px 5px;
          }
          40% {
            background-position: -5px -5px;
          }
          60% {
            background-position: 5px 5px;
          }
          80% {
            background-position: 5px -5px;
          }
        }
        
        .loading-text {
          display: inline-block;
          overflow: hidden;
          position: relative;
          animation: flickerText 2s linear infinite;
        }
        
        @keyframes flickerText {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            opacity: 1;
          }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            opacity: 0.33;
          }
        }
        
        .retro-button {
          position: relative;
        }
        
        .retro-button:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2));
          clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
          opacity: 0.3;
        }
      \`}</style>
    </div>
  );
};

export default RetroAuthForm;`
  },
  { 
    id: 3, 
    name: "Minimal Auth Form",
    description: "A clean and minimal authentication form with dark mode support",
    category: "forms",
    type: "auth",
    code: `import React, { useState, useEffect } from 'react';

const RefinedAuthForm = () => {
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
    <div className={\`relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 to-black transition-all duration-700 \${mounted ? 'opacity-100' : 'opacity-0'}\`}>
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
        <div className="relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl bg-black/20">
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
                  className="w-full px-4 py-3 rounded-lg border bg-black/30 text-white placeholder-[#0ff]/30 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-[#0ff]/40 border-[#0ff]/20 focus:border-[#0ff]/50"
                  placeholder="name@example.com"
                  required
                />
              </div>
              
              <div className="relative group">
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
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

      <style jsx>{\`
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
      \`}</style>
    </div>
  );
};

export default RefinedAuthForm;`
  },
  { 
    id: 4, 
    name: "Glass Auth Form",
    description: "A modern glassmorphism authentication form with gradient background",
    category: "forms",
    type: "auth",
    code: `import React, { useState } from 'react';

const GlassAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div className="flex min-h-full w-full items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 p-8 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-50"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white neon-text">
              {isSignUp ? 'Join Us' : 'Welcome'}
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
                className="w-full px-4 py-3 rounded-lg border bg-black/30 text-white placeholder-[#0ff]/30 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-[#0ff]/40 border-[#0ff]/20 focus:border-[#0ff]/50"
                placeholder="name@example.com"
                required
              />
            </div>
            
            <div className="relative group">
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
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
            </div>
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
  );
};

export default GlassAuthForm;`
  },
  { 
    id: 5, 
    name: "Subscription Form", 
    description: "A subscription form for newsletters",
    category: "forms",
    type: "misc",
    code: `<div>Subscription Form Code Here</div>`
  },
  { 
    id: 6, 
    name: "Inline Editing Form", 
    description: "An inline editing form for quick updates",
    category: "forms",
    type: "misc",
    code: `<div>Inline Editing Form Code Here</div>`
  },
  { 
    id: 7, 
    name: "Neon Auth Form",
    description: "A cyberpunk-inspired authentication form with neon effects",
    category: "forms",
    type: "auth",
    code: `import React, { useState } from 'react';

const NeonAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }, 1500);
  };

  return (
    <div className="flex min-h-full w-full items-center justify-center bg-gray-950 p-4">
      {/* Neon grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#000_1px),_linear-gradient(90deg,_transparent_1px,_#000_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-transparent"></div>
        </div>
      </div>

      {/* Container */}
      <div className="relative w-full max-w-md z-10">
        {/* Glass card */}
        <div className="relative backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl bg-black/20">
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
                  className="w-full px-4 py-3 rounded-lg border bg-black/30 text-white placeholder-[#0ff]/30 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-[#0ff]/40 border-[#0ff]/20 focus:border-[#0ff]/50"
                  placeholder="name@example.com"
                  required
                />
              </div>
              
              <div className="relative group">
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border bg-black/30 text-white placeholder-[#0ff]/30 backdrop-blur-sm transition-all duration-300 focus:outline-none group-hover:border-[#0ff]/40 border-[#0ff]/20 focus:border-[#0ff]/50"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-3 top-2.5 text-cyan-500 hover:text-cyan-400 active:scale-90 transition-all duration-150"
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
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
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
    </div>
  );
};

export default NeonAuthForm;`
  },
  {
    id: 8,
    name: "Stepped Auth Form",
    description: "A modern stepped authentication form with social login options",
    category: "forms",
    type: "auth",
    code: `import React, { useState } from 'react';

const SteppedAuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = (e) => {
    e.preventDefault();

    if (!isSignUp && !showPassword && email) {
      // First step of sign in - show password field
      setShowPassword(true);
      return;
    }

    // Process actual submission
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Reset form after "successful" submission
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
    <div className="auth-form-wrapper">
      <form onSubmit={handleContinue} className="form">
        <p className="welcome-text">
          {isSignUp ? 'Create Account' : 'Welcome,'}
          <span>{isSignUp ? 'join to get started' : 'sign in to continue'}</span>
        </p>

        <button type="button" className="oauthButton">
          <svg className="icon google-icon" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          Continue with Google
        </button>

        <button type="button" className="oauthButton">
          <svg className="icon github-icon" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.495.997.107-.775.418-1.305.76-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.135-.303-.535-1.524.117-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.047.138 3 .405 2.28-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.118 3.176.765.84 1.235 1.91 1.235 3.22 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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

        <button
          type="submit"
          disabled={isLoading}
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

      <style jsx>{\`
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
      \`}</style>
    </div>
  );
};

export default SteppedAuthForm;`
  },
];
