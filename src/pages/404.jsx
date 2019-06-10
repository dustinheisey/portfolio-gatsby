import { React, Bare } from '../../config/imports'
import Error from '../components/modules/404/error'

const Content = {
  title:
    'The page your looking for isn&apos;t here | Dustin Heisey'
}
export default () => (
  <Bare title={Content.title}>
    <Error />
  </Bare>
)
