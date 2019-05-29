/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export default styled.section`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: ${props =>
    props.left
      ? '.55fr .45fr'
      : props.right
      ? '.45fr .55fr'
      : '1fr'};
  grid-gap: var(--md);
  padding: ${props =>
    props.sm
      ? 'var(--sm)'
      : props.lg
      ? 'var(--lg)'
      : props.xl
      ? 'var(--xl)'
      : props.xxl
      ? 'var(--xxl)'
      : 'var(--md)'};
`
