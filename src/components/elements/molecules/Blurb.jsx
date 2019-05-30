import { styled, media } from '../../../../config/imports'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props =>
    props.left
      ? 'flex-start'
      : props.right
      ? 'flex-end'
      : 'center'};
  text-align: ${props =>
    props.left ? 'start' : props.right ? 'end' : 'center'};
  justify-content: center;
  & * {
    margin-bottom: var(--md);
  }
`
