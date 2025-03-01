// Data for gallery components
export const galleries = [
  { 
    id: 1, 
    name: "Image Hover Text Display", 
    code: `import React, { useState } from 'react';
import { Image } from 'lucide-react';

const HoverImageWithText = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div 
        className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out transform hover:scale-102"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Placeholder with icon */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
          <Image className="w-24 h-24 text-gray-400" />
        </div>
        
        {/* Overlay that appears on hover */}
        <div className={\`absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-6 transition-all duration-300 ease-out \${isHovered ? 'opacity-100' : 'opacity-0'}\`}>
          {/* Container for animated elements */}
          <div className="overflow-hidden">
            {/* Animated heading */}
            <h2 
              className={\`text-white font-bold text-2xl mb-4 transition-all duration-500 ease-out transform \${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}\`}
              style={{ transitionDelay: isHovered ? '50ms' : '0ms' }}
            >
              Interactive Content
            </h2>
          </div>
          
          {/* Container for paragraph */}
          <div className="overflow-hidden">
            {/* Animated paragraph */}
            <p 
              className={\`text-white text-center transition-all duration-500 ease-out transform \${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}\`}
              style={{ transitionDelay: isHovered ? '150ms' : '0ms' }}
            >
              This component reveals content with a smooth staggered animation when hovered. Perfect for creating engaging user experiences.
            </p>
          </div>
          
          {/* Container for button */}
          <div className="overflow-hidden mt-6">
            {/* Animated button */}
            <button 
              className={\`px-4 py-2 bg-white text-gray-800 rounded font-medium transition-all duration-500 ease-out transform \${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}\`}
              style={{ transitionDelay: isHovered ? '250ms' : '0ms' }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverImageWithText;`,
    html: `<div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <div class="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-xl transition-all duration-500 ease-in-out transform hover:scale-102">
    <!-- Placeholder with icon -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24 text-gray-400">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <path d="M21 15l-5-5L5 21"></path>
      </svg>
    </div>
    
    <!-- Overlay that appears on hover -->
    <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-6 transition-all duration-300 ease-out opacity-0 hover:opacity-100">
      <!-- Container for animated elements -->
      <div class="overflow-hidden">
        <!-- Animated heading -->
        <h2 class="text-white font-bold text-2xl mb-4 transition-all duration-500 ease-out transform translate-y-full opacity-0 hover-trigger:translate-y-0 hover-trigger:opacity-100">
          Interactive Content
        </h2>
      </div>
      
      <!-- Container for paragraph -->
      <div class="overflow-hidden">
        <!-- Animated paragraph -->
        <p class="text-white text-center transition-all duration-500 ease-out transform translate-y-full opacity-0 hover-trigger:translate-y-0 hover-trigger:opacity-100">
          This component reveals content with a smooth staggered animation when hovered. Perfect for creating engaging user experiences.
        </p>
      </div>
      
      <!-- Container for button -->
      <div class="overflow-hidden mt-6">
        <!-- Animated button -->
        <button class="px-4 py-2 bg-white text-gray-800 rounded font-medium transition-all duration-500 ease-out transform translate-y-full opacity-0 hover-trigger:translate-y-0 hover-trigger:opacity-100">
          Explore
        </button>
      </div>
    </div>
  </div>
</div>`,
    css: `.hover-trigger:hover .hover-element {
  transform: translateY(0);
  opacity: 1;
}

/* Add delay to different elements */
.hover-element:nth-child(1) {
  transition-delay: 50ms;
}

.hover-element:nth-child(2) {
  transition-delay: 150ms;
}

.hover-element:nth-child(3) {
  transition-delay: 250ms;
}`
  },
  { 
    id: 2, 
    name: "Grid Gallery", 
    code: `<div class="grid-gallery">
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 1" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 2" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 3" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 4" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 5" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 6" /></div>
</div>`,
    html: `<div class="grid-gallery">
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 1" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 2" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 3" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 4" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 5" /></div>
  <div class="grid-item"><img src="/placeholder.svg" alt="Gallery item 6" /></div>
</div>`,
    css: `.grid-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  display: block;
}`
  },
  { 
    id: 3, 
    name: "Lightbox Gallery", 
    code: `<div class="lightbox-gallery">
  <div class="lightbox-item"><img src="/placeholder.svg" alt="Gallery item 1" /></div>
  <div class="lightbox-item"><img src="/placeholder.svg" alt="Gallery item 2" /></div>
  <div class="lightbox-item"><img src="/placeholder.svg" alt="Gallery item 3" /></div>
  <div class="lightbox-item"><img src="/placeholder.svg" alt="Gallery item 4" /></div>
</div>`,
    html: `<div class="lightbox-gallery">
  <div class="lightbox-item"><img src="/placeholder.svg" alt="Gallery item 1" /></div>
  <div class="lightbox-item"><img src="/placeholder.svg" alt="Gallery item 2" /></div>
  <div class="lightbox-item"><img src="/placeholder.svg" alt="Gallery item 3" /></div>
  <div class="lightbox-item"><img src="/placeholder.svg" alt="Gallery item 4" /></div>
</div>`,
    css: `.lightbox-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.lightbox-item img {
  width: 100%;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.lightbox-item img:hover {
  transform: scale(1.03);
}`
  },
  { 
    id: 4, 
    name: "Carousel Gallery", 
    code: `<div class="carousel-gallery">
  <div class="carousel-track">
    <div class="carousel-item"><img src="/placeholder.svg" alt="Gallery item 1" /></div>
    <div class="carousel-item"><img src="/placeholder.svg" alt="Gallery item 2" /></div>
    <div class="carousel-item"><img src="/placeholder.svg" alt="Gallery item 3" /></div>
    <div class="carousel-item"><img src="/placeholder.svg" alt="Gallery item 4" /></div>
  </div>
  <div class="carousel-nav">
    <button class="prev-btn">Previous</button>
    <button class="next-btn">Next</button>
  </div>
</div>`,
    html: `<div class="carousel-gallery">
  <div class="carousel-track">
    <div class="carousel-item"><img src="/placeholder.svg" alt="Gallery item 1" /></div>
    <div class="carousel-item"><img src="/placeholder.svg" alt="Gallery item 2" /></div>
    <div class="carousel-item"><img src="/placeholder.svg" alt="Gallery item 3" /></div>
    <div class="carousel-item"><img src="/placeholder.svg" alt="Gallery item 4" /></div>
  </div>
  <div class="carousel-nav">
    <button class="prev-btn">Previous</button>
    <button class="next-btn">Next</button>
  </div>
</div>`,
    css: `.carousel-gallery {
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  padding: 0 10px;
}

.carousel-item img {
  width: 100%;
  border-radius: 0.5rem;
}

.carousel-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.prev-btn, .next-btn {
  padding: 0.5rem 1rem;
  background-color: #f1f5f9;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.prev-btn:hover, .next-btn:hover {
  background-color: #e2e8f0;
}`
  }
];
