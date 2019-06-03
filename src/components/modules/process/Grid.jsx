import {
  React,
  styled,
  Section,
  Grid
} from '../../../../config/imports'

import Business from '../../../media/svg/inline/business.svg'
import Users from '../../../media/svg/inline/users.svg'
import Structure from '../../../media/svg/inline/structure.svg'
import Inspiration from '../../../media/svg/inline/inspiration.svg'
import Wireframe from '../../../media/svg/inline/wireframe.svg'
import Design from '../../../media/svg/inline/design.svg'
import Develop from '../../../media/svg/inline/development.svg'
import PWA from '../../../media/svg/inline/pwa.svg'
import Optimize from '../../../media/svg/inline/optimization.svg'

const StyledCall = styled.div`
  padding: var(--md) var(--xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const StyledGrid = styled(Grid)`
  justify-items: center;
  align-content: center;
  padding: var(--xxl);
  width: 100%;
`

const StyledIcon = styled.svg`
  width: 50%;
`
export default () => (
  <Section id='process'>
    <aside style={{ marginTop: 'var(--xxl)' }}>
      How I Make Websites
    </aside>
    <h2
      style={{
        marginBottom: '0'
      }}
    >
      This is My Process
    </h2>
    <StyledGrid
      style={{
        justifyItems: 'center;',
        alignContent: 'center',
        padding: 'var(--xxl)',
        width: '100%'
      }}
      columns={3}
    >
      <StyledCall style={{ paddingTop: 'var(--xxl)' }}>
        <StyledIcon as={Business} />
        <h2>
          1.
          <br />
          Understand Your Business.
        </h2>
        <p>
          I make it a requirement to intimately understand
          your business and its goals before I do anything
          else.
        </p>
      </StyledCall>
      <StyledCall
        style={{
          paddingTop: 'var(--xxl)'
        }}
      >
        <StyledIcon as={Users} />
        <h2>
          2.
          <br />
          Understand Your Users.
        </h2>
        <p>
          After we have defined your target market I will
          research to understand the people within it, their
          likes and dislikes, their goals when coming to
          your website, and how to help achieve them.
        </p>
      </StyledCall>
      <StyledCall
        style={{
          paddingTop: 'var(--xxl)'
        }}
      >
        <StyledIcon as={Structure} />
        <h2>
          3.
          <br />
          Plan the Site Architecture.
        </h2>
        <p>
          Once I have a clear understanding of both your
          business and its customers, I can then carefully
          craft the optimal site architecture that is as
          intuitive as possible and encourages efficient
          site navigation.
        </p>
      </StyledCall>
      <StyledCall>
        <StyledIcon as={Inspiration} />
        <h2>
          4.
          <br />
          Gather Inspiration.
        </h2>
        <p>
          After a site structure is constructed, I collect
          the content for the website from either you, your
          marketing team, or a professional copywriter or
          photographer, and then I gather inspiration
          directly focused on the information I have
          gathered from my research.
        </p>
      </StyledCall>
      <StyledCall>
        <StyledIcon as={Wireframe} />
        <h2>
          5.
          <br />
          Create the Wireframe.
        </h2>
        <p>
          With the content and inspiration in hand, I start
          creating a blueprint for every page of your
          website on both desktop and mobile.
        </p>
      </StyledCall>
      <StyledCall>
        <StyledIcon as={Design} />
        <h2>
          6.
          <br />
          Add the Design.
        </h2>
        <p>
          I then add the spark that makes your website
          unique, colors that evoke the correct emotions,
          typography that is readable and beautiful, images,
          videos, illustrations, and icons that tells the
          intended stories, all on a layout that encourages
          ease of use and enjoyable experience.
        </p>
      </StyledCall>
      <StyledCall
        style={{
          paddingBottom: 'var(--xxl)'
        }}
      >
        <StyledIcon as={Develop} />
        <h2>
          7.
          <br />
          Develop the Site.
        </h2>
        <p>
          The next task is to convert the stunning design
          that we have created into a functioning website. I
          make sure to use tried and true practices that
          emphasize accessibility, usability and speed.
        </p>
      </StyledCall>
      <StyledCall
        style={{
          paddingBottom: 'var(--xxl)'
        }}
      >
        <StyledIcon as={PWA} />
        <h2>
          8.
          <br />
          Create the Progressive Web App.
        </h2>
        <p>
          If you are interested in taking the website to the
          next level, I then transform the site into a
          Progressive Web App, with offline support,
          notifications, and a native mobile user interface
          on phones and tablets.
        </p>
      </StyledCall>
      <StyledCall
        style={{
          paddingBottom: 'var(--xxl)'
        }}
      >
        <StyledIcon as={Optimize} />
        <h2>
          9.
          <br />
          Optimize & Maintain.
        </h2>
        <p>
          After we finish the project, I can send you the
          source code, or, if interested, I can upload the
          site to the web for you and keep it updated and
          optimized, using latest technologies, best
          practices, and avoiding bugs.
        </p>
      </StyledCall>
    </StyledGrid>
  </Section>
)
