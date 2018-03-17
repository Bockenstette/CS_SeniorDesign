webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kram_kram__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.goToKram = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kram_kram__["a" /* KramPage */]);
    };
    LoginPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="login">\n\n  <div text-center>\n\n      <ion-img style="width: 150px; height: 150px; alt: kram; background: transparent !important; margin: auto" src="assets/imgs/KRAM_Logo.png"></ion-img>\n\n  </div>\n\n  <form id="login-form">\n\n    <ion-list id="login-list-login">\n\n      <ion-item id="login-input-email">\n\n        <ion-label>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="login-input-password">\n\n        <ion-label>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="password" placeholder=""></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="spacer" style="height:40px;" id="login-spacer"></div>\n\n    <button id="login-button-login" ion-button color="accent" block on-click="goToKram()">\n\n      Log in\n\n    </button>\n\n    <button id="login-button-create" ion-button clear color="primary-text" block on-click="goToSignup()">\n\n      Or create an account\n\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kram_kram__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemPage = (function () {
    function ItemPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ItemPage.prototype.goToKram = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kram_kram__["a" /* KramPage */]);
    };
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\pages\item\item.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Item\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="item">\n\n  <form id="item-form">\n\n    <ion-item id="item-input-name">\n\n      <ion-label>\n\n        Name\n\n      </ion-label>\n\n      <ion-input type="text" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <ion-item id="item-input-quantity">\n\n      <ion-label>\n\n        Quantity\n\n      </ion-label>\n\n      <ion-input type="number" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <ion-item id="item-input-price">\n\n      <ion-label>\n\n        Price\n\n      </ion-label>\n\n      <ion-input type="number" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <ion-item id="item-input-location">\n\n      <ion-label>\n\n        Location\n\n      </ion-label>\n\n      <ion-input type="text" placeholder=""></ion-input>\n\n    </ion-item>\n\n    <ion-item id="item-textarea-notes">\n\n      <ion-label>\n\n        Notes\n\n      </ion-label>\n\n      <ion-textarea placeholder=""></ion-textarea>\n\n    </ion-item>\n\n    <button id="item-button-save" ion-button color="accent" block on-click="goToKram()">\n\n      Save\n\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\pages\item\item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kram_kram__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage_1 = SignupPage;
    SignupPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.goToKram = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kram_kram__["a" /* KramPage */]);
    };
    SignupPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(SignupPage_1);
    };
    SignupPage = SignupPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Signup\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding id="signup">\n\n  <form id="signup-form">\n\n    <ion-list id="signup-list-signup">\n\n      <ion-item id="signup-input-name">\n\n        <ion-label>\n\n          Name\n\n        </ion-label>\n\n        <ion-input type="text" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input-email">\n\n        <ion-label>\n\n          Email\n\n        </ion-label>\n\n        <ion-input type="email" placeholder=""></ion-input>\n\n      </ion-item>\n\n      <ion-item id="signup-input-password">\n\n        <ion-label>\n\n          Password\n\n        </ion-label>\n\n        <ion-input type="text" placeholder=""></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button id="signup-button-signup" ion-button color="accent" block on-click="goToLogin()">\n\n      Sign up\n\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SignupPage);
    return SignupPage;
    var SignupPage_1;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_kram_kram__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_item_item__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_kram_kram__["a" /* KramPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_item_item__["a" /* ItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_kram_kram__["a" /* KramPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_item_item__["a" /* ItemPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(100);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n    <ion-toolbar color="primary">\n\n        <ion-title>Pages</ion-title>\n\n    </ion-toolbar>\n\n    \n\n    <ion-content>\n\n        <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                {{p.title}}\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n    \n\n</ion-menu>\n\n      \n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KramPage = (function () {
    function KramPage(app, navCtrl, popoverCtrl, menu) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.menu = menu;
        menu.enable(true);
    }
    KramPage.prototype.goToItem = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_item__["a" /* ItemPage */]);
    };
    KramPage.prototype.openMenu = function () {
        this.menu.open();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], KramPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('popoverText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], KramPage.prototype, "text", void 0);
    KramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kram',template:/*ion-inline-start:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\pages\kram\kram.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton color="primary">\n\n    <ion-buttons left>\n\n      <button color="text" (click)="openMenu()" ion-button icon-only>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title color="text">\n\n      KRAM\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button color="text" ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button color="text" ion-button icon-only>\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="kram">\n\n  <ion-item-group id="kram-group1">\n\n    <ion-item-divider color="light-primary">A</ion-item-divider>\n\n    <ion-item id="kram-list-item1" (click)="goToItem()">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="kram-list-item2">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="kram-list-item3">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="kram-list-item4">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="kram-list-item5">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n    <ion-item color="none" id="kram-list-item6">\n\n      <ion-thumbnail item-left>\n\n        <img />\n\n      </ion-thumbnail>\n\n      <h2>\n\n        Item\n\n      </h2>\n\n    </ion-item>\n\n  </ion-item-group>\n\n\n\n  <ion-item-group id="kram-group2">\n\n      <ion-item-divider color="light-primary">B</ion-item-divider>\n\n      <ion-item id="kram-list-item7" (click)="goToItem()">\n\n        <ion-thumbnail item-left>\n\n          <img />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Item\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="kram-list-item8">\n\n        <ion-thumbnail item-left>\n\n          <img />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Item\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="kram-list-item9">\n\n        <ion-thumbnail item-left>\n\n          <img />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Item\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="kram-list-item10">\n\n        <ion-thumbnail item-left>\n\n          <img />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Item\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="kram-list-item11">\n\n        <ion-thumbnail item-left>\n\n          <img />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Item\n\n        </h2>\n\n      </ion-item>\n\n      <ion-item color="none" id="kram-list-item12">\n\n        <ion-thumbnail item-left>\n\n          <img />\n\n        </ion-thumbnail>\n\n        <h2>\n\n          Item\n\n        </h2>\n\n      </ion-item>\n\n    </ion-item-group>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="accent" (click)="goToItem()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\matth\Documents\GitHub\CS_SeniorDesign\Code\client\kram\src\pages\kram\kram.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], KramPage);
    return KramPage;
}());

//# sourceMappingURL=kram.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map