import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav
      className="h-16 bg-purple-700 shadow-md border-b border-purple-600"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        <h1 className="text-white text-2xl font-extrabold tracking-tight">Bitlinks</h1>

        <ul className="flex items-center space-x-8">
          {['Home', 'About', 'Shorten', 'Contact Us'].map((text, i) => {
            const hrefs = ['/', '/', '/generate', '/contact'];
            return (
              <li key={i}>
                <Link
                  href={hrefs[i]}
                  className="text-white text-base font-medium transition-all duration-300 hover:text-gray-200"
                >
                  {text}
                </Link>
              </li>
            );
          })}

          <li className="flex gap-3">
            <Link href="/generate">
              <button className="bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition duration-300 text-white font-semibold rounded-xl text-sm px-4 py-2 shadow-md">
                Try Now
              </button>
            </Link>
            <a
              href="https://github.com/DakshGautam101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer bg-gradient-to-br from-gray-800 to-gray-600 hover:from-gray-900 hover:to-gray-700 transition-all duration-300 text-white font-semibold rounded-xl text-sm px-6 py-2.5 shadow-lg">
                GitHub Repo
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
