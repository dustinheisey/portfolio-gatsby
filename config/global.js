import { createGlobalStyle } from 'styled-components'
import styledBreakpoint from '@humblebee/styled-components-breakpoint'

export default createGlobalStyle`
  :root {
    /* Primary Colors */
    --primary-darker: #394706;
    --primary-dark: #54670D;
    --primary: #728B1A;
    --primary-light: #9AB43C;
    --primary-lighter: #CDE47A;

    /* Secondary Colors */
    --secondary-darker: #54513E;
    --secondary-dark: #BEBBA8;
    --secondary: #E6E4DB;
    --secondary-light: #F4F3EC;
    --secondary-lighter: #FFFEFA;

    /* Accent Colors */
    --text-darker: #011409;
    --text-dark: #2D3631;
    --text: #dedede;
    --text-light: #cdcdcd;
    --text-lighter: #F8FFFB;

    /* Link Color */
    --link: hsla(0,0%,0%,0.8);
    --link-hover: hsla(0,0%,0%,1);

    /* Tag Colors */
    --tag1: red;
    --tag2: orange;
    --tag3: yellow;
    --tag4: green;
    --tag5: blue;

    /* Box Shadow */
    --shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    --shadow-hover: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    /* Spacing */
    --xs: .5vmin;
    --sm: 1vmin;
    --md: 3vmin;
    --lg: 5vmin;
    --xl: 7vmin;
    --xxl: 15vmin;
  }

  html {
    scroll-behavior: smooth;
  }

  .tooltip {
    border-radius: 5px;
    outline: none;
    padding: var(--sm) var(--md);
    margin: var(--sm);
    transition: all 0.5s;

    background: var(--primary);
    color: var(--secondary-lighter);
  }
  * {
    margin: 0;
  }

  textarea {
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--secondary-lighter);
  }

  svg {
  }
`

export const media = styledBreakpoint({
  phone: 599,
  tabletPortrait: 600,
  tabletLandscape: 900,
  desktop: 1200,
  bigDesktop: 1800
})
