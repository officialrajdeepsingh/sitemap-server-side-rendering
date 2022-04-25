/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'http://localhost:3000',
  generateRobotsTxt: true,
  exclude: ['/server.xml'], // <= exclude her
}