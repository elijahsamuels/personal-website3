// src/blogData.js (Dependency-Free Frontmatter Parsing)

const modules = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/**
 * Parses simple Frontmatter (key: "value") from a Markdown string.
 * Returns the metadata object and the rest of the content.
 */
const parseFrontmatter = (rawContent) => {
  const parts = rawContent.split("---");

  if (parts.length < 3 || parts[0].trim() !== "") {
    return { data: {}, content: rawContent };
  }

  const frontmatterBlock = parts[1].trim();
  const content = parts.slice(2).join("---").trim();
  const data = {};

  frontmatterBlock.split("\n").forEach((line) => {
    const [key, valueString] = line.split(": ");

    if (key && valueString) {
      const trimmedKey = key.trim();
      let trimmedValue = valueString.trim().replace(/^['"]|['"]$/g, "");

      if (trimmedKey === "date") {
        data.date = new Date(trimmedValue);
      }
      data[trimmedKey] = trimmedValue;
    }
  });
  return { data, content };
};

export const blogPosts = Object.keys(modules).map((path) => {
  const rawContent = modules[path];
  const { data, content } = parseFrontmatter(rawContent);
  const fileNameWithExt = path.substring(path.lastIndexOf("/") + 1);
  const slug = fileNameWithExt.replace(/\.md$/, "");

  return {
    slug: slug,
    title: data.title || "Untitled Post",
    subtitle: data.subtitle || null,
    date: data.date,
    author: data.author,
    content: content,
  };
});

blogPosts.sort((a, b) => {
  if (a.date && b.date) {
    return b.date - a.date;
  }
  return b.slug.localeCompare(a.slug);
});
