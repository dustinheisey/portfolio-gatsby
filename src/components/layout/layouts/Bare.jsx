/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import GlobalStyle from '../../../../config/global'
import Header from '../header/Header'
import Coffee from '../Coffee'
import Footer from '../footer/Footer'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <div style={{ padding: 'var(--md)' }}>
      <Header />
    </div>
    <main>{children}</main>
    <Coffee />
    <Footer />
  </>
)
