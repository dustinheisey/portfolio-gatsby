import { React, Bare } from '../../config/imports'
import Error from '../components/modules/404/error'

const Content = {
  title: '404: Not found | Dustin Heisey'
}
export default () => (
  <Bare title={Content.title}>
    <Error />
  </Bare>
)
