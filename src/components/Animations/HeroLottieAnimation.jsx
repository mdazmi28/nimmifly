'use client';

import React from 'react';
import Lottie from 'lottie-react';

const HeroLottieAnimation = () => {
  return (
    <Lottie
      path="/animation/heroAnimation.json" // Reference the file directly from public folder
      loop={true}
      autoplay={true}
      style={{ width: 400, height: 400 }}
    />
  );
};

export default HeroLottieAnimation;