import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.span`
  border-radius: 10px;
  font-size: 75%;
  padding: var(--xs) var(--sm);
  margin: var(--xs);
  color: var(--secondary-lighter);
  background: ${props => {
    if (props.tag1) {
      return 'var(--tag1)'
    }
    if (props.tag2) {
      return 'var(--tag2)'
    }
    if (props.tag3) {
      return 'var(--tag3)'
    }
    if (props.tag4) {
      return 'var(--tag4)'
    }
    if (props.tag5) {
      return 'var(--tag5)'
    }
    return 'grey'
  }};
`

export default ({ tag, tag1, tag2, tag3, tag4, tag5 }) => {
  if (tag1) {
    return <StyledTag tag1>{tag}</StyledTag>
  }
  if (tag2) {
    return <StyledTag tag2>{tag}</StyledTag>
  }
  if (tag3) {
    return <StyledTag tag3>{tag}</StyledTag>
  }
  if (tag4) {
    return <StyledTag tag4>{tag}</StyledTag>
  }
  if (tag5) {
    return <StyledTag tag5>{tag}</StyledTag>
  }
  return <StyledTag>{tag}</StyledTag>
}
