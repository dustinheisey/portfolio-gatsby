import Typography from 'typography'

export default new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Merriweather',
      styles: ['700']
    },
    {
      name: 'Merriweather Sans',
      styles: ['300', '700']
    },
    {
      name: 'Kalam',
      styles: ['400']
    }
  ],
  headerFontFamily: [
    'Merriweather',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Merriweather Sans',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  scaleRatio: 4,
  overrideStyles: () => ({
    p: {
      maxWidth: '70ch',
      fontWeight: '300'
    },
    h1: {
      color: 'var(--text-darker)'
    },
    h2: {
      fontSize: '300%',
      color: 'var(--text-darker)'
    },
    h3: {
      fontFamily: 'Merriweather',
      color: 'var(--text-dark)'
    },
    h4: {
      fontFamily: 'Merriweather Sans',
      fontWeight: '700',
      color: 'var(--text-dark)'
    },
    h5: {
      fontFamily: 'Merriweather Sans',
      color: 'var(--text-dark)'
    },
    h6: {
      fontFamily: 'Merriweather Sans',
      color: 'var(--text-dark)'
    },
    aside: {
      fontFamily: 'Kalam',
      fontSize: '150%',
      color: 'var(--primary)'
    },
    '@media only screen and (max-width:599px)': {
      h1: {
        fontSize: '250%'
      },
      h2: {
        fontSize: '200%'
      },
      aside: {
        fontFamily: 'Kalam',
        fontSize: '100%'
      }
    }
  })
})
