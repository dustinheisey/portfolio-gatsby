import {
  React,
  Grid,
  Blurb,
  Icon
} from '../../../../../config/imports'

export default () => (
  <div style={{ width: '100%' }}>
    <div style={{ marginBottom: 'var(--xl)' }}>
      <p>Robert Wright</p>
      <h1>
        Why Buddhism is True: The Science and Philosophy of
        Meditation and Enlightenment.
      </h1>
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
