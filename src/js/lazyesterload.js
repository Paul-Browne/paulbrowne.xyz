!function(){

    // debounced scroll event

    function _scroll(a, b) {
        return window.addEventListener("scroll", function() {
            clearTimeout(b);
            b = setTimeout(a, 200);
        }), a;
    }

    // main function wrapper

    function lazyload(){

        // all the images with class lazyload

        var images = document.querySelectorAll("img.lazyload");
        var i = images.length;

        // loop de loop

        while(i--){
            var wH = window.innerHeight;
            var boundingRect = images[i].getBoundingClientRect();
            var offset = 100;
            var yPositionTop = boundingRect.top - wH;
            var yPositionBottom = boundingRect.bottom;
            !images[i].getAttribute("data-orig") && images[i].setAttribute("data-orig", images[i].src);
            var newImg = images[i].getAttribute("data-src");

            // if the top of the image is within 100px from the bottom of the viewport
            // and if the bottom of the image is within 100px from the top of the viewport
            // basically if the image is in the viewport, with a bit of buffer

            if (yPositionTop <= offset && yPositionBottom >= -offset ) {                          

                if(images[i].src != newImg){

                    // replace the src with the data-src      

                    images[i].src = newImg;                

                    // wait until the new image is loaded

                    images[i].addEventListener('load', function() {

                        console.log(this.src);
                        console.log(this.getAttribute("data-src"));

                        // remove the class lazyload
                        if(~this.src.indexOf(this.getAttribute("data-src"))){
                            this.classList.remove("lazyload");
                        }

                    });
                }                                
            }else{
                if(!images[i].complete){
                    
                    images[i].src = images[i].getAttribute("data-orig"); 

                }
            }
        }
    }

    // run on debounced scroll event and once on load

    _scroll(function(){
        lazyload();
    })();
}();