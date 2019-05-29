/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  React,
  Link,
  Bare,
  SEO
} from '../../config/imports'

export default () => (
  <Bare>
    <SEO title='404: Not found | Dustin Heisey' />
    <h1>Not Found.</h1>
    <p>
      You just hit a route that doesn&#39;t exist... the
      sadness.
      <br />
      <Link link='/'>Take me home.</Link>
    </p>
  </Bare>
)
