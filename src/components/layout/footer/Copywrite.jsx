import {
  React,
  styled,
  Link
} from '../../../../config/imports'

const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: var(--md);
  background: var(--primary-dark);
`

export default () => (
  <StyledContainer>
    <small>
      <p style={{ display: 'inline', color: '#fff' }}>
        &copy; 2019&nbsp;
      </p>
      <Link
        color='var(--text-lighter)'
        hover='var(--primary-light)'
        to='/'
      >
        Dustin Heisey.&nbsp;
      </Link>
      <p style={{ display: 'inline', color: '#fff' }}>
        Images by&nbsp;
      </p>
      <Link
        external
        color='var(--text-lighter)'
        hover='var(--primary-light)'
        to='https://www.kylekrempleyphoto.com'
      >
        Trinamic Studio LLC
      </Link>
    </small>
  </StyledContainer>
)
