import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
      {/* 左側ロゴ */}
      <div className="text-2xl font-semibold cursor-pointer select-none">
        Dribbble
      </div>

      {/* 検索バー */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="flex-grow bg-transparent outline-none text-sm"
        />
        <button className="ml-3 bg-pink-500 hover:bg-pink-600 rounded-full p-2">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </button>
      </div>

      {/* メニュー */}
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <div className="relative group cursor-pointer">
          <span>Shots</span>
          <svg
            className="inline-block ml-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.23 7.21l4.77 4.77 4.77-4.77H5.23z" />
          </svg>
        </div>
        <div className="relative group cursor-pointer">
          <span>Explore</span>
          <svg
            className="inline-block ml-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.23 7.21l4.77 4.77 4.77-4.77H5.23z" />
          </svg>
        </div>
        <div className="relative group cursor-pointer">
          <span>Find Talent</span>
          <svg
            className="inline-block ml-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.23 7.21l4.77 4.77 4.77-4.77H5.23z" />
          </svg>
        </div>
        <div className="relative group cursor-pointer">
          Get Hired
          <svg
            className="inline-block ml-1 w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.23 7.21l4.77 4.77 4.77-4.77H5.23z" />
          </svg>
        </div>
        <div className="cursor-pointer">Blog</div>
      </nav>

      {/* 右側サインアップ・ログイン */}
      <div className="flex items-center space-x-4 text-sm font-medium">
        <button className="hover:underline">Sign up</button>
        <button className="bg-gray-900 text-white rounded-full px-4 py-1 hover:bg-gray-800">
          Log in
        </button>
      </div>
    </header>
  );
}
