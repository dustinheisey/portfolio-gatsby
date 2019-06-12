/* eslint-disable react/no-danger */
import { graphql } from 'gatsby'
import { React, Bare } from '../../config/imports'

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Bare
      heading={frontmatter.title}
      title={`${frontmatter.title} | Blog | Dustin Heisey`}
      description={frontmatter.description}
      index
    >
      <div style={{ padding: 'var(--xxl)' }}>
        <h1>{frontmatter.title}</h1>
        <h2
          style={{ fontSize: '150%', color: 'var(--text)' }}
        >
          {frontmatter.date}
        </h2>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Bare>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
