import { createGlobalStyle } from 'styled-components'
import styledBreakpoint from '@humblebee/styled-components-breakpoint'

export default createGlobalStyle`
  :root {

    /* Primary Colors */
    --primary-darker: #344902;
    --primary-dark: #456103;
    --primary: #557606;
    --primary-light: #9AB43C;
    --primary-lighter: #CDE47A;

    /* Secondary Colors */
    --secondary-darker: #54513E;
    --secondary-dark: #BEBBA8;
    --secondary: #E6E4DB;
    --secondary-light: #FEFCF3;
    --secondary-lighter: #FFFEFA;

    /* Text Colors */
    --text-darker: #011409;
    --text-dark: #2D3631;
    --text: #bcbcbc;
    --text-light: #cdcdcd;
    --text-lighter: #F8FFFB;

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

  textarea {
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--secondary-lighter);
  }

`

export const media = styledBreakpoint({
  phone: 599,
  tabletPortrait: 600,
  tabletLandscape: 900,
  desktop: 1200,
  bigDesktop: 1800
})
