import {
  React,
  Section,
  Grid
} from '../../../../config/imports'

export default () => (
  <Section xl>
    <Grid columns={2}>
      <div style={{ padding: 'var(--md)' }}>
        <h2>Websites Made for You and Your Users</h2>
        <p>
          I design thoroughly researched websites and web
          apps tailored to your business and what it can do
          for your customers. I pay special attention to the
          experience of each user of your website, making it
          as effortless and intuitive as possible.
        </p>
      </div>
      <div style={{ padding: 'var(--md)' }}>
        <h2>Built Using the Latest Technologies</h2>
        <p>
          I have a quest for constant improvement with the
          services I offer. Thats extremely important for
          web designers to have, considering that the web
          changes daily with new technologies and standards.
          I keep your online presence at the forefront of
          this constantly changing landscape.
        </p>
      </div>
    </Grid>
  </Section>
)
