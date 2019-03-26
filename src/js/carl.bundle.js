! function() {

    // built in resources object
    var resources = {
        "[data-inc='header']" : [
            "components/header.html"
        ],
        "pre code": [
            "css/github.css",
            "js/highlight.pack.js"
        ],
        "#home-page" : [
            "css/homepage.css",
            "js/homepage.js"
        ],
        "#debouncing-page" : [
            "css/debouncing-page.css",
            "js/debouncing-page.js"
        ],
        "#image-comp-page" : [
            "css/image-comparison-slider-page.css",
            "js/image-comparison-slider.js"            
        ],
        "[data-inc='google-analytics']" : [
            "components/google-analytics.html"
        ],
        "[data-inc='favicons']" : [
            "components/favicons.html"
        ]
    };

    // loop over all the "keys" which are the selectors

    for (var key in resources) {

        // check if the selector exists in the DOM
        // or is a truthy object of the window, eg window.abc = true or window.abc = 42 or window.abc = "hello world!" etc
        // or, if "!" is found, is a falsey object of the window, eg window.abc = false or window.abc = 0
        // or, if "!!" is found, is falsey or undefined, eg window.abc = undefined

        if ((!~key.indexOf('!') && (document.querySelector(key) || window[key])) || (~key.indexOf('!') && window[key.slice("1")] == false) || (~key.indexOf('!!') && !window[key.slice("2")])) {

            // if so, iterate over the array of resources for that selector

            resources[key].forEach(function(resource) {
                var newElement;
                if (/\.js($|\?)/.test(resource)) {

                    // for js files, add a script element

                    newElement = document.createElement("SCRIPT");
                    newElement.src = resource;
                    document.head.appendChild(newElement);
                } else if (/\.css($|\?)/.test(resource)) {

                    // for css files, add a link element

                    newElement = document.createElement("LINK");
                    newElement.rel = "stylesheet";
                    newElement.href = resource;
                    document.head.appendChild(newElement);
                } else if (/\.html($|\?)/.test(resource)) {
                    var storeKey = key;

                    // for an html snippet, eg. header or footer

                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == 4 && xhr.status == 200) {

                            // get the resource and replace the element that "passed" the test

                            document.querySelector(storeKey).outerHTML = xhr.responseText;

                            // run javascript that is included in the resource (if any)

                            var scripts = new DOMParser().parseFromString(xhr.responseText, 'text/html').querySelectorAll("script");
                            var i = scripts.length;
                            while (i--) {
                                var newScript = document.createElement("SCRIPT");
                                scripts[i].src ? newScript.src = scripts[i].src : newScript.innerHTML = scripts[i].innerHTML;
                                document.head.appendChild(newScript);
                            }
                        }
                    };
                    xhr.open("GET", resource, true);
                    xhr.send();
                }
            })
        }
    }
}();