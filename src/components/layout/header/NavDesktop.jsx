import {
  React,
  styled,
  Link
} from '../../../../config/imports'

import Dropdown from '../../../media/svg/inline/dropdown.svg'
import DropdownLight from '../../../media/svg/inline/dropdown-light.svg'

const DropdownAbout = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  & li {
    display: none;
    position: relative;
  }
  padding: var(--xxl);
`

const DropdownServices = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: min-content;
  & li {
    display: none;
    position: relative;
  }
`
const StyledLink = styled(Link)``

const MenuArea = styled.div`
  margin: 0;
  padding: 0;
  margin-right: auto;

  & ${StyledLink} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    text-decoration: none;
  }

  & * {
    margin: 0;
    padding: 0;
  }

  & ul {
    list-style: none;
    display: flex;
  }

  & ul li {
    position: relative;
    width: 100%;
    text-align: center;
  }
  & li:hover ${DropdownAbout} li {
    top: 0;
    display: flex;
    text-align: start;
    margin: 0;
    margin-bottom: var(--xs);

    &:first-child {
      margin-top: var(--sm);
    }
  }

  & li:hover ${DropdownServices} li {
    top: 0;
    display: flex;
    text-align: start;
    margin: 0;
    margin-bottom: var(--xs);

    &:first-child {
      margin-top: var(--sm);
    }
  }

  & li {
    margin-left: var(--md);
  }
`
const StyledText = styled.p`
  display: flex;
  align-items: center;
`
const StyledDropdown = styled(Dropdown)`
  width: 3vmin;
`

const StyledDropdownLight = styled(DropdownLight)`
  width: 3vmin;
`

const StyledTextLight = styled(StyledText)`
  color: #fff;
  word-wrap: normal;
  transition: 0.5s all;
  padding: var(--sm);
  border-radius: 5px;
  &:hover {
    background: var(--primary);
  }
`
export default ({ light }) => {
  if (light) {
    return (
      <MenuArea>
        <ul>
          <li>
            <StyledLink to='/about'>
              <StyledTextLight>
                About
                <StyledDropdownLight />
              </StyledTextLight>
            </StyledLink>
            <DropdownAbout>
              <li>
                <StyledLink to='/process'>
                  <StyledTextLight>Process</StyledTextLight>
                </StyledLink>
              </li>
              <li>
                <StyledLink to='/recommended-books'>
                  <StyledTextLight>
                    Books List
                  </StyledTextLight>
                </StyledLink>
              </li>
            </DropdownAbout>
          </li>
          <li>
            <StyledLink to='/services'>
              <StyledTextLight>
                Services
                <StyledDropdownLight />
              </StyledTextLight>
            </StyledLink>
            <DropdownServices>
              <li>
                <StyledLink to='/web-design'>
                  <StyledTextLight>
                    Web Design
                  </StyledTextLight>
                </StyledLink>
              </li>
              <li>
                <StyledLink to='/progressive-web-apps'>
                  <StyledTextLight>
                    Progressive Web Apps
                  </StyledTextLight>
                </StyledLink>
              </li>
              <li>
                <StyledLink to='/optimization-and-maintenance'>
                  <StyledTextLight>
                    Maintenance
                  </StyledTextLight>
                </StyledLink>
              </li>
            </DropdownServices>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <StyledLink to='/portfolio'>
              <StyledTextLight>Portfolio</StyledTextLight>
            </StyledLink>
          </li>
        </ul>
      </MenuArea>
    )
  }
  return (
    <MenuArea>
      <ul>
        <li>
          <StyledLink dark to='/about'>
            <StyledText>
              About
              <StyledDropdown />
            </StyledText>
          </StyledLink>
          <DropdownAbout>
            <li>
              <StyledLink dark to='/process'>
                Process
              </StyledLink>
            </li>
            <li>
              <StyledLink dark to='/recommended-books'>
                Books List
              </StyledLink>
            </li>
          </DropdownAbout>
        </li>
        <li>
          <StyledLink dark to='/services'>
            <StyledText>
              Services
              <StyledDropdown />
            </StyledText>
          </StyledLink>
          <DropdownServices>
            <li>
              <StyledLink dark to='/web-design'>
                Web Design
              </StyledLink>
            </li>
            <li>
              <StyledLink dark to='/progressive-web-apps'>
                PWAs
              </StyledLink>
            </li>
            <li>
              <StyledLink
                dark
                to='/optimization-and-maintenance'
              >
                Maintenance
              </StyledLink>
            </li>
          </DropdownServices>
        </li>
        <li>
          <StyledLink dark to='/portfolio'>
            Portfolio
          </StyledLink>
        </li>
      </ul>
    </MenuArea>
  )
}
