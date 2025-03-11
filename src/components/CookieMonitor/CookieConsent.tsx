// src/components/CookieConsent/CookieConsent.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { setCookie, getCookie } from '@/utils/cookies';

const CONSENT_COOKIE_NAME = 'cookie_consent';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = getCookie(CONSENT_COOKIE_NAME);
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    // Set consent cookie with 365 days expiry
    setCookie(CONSENT_COOKIE_NAME, 'accepted', { expires: 365 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    // Set a consent cookie to remember the choice, but with "declined" value
    setCookie(CONSENT_COOKIE_NAME, 'declined', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm md:text-base">
            This website uses cookies to enhance your browsing experience. We also use analytics cookies 
            to understand how our website is being used.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={declineCookies}
            className="py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors text-sm"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;