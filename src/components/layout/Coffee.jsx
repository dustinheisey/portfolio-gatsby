import {
  React,
  styled,
  media,
  Section,
  Btn
} from '../../../config/imports'
import Coffee from '../../media/images/coffee.jpg'

const StyledCall = styled(Section)`
  background: linear-gradient(
      to right bottom,
      rgba(50, 50, 50, 0.3),
      rgba(100, 100, 100, 0.3)
    ),
    url(${Coffee});
  background-size: cover;
  background-position: 50% 75%;
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
    <Btn
      light
      content="Let's Connect"
      link='/contact'
      color='var(--text-secondary-lighter)'
    />
  </StyledCall>
)
