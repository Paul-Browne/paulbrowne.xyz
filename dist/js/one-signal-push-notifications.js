!function(){var e=document.createElement("SCRIPT");e.setAttribute("src","https://wurfl.io/wurfl.js"),e.addEventListener("load",function(){setTimeout(function(){console.log("sent to GA: "+WURFL.complete_device_name),gtag("send","pageview",{dimension3:WURFL.complete_device_name}),gtag("event",WURFL.complete_device_name,{event_category:"device"})},1e3);var e=window.OneSignal||[];e.push(["init",{appId:"9b09f370-052b-4925-a297-9d9d35bda12b",autoRegister:!1,notifyButton:{enable:!1},welcomeNotification:{title:"My Custom Title",message:"Thanks for subscribing!"},promptOptions:{actionMessage:"We'd like to show you notifications for the latest news and updates.",acceptButtonText:"ALLOW",cancelButtonText:"NO THANKS"}}]),e.push(function(){e.showHttpPrompt()}),e.push(function(){e.sendTags({device:WURFL.complete_device_name,is_mobile:WURFL.is_mobile})})}),document.head.appendChild(e)}();