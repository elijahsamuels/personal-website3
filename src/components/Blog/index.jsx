// src/Blog/index.jsx

import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

import { blogPosts } from "./blogData";

const Blog = () => {

useEffect(() => {
		document.title = "Elijah Samuels | Blog";
	}, []);

  return (
    <div className="blog-index-container">
      <div className="blog-index-title">
        <h3>Tech Insights ({blogPosts.length})</h3>
      </div>
      <ul className="post-list">
        {blogPosts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="post-link">
                {post.title} - {post.slug}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Blog;
