/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-lone-blocks */
import {
  React,
  styled,
  media,
  Link
} from '../../../../config/imports'

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: var(--sm) var(--lg);
  grid-template-columns: repeat(2, 1fr);
  margin: 0;

  ${media.down(
    'phone'
  )`justify-items: start; text-align: start;`}
`
export default () => (
  <StyledList>
    <li>
      <Link dark to='/'>
        Home
      </Link>
    </li>
    <li>
      <Link dark to='/about'>
        About
      </Link>
    </li>
    <li>
      <Link dark to='/process'>
        Process
      </Link>
    </li>
    <li>
      <Link dark to='/recommended-books'>
        Recommended Books
      </Link>
    </li>
    <li>
      <Link dark to='/services'>
        Services
      </Link>
    </li>
    <li>
      <Link dark to='/web-design'>
        Custom Web Design
      </Link>
    </li>
    <li>
      <Link dark to='/progressive-web-apps'>
        Progressive Web Apps
      </Link>
    </li>
    <li>
      <Link dark to='/optimization-and-maintenance'>
        Optimization and Maintenance
      </Link>
    </li>
    <li>
      <Link dark to='/portfolio'>
        Portfolio
      </Link>
    </li>
    <li>
      <Link dark to='/blog'>
        Blog
      </Link>
    </li>
    <li>
      <Link dark to='/contact'>
        Contact
      </Link>
    </li>
  </StyledList>
)
