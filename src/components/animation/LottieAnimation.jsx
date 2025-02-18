'use client';

import LottieWrapper from './LottieWrapper';
import animationData from '@/assets/animations/animation.json';

export default function LottieAnimation() {
    return (
        <div className="lottie-container">
            <LottieWrapper
                animationData={animationData}
                style={{
                    width: 300,
                    height: 300
                }}
            />
        </div>
    );
}