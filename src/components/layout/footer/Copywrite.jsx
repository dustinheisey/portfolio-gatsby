import {
  React,
  styled,
  media,
  Link
} from '../../../../config/imports'

const StyledContainer = styled.div`
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
    <small style={{ display: 'inline' }}>
      &copy; 2019&nbsp;
    </small>
    <small>
      <Link hover='var(--primary-light)' dark to='/'>
        Dustin Heisey.&nbsp;
      </Link>
    </small>
    <small style={{ display: 'inline' }}>
      Images by&nbsp;
    </small>
    <small>
      <Link
        external
        dark
        hover='var(--primary-light)'
        to='https://www.kylekrempleyphoto.com'
      >
        Trinamic Studio LLC
      </Link>
    </small>
  </StyledContainer>
)
