import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 mt-8 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Wissen Lau. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
