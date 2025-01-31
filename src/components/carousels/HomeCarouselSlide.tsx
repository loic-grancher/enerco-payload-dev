'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Media } from '@/payload-types';

export default function HomeCarouselSlide({ images = [] }: { images?: Media[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  if (images.length === 0) return <p className="text-center">No images available</p>;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full flex justify-center items-center">
            <Image
              src={image.url || '/placeholder.jpg'}
              alt={image.alt || 'carousel image'}
              width={500}
              height={500}
              className="w-full object-cover rounded"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2  text-white p-2 ">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2  text-white p-2 ">
        ❯
      </button>
    </div>
  );
}
