var contentType = document.contentType; // page-mod offers no type support, so we need to use document.contentType

if(contentType == "image/gif") { // Make sure the content type is a gif

    window.stop(); // Stop loading the page

    var domain  = location.protocol + "//gfycat.com" // http(s)://gfycat.com
    var urlPath = location.pathname                  // /*.ext

    location.replace(domain + urlPath.substr(0, urlPath.lastIndexOf("."))); // Remove .gif extension and redirect to gfycat.com (sans giant)
}
