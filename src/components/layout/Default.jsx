import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Logo from '../../media/images/logo.png'
import {
  React,
  styled,
  GlobalStyle,
  Header,
  Coffee,
  Footer,
  SEO
} from '../../../config/imports'

const Default = ({
  className,
  children,
  title,
  contact,
  description
}) => (
  <StaticQuery
    query={graphql`
      query {
        index: file(relativePath: { eq: "cafe.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about: file(relativePath: { eq: "forest.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        process: file(relativePath: { eq: "tables.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        services: file(
          relativePath: { eq: "waterfall.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        design: file(
          relativePath: { eq: "misty-forest.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pwa: file(relativePath: { eq: "hearts.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        optimize: file(
          relativePath: { eq: "mountain.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coffee: file(relativePath: { eq: "coffee.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gradient: file(
          relativePath: { eq: "gradient.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = []
      imageData[0] = data.index.childImageSharp.fluid
      imageData[1] = data.about.childImageSharp.fluid
      imageData[2] = data.process.childImageSharp.fluid
      imageData[3] = data.services.childImageSharp.fluid
      imageData[4] = data.design.childImageSharp.fluid
      imageData[5] = data.pwa.childImageSharp.fluid
      imageData[6] = data.optimize.childImageSharp.fluid
      imageData[7] = data.coffee.childImageSharp.fluid
      return (
        <>
          <GlobalStyle />
          <SEO
            title={title}
            description={description}
            img={Logo}
          />
          <div style={{ padding: 'var(--md)' }}>
            <Header />
          </div>
          <main style={{ width: '100%' }}>{children}</main>
          {!contact && (
            <BackgroundImage
              Tag='section'
              className={className}
              fluid={imageData[7]}
              backgroundColor='linear-gradient(
                to right bottom,
                rgba(50, 50, 50, 0.35),
                rgba(100, 100, 100, 0.35)
              )'
            >
              <Coffee />
            </BackgroundImage>
          )}
          <Footer />
        </>
      )
    }}
  />
)

export default styled(Default)`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: var(--md);
`
