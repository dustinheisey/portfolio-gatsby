import {
  React,
  Bare,
  Section,
  Btn
} from '../../config/imports'

import Success from '../components/modules/success/success'

const Content = {
  title: 'Success | Dustin Heisey',
  description:
    'I got your submission and will respond ASAP! Thanks!'
}

export default () => (
  <Bare
    title={Content.title}
    description={Content.description}
  >
    <Success />
  </Bare>
)
