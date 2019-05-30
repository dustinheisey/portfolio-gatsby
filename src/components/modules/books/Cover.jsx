import {
  React,
  styled,
  media,
  Section
} from '../../../../config/imports'

import Books from '../../../media/svg/inline/books.svg'

const StyledSection = styled(Section)`
  justify-items: start;
  text-align: start;

  ${media.down('phone')`
    padding-bottom: var(--md);
  `}
`
const StyledText = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
`

const StyledBooks = styled(Books)`
  ${media.down('phone')`
    width: '100%';
    height: auto;
  `}
`
export default () => (
  <StyledSection xxl left>
    <StyledText>
      <h1>Books I Recommend.</h1>
      <p>
        Some books have stood out to me for having changed
        my perspectives on life and work. This is a place
        for me to keep track and share these important books
        with you all. I hope you
        can find your next book here.
      </p>
    </StyledText>
    <StyledBooks style={{ maxWidth: '100%' }} />
  </StyledSection>
)
