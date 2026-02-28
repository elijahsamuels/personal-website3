// src/Blog/BlogPostDetail.js

import { useMemo, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeCallouts from "rehype-callouts";
import remarkGfm from 'remark-gfm';
import { blogPosts } from "./blogData";
import "./atom-one-dark.css";
import "./BlogPostDetail.css";

const customComponents = {
  h1: ({ children }) => <h1 className="blog-detail-h1">{children}</h1>,
  h2: ({ children }) => <h2 className="blog-detail-h2">{children}</h2>,
  p: ({ children }) => <p className="blog-detail-p">{children}</p>,
  date: ({ children }) => <p className="blog-date">{children}</p>,
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  code: ({ className, children }) => <code className={className}>{children}</code>,
  img: (props) => <img src={props.src} alt={props.alt} className="blog-image" />,
};

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = useMemo(() => {
    return blogPosts.find((p) => p.slug === slug);
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `Elijah Samuels | ${post.title}`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const date = new Date(post.date);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="blog-detail-container">
      <h4 className="blog-detail-title">{post.title}</h4>
      <h6 className="blog-detail-subtitle">{post.subtitle}</h6>

      <p className="blog-date">
        {formattedDate} by {post.author}
      </p>

      <hr className="post-separator" />

      <ReactMarkdown
        children={post.content}
        // remarkPlugins={[]}
				remarkPlugins={[remarkGfm]} // 2. Add it here
        rehypePlugins={[rehypeHighlight, rehypeSlug, rehypeCallouts]}
        components={customComponents}
      />
    </div>
  );
};

export default BlogPostDetail;
