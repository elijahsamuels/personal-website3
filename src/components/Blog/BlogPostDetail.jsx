// src/Blog/BlogPostDetail.js

import { useMemo, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeCallouts from "rehype-callouts";
import { blogPosts } from "./blogData";

import "highlight.js/styles/atom-one-dark.css";
import "./BlogPostDetail.css";

const customComponents = {
  h1: ({ children }) => <h1 className="blog-detail-h1">{children}</h1>,
  h2: ({ children }) => <h2 className="blog-detail-h2">{children}</h2>,
  p: ({ children }) => <p className="blog-detail-p">{children}</p>,
  date: ({ children }) => <p className="blog-date">{children}</p>,
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  code: ({ className, children }) => {
    return <code className={className}>{children}</code>;
  },
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
  console.log("post:", post);

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
      {/* <article> */}
        <h4 className="blog-detail-title">{post.title}</h4>

        <p className="blog-date">
          {formattedDate} by {post.author}
        </p>

        <hr className="post-separator" />

        <ReactMarkdown
          children={post.content}
          remarkPlugins={[]}
          rehypePlugins={[rehypeHighlight, rehypeSlug, rehypeCallouts]}
          components={customComponents}
        />
      {/* </article> */}
    </div>
  );
};

export default BlogPostDetail;
