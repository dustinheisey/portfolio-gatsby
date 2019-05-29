import React from 'react'
import Popup from 'reactjs-popup'

export default ({ trigger, children }) => (
  <Popup trigger={trigger} modal closeOnDocumentClick>
    {children}
  </Popup>
)
