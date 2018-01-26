webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pickup = [];
        this.dropoff = [];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: 'fa-credit-card-alt', title: 'Credits', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { icon: 'fa-ticket', title: 'Promotions', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { icon: 'fa-car', title: 'My trips', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* SearchPage */] },
            { icon: 'fa-info-circle', title: 'Help', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { icon: 'fa-sign-out', title: 'Log out', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.pickup.address = '';
            _this.pickup.lat = '';
            _this.pickup.lng = '';
            _this.dropoff.address = '';
            _this.dropoff.lat = '';
            _this.dropoff.lng = '';
        });
    };
    MyApp.prototype.changeAddress = function (data) {
        if (data.type == "pickup") {
            this.pickup.address = data.location.address;
            this.pickup.lat = data.location.lat;
            this.pickup.lng = data.location.lng;
        }
        else {
            this.dropoff.address = data.location.address;
            this.dropoff.lat = data.location.lat;
            this.dropoff.lng = data.location.lng;
        }
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lester\Desktop\mobile\Ride\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header user-container>\n\n    \n\n    <div user-pic-container>\n\n      <div></div>\n\n    </div>\n\n    <div user-name>Test User</div>\n\n\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" pages>\n\n        <i class="fa {{p.icon}}" aria-hidden="true"></i>\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\lester\Desktop\mobile\Ride\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, geolocation, http, modalCtrl, inj, ngZone, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.inj = inj;
        this.ngZone = ngZone;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mylocation = [];
        this.usericon = "assets/icon/man.png";
        this.car_options = [
            { icon: 'assets/imgs/sedan.png', title: 'Deluxe', price: 10, details: '1-4 seater' },
            { icon: 'assets/imgs/suv.png', title: 'Suite', price: 50, details: '1-5 seater' },
            { icon: 'assets/imgs/sedan.png', title: 'Executive', price: 60, details: '1-6 seater' },
        ];
        this.MainApp = this.inj.get(__WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */]);
    }
    HomePage.prototype.computePrice = function (plus) {
        var price = 0;
        var distance = this.distance / 1000;
        var time = this.duration / 60;
        price = parseInt(((distance * time) * 0.95) + plus);
        return price;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.cancelUnbook = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: 'Are you sure you want to cancel this?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.MainApp.dropoff.address = "";
                        _this.showbook = false;
                        if (_this.directionsDisplay != null) {
                            _this.directionsDisplay.setMap(null);
                            _this.directionsDisplay = null;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.mylat = position.coords.latitude;
            _this.mylng = position.coords.longitude;
            _this.MainApp.centerlat = position.coords.latitude;
            _this.MainApp.centerlng = position.coords.longitude;
            _this.MainApp.pickup.lat = position.coords.latitude;
            _this.MainApp.pickup.lng = position.coords.longitude;
            var mapOptions = {
                center: latLng,
                icon: _this.usericon,
                zoom: 16,
                streetViewControl: false,
                mapTypeId: 'roadmap',
                disableDefaultUI: true
            };
            _this.getAddress(position.coords.latitude, position.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.myLocation();
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getAddress = function (lt, lng) {
        var _this = this;
        this.http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lt + ',' + lng + '&sensor=true/false', {}).subscribe(function (data) {
            var result = data.json();
            if (result.status == "OK") {
                _this.MainApp.pickup.address = result.results[0].formatted_address;
            }
            else {
                alert('Unable to get the address');
            }
        }, function (error) {
            alert('Unable to get the address');
        });
    };
    HomePage.prototype.myLocation = function () {
        var center = new google.maps.LatLng(this.MainApp.centerlat, this.MainApp.centerlng);
        this.map.panTo(center);
        var marker = new google.maps.Marker({
            map: this.map,
            // animation: google.maps.Animation.DROP,
            icon: this.usericon,
            zoom: 18,
            position: this.map.getCenter()
        });
        for (var i = 0; i < this.mylocation.length; i++) {
            this.mylocation[i].setMap(null);
        }
        this.mylocation.push(marker);
        var content = "<h4>You!</h4>";
        // this.addInfoWindow(marker, content);
    };
    HomePage.prototype.book = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    HomePage.prototype.addInfoWindow = function (marker, content) {
        var infoWindow = new google.maps.InfoWindow({
            content: content,
        });
        infoWindow.close();
        infoWindow.open(this.map, marker);
    };
    HomePage.prototype.openSearch = function (type) {
        var _this = this;
        var searchModal = this.modalCtrl.create(SearchPage, { type: type });
        searchModal.onDidDismiss(function (data) {
            if (data) {
                _this.MainApp.changeAddress(data);
                if (_this.MainApp.dropoff && _this.MainApp.pickup) {
                    _this.startNavigating();
                }
            }
        });
        searchModal.present();
    };
    HomePage.prototype.startNavigating = function () {
        var _this = this;
        var directionsService = new google.maps.DirectionsService;
        if (this.directionsDisplay != null) {
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = null;
        }
        // var image = new google.maps.MarkerImage('https://lh3.googleusercontent.com/9VaPNnB-Z3vMgVuKCrEbTTxqg_70IzmzrH80wjwAcTLKlnRBmYedwel8mU3KWy0gpa9z=w300',
        //             new google.maps.Size(58, 58),
        //             new google.maps.Point(0, 0),
        //             new google.maps.Point(0, 14));
        // var markerOption = {
        //     clickable: false,
        //     flat: true,
        //     icon: image,
        //     visible: true,
        //     map: map
        // };
        this.directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: "black" } });
        this.directionsDisplay.setMap(null);
        this.directionsDisplay.setMap(this.map);
        // directionsDisplay.setPanel(this.directionsPanel.nativeElement);
        directionsService.route({
            // origin: {lat: this.MainApp.pickup.lat, lng: this.MainApp.pickup.lng},
            // destination: {lat: this.MainApp.dropoff.lat, lng: this.MainApp.dropoff.lng},
            origin: this.MainApp.pickup.address,
            destination: this.MainApp.dropoff.address,
            travelMode: google.maps.TravelMode['DRIVING']
        }, function (res, status) {
            console.log(res);
            _this.ngZone.run(function () {
                if (status == google.maps.DirectionsStatus.OK) {
                    _this.showbook = 'book';
                    _this.directionsDisplay.setDirections(res);
                    _this.distance = res.routes[0].legs[0].distance.value;
                    _this.duration = res.routes[0].legs[0].duration.value;
                }
                else {
                    console.warn(status);
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('places'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "places", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-page',template:/*ion-inline-start:"C:\Users\lester\Desktop\mobile\Ride\src\pages\home\home.html"*/'\n\n\n\n<ion-content>\n\n\n\n<ion-fab top left green>\n\n    <button ion-fab mini menuToggle *ngIf="!showbook"><ion-icon name="menu"></ion-icon></button>\n\n    <button ion-fab mini *ngIf="showbook" (click)="cancelUnbook()"><ion-icon name="md-arrow-back"></ion-icon></button>\n\n</ion-fab>\n\n\n\n  <ion-fab right bottom green *ngIf="!showbook">\n\n    <button ion-fab mini color="light" (click)="myLocation()"><ion-icon name="locate"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n  <ion-fab right top green *ngIf="showbook">\n\n    <button ion-fab mini color="light" (click)="myLocation()"><ion-icon name="locate"></ion-icon></button>\n\n  </ion-fab>\n\n \n\n<!-- style="border-bottom: 1px solid #97f997;" -->\n\n<div search-container>\n\n\n\n  \n\n  <div searchmap-icon>\n\n      <i class="fa fa-taxi" aria-hidden="true" [ngClass]="(MainApp.pickup.address) ? \'green-icon\' : \'\'"></i>\n\n      <i class="fa fa-ellipsis-v" aria-hidden="true" [ngClass]="(MainApp.pickup.address && MainApp.dropoff.address) ? \'green-icon\' : \'\'"></i>\n\n      <i class="fa fa-map-marker" aria-hidden="true" [ngClass]="(MainApp.dropoff.address) ? \'green-icon\' : \'\'"></i>\n\n  </div>\n\n\n\n  <div searchmap>\n\n    <span (click)="openSearch(\'pickup\')" top>{{MainApp.pickup.address}}</span> \n\n    <span (click)="openSearch(\'dropoff\')" >{{MainApp.dropoff.address}}</span> \n\n  </div>\n\n\n\n\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n<div #map id="map" [ngClass]="showbook"></div> \n\n\n\n\n\n\n\n<div showbook *ngIf="showbook" padding>\n\n\n\n<div booking-container>\n\n<div *ngFor="let c of car_options" booking>\n\n<label>{{c.title}}</label>\n\n<img src="{{c.icon}}" />\n\n<em>{{c.details}}</em>\n\n<span>PHP {{computePrice(c.price)}}</span>\n\n</div>\n\n</div>\n\n\n\n\n\n    <button ion-button full padding (click)="book()">Next</button>\n\n\n\n</div>\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lester\Desktop\mobile\Ride\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

// -------------------------------------[search module]-----------------------------------------
var SearchPage = (function () {
    function SearchPage(params, http, viewCtrl, zone, inj, keyboard) {
        this.params = params;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.inj = inj;
        this.keyboard = keyboard;
        this.latitude = 0;
        this.longitude = 0;
        this.location_data = [];
        this.service = new google.maps.places.AutocompleteService();
        this.MainApp = this.inj.get(__WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */]);
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.type = params.get('type');
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var elem = document.querySelector('.searchbar-input');
        setTimeout(function () {
            if (elem) {
                elem.focus();
                _this.keyboard.show();
            }
        }, 150);
    };
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.chooseItem = function (item) {
        console.log(item);
        this.geo = item;
        this.geoCode(this.geo); //convert Address to lat and long
        this.viewCtrl.dismiss({ type: this.type, location: this.location_data });
    };
    SearchPage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: 'PH' } }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
            });
        });
    };
    //convert Address string to lat and long
    SearchPage.prototype.geoCode = function (address) {
        // let geocoder = new google.maps.Geocoder();
        // geocoder.geocode({ 'address': address }, (results, status) => {
        // 	// console.log(result);
        // 	if(status){
        // 	console.log(status);    		
        // }else{
        // 	console.log('wala');
        // }
        this.location_data.address = address;
        //     if(status){
        // this.location_data.lat = results[0].geometry.location.lat();
        // this.location_data.lng = results[0].geometry.location.lng();    	
        //  }else{
        // this.location_data.lat = 0;
        // this.location_data.lng = 0;
        //  }
        // });
    };
    SearchPage.prototype.getSearch = function (test) {
        console.log(test);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('input'),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "myInput", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'search-page',template:/*ion-inline-start:"C:\Users\lester\Desktop\mobile\Ride\src\pages\home\search.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-searchbar class="search-address" [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<!-- <button ion-button (click)="">Focus</button> -->\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n<!-- <div (click)="ionViewLoaded()">test</div> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\lester\Desktop\mobile\Ride\src\pages\home\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\lester\Desktop\mobile\Ride\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lester\Desktop\mobile\Ride\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map