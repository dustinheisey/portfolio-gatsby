import {
  React,
  GlobalStyle,
  Header,
  Coffee,
  Footer
} from '../../../../config/imports'

export default ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div style={{ padding: 'var(--md)' }}>
        <Header />
      </div>
      <main style={{width:'100%'}}>{children}</main>
      <Coffee />
      <Footer />
    </>
  )
}
