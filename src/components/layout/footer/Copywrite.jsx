import {
  React,
  styled,
  media,
  Link
} from '../../../../config/imports'

const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--xs) var(--lg) var(--md) var(--md);
  background: var(--secondary-lighter);

  ${media.down('phone')`
    justify-content: center;
  `}
`

export default () => (
  <StyledContainer>
    <small>
      <p style={{ display: 'inline' }}>
        &copy; 2019&nbsp;
      </p>
      <Link
        hover='var(--primary-light)'
        to='/'
      >
        Dustin Heisey.&nbsp;
      </Link>
      <p style={{ display: 'inline' }}>
        Images by&nbsp;
      </p>
      <Link
        external
        hover='var(--primary-light)'
        to='https://www.kylekrempleyphoto.com'
      >
        Trinamic Studio LLC
      </Link>
    </small>
  </StyledContainer>
)
