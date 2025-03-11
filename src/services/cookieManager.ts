// src/services/cookieManager.ts
import { setCookie, getCookie, removeCookie } from '@/utils/cookies';

// Define cookie categories
export enum CookieCategory {
  NECESSARY = 'necessary',
  PREFERENCES = 'preferences',
  ANALYTICS = 'analytics',
  MARKETING = 'marketing'
}

// Store information about cookies used in the application
interface CookieInfo {
  name: string;
  category: CookieCategory;
  description: string;
  expiry: number; // days
}

// List of application cookies
const appCookies: CookieInfo[] = [
  {
    name: 'cookie_consent',
    category: CookieCategory.NECESSARY,
    description: 'Stores your cookie consent preferences',
    expiry: 365
  },
  {
    name: 'user_session',
    category: CookieCategory.NECESSARY,
    description: 'Maintains your login session',
    expiry: 1
  },
  {
    name: 'theme_preference',
    category: CookieCategory.PREFERENCES,
    description: 'Remembers your site theme preference',
    expiry: 90
  },
  {
    name: 'last_visited',
    category: CookieCategory.ANALYTICS,
    description: 'Tracks when you last visited the site',
    expiry: 30
  }
];

// Get user consent preferences
export const getUserConsent = (): { [key in CookieCategory]: boolean } => {
  const consentCookie = getCookie('cookie_consent');
  
  if (!consentCookie) {
    // Default to only necessary cookies if no consent is stored
    return {
      [CookieCategory.NECESSARY]: true,
      [CookieCategory.PREFERENCES]: false,
      [CookieCategory.ANALYTICS]: false,
      [CookieCategory.MARKETING]: false
    };
  }
  
  try {
    // Try to parse the consent JSON
    return JSON.parse(consentCookie);
  } catch {
    // If it's not JSON, it might be the simple "accepted" string
    if (consentCookie === 'accepted') {
      return {
        [CookieCategory.NECESSARY]: true,
        [CookieCategory.PREFERENCES]: true,
        [CookieCategory.ANALYTICS]: true,
        [CookieCategory.MARKETING]: true
      };
    } else {
      // Default to only necessary cookies
      return {
        [CookieCategory.NECESSARY]: true,
        [CookieCategory.PREFERENCES]: false,
        [CookieCategory.ANALYTICS]: false,
        [CookieCategory.MARKETING]: false
      };
    }
  }
};

// Save user consent preferences
export const saveUserConsent = (
  preferences: { [key in CookieCategory]: boolean }
): void => {
  setCookie('cookie_consent', JSON.stringify(preferences), { expires: 365 });
};

// Set a cookie if the user has consented to its category
export const setConsentedCookie = (
  name: string,
  value: string,
  category: CookieCategory,
  options?: Record<string, unknown>  // Changed 'any' to a more specific type
): boolean => {
  const consent = getUserConsent();
  
  // Always allow necessary cookies
  if (category === CookieCategory.NECESSARY || consent[category]) {
    setCookie(name, value, options);
    return true;
  }
  
  return false;
};

// Get information about all cookies used in the app
export const getAllCookieInfo = (): CookieInfo[] => {
  return appCookies;
};

// Get cookies by category
export const getCookiesByCategory = (category: CookieCategory): CookieInfo[] => {
  return appCookies.filter(cookie => cookie.category === category);
};

// Delete all non-necessary cookies
export const deleteNonNecessaryCookies = (): void => {
  appCookies.forEach(cookie => {
    if (cookie.category !== CookieCategory.NECESSARY) {
      removeCookie(cookie.name);
    }
  });
};