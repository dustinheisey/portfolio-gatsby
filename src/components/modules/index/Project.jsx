import {
  React,
  styled,
  media,
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

const StyledImg = styled.img`
  width: 100%;
  margin: auto;
  border-radius: 5px;
`

const StyledSection = styled(Section)`
  ${media.down('phone')`display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
export default () => (
  <StyledSection xl right>
    <StyledCall>
      <aside>My most recent project</aside>
      <h2>Hoover Honey</h2>
      <p>
        I designed a progressive web app for Hoover Honey,
        creating their online presence and increasing
        awareness of the company in the process
      </p>
      <Btn
        primary
        link='/portfolio'
        content='See Portfolio'
      />
    </StyledCall>
    <img src={Honey} alt='Hoover Honey' />
  </StyledSection>
)
