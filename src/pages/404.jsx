import { React, Link, Bare } from '../../config/imports'

const Content = {
  title: '404: Not found | Dustin Heisey'
}
export default () => (
  <Bare title={Content.title}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--xxl)'
      }}
    >
      <h1>Not Found.</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the
        sadness.
      </p>
      <Link link='/' dark>
        Take me home.
      </Link>
    </div>
  </Bare>
)
