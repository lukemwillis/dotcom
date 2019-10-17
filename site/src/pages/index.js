import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

export default class IndexPage extends React.Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges: posts }
      }
    } = this.props;

    return (
      <section>
        <h1>Latest Stories</h1>
        {posts.map(({ node: post }) => (
          <div
            style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
            key={post.id}
          >
            <p>
              <Link className="has-text-primary" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button is-small" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            title
            featureImage
            featureImageAlt
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;