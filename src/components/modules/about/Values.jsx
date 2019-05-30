import {
  React,
  styled,
  media,
  Section,
  Grid,
  Btn,
  Blurb
} from '../../../../config/imports'

import User from '../../../media/svg/inline/user.svg'
import Improvement from '../../../media/svg/inline/improvement.svg'
import Responsibility from '../../../media/svg/inline/world.svg'

const StyledHeading = styled.h2`
  ${media.down('phone')`
  text-align: center;
  `}
`

const StyledGrid = styled(Grid)`
  ${media.down('phone')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

const StyledSection = styled(Section)`
  ${media.down('phone')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
export default () => (
  <StyledSection xxl>
    <StyledHeading>I Have Strong Values</StyledHeading>
    <StyledGrid columns={3}>
      <Blurb>
        <User style={{ width: '12vmin' }} />
        <h3>User Centered Design</h3>
        <p>
          Your website has two important tasks, to help you
          achieve your goals, and to help your users achieve
          theirs. All to often the users aren&apos;t in the
          minds of designers when websites are made, and it
          is vitally important to your success.
        </p>
      </Blurb>
      <Blurb>
        <Improvement style={{ width: '12vmin' }} />
        <h3>Constant Improvement</h3>
        <p>
          The web is a vast ecosystem of constantly changing
          technologies, conventions, and practices. I am
          focussed on constantly being up to date with the
          progress of the web, and I feel delighted when I
          can use that knowledge to implement a better way
          of doing things.
        </p>
      </Blurb>
      <Blurb>
        <Responsibility style={{ width: '12vmin' }} />
        <h3>Social Responsibility</h3>
        <p>
          I believe in that most people are good, and I work
          with brands to highlight the actions they are
          taking to leave their communities better of then
          when they started doing business. This is all in
          an effort to have my own positive impact on the
          world.
        </p>
      </Blurb>
    </StyledGrid>
    <Btn primary link='/process' content='See my process' />
  </StyledSection>
)
