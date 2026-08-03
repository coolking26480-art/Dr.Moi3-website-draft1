'use client';

import React from 'react';

interface PhotoPlaceholderProps {
  width: number;
  height: number;
  index?: number;
  src?: string;
  alt?: string;
  className?: string;
  rounded?: boolean;
}

export default function PhotoPlaceholder({
  width,
  height,
  index = 0,
  src,
  alt = 'Photo placeholder',
  className = '',
  rounded = false,
}: PhotoPlaceholderProps) {
  const gradients = [
    'linear-gradient(135deg, #1E2F4F, #2A3F6F)',
    'linear-gradient(135deg, #0F1E3A, #1E2F4F)',
    'linear-gradient(135deg, #2A3F6F, #3B5285)',
    'linear-gradient(135deg, #1E2F4F, #0F1E3A)',
    'linear-gradient(135deg, #3B5285, #4C639A)',
    'linear-gradient(135deg, #0F1E3A, #2A3F6F)',
  ];

  const gradient = gradients[index % gradients.length];

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover ${rounded ? 'rounded-lg' : ''} ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${rounded ? 'rounded-lg' : ''} ${className}`}
      style={{
        width,
        height,
        background: gradient,
        minWidth: width,
        minHeight: height,
      }}
    >
      <span
        className="font-roboto font-bold text-white/20 select-none"
        style={{ fontSize: Math.min(width, height) * 0.3 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}
