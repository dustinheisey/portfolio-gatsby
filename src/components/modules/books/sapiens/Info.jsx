import {
  React,
  Grid,
  Blurb,
  Icon
} from '../../../../../config/imports'

export default () => (
  <div style={{ width: '100%' }}>
    <div style={{ marginBottom: 'var(--xl)' }}>
      <caption style={{ display: 'flex' }}>
        Yuval Noah Harari
      </caption>
      <h1>Sapiens: A Brief History of Human Kind.</h1>
      <p>
        Separated they live in Bookmarks right at the coast
        of the famous Semantics, large language ocean
        Separated they live in Bookmarks right
      </p>
    </div>
    <h2>Key Takeaways</h2>
    <Grid columns={2}>
      <Blurb left>
        <Icon />
        <p>
          Separated they live in Bookmarks right at the
          coast of the famous Semantics, large language
        </p>
      </Blurb>
      <Blurb left>
        <Icon />
        <p>
          Separated they live in Bookmarks right at the
          coast of the famous Semantics, large language
        </p>
      </Blurb>
      <Blurb left>
        <Icon />
        <p>
          Separated they live in Bookmarks right at the
          coast of the famous Semantics, large language
        </p>
      </Blurb>
      <Blurb left>
        <Icon />
        <p>
          Separated they live in Bookmarks right at the
          coast of the famous Semantics, large language
        </p>
      </Blurb>
    </Grid>
  </div>
)
