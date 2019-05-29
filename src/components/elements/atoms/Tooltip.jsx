import React from 'react'
import Popup from 'reactjs-popup'

const Style = {
  background: 'var(--secondary-dark',
  color: 'var(--secondary-lighter',
  boxShadow: 'none',
  outline: 'none',
  border: 'none',
  borderRadius: '5px',
  width: 'min-content',
  padding: 'var(--sm)'
}

const ArrowStyle = {
  background: 'var(--secondary-dark)',
  boxShadow: 'none',
  outline: 'none',
  border: 'none'
}
export default ({ position, trigger, children }) => (
  <Popup
    position={position}
    on='hover'
    trigger={trigger}
    contentStyle={Style}
    arrowStyle={ArrowStyle}
  >
    {children}
  </Popup>
)
