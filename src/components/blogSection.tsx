import React from "react";

import { useNavigate } from "react-router-dom";
import TopNavbar from "./header";
import Footer from "./footer";

interface BlogPost {
  id: any;
  title: string;
  description: string;
  author: string;
  content: string;
  createdAt: any;
  postUrl: string;
  imageUrl: string;
}

interface BlogPostProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogPostProps> = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900">
        <TopNavbar title="Blog Posts" classname="sticky" />
        <section className="mx-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-3xl font-bold text-center mb-8">
              Latest Blog Posts
            </h2>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => navigate(post.postUrl)} // Navigate to blog post page on click
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                    <button
                      onClick={() => navigate(post.id)}
                      className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogSection;
