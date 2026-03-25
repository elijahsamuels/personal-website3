import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "./blogData";
import "./Blog.css";

const TagIndex = () => {
  const { tagName } = useParams();

  // 1. Filter posts that contain the requested tag (case-insensitive)
  const filteredPosts = blogPosts.filter((post) =>
    post.tags?.some((tag) => tag.toLowerCase() === tagName.toLowerCase()),
  );

  // 2. Sort by date (newest first)
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    document.title = `Elijah Samuels | #${tagName}`;
  }, [tagName]);

  return (
    <div className="blog-index-container">
      <Helmet>
        <title>Elijah Samuels | #{tagName} Articles</title>
        <meta name="description" content={`Read all articles about ${tagName} by Elijah Samuels.`} />
      </Helmet>

      <div className="blog-index-title">
        <h3>
          Articles tagged with <span className="text-blue-600">#{tagName}</span>
        </h3>
        <h6>
          Found {sortedPosts.length} result{sortedPosts.length !== 1 ? "s" : ""}
        </h6>
      </div>

      {sortedPosts.length > 0 ? (
        <ul className="post-list">
          {sortedPosts.map((post) => (
            <li key={post.slug} className="post-list-item">
              <Link to={`/blog/${post.slug}`} className="post-link">
                {post.title}
              </Link>

              {post.tags?.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500">
                      #{tag}{" "}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8">
          <p>No articles found for this tag.</p>
          <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
            &larr; Back to all articles
          </Link>
        </div>
      )}
    </div>
  );
};

export default TagIndex;
