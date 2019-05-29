import {
  React,
  Section,
  Grid,
  Blurb
} from '../../../../config/imports'

import Fast from '../../../media/svg/inline/fast.svg'
import Experience from '../../../media/svg/inline/experience.svg'
import Responsive from '../../../media/svg/inline/responsive.svg'
import Conversions from '../../../media/svg/inline/conversion.svg'

export default () => (
  <Section xl>
    <h2 style={{ textAlign: 'center' }}>
      All of This Creates Impressive Results
    </h2>
    <Grid columns={4}>
      <Blurb>
        <Experience style={{ alignSelf: 'center', width: '12vmin' }} />
        <h3>Great User Experience</h3>
        <p>
          Your website can be a powerful sales tool, a
          online utility, a breathtaking experience, or all
          of the above and more.
        </p>
      </Blurb>
      <Blurb>
        <Responsive style={{ alignSelf: 'center',width: '12vmin' }} />
        <h3>Mobile First & Responsive</h3>
        <p>
          Most people access the web from multiple devices,
          often at the same time. Your website needs to look
          great on all of them.
        </p>
      </Blurb>
      <Blurb>
        <Fast style={{ alignSelf: 'center',width: '12vmin' }} />
        <h3>Blazing Fast Speed</h3>
        <p>
          Having a great website means nothing when your
          frustrated user never gets to your website because
          it took to long to load. Let me take care of that
          for you.
        </p>
      </Blurb>
      <Blurb>
        <Conversions style={{ alignSelf: 'center',width: '12vmin' }} />
        <h3>Higher Conversions</h3>
        <p>
          Getting to know your business and taking care of
          your users is an investment that pays enormous
          dividends. Are you ready to invest?
        </p>
      </Blurb>
    </Grid>
  </Section>
)
