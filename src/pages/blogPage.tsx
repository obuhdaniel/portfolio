import React from "react";
import Markdown from "react-markdown";

interface BlogPost {
  id: any;
  title: string;
  description: string;
  author: any;
  content: string;
  createdAt: any;
  postUrl: string;
  imageUrl: string;
}

interface BlogPostProps {
  post: BlogPost;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className=" bg-gray-900 font-poppins max-w-7xl mx-10 lg:mx-20 my-10 p-5 text-white rounded-lg shadow-md">
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <p className="text-gray-600 text-sm mt-2">By {post.author}</p>
      <div className="mt-4 text-white">
        <Markdown>{post.content}</Markdown>
        
      </div>
    </div>
  );
};

export default BlogPost;
