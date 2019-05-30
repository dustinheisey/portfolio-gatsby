import {
  React,
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionCSS,
  Section,
  Link
} from '../../../../config/imports'

import Deal from '../../../media/svg/inline/deal.svg'

export default () => (
  <Section xxl left>
    <Deal style={{ maxWidth: '100%', margin: 'auto' }} />
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
        allowMultipleExpanded='true'
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
            <Link link='/web-design'>
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

            <Link link='/progressive-web-apps'>
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
            <Link link='/optimization-and-maintenance'>
              Read About Optimization and Maintenance
            </Link>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  </Section>
)
