import React, { useEffect, useRef } from 'react';

const AddToCartButtonPreview: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createSparkle = (x: number, y: number) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.setProperty('--x', `${Math.random() * 100 - 50}px`);
    sparkle.style.setProperty('--y', `${Math.random() * -100 - 20}px`);
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.color = `hsl(${Math.random() * 60 + 180}, 100%, 70%)`;
    sparkle.style.animation = 'sparkleBurst 0.8s ease-out forwards';
    return sparkle;
  };

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('div');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    if (button.classList.contains('clicked')) return;

    createRipple(event);
    button.classList.add('clicked');

    // Create sparkles
    const rect = button.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
      const sparkle = createSparkle(
        rect.width / 2 + (Math.random() * 20 - 10),
        rect.height / 2
      );
      button.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    }

    // Simulate cart animation and success state
    setTimeout(() => {
      button.classList.add('success');
      setTimeout(() => {
        button.classList.remove('clicked', 'success');
        const sparkles = button.querySelectorAll('.sparkle');
        sparkles.forEach(sparkle => sparkle.remove());
      }, 2000);
    }, 1500);
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    };

    button.addEventListener('mousemove', handleMouseMove);
    return () => button.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <button ref={buttonRef} className="cart-btn" onClick={handleClick}>
      <span className="cart-icon">
        <svg viewBox="0 0 24 24">
          <path d="M4 4h2l3.6 10h10l2.4-7H5.5M9 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      </span>
      <span className="text">Add to Cart</span>
      <span className="checkmark">
        <svg viewBox="0 0 24 24">
          <path d="M6 12l4 4L18 6" />
        </svg>
      </span>
    </button>
  );
};

export default AddToCartButtonPreview; 