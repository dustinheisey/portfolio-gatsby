import {
  React,
  Link,
  Bare,
  SEO
} from '../../config/imports'

export default () => (
  <Bare title='404: Not found | Dustin Heisey'>
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
