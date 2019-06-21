import { graphql } from 'gatsby'
import { React, Cover, Btn } from '../../config/imports'

const Content = {
  title:
    'Design Tips & My Thoughts About The Universe | Dustin Heisey',
  description:
    'My name is Dustin Heisey, and I am located in Portland, Oregon. I help businesses develop an online presence that resonates with people and helps you help them in the way only you know how to.',
  heading:
    'Read Some Design & Development Tips, as Well as My Thoughts on The Universe',
  index: 8
}

export default ({ data }) => (
  <Cover
    img={Content.index}
    heading={Content.heading}
    title={Content.title}
    description={Content.description}
  >
    {data.allMarkdownRemark.edges.map(post => (
      <div style={{ padding: 'var(--xxl)' }}>
        <h4>{post.node.frontmatter.caption}</h4>
        <h2>{post.node.frontmatter.title}</h2>
        <h3>{post.node.frontmatter.date}</h3>
        <p>{post.node.frontmatter.excerpt}</p>
        <Btn
          primary
          key={post.node.id}
          link={post.node.frontmatter.path}
          content="Read Post"
        />
      </div>
    ))}
  </Cover>
)

export const PageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
            caption
          }
        }
      }
    }
  }
`
