import React from 'react'

export default function Projects() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-surface py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl aspect-square">
                <img 
                  src="https://wissenlau.com/wp-content/uploads/2024/08/wissen_lau_data_analytics_lead.jpg" 
                  alt="Wissen Lau - Data Analytics Lead"
                  className="object-cover object-bottom w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Projects
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            COMING SOON
          </h2>
        </div>
      </section>
    </div>
  )
}
