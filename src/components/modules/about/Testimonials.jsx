import {
  React,
  styled,
  media,
  Section,
  Grid,
  Blurb
} from '../../../../config/imports'

import Marsha from '../../../media/images/marsha.jpg'
import Hoover from '../../../media/images/hoover.jpg'

const StyledImg = styled.img`
  width: 12vmin;
  height: auto;
  border-radius: 50%;
`

const StyledBlurb = styled(Blurb)`
  ${media.down('phone')`
    margin-bottom: var(--xxl);
  `}
`
export default () => (
  <Section>
    <Grid columns={2}>
      <StyledBlurb style={{ justifyContent: 'flexStart' }}>
        <StyledImg src={Marsha} alt='Maarsha Mayo' />
        <blockquote style={{ padding: 'var(--md)' }}>
          You&apos;ve completely changed my business!
          You&apos;ve eliminated paper from my company and
          given us countless hours to help our students and
          their families. Thank you so much!
        </blockquote>
        <h3>Marsha Mayo</h3>
        <caption style={{ fontSize: '125%' }}>
          Owner, Aerials Gymnastics
        </caption>
      </StyledBlurb>
      <StyledBlurb style={{ justifyContent: 'flexStart' }}>
        <StyledImg src={Hoover} alt='Jarod Hoover' />
        <blockquote style={{ padding: 'var(--md)' }}>
          I am beyond pleased with Dustin’s impeccable
          service. He was extremely attentive in
          understanding my business and provided very
          personalized help. Great designer. I 100%
          recommend working with him.
        </blockquote>
        <h3>Hoover Honey</h3>
        <caption style={{ fontSize: '125%' }}>
          Owner, Aerials Gymnastics
        </caption>
      </StyledBlurb>
    </Grid>
  </Section>
)
