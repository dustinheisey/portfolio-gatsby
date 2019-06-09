import {
  React,
  styled,
  media
} from '../../../../config/imports'

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.columns},
    1fr
  );
  grid-gap: var(--md);

  ${media.down('phone')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--lg);

    & * {
      margin-bottom: var(--md);
    }
  `}
`

export default ({ columns, children }) => (
  <StyledGrid columns={columns}>{children}</StyledGrid>
)
