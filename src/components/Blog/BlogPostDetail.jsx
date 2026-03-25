import { useMemo, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom"; // Added Link
import { Helmet } from "react-helmet-async"; // Added Helmet for SEO
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeCallouts from "rehype-callouts";
import remarkGfm from "remark-gfm";
import { blogPosts } from "./blogData";
import "./atom-one-dark.css";
import "./BlogPostDetail.css";
import Mermaid from "./Mermaid";

const customComponents = {
  h1: ({ children }) => <h1 className="blog-detail-h1">{children}</h1>,
  h2: ({ children }) => <h2 className="blog-detail-h2">{children}</h2>,
  p: ({ children }) => <p className="blog-detail-p">{children}</p>,
  date: ({ children }) => <p className="blog-date">{children}</p>,
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const isMermaid = match && match[1] === "mermaid";

    if (!inline && isMermaid) {
      return <Mermaid chart={String(children).replace(/\n$/, "")} />;
    }

    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
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

  const keywordsString = post.tags?.join(", ") || "";

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    keywords: keywordsString,
  };

  return (
    <div className="blog-detail-container">
      <Helmet>
        <title>Elijah Samuels | {post.title}</title>
        <meta name="description" content={post.subtitle || `Read ${post.title} by ${post.author}`} />
        <meta name="keywords" content={keywordsString} />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.subtitle || `Read ${post.title} by ${post.author}`} />
        <meta property="og:type" content="article" />
        {post.tags?.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}

        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <h4 className="blog-detail-title">{post.title}</h4>
      <h6 className="blog-detail-subtitle">{post.subtitle}</h6>

      <p className="blog-date">
        {formattedDate} by {post.author}
      </p>

      {post.tags?.length > 0 && (
        <div className="blog-tags-container">
          {post.tags.map((tag) => (
            <Link key={tag} to={`/tags/${tag.toLowerCase()}`} className="blog-tag">
              #{tag}
            </Link>
          ))}
        </div>
      )}
      <ReactMarkdown
        components={customComponents}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeSlug, rehypeCallouts]}>
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPostDetail;
