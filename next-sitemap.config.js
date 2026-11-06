/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://artrose.ch",
  generateRobotsTxt: true,
  outDir: "./out", // Important for static export!
  // Every build would stamp every page with "now", which says nothing about
  // when a page really changed, so leave lastmod out. Google ignores
  // changefreq and priority, so drop those as well.
  autoLastmod: false,
  transform: async (_config, path) => ({ loc: path }),
};
