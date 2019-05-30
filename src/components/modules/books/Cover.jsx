import {
  React,
  styled,
  Section
} from '../../../../config/imports'

import Books from '../../../media/svg/inline/books.svg'

const StyledSection = styled(Section)`
  justify-items: start;
  text-align: start;
`
const StyledText = styled.div`
  padding: var(--lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: start;
`
export default () => (
  <StyledSection xxl left>
    <StyledText>
      <h1>Books I Recommend.</h1>
      <p>
        Some books have stood out to me for having changed
        my perspectives on life and work. This is a place
        for me to keep track and share these important books
        and the key takeaways I got from them. I hope you
        can find valuable insights, or your next book here.
      </p>
    </StyledText>
    <Books style={{ maxWidth: '100%' }} />
  </StyledSection>
)
