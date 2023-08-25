var VEVS = {};
(function () {
	"use strict";
	var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),

	loadCssHack = function(url, callback){
		var link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = url;

		document.getElementsByTagName('head')[0].appendChild(link);

		var img = document.createElement('img');
		img.onerror = function(){
			if (callback && typeof callback === "function") {
				callback();
			}
		};
		img.src = url;
	},
	loadRemote = function(url, type, callback, async, defer) {
		if (type === "css" && isSafari) {
			loadCssHack(url, callback);
			return;
		}
		var _element, _type, _attr, scr, s, element;
		
		switch (type) {
		case 'css':
			_element = "link";
			_type = "text/css";
			_attr = "href";
			break;
		case 'js':
			_element = "script";
			_type = "text/javascript";
			_attr = "src";
			break;
		}
		
		scr = document.getElementsByTagName(_element);
		s = scr[scr.length - 1];
		element = document.createElement(_element);
		element.type = _type;
		if (type == "css") {
			element.rel = "stylesheet";
		}
		if (async) {
			element.async = true;
		}
		if (defer) {
			element.defer = true;
		}
		if (element.readyState) {
			element.onreadystatechange = function () {
				if (element.readyState == "loaded" || element.readyState == "complete") {
					element.onreadystatechange = null;
					if (callback && typeof callback === "function") {
						callback();
					}
				}
			};
		} else {
			element.onload = function () {
				if (callback && typeof callback === "function") {
					callback();
				}
			};
		}
		element[_attr] = url;
		s.parentNode.insertBefore(element, s.nextSibling);
	},
	loadScript = function (url, callback, async, defer) {
		loadRemote.call(null, url, "js", callback, async, defer);
	},
	loadCss = function (url, callback) {
		loadRemote.call(null, url, "css", callback);
	},
	options = {"folder":"https:\/\/www.anistransport.com\/","booking_periods":"perday","min_hour":216,"min_age":18,"max_age":65,"hour_selection":"LT","message_1":"Booking has been added. Redirecting to PayPal...","message_2":"Your reservation has been saved. Redirecting to payment gateway....","message_3":"Booking has been successfully added.","message_4":"Reservation failed to save","message_5":"Minimum age is 18 years old","message_6":"Driver's date of birth is required","message_7":"Driver's date of birth is invalid.","message_8":"Maximum age is %s years old","dateFormat":"m\/d\/Y","momentDateFormat":"MM\/DD\/YYYY","startDay":0,"dayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"monthNamesFull":["January","February","March","April","May","June","July","August","September","October","November","December"],"closeButton":"Close","action":"pjActionCustom14","slug":"contact","contact_lat":51.50722,"contact_lng":-0.1275,"urls":{"reservations":"reservations.html","search":"reservations.html\/search","cars":"reservations.html\/cars","extras":"reservations.html\/extras","checkout":"reservations.html\/checkout"},"goto_step":"search","type_id":0,"google_api_key":"AIzaSyDHyUV7alXD9578Zhr7lE5IEsunU1xxzhM","template":"template_1","owlcarousel":"https:\/\/www.anistransport.com\/core\/third-party\/owlcarousel\/2.3.4\/owl.carousel.min.js"};
	window.loadScript = loadScript;
	window.loadCss = loadCss;
	loadScript("https://www.anistransport.com/core/third-party/jquery/3.1.1/jquery.min.js", function () {
		$.post("t/", {"referrer": document.referrer});		loadScript("https://www.anistransport.com/core/third-party/bootstrap/3.3.7/js/bootstrap.min.js", function () {
			loadScript("https://www.anistransport.com/core/third-party/validate/1.15.1/jquery.validate.min.js", function () {
        		loadScript("https://www.anistransport.com/plugins/pjCms/templates/template_1/js/template.min.js?v=1.0.0", function () {
        			VEVS.template = new VevsTemplate(options);
        			loadScript("https://www.anistransport.com/core/third-party/moment/2.10.6/moment-with-locales.min.js", function () {
	loadScript("https://www.anistransport.com/core/third-party/datejs/1.0.0/date.js", function () {
		loadScript("https://www.anistransport.com/core/third-party/bootstrap_datetimepicker/4.17.47/build/js/bootstrap-datetimepicker.min.js", function () {
			loadScript("https://www.anistransport.com/app/web/js/website.min.js", function () {
				VEVS.website = new VevsWebsite(options);
			}, true);
			loadScript("https://www.anistransport.com/app/web/js/script.min.js", function () {
				VEVS.script = new VevsScript(options);
			}, true);
		});
	});
});        		});
        	});
		});
	});
})();var pjTranslatorInst;