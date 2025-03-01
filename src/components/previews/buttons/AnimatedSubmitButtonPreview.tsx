import React, { useEffect, useRef } from 'react';

const AnimatedSubmitButtonPreview: React.FC = () => {
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const magneticBtnRef = useRef<HTMLDivElement>(null);
  const customCursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const submitBtn = submitBtnRef.current;
    const splash = splashRef.current;
    const magneticBtn = magneticBtnRef.current;
    const customCursor = customCursorRef.current;
    const particles = particlesRef.current;
    const loader = loaderRef.current;

    if (!submitBtn || !splash || !magneticBtn || !customCursor || !particles || !loader) return;

    const handleClick = () => {
      if (submitBtn.classList.contains('processing') || submitBtn.classList.contains('success')) {
        return;
      }

      // Add splash effect
      splash.style.animation = 'splash-animation 0.6s forwards';
      setTimeout(() => {
        splash.style.animation = '';
      }, 600);

      // Add processing state with spinner
      submitBtn.classList.add('processing');
      loader.style.display = 'block';

      // Simulate processing and show success
      setTimeout(() => {
        loader.style.display = 'none';
        submitBtn.classList.remove('processing');
        submitBtn.classList.add('success');

        // Create success particles
        const btnRect = submitBtn.getBoundingClientRect();
        const centerX = btnRect.left + btnRect.width / 2;
        const centerY = btnRect.top + btnRect.height / 2;

        for (let i = 0; i < 12; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');

          // Random size between 6px and 12px
          const size = Math.random() * 6 + 6;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;

          // Random color from success theme
          const colors = ['#10B981', '#60a5fa', '#3b82f6', '#4f46e5'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          particle.style.backgroundColor = color;

          // Set initial position at the center of the button
          particle.style.left = `${centerX}px`;
          particle.style.top = `${centerY}px`;

          particles.appendChild(particle);

          // Animation with physics
          const angle = (i / 12) * Math.PI * 2;
          const velocity = Math.random() * 100 + 80;
          const vx = Math.cos(angle) * velocity;
          const vy = Math.sin(angle) * velocity;

          let posX = centerX;
          let posY = centerY;
          let opacity = 1;
          const gravity = 0.8;
          let vy2 = vy;

          function updateParticle() {
            posX += vx * 0.016;
            vy2 += gravity;
            posY += vy2 * 0.016;
            opacity -= 0.01;

            if (opacity <= 0) {
              particle.remove();
              return;
            }

            particle.style.opacity = opacity.toString();
            particle.style.left = `${posX}px`;
            particle.style.top = `${posY}px`;

            requestAnimationFrame(updateParticle);
          }

          requestAnimationFrame(updateParticle);
        }

        // Reset button after animation
        setTimeout(() => {
          submitBtn.classList.remove('success');
          const particles = document.querySelectorAll('.particle');
          particles.forEach(particle => particle.remove());
        }, 2000);
      }, 1500);
    };

    // Custom cursor
    let isHovering = false;

    const handleMouseEnter = () => {
      isHovering = true;
      customCursor.style.opacity = '1';
      customCursor.style.width = '40px';
      customCursor.style.height = '40px';
    };

    const handleMouseLeave = () => {
      isHovering = false;
      customCursor.style.opacity = '0';
      customCursor.style.width = '20px';
      customCursor.style.height = '20px';
    };

    // Smoothly update cursor position
    const cursorX = { current: 0, target: 0 };
    const cursorY = { current: 0, target: 0 };

    function updateCursorPosition() {
      cursorX.current += (cursorX.target - cursorX.current) * 0.15;
      cursorY.current += (cursorY.target - cursorY.current) * 0.15;

      customCursor.style.left = `${cursorX.current}px`;
      customCursor.style.top = `${cursorY.current}px`;

      requestAnimationFrame(updateCursorPosition);
    }

    requestAnimationFrame(updateCursorPosition);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.target = e.clientX;
      cursorY.target = e.clientY;
    };

    // Add event listeners
    submitBtn.addEventListener('click', handleClick);
    magneticBtn.addEventListener('mouseenter', handleMouseEnter);
    magneticBtn.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      submitBtn.removeEventListener('click', handleClick);
      magneticBtn.removeEventListener('mouseenter', handleMouseEnter);
      magneticBtn.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={customCursorRef}></div>
      <div className="magnetic-btn" ref={magneticBtnRef}>
        <div className="button-container">
          <button className="submit-button" ref={submitBtnRef}>
            <div className="splash" ref={splashRef}></div>
            <div className="button-content">
              <div className="button-label-container">
                <div className="button-label">
                  <span className="label-text">Submit</span>
                  <span className="label-text">Ready</span>
                </div>
              </div>
              <div className="btn-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33337 8H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="loader" ref={loaderRef}></div>
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 7L9.5 15.5L6 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="particles" ref={particlesRef}></div>
    </>
  );
};

export default AnimatedSubmitButtonPreview; 