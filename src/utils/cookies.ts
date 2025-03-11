// src/utils/cookies.ts
import Cookies from 'js-cookie';

/**
 * Set a cookie with the given name, value and options
 */
export const setCookie = (name: string, value: string, options?: Cookies.CookieAttributes): void => {
  Cookies.set(name, value, options);
};

/**
 * Get a cookie by name
 */
export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

/**
 * Remove a cookie by name
 */
export const removeCookie = (name: string): void => {
  Cookies.remove(name);
};

/**
 * Get all cookies as an object
 */
export const getAllCookies = (): Record<string, string> => {
  return Cookies.get();
};