import {
  React,
  styled,
  Section,
  Btn
} from '../../../../config/imports'

import Aerials from '../../../media/images/aerials.jpg'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => (
  <Section xl right>
    <StyledCall>
      <caption>Wordpress</caption>
      <h2>Aerials Gymnastics</h2>
      <p>
        I helped develop the brand image as well as the
        website for Aerials Gymnastics, and increased
        customer engagement by more than 50%.
      </p>
      <Btn
        primary
        external
        link='http://www.aerialsgymnastics.net'
        content='View Website'
      />
    </StyledCall>
    <img
      style={{ width: '100%', borderRadius: '5px' }}
      src={Aerials}
      alt='Aerials Gymnastics'
    />
  </Section>
)
