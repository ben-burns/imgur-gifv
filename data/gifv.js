window.stop(); // Stop loading the page

var domain  = location.origin // *imgur.com
var urlPath = location.pathname // /*.gif

location.replace(domain + urlPath.substr(0, urlPath.lastIndexOf(".")) + ".gifv"); // Replace the .gif extension with .gifv
