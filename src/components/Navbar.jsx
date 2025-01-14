import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-surface/80 dark:bg-surface/80 backdrop-blur-lg rounded-full shadow-lg z-50 w-[95%] max-w-4xl border border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Wissen Lau
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-primary">
              Projects
            </Link>
            <Link to="/blog" className="text-gray-700 dark:text-gray-300 hover:text-primary">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary">
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
