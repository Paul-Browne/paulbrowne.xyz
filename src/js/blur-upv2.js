// blur up
!function(){
    var images = document.querySelectorAll("img[data-placeholder]");
    var i = images.length;
    var obj = {};

    function bob(el, i){
        if(el.naturalHeight){
            clearInterval(obj[i]);
            el.parentNode.style.height = el.naturalHeight + "px";                    
        }
    }            

    //image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';

    while(i--){
        if(!images[i].complete){
            images[i].addEventListener('load', function (e) {
                console.log('boom');
            });
            //images[i].style.background = 'url(' + images[i].getAttribute("data-placeholder") + ')' + 'no-repeat, url(' + images[i].src + ')';
            images[i].style.backgroundImage = 'url(' + images[i].getAttribute("data-placeholder") + ')';
            images[i].style.backgroundSize = "cover";
            //images[i].src = "";

            //images[i].parentNode.style.backgroundImage = 'url(' + images[i].getAttribute("data-placeholder") + ')';
            var bb = images[i].getBoundingClientRect();
            //images[i].parentNode.style.width = bb.width + "px";
            //obj[i] = setInterval(bob, 50, images[i], i);
        }
    }
}();