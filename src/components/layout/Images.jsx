/* eslint-disable no-undef */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ query }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          Aerials: file(
            relativePath: { eq: "aerials.jpg" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Habits: file(
            relativePath: { eq: "atomic-habits.jpg" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Buddhism: file(
            relativePath: { eq: "buddhism.jpg" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Minimalism: file(
            relativePath: { eq: "digital-minimalism.jpg" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Honey: file(
            relativePath: { eq: "hoover-honey.jpg" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Hoover: file(relativePath: { eq: "hoover.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Marsha: file(relativePath: { eq: "marsha.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Head: file(relativePath: { eq: "no-head.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Sapiens: file(
            relativePath: { eq: "sapiens.jpg" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Earth: file(
            relativePath: { eq: "uninhabitable-earth.jpg" }
          ) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const Queries = []
        Queries[0] = data.Aerials.childImageSharp.fluid
        Queries[1] = data.Habits.childImageSharp.fluid
        Queries[2] = data.Buddhism.childImageSharp.fluid
        Queries[3] = data.Minimalism.childImageSharp.fluid
        Queries[4] = data.Honey.childImageSharp.fluid
        Queries[5] = data.Hoover.childImageSharp.fluid
        Queries[6] = data.Marsha.childImageSharp.fluid
        Queries[7] = data.Head.childImageSharp.fluid
        Queries[8] = data.Sapiens.childImageSharp.fluid
        Queries[9] = data.Earth.childImageSharp.fluid
        return <Img fluid={Queries[query]} />
      }}
    />
  )
}

export default Image
// const data = useStaticQuery(graphql`
//   query Query {
//     aerials: file(relativePath: { eq: "aerials.jpg" }) {
//       childImageSharp {
//         fixed(width: 400) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     habits: file(
//       relativePath: { eq: "atomic-habits.jpg" }
//     ) {
//       childImageSharp {
//         fixed(width: 400) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     buddhism: file(relativePath: { eq: "buddhism.jpg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)
