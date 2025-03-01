
// Data for gallery components
export const galleries = [
  { 
    id: 1, 
    name: "Masonry Gallery", 
    description: "Dynamic layout with varied size images in a clean grid",
    code: `<div class="masonry-gallery">
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 1" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 2" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 3" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 4" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 5" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 6" /></div>
</div>`,
    html: `<div class="masonry-gallery">
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 1" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 2" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 3" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 4" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 5" /></div>
  <div class="masonry-item"><img src="/placeholder.svg" alt="Gallery item 6" /></div>
</div>`,
    css: `.masonry-gallery {
  column-count: 3;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

.masonry-item img {
  width: 100%;
  border-radius: 0.5rem;
  display: block;
}`
  },
  { 
    id: 2, 
    name: "Grid Gallery", 
    description: "Uniform grid layout perfect for showcasing consistent image collections",
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
    description: "Interactive gallery with image zoom functionality on click",
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
    description: "Horizontal scrolling gallery with navigation controls",
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
