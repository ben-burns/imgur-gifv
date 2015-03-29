var contentType = document.contentType; // page-mod offers no type support, so we need to use document.contentType

if(contentType == "image/gif") { // Make sure the content type is a gif

    window.stop(); // Stop loading the page

    var domain  = location.origin // *imgur.com
    var urlPath = location.pathname // /*.ext

    location.replace(domain + urlPath.substr(0, urlPath.lastIndexOf(".")) + ".gifv"); // Replace the current extension with .gifv
}
