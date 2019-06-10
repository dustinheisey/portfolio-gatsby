/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable eslint */
import { React, Helmet } from '../../../../config/imports'

export default ({ title, description }) => (
  <Helmet
    title={title}
    meta={[
      {
        name: 'description',
        content: description
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:creator',
        content: 'Dustin Heisey'
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      }
    ]}
  >
    <html lang='en' />
    <script>
      !function(g,s,q,r,d)
      {
        (r = g[r] =
          g[r] ||
          function() {
            ;(r.q = r.q || []).push(arguments)
          })
      }
      d=s.createElement(q);q=s.getElementsByTagName(q)[0];
      d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
      insertBefore(d,q)}(window,document,'script','_gs');
      _gs('GSN-995552-V'); _gs('set', 'anonymizeIP', true);
    </script>
  </Helmet>
)
