var pageMod = require("sdk/page-mod");
var self    = require("sdk/self");

// Imgur
pageMod.PageMod({
    contentScriptWhen: 'start', // Don't wait until the page finishes loading
    include: [/(http(s)?:\/\/i\.imgur\.com\/(?!imageview).*)/], // Make sure we are looking at a real .gif image from i.imgur.com (dirty)
    contentScriptFile: [self.data.url("imgur.js")] // imgur.js when we have a match
});


// Gfycat
pageMod.PageMod({
    contentScriptWhen: 'start', // Don't wait until the page finishes loading
    include: [/(http(s)?:\/\/(zippy|fat|giant)\.gfycat\.com\/\w+(.gif))/], // Make sure we are looking at a real .gif image from (zippy|fat|giant).gfycat.com
    contentScriptFile: [self.data.url("gfycat.js")] // gfycat.js when we have a match
});
