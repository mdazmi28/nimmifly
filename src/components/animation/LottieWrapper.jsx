'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

export default function LottieWrapper({ animationData, style = {}, ...props }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: 200, height: 200, ...style }}
                {...props}
            />
        </Suspense>
    );
}