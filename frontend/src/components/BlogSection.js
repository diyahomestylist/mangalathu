import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection = ({ posts }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-4">Our Journal</p>
            <h2 className="text-4xl font-light text-gray-900">News archive.</h2>
          </div>
          <button className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors mt-6 lg:mt-0">
            Show All Posts →
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-full p-2">
                    <ArrowRight size={16} className="text-gray-900" />
                  </div>
                </div>
                {/* Placeholder for blog post image */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Blog Image</div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Author & Meta */}
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <span>Mangalathu Team</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-gray-900 group-hover:text-red-500 transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {post.category.map((cat, catIndex) => (
                    <span key={catIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {cat}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <button className="text-sm font-medium text-red-500 hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;