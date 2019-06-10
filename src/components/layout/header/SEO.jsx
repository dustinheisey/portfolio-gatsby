import { React, Helmet } from '../../../../config/imports'

export default ({ title, description, index }) => (
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
    {index && (
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
    )}
  </Helmet>
)
