'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const minimumDisplayTime = 2000;

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startedAt = performance.now();
    let pageLoaded = document.readyState === 'complete';
    let hideTimeout: ReturnType<typeof setTimeout> | undefined;

    const hideAfterMinimumTime = () => {
      if (!pageLoaded) return;

      const remainingTime = Math.max(0, minimumDisplayTime - (performance.now() - startedAt));
      hideTimeout = setTimeout(() => setIsVisible(false), remainingTime);
    };

    const handleLoad = () => {
      pageLoaded = true;
      hideAfterMinimumTime();
    };

    if (pageLoaded) {
      hideAfterMinimumTime();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="page-loader" data-visible={isVisible} aria-hidden={!isVisible}>
      <div className="page-loader-content" role="status" aria-label="Loading H2D.dev">
        <Image src="/favicon.svg" alt="" width={120} height={120} priority unoptimized />
        <span className="page-loader-wordmark">H2D<span>.</span><small>dev</small></span>
        <span className="page-loader-indicator" aria-hidden="true"><i /><i /><i /></span>
      </div>
    </div>
  );
}
