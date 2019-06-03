import {
  React,
  styled,
  Section,
  Btn
} from '../../../../config/imports'

import Honey from '../../../media/images/hoover-honey.jpg'

const StyledCall = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export default () => (
  <Section xl left>
    <img
      style={{ width: '100%', borderRadius: '5px' }}
      src={Honey}
      alt='Hoover Honey'
    />
    <StyledCall>
      <aside>Eccomerce</aside>
      <h2>Hoover Honey</h2>
      <p>
        I designed a progressive web app for Hoover Honey,
        creating their online presence and increasing
        awareness of the company in the process.
      </p>
      <Btn
        primary
        external
        link='https://hooverhoney.com'
        content='View Website'
      />
    </StyledCall>
  </Section>
)
