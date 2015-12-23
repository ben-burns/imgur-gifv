var ogImage   = document.querySelector('meta[property="og:image"]'); // Find og:image meta tag
var imageUrl  = ogImage.getAttribute("content"); // The image URL is located in the content of the og:image meta tag
var imageExt  = imageUrl.substr(imageUrl.lastIndexOf('.') + 1); // Find the file extension of the image

if(imageExt == "gif") { // Is the image file extension a .gif?
    window.stop(); // Stop loading the page
    location.replace(imageUrl + "v"); // Send the user over to the .gifv version
}
