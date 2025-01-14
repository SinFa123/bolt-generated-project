import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Future\nof AI Technology",
      excerpt: "AI is rapidly evolving, transforming industries and reshaping the way we live.",
      image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051"
    },
    {
      id: 2,
      title: "The Art of\nData Visualization",
      excerpt: "Data visualization communicates complex information in a clear and engaging way.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
    },
    {
      id: 3,
      title: "Harnessing the Power\nof Machine Learning",
      excerpt: "Machine learning enables computers to learn from data and make predictions.",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4"
    },
    {
      id: 4,
      title: "Building Resilient\nData Systems",
      excerpt: "In today's data-driven world, building resilient data systems is crucial for.",
      image: "https://plus.unsplash.com/premium_photo-1706287610557-a854b49afc74"
    },
    {
      id: 5,
      title: "The Role of AI\nin Healthcare",
      excerpt: "AI is transforming healthcare by improving diagnostics and personalizing treatment.",
      image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f"
    },
    {
      id: 6,
      title: "Innovations in\nSustainable Technology",
      excerpt: "Sustainable technology addresses environmental challenges and promotes a greener future.",
      image: "https://images.unsplash.com/photo-1615775642101-402e4d2c0e0f"
    }
  ]

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
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white">
                Hello, I'm<br /><span className="text-primary">Wissen Lau</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I build data analytics and AI automation solutions to drive productivity. 
                I'm interested in small businesses, entrepreneurship, and creating robust 
                systems and processes.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/about" 
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 hover:text-white transition-colors flex items-center justify-center"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              My Expertise & Interest
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              With a deep understanding of technological trends, I'm dedicated to 
              crafting innovative solutions in advanced data analytics, dashboard 
              visualization, and AI automation to improve productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="card p-8 rounded-2xl hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="text-primary text-4xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-4 min-h-[3.5rem] text-gray-900 dark:text-white">
                Data Analytics &<br />Visualization
              </h3>
              <p>
                I develop complex algorithms to uncover actionable insights, 
                building interactive dashboards and compelling visualizations.
              </p>
            </div>
            <div className="card p-8 rounded-2xl hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="text-primary text-4xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold mb-4 min-h-[3.5rem] text-gray-900 dark:text-white">
                Productivity &<br />AI Automation
              </h3>
              <p>
                I build cutting-edge, AI-driven automation solutions to simplify 
                workflows, streamline processes, and increase productivity.
              </p>
            </div>
            <div className="card p-8 rounded-2xl hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="text-primary text-4xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 min-h-[3.5rem] text-gray-900 dark:text-white">
                Website Design &<br />SEO
              </h3>
              <p>
                I elevate online presence with sleek, conversion-focused designs 
                and cutting-edge SEO strategies for unparalleled visibility and 
                engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-alt py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my latest insights on data analytics, AI automation, and productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map(post => (
              <div 
                key={post.id} 
                className="card overflow-hidden rounded-2xl hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mb-6">
                    {post.excerpt}
                  </p>
                  <Link 
                    to="/blog" 
                    className="text-primary font-medium hover:text-primary/80 transition-colors inline-block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Data analytics expert, entrepreneur, and Amazon Best-Selling author 
                focused on leveraging data and AI to improve productivity.
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 hover:text-white transition-colors"
              >
                More About Wissen
              </Link>
            </div>
            <div>
              <img 
                src="https://wissenlau.com/wp-content/uploads/2024/08/wissen_lau_ai_automation_expert.jpg" 
                alt="Wissen Lau - AI Automation Expert"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/20 p-16 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Have a project in mind or need expert advice on data analytics and AI automation? 
                I'd love to hear from you and explore how we can collaborate to drive your business forward.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
