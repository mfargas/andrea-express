
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/marjoreefargas/Documents/GitHub/andrea-express/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/marjoreefargas/Documents/GitHub/andrea-express/src/pages/about.js")),
  "component---src-pages-causes-js": preferDefault(require("/Users/marjoreefargas/Documents/GitHub/andrea-express/src/pages/causes.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/marjoreefargas/Documents/GitHub/andrea-express/src/pages/index.js"))
}

