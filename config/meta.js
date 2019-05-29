const path = require('path')

module.exports = {
  siteUrl: 'https://dustinheisey.com',
  siteTitle: 'Dustin Heisey | Portfolio',
  siteTitleShort: 'Dustin Heisey',
  siteDescription: 'Placeholder Description',
  author: 'Dustin Heisey',
  manifest: {
    themeColor: '728B1A',
    backgroundColor: 'FFFEFA'
  },
  logo: path.resolve(
    __dirname,
    '../src/media/images/logo.png'
  ),
  googleAnalyticsId: 'UA-XXXXX',
  facebook: 'Your optional Facebook App ID',
  twitter: 'Your Twitter username'
}
