import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  date,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <article>
      {helmet || ""}
      <h1>{title}</h1>
      <p>{description}</p>
      <PostContent content={content} />
      <footer>
        by Luke Willis, <time>{date}</time>
      </footer>
    </article>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={post.frontmatter.title} />}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id

      frontmatter {
        title
      }
    }
  }
`;
