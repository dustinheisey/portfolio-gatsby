import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {
  React,
  styled,
  GlobalStyle,
  Header,
  Coffee,
  Footer,
  Section
} from '../../../../config/imports'

const StyledHeader = styled(Header)`
  width: 100%;
`
const StyledSection = styled(Section)`
  background: transparent;
  min-height: 100vh;
  color: #fff;
  padding: 0;
  margin: 0;
`

const StyledCall = styled.div`
  padding: var(--xxl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--text-lighter);
`

const Heading = styled.h1`
  color: var(--text-lighter);
`

const Gradient = {
  css: 'white'
}
const Test = ({
  className,
  heading,
  children,
  text,
  img,
  btn
}) => (
  <StaticQuery
    query={graphql`
      query {
        index: file(relativePath: { eq: "cafe.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        about: file(relativePath: { eq: "forest.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        process: file(relativePath: { eq: "tables.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        services: file(
          relativePath: { eq: "waterfall.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        design: file(
          relativePath: { eq: "misty-forest.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        pwa: file(relativePath: { eq: "hearts.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        optimize: file(
          relativePath: { eq: "mountain.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        coffee: file(relativePath: { eq: "coffee.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        gradient: file(
          relativePath: { eq: "gradient.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
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
          <BackgroundImage
            Tag='section'
            className={className}
            fluid={imageData[img]}
            backgroundColor='linear-gradient(
                to right bottom,
                rgba(50, 50, 50, 0.35),
                rgba(100, 100, 100, 0.35)
              )'
          >
            <StyledHeader light />
            <StyledSection xxl>
              <StyledCall>
                <Heading
                  style={{ color: 'var(--text-lighter)' }}
                >
                  {heading}
                </Heading>
                <p style={{ color: 'var(--text-lighter)' }}>
                  {text}
                </p>
                {btn}
              </StyledCall>
            </StyledSection>
          </BackgroundImage>
          <main style={{ width: '100%' }}>{children}</main>
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
          <Footer />
        </>
      )
    }}
  />
)

const StyledTest = styled(Test)`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: var(--md);
`

export default StyledTest
