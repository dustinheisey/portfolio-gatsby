import {
  React,
  styled,
  Section,
  Btn
} from '../../../../config/imports'

import PWA from '../../../media/svg/inline/services-pwa.svg'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const StyledImg = styled(PWA)`
  width: 100%;
  margin: auto;
`

export default () => (
  <Section xl right>
    <StyledCall>
      <h2>Progressive Web Apps</h2>
      <p>
        I create an offline ready, notification enabled
        native mobile experience for your website,
        delighting your users and increasing usage and
        sales.
      </p>
      <Btn
        primary
        link='/progressive-web-apps'
        content='Read about progressive web apps'
      />
    </StyledCall>
    <StyledImg style={{ width: '100%' }} />
  </Section>
)
