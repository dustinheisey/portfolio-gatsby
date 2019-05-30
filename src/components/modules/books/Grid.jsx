import {
  React,
  styled,
  Blurb,
  Link
} from '../../../../config/imports'

import Head from '../../../media/images/no-head.jpg'
import Minimalism from '../../../media/images/digital-minimalism.jpg'
import Habits from '../../../media/images/atomic-habits.jpg'
import Buddhism from '../../../media/images/buddhism.jpg'
import Sapiens from '../../../media/images/sapiens.jpg'
import Earth from '../../../media/images/uninhabitable-earth.jpeg'

const Container = styled.section`
  padding: var(--xl);
  columns: 3 300px;
  column-gap: 1rem;

  & * {
    width: 100%;
    & div {
      margin: 0 1rem 1rem 0;
      display: inline-block;
      width: 100%;
      text-align: center;
      border-radius: 5px;
      color: var(--secondary-darker);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transition: 0.3s;

      &:hover {
        box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
`

export default () => (
  <Container>
    <Link to='/books/on-having-no-head'>
      <Blurb>
        <img
          style={{ width: '100%' }}
          src={Head}
          alt='On Having No Head'
        />
        <h3>On Having No Head</h3>
      </Blurb>
    </Link>
    <Link to='/books/the-uninhabitable-earth'>
      <Blurb>
        <img
          style={{ width: '100%' }}
          src={Earth}
          alt='The Uninhabitable Earth'
        />
        <h3>The Uninhabitable Earth</h3>
      </Blurb>
    </Link>
    <Link to='/books/digital-minimalism'>
      <Blurb>
        <img
          style={{ width: '100%' }}
          src={Minimalism}
          alt='Digital Minimalism'
        />
        <h3>Digital Minimalism</h3>
      </Blurb>
    </Link>
    <Link to='/books/sapiens'>
      <Blurb>
        <img
          style={{ width: '100%' }}
          src={Sapiens}
          alt='Sapiens'
        />
        <h3>Sapiens</h3>
      </Blurb>
    </Link>
    <Link to='/books/atomic-habits'>
      <Blurb>
        <img
          style={{ width: '100%' }}
          src={Habits}
          alt='Atomic Habits'
        />
        <h3>Atomic Habits</h3>
      </Blurb>
    </Link>
    <Link to='/books/why-buddhism-is-true'>
      <Blurb>
        <img
          style={{ width: '100%' }}
          src={Buddhism}
          alt='Why Buddhism is True'
        />
        <h3>Why Buddhism is True</h3>
      </Blurb>
    </Link>
  </Container>
)
