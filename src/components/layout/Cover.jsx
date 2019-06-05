import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {
  React,
  styled,
  GlobalStyle,
  Header,
  Coffee,
  Footer,
  Section,
  SEO
} from '../../../config/imports'

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

const StyledContainer = styled.section`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: var(--md);
`
const Cover = ({
  className,
  heading,
  children,
  text,
  img,
  btn,
  title,
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
          <SEO title={title} description={description} />
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
            <StyledContainer img={img}>
              <StyledHeader light />
              <StyledSection xxl>
                <StyledCall>
                  <Heading
                    style={{ color: 'var(--text-lighter)' }}
                  >
                    {heading}
                  </Heading>
                  <p
                    style={{ color: 'var(--text-lighter)' }}
                  >
                    {text}
                  </p>
                  {btn}
                </StyledCall>
              </StyledSection>
            </StyledContainer>
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

export default styled(Cover)`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: var(--md);
`
