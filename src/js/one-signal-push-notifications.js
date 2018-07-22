/*  
    requires
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
*/

(function(){
    // Notification.requestPermission().then(function(result) {            
    //     if(result != "granted"){

    //     }
    // });

    // var s = document.createElement('script');
    // s.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
    // document.getElementsByTagName('head')[0].appendChild(s);

    function loadedWURFL(){                
        setTimeout(function(){
            console.log('sent to GA: ' + WURFL.complete_device_name);
            gtag('send', 'pageview',
              { 'dimension3': WURFL.complete_device_name }
            );

            gtag('event', WURFL.complete_device_name, {
              'event_category': 'device'
            });

        }, 1000);
        var OneSignal = window.OneSignal || [];
        OneSignal.push(["init", {
            appId: "9b09f370-052b-4925-a297-9d9d35bda12b",      //paulbrowne.xyz
            //appId: "33f7449e-225a-4177-ad86-ac471e67615b",      //localhost
            autoRegister: false,
            notifyButton: {
                enable: false /* Set to false to hide */
            },
            // displayPredicate: function() {
            //     return OneSignal.isPushNotificationsEnabled().then(function(isPushEnabled) {
            //         return !isPushEnabled; // hide if subscribed
            //     });
            // },
            welcomeNotification: {
                "title": "My Custom Title",
                "message": "Thanks for subscribing!",
                // "url": "" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */
            },
            promptOptions: {
                /* actionMessage limited to 90 characters */
                actionMessage: "We'd like to show you notifications for the latest news and updates.",
                /* acceptButtonText limited to 15 characters */
                acceptButtonText: "ALLOW",
                /* cancelButtonText limited to 15 characters */
                cancelButtonText: "NO THANKS"
            }
        }]);
        OneSignal.push(function() {
            OneSignal.showHttpPrompt();
        });
                            
        OneSignal.push(function() {                    
            OneSignal.sendTags({
                "device": WURFL.complete_device_name,
                "is_mobile": WURFL.is_mobile
            });
        });
    
    }

    var newScript = document.createElement("SCRIPT");
    newScript.setAttribute("src", "https://wurfl.io/wurfl.js");     
    newScript.addEventListener("load", loadedWURFL);
    document.head.appendChild(newScript);

})();