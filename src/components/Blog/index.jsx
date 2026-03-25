import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

import { blogPosts } from "./blogData";

const Blog = () => {
  useEffect(() => {
    document.title = "Elijah Samuels | Blog";
  }, []);

  const date = new Date();

	const filteredPosts = blogPosts
    .filter((file) => file.slug !== "YYYY-MM-DD" || file.title !== "TITLE")
    .filter((file) => new Date(file.date) <= date);
  return (
    <div className="blog-index-container">
      <div className="blog-index-title">
        <h3>Tech Insights ({filteredPosts.length})</h3>
        <h6>A collection of thoughts, tips & tricks, and reminders to share</h6>
      </div>
      <ul className="post-list">
        {filteredPosts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((post) => (
            <li key={post.slug} className="post-list-item" style={{ marginBottom: "1.5rem" }}>
              <Link
                to={`/blog/${post.slug}`}
                className="post-link"
                style={{ fontSize: "1.25rem", fontWeight: "600", textDecoration: "none" }}>
                {post.title}
              </Link>

              {post.tags?.length > 0 && (
                <div className="flex gap-2 mt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.65rem",
                        color: "#d7d6d6",
                        marginRight: "8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Blog;
