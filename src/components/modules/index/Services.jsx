import {
  React,
  media,
  styled,
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionCSS,
  Section,
  Link
} from '../../../../config/imports'

import Deal from '../../../media/svg/inline/index-services.svg'

const StyledSection = styled(Section)`
  ${media.down('phone')`display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--lg);
  `}
`

const StyledDeal = styled(Deal)`
  ${media.down('phone')`
    width: 100%;
    height: auto;
    padding-bottom: var(--xl);
  `}
`

export default () => (
  <StyledSection xxl left>
    <StyledDeal
      style={{ maxWidth: '90%', margin: 'auto' }}
    />
    <div style={{ padding: 'var(--md)' }}>
      <h2>Services That Deliver</h2>
      <p>
        Whatever project you have and whatever stage you are
        at with it, I can help you get it off the ground or
        take it to the next level. With a carefully designed
        process and strategy, I&apos;m here to help you
        succeed.
      </p>
      <Accordion
        allowZeroExpanded='true'
        style={{
          height: 'minContent',
          width: '100%'
        }}
      >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton
              style={{
                background: 'var(--secondary-light)'
              }}
            >
              Custom Web Design
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              I design mobile first, responsive, blazing
              fast, user centered websites using the best
              practices and following important web
              standards.
            </p>
            <Link to='/web-design' dark>
              Read About Custom Web Design
            </Link>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton
              style={{
                background: 'var(--secondary-light)'
              }}
            >
              Progressive Web Apps
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              I transform your site into an offline ready,
              notification enabled, native-like Progressive
              Web App.
            </p>

            <Link to='/progressive-web-apps' dark>
              Read About Progressive Web Apps
            </Link>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton
              style={{
                background: 'var(--secondary-light)'
              }}
            >
              Optimization and Maintenance
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              I optimize your website for accessibility,
              usability and speed, keeping it online and bug
              free.
            </p>
            <Link to='/optimization-and-maintenance' dark>
              Read About Optimization and Maintenance
            </Link>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </StyledSection>
)
