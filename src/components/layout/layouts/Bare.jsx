import {
  React,
  GlobalStyle,
  Header,
  Coffee,
  Footer,
  SEO
} from '../../../../config/imports'

import Logo from '../../../media/images/logo.png'

export default ({
  title,
  description,
  contact,
  children
}) => {
  return (
    <>
      <GlobalStyle />
      <SEO
        title={title}
        description={description}
        img={Logo}
      />
      <div style={{ padding: 'var(--md)' }}>
        <Header />
      </div>
      <main style={{ width: '100%' }}>{children}</main>
      {!contact && <Coffee />}
      <Footer />
    </>
  )
}
