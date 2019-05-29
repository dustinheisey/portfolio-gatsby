import {
  React,
  styled,
  Section,
  Grid,
  Blurb
} from '../../../../config/imports'

import Fire from '../../../media/svg/inline/fire.svg'
import Mobile from '../../../media/svg/inline/mobile.svg'
import Offline from '../../../media/svg/inline/offline.svg'
import Notification from '../../../media/svg/inline/notifications.svg'

const StyledBlurb = styled(Blurb)`
  justify-content: flex-start;
`
export default () => (
  <Section xl>
    <h2 style={{ textAlign: 'center' }}>
      Powerful New Features
    </h2>
    <Grid columns={4}>
      <StyledBlurb>
        <Fire style={{ width: '12vmin' }} />
        <h3>Blazing Fast Speed</h3>
        <p>
          Code splitting, inline critical css, pre-fetching
          data and many other optimizations to create
          websites that load extremely quickly.
        </p>
      </StyledBlurb>
      <StyledBlurb>
        <Mobile style={{ width: '12vmin' }} />
        <h3>Native Mobile UI</h3>
        <p>
          App like navigation, border-less display with no
          back buttons or urls, a custom app icon when added
          to the home screen and fluid, native-like
          animations throughout the app.
        </p>
      </StyledBlurb>
      <StyledBlurb>
        <Offline style={{ width: '12vmin' }} />
        <h3>Offline Ready</h3>
        <p>
          After your app is installed on a users&apos;
          device, then can access it offline from then on,
          refreshing if new content is added every time they
          reconnect.
        </p>
      </StyledBlurb>
      <StyledBlurb>
        <Notification style={{ width: '12vmin' }} />
        <h3>Send Notifications</h3>
        <p>
          Once installed, you can remind your users
          periodically to visit your web app whenever you
          post a blog post, have a sale, or just to give a
          reminder to check out your business.
        </p>
      </StyledBlurb>
    </Grid>
  </Section>
)
