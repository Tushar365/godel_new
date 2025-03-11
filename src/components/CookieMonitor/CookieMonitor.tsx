// src/components/CookieMonitor/CookieMonitor.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { setCookie, removeCookie, getAllCookies } from '@/utils/cookies';

interface Cookie {
  name: string;
  value: string;
}

const CookieMonitor: React.FC = () => {
  const [cookies, setCookies] = useState<Cookie[]>([]);
  const [newCookieName, setNewCookieName] = useState('');
  const [newCookieValue, setNewCookieValue] = useState('');
  const [newCookieExpiry, setNewCookieExpiry] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Load cookies on component mount and whenever they change
  useEffect(() => {
    loadCookies();
    
    // Set up an interval to refresh cookies
    const intervalId = setInterval(loadCookies, 3000);
    
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const loadCookies = () => {
    const allCookies = getAllCookies();
    const cookieArray = Object.entries(allCookies).map(([name, value]) => ({
      name,
      value
    }));
    setCookies(cookieArray);
  };

  const handleAddCookie = () => {
    if (newCookieName && newCookieValue) {
      const options: { expires?: number } = {};
      
      if (newCookieExpiry) {
        // Convert days to a number
        const days = parseInt(newCookieExpiry, 10);
        if (!isNaN(days)) {
          options.expires = days;
        }
      }
      
      setCookie(newCookieName, newCookieValue, options);
      setNewCookieName('');
      setNewCookieValue('');
      setNewCookieExpiry('');
      loadCookies();
    }
  };

  const handleDeleteCookie = (name: string) => {
    removeCookie(name);
    loadCookies();
  };

  const toggleMonitor = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button 
        onClick={toggleMonitor}
        className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? '✕' : '🍪'}
      </button>
      
      {/* Cookie Monitor Panel */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 w-80 bg-gray-800 text-white rounded-lg shadow-xl p-4 overflow-hidden">
          <h3 className="text-lg font-semibold mb-3">Cookie Monitor</h3>
          
          {/* Add Cookie Form */}
          <div className="mb-4 space-y-2">
            <input
              type="text"
              placeholder="Cookie Name"
              value={newCookieName}
              onChange={(e) => setNewCookieName(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
            />
            <input
              type="text"
              placeholder="Cookie Value"
              value={newCookieValue}
              onChange={(e) => setNewCookieValue(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
            />
            <input
              type="number"
              placeholder="Expiry (days)"
              value={newCookieExpiry}
              onChange={(e) => setNewCookieExpiry(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white text-sm"
            />
            <button
              onClick={handleAddCookie}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm transition-colors"
            >
              Add Cookie
            </button>
          </div>
          
          {/* Cookie List */}
          <div className="max-h-60 overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-2 px-3 text-left">Name</th>
                  <th className="py-2 px-3 text-left">Value</th>
                  <th className="py-2 px-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cookies.length > 0 ? (
                  cookies.map((cookie, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="py-2 px-3 truncate max-w-[100px]">{cookie.name}</td>
                      <td className="py-2 px-3 truncate max-w-[100px]">{cookie.value}</td>
                      <td className="py-2 px-3 text-center">
                        <button
                          onClick={() => handleDeleteCookie(cookie.name)}
                          className="text-red-400 hover:text-red-300"
                          title="Delete Cookie"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-4 text-center text-gray-400">
                      No cookies found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieMonitor;