import React, { useState, useEffect } from 'react';
const RetroAuthFormPreview = () => {
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
    if (password.length >= 8) score += 25;else if (password.length > 0) score += 10;

    // Update XP based on form activities
    if (score > 50 && xp < 50) setXp(50);else if (score > 75 && xp < 75) setXp(75);
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
  const handleSubmit = (e: React.FormEvent) => {
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
  const handleAuthProvider = (provider: string) => {
    setIsLoading(true);
    triggerGlitch();

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setXp(100);
      setCurrentLevel(3);
    }, 1500);
  };
  return <div className="retro-bg h-full flex items-center justify-center p-0 overflow-hidden relative">
      {/* Animated grid background */}
      <div className="grid-overlay absolute inset-0 z-0"></div>
      
      {/* Game-inspired container */}
      <div className="retro-container relative w-full border-4 border-[#FF00FF] shadow-[0_0_10px_rgba(0,255,255,0.5),0_0_20px_rgba(0,255,255,0.3),0_0_30px_rgba(0,255,255,0.1)] overflow-hidden z-10 rounded-3xl px-[40px] py-[28px]">
        {/* Header with game UI elements */}
        <div className="retro-header p-3 text-center relative py-[14px]">
          <div className="scanline absolute top-0 left-0 w-full h-full"></div>
          <h2 className="text-xl font-bold text-[#00FFFF] mb-1 tracking-wide" style={{
          textShadow: '0 0 5px rgba(0,255,255,0.7), 0 0 10px rgba(0,255,255,0.5)'
        }}>
            {isSignUp ? 'NEW PLAYER' : 'PLAYER LOGIN'}
          </h2>
          <p className="text-cyan-400 mb-2 text-sm">LEVEL {currentLevel} ACCESS</p>
          
          {/* XP progress bar */}
          <div className="w-full bg-gray-800 h-4 rounded-full mb-2 relative overflow-hidden border-2 border-cyan-800">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500 ease-in-out" style={{
            width: `${xp}%`,
            clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))'
          }}></div>
            <div className="absolute top-0 left-0 w-full h-full" style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            backgroundSize: '100% 4px',
            animation: 'scanline 8s linear infinite'
          }}></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center py-px my-0">
              <div className="text-xs font-mono text-white z-10 font-bold tracking-wider" style={{
              textShadow: '0 0 2px #000'
            }}>
                XP: {xp}/100
              </div>
            </div>
          </div>
          
          {/* Form status */}
          <div className="flex items-center justify-between px-2 text-[10px]">
            <div className="font-mono text-green-400">SYSTEM.READY</div>
            <div className="font-mono text-green-400" style={{
            animation: 'blink 1.5s infinite'
          }}>{isLoading ? 'PROCESSING...' : 'AWAITING INPUT'}</div>
          </div>
        </div>
        
        {/* Main form section */}
        <div className="p-3 relative py-[18px] px-[31px]">
          {/* Social auth options */}
          <div className="grid grid-cols-3 gap-2 mb-3 py-0">
            <button type="button" onClick={() => handleAuthProvider('google')} className="bg-blue-950 hover:bg-blue-900 text-white px-2 rounded-md border-b-4 border-blue-700 hover:border-blue-600 active:border-b-0 active:border-t-4 transition-all duration-150 relative py-[11px]">
              <div className="flex justify-center items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-full" style={{
              content: '',
              background: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.2))',
              clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
              opacity: 0.3
            }}></div>
            </button>
              
            <button type="button" onClick={() => handleAuthProvider('x')} className="bg-gray-950 hover:bg-gray-900 text-white px-2 rounded-md border-b-4 border-gray-700 hover:border-gray-600 active:border-b-0 active:border-t-4 transition-all duration-150 relative py-[11px]">
              <div className="flex justify-center items-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-full" style={{
              content: '',
              background: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.2))',
              clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
              opacity: 0.3
            }}></div>
            </button>
              
            <button type="button" onClick={() => handleAuthProvider('github')} className="bg-purple-950 hover:bg-purple-900 text-white px-2 rounded-md border-b-4 border-purple-700 hover:border-purple-600 active:border-b-0 active:border-t-4 transition-all duration-150 relative py-[11px]">
              <div className="flex justify-center items-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 py-0">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-full" style={{
              content: '',
              background: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.2))',
              clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
              opacity: 0.3
            }}></div>
            </button>
          </div>
          
          {/* Form divider */}
          <div className="relative mb-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-cyan-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-950 px-2 text-[10px] text-cyan-400 font-mono">OR MANUAL LOGIN</span>
            </div>
          </div>
          
          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-2">
            {isSignUp && <div>
                <label className="text-xs text-cyan-400 font-mono mb-0.5 block">USERNAME</label>
                <div className="relative">
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full bg-blue-950 border-2 border-cyan-800 text-white px-2 py-1 text-sm rounded-md focus:outline-none focus:border-[#FF00FF] placeholder-cyan-700" style={{
                textShadow: '0 0 5px rgba(0,255,255,0.3)'
              }} placeholder="Enter username" required={isSignUp} />
                  <div className="absolute right-2 top-1.5 h-2 w-2">
                    {username && <div className="h-full w-full bg-green-500 rounded-full" style={{
                  animation: 'pulse 1.5s infinite'
                }}></div>}
                  </div>
                </div>
              </div>}
            
            <div>
              <label className="text-xs text-cyan-400 font-mono mb-0.5 block">EMAIL</label>
              <div className="relative">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-blue-950 border-2 border-cyan-800 text-white px-2 py-1 text-sm rounded-md focus:outline-none focus:border-[#FF00FF] placeholder-cyan-700" style={{
                textShadow: '0 0 5px rgba(0,255,255,0.3)'
              }} placeholder="Enter email" required />
                <div className="absolute right-2 top-1.5 h-2 w-2">
                  {email && <div className="h-full w-full bg-green-500 rounded-full" style={{
                  animation: 'pulse 1.5s infinite'
                }}></div>}
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-0.5">
                <label className="text-xs text-cyan-400 font-mono">PASSWORD</label>
                {!isSignUp && <a href="#" className="text-[10px] text-pink-400 hover:text-pink-300">FORGOT?</a>}
              </div>
              <div className="relative">
                <input type={passwordVisible ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-blue-950 border-2 border-cyan-800 text-white px-2 py-1 text-sm rounded-md focus:outline-none focus:border-[#FF00FF] placeholder-cyan-700 pr-8" style={{
                textShadow: '0 0 5px rgba(0,255,255,0.3)'
              }} placeholder="Enter password" required />
                <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-2 top-1.5 text-cyan-500 hover:text-cyan-400 active:scale-90 transition-all duration-150">
                  {passwordVisible ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>}
                </button>
                <div className="absolute right-8 top-1.5 h-2 w-2">
                  {password && <div className="h-full w-full bg-green-500 rounded-full" style={{
                  animation: 'pulse 1.5s infinite'
                }}></div>}
                </div>
              </div>
              {password && <div className="mt-1">
                  <div className="text-[10px] text-cyan-500 font-mono">SECURITY LEVEL:</div>
                  <div className="w-full bg-gray-800 h-1 mt-0.5 rounded-full">
                    <div className={`h-full transition-all duration-300 ${password.length > 8 ? 'bg-green-500 w-full' : password.length > 5 ? 'bg-yellow-500 w-2/3' : 'bg-red-500 w-1/3'}`}></div>
                  </div>
                </div>}
            </div>
            
            <div className="pt-2">
              <button type="submit" disabled={isLoading} style={{
              borderImage: 'linear-gradient(to right, #00FFFF, #FF00FF) 1'
            }} className="w-full py-2 text-center text-white text-sm font-bold relative overflow-hidden transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed border-2 rounded-3xl">
                <div style={{
                background: 'linear-gradient(135deg, #FF00FF, #00FFFF)',
                opacity: 0.8,
                transition: 'all 0.3s ease'
              }} className="absolute inset-0 z-0 rounded-3xl"></div>
                <span className="relative z-10 tracking-wider">
                  {isLoading ? <span style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  position: 'relative',
                  animation: 'flickerText 2s linear infinite'
                }}>PROCESSING...</span> : <span>{isSignUp ? 'CREATE ACCOUNT' : 'ACCESS SYSTEM'}</span>}
                </span>
              </button>
            </div>
          </form>
          
          {/* Mode toggle */}
          <div className="mt-3 text-center text-xs text-cyan-400 font-mono">
            {isSignUp ? "ALREADY REGISTERED? " : "NEW USER? "}
            <button onClick={() => {
            setIsSignUp(!isSignUp);
            triggerGlitch();
          }} className="text-[#FF00FF] hover:text-pink-400 font-bold transition-colors duration-200">
              {isSignUp ? 'LOGIN' : 'SIGN UP'}
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS keyframe animations */}
      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 3px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        
        @keyframes flickerText {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.33; }
        }
        
        @keyframes grid-movement {
          0% { background-position: 0px 0px; }
          100% { background-position: 20px 20px; }
        }
      `}</style>
      
      {/* Background and general styling */}
      <style jsx>{`
        .retro-bg {
          background-color: #000235;
          background-image: radial-gradient(circle at 2% 50%, rgba(0, 255, 255, 0.2) 0%, transparent 100%), 
                           radial-gradient(circle at 98% 50%, rgba(255, 0, 255, 0.2) 0%, transparent 100%);
        }
        
        .grid-overlay {
          background-image: 
            linear-gradient(rgba(5, 30, 100, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(5, 30, 100, 0.5) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: grid-movement 20s linear infinite;
        }
        
        .retro-container {
          background-color: rgba(0, 10, 40, 0.9);
        }
        
        .scanline {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 255, 255, 0.03) 50%,
            transparent 100%
          );
          animation: scanline 4s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </div>;
};
export default RetroAuthFormPreview;