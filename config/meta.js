const path = require('path')

module.exports = {
  siteUrl: 'https://dustinheisey.com',
  siteTitle: 'Dustin Heisey',
  siteTitleShort: 'Dustin Heisey',
  siteDescription:
    'My name is Dustin Heisey, and I am located in Portland, Oregon. I help businesses develop an online presence that resonates with people and helps you help them in the way only you know how to.',
  author: 'Dustin Heisey',
  manifest: {
    themeColor: '#728B1A',
    backgroundColor: '#FFFEFA'
  },
  logo: path.resolve(
    __dirname,
    '../src/media/images/logo.png'
  ),
  googleAnalyticsId: 'UA-45565383-6'
}
