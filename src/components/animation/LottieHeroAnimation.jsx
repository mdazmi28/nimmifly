'use client';

import LottieWrapper from './LottieWrapper';
import animationData from '@/assets/animations/hero_animation.json';

export default function LottieAnimation() {
    return (
        <div className="lottie-container">
            <LottieWrapper
                animationData={animationData}
                style={{
                    width: 400,
                    height: 400
                }}
            />
        </div>
    );
}