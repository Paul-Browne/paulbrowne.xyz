!function(){

    // all the images with a data-placeholder attribute 

    var images = document.querySelectorAll("img[data-placeholder]");
    var i = images.length;

    // loop de loop

    while(i--){

        // if an image is already loaded by the time this sript is parsed, ignore it

        if(!images[i].complete){

            // attach load event for the image

            images[i].addEventListener('load', function (e) {

                // remove the style (backgtround-image) and the class from the wrapping div

                this.parentNode.removeAttribute("style");
                this.parentNode.removeAttribute("class");
            });
            var parent = images[i].parentNode;

            // create a new div

            var newDiv = document.createElement('DIV');

            // insert it before the image

            parent.insertBefore(newDiv, images[i]);

            // move the image inside the new div

            newDiv.appendChild(images[i]);

            // add the class loading to the new div

            newDiv.className = "loading";

            // pass the data-placeholder image as a background image for the div

            parent.style.backgroundImage = 'url(' + images[i].getAttribute("data-placeholder") + ')';

            // make the div the same width as the img

            parent.style.width = images[i].getBoundingClientRect().width + "px";
        }
    }
}();