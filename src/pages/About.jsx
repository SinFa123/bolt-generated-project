import React from 'react'

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-surface py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://wissenlau.com/wp-content/uploads/2024/08/Wissen_Lau.jpg" 
                alt="Wissen Lau"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                About Me
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Who is Wissen Lau?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              Wissen Lau is a distinguished data analytics expert and entrepreneur with a passion for leveraging technology to unlock productivity. A Warwick Business School graduate, Wissen has driven significant advancements in data analytics and AI automation, making substantial contributions to the industry.
            </p>
            <p className="leading-relaxed">
              At the largest rail company in the UK, Wissen developed an innovative algorithm and dashboard that saved £30 million annually in maintenance costs. This achievement earned a prestigious Gold Award for the project, along with a Silver Award for his personal contributions. He also led the creation of the first-ever data quality dashboard. The data initiative reduced data quality issues by 10% in its first year, justified increased headcount, and became a strategic tool in regulatory compliance. In addition to his corporate achievements, Wissen ranked in the top 2% of a Kaggle competition, further demonstrating his advanced data science skills.
            </p>
            <p className="leading-relaxed">
              Wissen's entrepreneurial ventures include launching a successful web design business, generating £12,000 per month within its first year, as well as building and selling multiple profitable e-commerce stores. As an Amazon Author, he has written and sold books on data strategy, infrastructure and quality, sharing his expertise with a global audience.
            </p>
            <p className="leading-relaxed">
              Driven by a deep interest in AI automation and data-driven decision-making, Wissen continues to explore innovative ways to harness technology for greater productivity and industry impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
