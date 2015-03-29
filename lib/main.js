var pageMod = require("sdk/page-mod");
var self    = require("sdk/self");

pageMod.PageMod({
    contentScriptWhen: 'start', // Don't wait until the page finishes loading
    include: [/(http(s)?:\/\/i\.imgur\.com\/(?!imageview).*)/], // Make sure we are looking at a real .gif image from i.imgur.com (dirty)
    contentScriptFile: [self.data.url("gifv.js")] // gifv.js when we have a match
});
