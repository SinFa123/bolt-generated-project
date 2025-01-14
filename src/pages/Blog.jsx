import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
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
              <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Blog Hero"
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Blog
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Posts Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Popular Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the most popular insights on data analytics, AI automation, and productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.slice(0, 3).map(post => (
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
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
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
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Show More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
