import {
  React,
  styled,
  media,
  Section,
  Btn
} from '../../../config/imports'
import Coffee from '../../media/images/coffee.jpg'

const StyledCall = styled(Section)`
  padding: var(--md);
  background: url(${Coffee});
  background-size: cover;
  background-position: 50% 80%;
  background-attachment: fixed;
  min-height: 75vh;
  color: #fff;

  & * {
    margin: var(--xs) 0;
  }

  ${media.down('phone')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: var(--xxl);

    & * {
      margin: var(--md) 0;
    }

    & h2 {
      margin: var(--sm) 0;
    }
  `}
`

export default () => (
  <StyledCall xxl>
    <h2 style={{ color: 'var(--text-lighter)' }}>
      Let&apos;s Get Coffee
    </h2>
    <p style={{ color: 'var(--text-lighter)' }}>
      I&apos;d love to get to know you and your business
    </p>
    <Btn light content="Let's Connect" link='/contact' />
  </StyledCall>
)
