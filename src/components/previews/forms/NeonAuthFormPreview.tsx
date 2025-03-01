import React, { useState, useEffect } from 'react';

const NeonAuthFormPreview = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
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
    <div className="min-h-screen w-full bg-black flex justify-center items-center perspective">
      <div className={`neon-grid absolute inset-0 z-0 transition-opacity duration-1000 ${mounted ? 'opacity-50' : 'opacity-0'}`}></div>
      <div className="relative z-10">
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

        <div className={`neon-card w-full max-w-md p-8 rounded-3xl transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-center neon-text mb-8">{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="neon-input w-full p-3 rounded-lg bg-black border border-cyan-500 text-white focus:outline-none"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="neon-input w-full p-3 rounded-lg bg-black border border-cyan-500 text-white focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || formSubmitted}
              className="cyber-button relative w-full overflow-hidden rounded-md py-3 text-sm font-medium text-white transition-all duration-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-loader"></div>
                </div>
              ) : (
                <span>{isLogin ? 'Login' : 'Register'}</span>
              )}
            </button>
          </form>
          <div className="mt-6 text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-cyan-500 hover:text-cyan-400 transition-colors">
              {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes neon-flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              text-shadow: 
                0 0 5px #fff,
                0 0 10px #fff,
                0 0 20px #fff,
                0 0 40px #0ff,
                0 0 80px #0ff,
                0 0 90px #0ff,
                0 0 100px #0ff,
                0 0 150px #0ff;
            }
            20%, 24%, 55% {
              text-shadow: none;
            }
          }
          
          .neon-text {
            animation: neon-flicker 1.5s infinite alternate;
          }
          
          .neon-border {
            box-shadow: 
              0 0 5px #fff,
              0 0 10px #fff,
              0 0 20px #fff,
              0 0 40px #0ff,
              0 0 80px #0ff,
              0 0 90px #0ff;
          }
          
          .neon-input:focus {
            box-shadow: 
              0 0 5px #fff,
              0 0 10px #0ff;
          }
          
          .cyber-button {
            clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
          }
          
          .cyber-button:before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            background: #000;
            clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
            z-index: -1;
          }
          
          .cyber-button:hover {
            box-shadow: 
              0 0 10px #0ff,
              0 0 20px #0ff;
          }
          
          .perspective {
            perspective: 1000px;
          }
          
          .neon-card {
            transform-style: preserve-3d;
            animation: card-float 6s ease-in-out infinite;
          }
          
          @keyframes card-float {
            0%, 100% {
              transform: rotateX(0deg) rotateY(0deg);
            }
            25% {
              transform: rotateX(3deg) rotateY(-3deg);
            }
            50% {
              transform: rotateX(-3deg) rotateY(5deg);
            }
            75% {
              transform: rotateX(2deg) rotateY(3deg);
            }
          }
          
          .neon-grid {
            background-size: 30px 30px;
            background-image: 
              linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
          }
        `}
      </style>
    </div>
  );
};

export default NeonAuthFormPreview;
