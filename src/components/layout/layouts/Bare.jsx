import {
  React,
  GlobalStyle,
  Header,
  Coffee,
  Footer,
  SEO
} from '../../../../config/imports'

export default ({ title, description, children }) => {
  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={description} />
      <div style={{ padding: 'var(--md)' }}>
        <Header />
      </div>
      <main style={{ width: '100%' }}>{children}</main>
      <Coffee />
      <Footer />
    </>
  )
}
