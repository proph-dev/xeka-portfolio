import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

export const AnimationLottie = (props) => {

    const containerRef = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: props.lottieFolder
        });
        return () => animation.destroy();
      }, []);

    return <div ref={containerRef} />
}