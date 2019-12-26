(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'weatherApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./city/city.component */ "./src/app/city/city.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _city_reducers_city_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./city/reducers/city.reducer */ "./src/app/city/reducers/city.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _city_effects_city_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./city/effects/city.effects */ "./src/app/city/effects/city.effects.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _favorites_reducers_favorites_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./favorites/reducers/favorites.reducer */ "./src/app/favorites/reducers/favorites.reducer.ts");
/* harmony import */ var _favorites_effects_favorites_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./favorites/effects/favorites.effects */ "./src/app/favorites/effects/favorites.effects.ts");
/* harmony import */ var _nav_reducers_nav_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nav/reducers/nav.reducer */ "./src/app/nav/reducers/nav.reducer.ts");






















var appRoutes = [
    { path: 'favorites',
        component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_18__["FavoritesComponent"] },
    { path: '',
        component: _city_city_component__WEBPACK_IMPORTED_MODULE_9__["CityComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_9__["CityComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_18__["FavoritesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_17__["AutocompleteLibModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: false, } // <-- debugging purposes only
                ),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({
                    city: _city_reducers_city_reducer__WEBPACK_IMPORTED_MODULE_12__["CityReducer"],
                    favorites: _favorites_reducers_favorites_reducer__WEBPACK_IMPORTED_MODULE_19__["FavReducer"],
                    nav: _nav_reducers_nav_reducer__WEBPACK_IMPORTED_MODULE_21__["NavReducer"]
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_city_effects_city_effects__WEBPACK_IMPORTED_MODULE_14__["CityEffects"], _favorites_effects_favorites_effects__WEBPACK_IMPORTED_MODULE_20__["FavEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/city/actions/city.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/city/actions/city.actions.ts ***!
  \**********************************************/
/*! exports provided: CityActionTypes, LoadCityAction, LoadCitySuccessAction, LoadCityFailureAction, Next5DaysAction, Next5DaysSuccessAction, Next5DaysFailureAction, GetAutoCompleteAction, GetAutoCompleteSuccessAction, GetAutoCompleteFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityActionTypes", function() { return CityActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCityAction", function() { return LoadCityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCitySuccessAction", function() { return LoadCitySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCityFailureAction", function() { return LoadCityFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Next5DaysAction", function() { return Next5DaysAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Next5DaysSuccessAction", function() { return Next5DaysSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Next5DaysFailureAction", function() { return Next5DaysFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteAction", function() { return GetAutoCompleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteSuccessAction", function() { return GetAutoCompleteSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAutoCompleteFailureAction", function() { return GetAutoCompleteFailureAction; });
var CityActionTypes;
(function (CityActionTypes) {
    CityActionTypes["LOAD_CITY"] = "[CITY] current city weather";
    CityActionTypes["LOAD_CITY_SUCCESS"] = "[CITY] current city weather success";
    CityActionTypes["LOAD_CITY_FAILURE"] = "[CITY] current city weather failure";
    CityActionTypes["LOAD_NEXT_DAYS"] = "[CITY] next 5 days weather";
    CityActionTypes["LOAD_NEXT_DAYS_SUCCESS"] = "[CITY] next 5 days weather success";
    CityActionTypes["LOAD_NEXT_DAYS_FAILURE"] = "[CITY] next 5 days weather failure";
    CityActionTypes["LOAD_AUTO_COMPLETE"] = "[CITY] autocomplete list";
    CityActionTypes["LOAD_AUTO_COMPLETE_SUCCESS"] = "[CITY] autocomplete list success";
    CityActionTypes["LOAD_AUTO_COMPLETE_FAILURE"] = "[CITY] autocomplete list failure";
})(CityActionTypes || (CityActionTypes = {}));
var LoadCityAction = /** @class */ (function () {
    function LoadCityAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_CITY;
    }
    return LoadCityAction;
}());

var LoadCitySuccessAction = /** @class */ (function () {
    function LoadCitySuccessAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_CITY_SUCCESS;
    }
    return LoadCitySuccessAction;
}());

var LoadCityFailureAction = /** @class */ (function () {
    function LoadCityFailureAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_CITY_FAILURE;
    }
    return LoadCityFailureAction;
}());

/* Next 5 Days Forecast */
var Next5DaysAction = /** @class */ (function () {
    function Next5DaysAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_NEXT_DAYS;
    }
    return Next5DaysAction;
}());

var Next5DaysSuccessAction = /** @class */ (function () {
    function Next5DaysSuccessAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_NEXT_DAYS_SUCCESS;
    }
    return Next5DaysSuccessAction;
}());

var Next5DaysFailureAction = /** @class */ (function () {
    function Next5DaysFailureAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_NEXT_DAYS_FAILURE;
    }
    return Next5DaysFailureAction;
}());

/* Get AutoComplete */
var GetAutoCompleteAction = /** @class */ (function () {
    function GetAutoCompleteAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_AUTO_COMPLETE;
    }
    return GetAutoCompleteAction;
}());

var GetAutoCompleteSuccessAction = /** @class */ (function () {
    function GetAutoCompleteSuccessAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_AUTO_COMPLETE_SUCCESS;
    }
    return GetAutoCompleteSuccessAction;
}());

var GetAutoCompleteFailureAction = /** @class */ (function () {
    function GetAutoCompleteFailureAction(payload) {
        this.payload = payload;
        this.type = CityActionTypes.LOAD_AUTO_COMPLETE_FAILURE;
    }
    return GetAutoCompleteFailureAction;
}());



/***/ }),

/***/ "./src/app/city/city.component.css":
/*!*****************************************!*\
  !*** ./src/app/city/city.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fav {\n    position: relative;\n    overflow-x: hidden;\n    margin-top: 20px;\n    padding: 15px;\n    color: rgb(255, 0, 0);\n    background-color: #ffffff;\n    font-size: 18px;\n    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n    -webkit-transition: -webkit-transform 0.9s ease;\n    transition: -webkit-transform 0.9s ease;\n    transition: transform 0.9s ease;\n    transition: transform 0.9s ease, -webkit-transform 0.9s ease;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n\n.fav:hover {\n    -webkit-transform: translateX(5px);\n            transform: translateX(5px);\n}\n\n.fav>a {\n    color: red;\n}\n\n.fav>a>i {\n    padding-right: 20px;\n}\n\n.label {\n    background-color: rgba(0, 0, 0, 0.5);\n    padding-left: 25px;\n    padding-top: 20px;\n    height: 100px;\n    width: 250px;\n}\n\n.bar {\n    grid-area: bg-weather;\n    padding-top: 50px;\n    color: #fff;\n    background: url('clouds.jpg') no-repeat center center;\n    background-size: cover;\n    height: 200px;\n    overflow-x: hidden;\n}\n\n.sun {\n    grid-area: sun;\n}\n\n.mon {\n    grid-area: mon;\n}\n\n.tue {\n    grid-area: tue;\n}\n\n.wed {\n    grid-area: wed;\n}\n\n.thu {\n    grid-area: thu;\n}\n\n.day {\n    grid-area: day;\n}\n\n.pic {\n    grid-area: pic;\n}\n\n.heat {\n    grid-area: heat;\n}\n\n.grid-container {\n    width: 60%;\n    margin-right: auto;\n    margin-left: auto;\n    background-color: #fff;\n    display: grid;\n    grid-template-areas: 'bg-weather bg-weather bg-weather bg-weather bg-weather' 'sun mon tue wed thu';\n    grid-gap: 1px;\n    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n\n.grid-container>div {\n    height: 300px;\n    padding-top: 50px;\n    font-size: 20px;\n    text-align: center;\n    background: rgb(255, 255, 255);\n    background: radial-gradient(circle, rgb(165, 225, 255) 0%, rgb(57, 189, 255) 150%);\n    display: grid;\n    grid-template-areas: 'day' 'pic' 'heat';\n}\n\n.grid-container>div:hover {\n    box-shadow: 0px 0px 20px rgba(14, 75, 133, 0.274);\n    z-index: 1000;\n}\n\n@media (max-width:850px) {\n    .grid-container {\n        width: 95%;\n        grid-template-areas: 'bg-weather' 'sun' 'mon' 'tue' 'wed' 'thu';\n    }\n    .grid-container>div {\n        padding-top: 10px;\n        height: 170px;\n        border-bottom: 1px solid rgb(204, 204, 204);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0eS9jaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLCtDQUErQjtJQUEvQix1Q0FBK0I7SUFBL0IsK0JBQStCO0lBQS9CLDREQUErQjtJQUMvQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gscURBQWtFO0lBSWxFLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1HQUFtRztJQUNuRyxhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixrRkFBa0Y7SUFDbEYsYUFBYTtJQUNiLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsK0RBQStEO0lBQ25FO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLDJDQUEyQztJQUMvQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2l0eS9jaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTBweCk7XG59XG5cbi5mYXY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xufVxuXG4uZmF2PmEge1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5mYXY+YT5pIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5iYXIge1xuICAgIGdyaWQtYXJlYTogYmctd2VhdGhlcjtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9jbG91ZHMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5zdW4ge1xuICAgIGdyaWQtYXJlYTogc3VuO1xufVxuXG4ubW9uIHtcbiAgICBncmlkLWFyZWE6IG1vbjtcbn1cblxuLnR1ZSB7XG4gICAgZ3JpZC1hcmVhOiB0dWU7XG59XG5cbi53ZWQge1xuICAgIGdyaWQtYXJlYTogd2VkO1xufVxuXG4udGh1IHtcbiAgICBncmlkLWFyZWE6IHRodTtcbn1cblxuLmRheSB7XG4gICAgZ3JpZC1hcmVhOiBkYXk7XG59XG5cbi5waWMge1xuICAgIGdyaWQtYXJlYTogcGljO1xufVxuXG4uaGVhdCB7XG4gICAgZ3JpZC1hcmVhOiBoZWF0O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYmctd2VhdGhlciBiZy13ZWF0aGVyIGJnLXdlYXRoZXIgYmctd2VhdGhlciBiZy13ZWF0aGVyJyAnc3VuIG1vbiB0dWUgd2VkIHRodSc7XG4gICAgZ3JpZC1nYXA6IDFweDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uZ3JpZC1jb250YWluZXI+ZGl2IHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYigxNjUsIDIyNSwgMjU1KSAwJSwgcmdiKDU3LCAxODksIDI1NSkgMTUwJSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnZGF5JyAncGljJyAnaGVhdCc7XG59XG5cbi5ncmlkLWNvbnRhaW5lcj5kaXY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDE0LCA3NSwgMTMzLCAwLjI3NCk7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ODUwcHgpIHtcbiAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYmctd2VhdGhlcicgJ3N1bicgJ21vbicgJ3R1ZScgJ3dlZCcgJ3RodSc7XG4gICAgfVxuICAgIC5ncmlkLWNvbnRhaW5lcj5kaXYge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/city/city.component.html":
/*!******************************************!*\
  !*** ./src/app/city/city.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search></app-search>\n<div class=\"grid-container rounded shadow-lg\">\n    <span class=\"bar\">\n\n        <div class=\"fav float-right rounded shadow-lg\">\n            <a href=\"#\" (click)=\"addToFav(city.current_city)\">\n                <i class=\"fas fa-heart\"></i> Add to Favorites\n            </a>\n        </div>\n\n        <div class=\"label\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <img style=\"padding-left: 15px;\" src=\"{{city?.current_city?.icon}}\">\n                </div>\n                <div class=\"col\">\n                    {{city?.current_city?.name}}<br>\n\n                    <span *ngIf=\"(unit$ | async)\" [innerHtml]=\"city?.current_city?.c\"></span>\n    <span *ngIf=\"!(unit$ | async)\" [innerHtml]=\"city?.current_city?.f\"></span>\n</div>\n</div>\n</div>\n\n</span>\n\n<div *ngFor=\"let item of city?.five_days_forecast;\">\n    <div>{{item.day}}</div>\n    <div><img src=\"{{item.icon}}\"></div>\n    <div *ngIf=\"(unit$ | async)\" [innerHtml]=\"item.c\"></div>\n    <div *ngIf=\"!(unit$ | async)\" [innerHtml]=\"item.f\"></div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/city/city.component.ts":
/*!****************************************!*\
  !*** ./src/app/city/city.component.ts ***!
  \****************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/city.actions */ "./src/app/city/actions/city.actions.ts");
/* harmony import */ var _favorites_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../favorites/actions/favorites.actions */ "./src/app/favorites/actions/favorites.actions.ts");





var CityComponent = /** @class */ (function () {
    function CityComponent(store, unitStore) {
        this.store = store;
        this.unitStore = unitStore;
    }
    CityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCurrentCity('215854', 'Tel Aviv');
        this.store.select(function (state) { return state; }).subscribe(function (data) { return _this.city = data.city; });
        this.unit$ = this.unitStore.select(function (state) { return state['nav'].unit; });
    };
    CityComponent.prototype.getCurrentCity = function (id, name) {
        this.store.dispatch(new _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["LoadCityAction"]({ id: id, name: name }));
        this.store.dispatch(new _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["Next5DaysAction"](id));
    };
    CityComponent.prototype.addToFav = function (new_fav) {
        if (new_fav === void 0) { new_fav = null; }
        this.store.dispatch(new _favorites_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_4__["AddFavCityAction"]({ id: new_fav.id, name: new_fav.name }));
    };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/city/city.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/city/effects/city.effects.helper.ts":
/*!*****************************************************!*\
  !*** ./src/app/city/effects/city.effects.helper.ts ***!
  \*****************************************************/
/*! exports provided: currentCityResponse, daysResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCityResponse", function() { return currentCityResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysResponse", function() { return daysResponse; });
/*Parse api results*/
var celsiusSign = '&#8451;';
var fahrenheitSign = '&#8457;';
var imageSrc = 'https://developer.accuweather.com/sites/default/files/';
var imageType = '-s.png';
function currentCityResponse(res, id, name) {
    return {
        id: id,
        name: name,
        c: Math.round(res['Temperature'].Metric.Value).toString() + celsiusSign,
        f: Math.round(res['Temperature'].Imperial.Value).toString() + fahrenheitSign,
        icon: parseIcon(res['WeatherIcon']),
    };
}
function daysResponse(res) {
    var days_list = [];
    res.forEach(function (element) {
        days_list.push({
            day: timeStampToDay(element['EpochDate']),
            icon: parseIcon(element['Day'].Icon),
            c: getCelsius(element['Temperature']),
            f: calcFahrenheit(element['Temperature'])
        });
    });
    return days_list;
}
function parseIcon(icon) {
    icon = parseInt(icon) < 10 ? '0' + icon : icon;
    return imageSrc + icon + imageType;
}
function calcFahrenheit(celsius) {
    var min = Math.round(celsius.Minimum.Value * 1.8) + 32;
    var max = Math.round(celsius.Maximum.Value * 1.8) + 32;
    return min.toString() + '-' + max.toString() + fahrenheitSign;
}
function getCelsius(celsius) {
    var min = Math.round(celsius.Minimum.Value).toString();
    var max = Math.round(celsius.Maximum.Value).toString();
    return min + '-' + max + celsiusSign;
}
function timeStampToDay(timestamp) {
    var day = new Date(0);
    day.setUTCSeconds(timestamp);
    return day.toString().substring(0, 3);
}


/***/ }),

/***/ "./src/app/city/effects/city.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/city/effects/city.effects.ts ***!
  \**********************************************/
/*! exports provided: CityEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityEffects", function() { return CityEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/city.actions */ "./src/app/city/actions/city.actions.ts");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _city_effects_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city.effects.helper */ "./src/app/city/effects/city.effects.helper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var CityEffects = /** @class */ (function () {
    function CityEffects(actions$, cityService) {
        var _this = this;
        this.actions$ = actions$;
        this.cityService = cityService;
        this.loadCity$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["CityActionTypes"].LOAD_CITY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.cityService.getCurrentWeather(action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return new _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["LoadCitySuccessAction"](Object(_city_effects_helper__WEBPACK_IMPORTED_MODULE_5__["currentCityResponse"])(res[0], action.payload.id, action.payload.name)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["LoadCityFailureAction"](error)); })); }));
        this.loadNextDays$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["CityActionTypes"].LOAD_NEXT_DAYS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.cityService.getNext5days(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return new _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["Next5DaysSuccessAction"](Object(_city_effects_helper__WEBPACK_IMPORTED_MODULE_5__["daysResponse"])(res['DailyForecasts'])); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["Next5DaysFailureAction"](error)); })); }));
        this.loadLocationID$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["CityActionTypes"].LOAD_AUTO_COMPLETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (action) { return _this.cityService.getLocationId(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return new _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["GetAutoCompleteSuccessAction"]([res]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["GetAutoCompleteFailureAction"](error)); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CityEffects.prototype, "loadCity$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CityEffects.prototype, "loadNextDays$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CityEffects.prototype, "loadLocationID$", void 0);
    CityEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], src_app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], CityEffects);
    return CityEffects;
}());



/***/ }),

/***/ "./src/app/city/reducers/city.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/city/reducers/city.reducer.ts ***!
  \***********************************************/
/*! exports provided: CityReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityReducer", function() { return CityReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/city.actions */ "./src/app/city/actions/city.actions.ts");


function CityReducer(state, action) {
    switch (action.type) {
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_CITY:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_CITY_SUCCESS:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { current_city: action.payload, loading: false });
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_CITY_FAILURE:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload.message });
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_NEXT_DAYS:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_NEXT_DAYS_SUCCESS:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { five_days_forecast: action.payload, loading: false });
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_NEXT_DAYS_FAILURE:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload.message });
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_AUTO_COMPLETE:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_AUTO_COMPLETE_SUCCESS:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user_input: action.payload, loading: false });
        case _actions_city_actions__WEBPACK_IMPORTED_MODULE_1__["CityActionTypes"].LOAD_AUTO_COMPLETE_FAILURE:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { error: action.payload.message });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.API_URL = 'http://dataservice.accuweather.com';
        this.API_KEY = 'QTzs8QlcN7l9GvHM2O6H5XXqHruxiGGx';
        this.CURRENT_WEATHER = 'currentconditions/v1';
        this.NEXT_5_DAYS = 'forecasts/v1/daily/5day';
        this.LOCATIONS = 'locations/v1/cities/autocomplete';
    }
    DataService.prototype.getLocationId = function (name) {
        var data = { apikey: this.API_KEY, q: name };
        var url = this.API_URL + "/" + this.LOCATIONS;
        return this.http.get(url, { params: data });
    };
    DataService.prototype.getCurrentWeather = function (id) {
        var url = this.API_URL + "/" + this.CURRENT_WEATHER + "/" + id;
        return this.http.get(url, { params: { apikey: this.API_KEY } });
    };
    DataService.prototype.getNext5days = function (id) {
        var data = { apikey: this.API_KEY, metric: 'true' };
        var url = this.API_URL + "/" + this.NEXT_5_DAYS + "/" + id;
        return this.http.get(url, { params: data });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/favorites/actions/favorites.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/favorites/actions/favorites.actions.ts ***!
  \********************************************************/
/*! exports provided: FavActionTypes, AddFavCityAction, RemoveFavCityAction, CurrentFavCityAction, CurrentFavCityActionSuccess, CurrentFavCityActionFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavActionTypes", function() { return FavActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavCityAction", function() { return AddFavCityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFavCityAction", function() { return RemoveFavCityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentFavCityAction", function() { return CurrentFavCityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentFavCityActionSuccess", function() { return CurrentFavCityActionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentFavCityActionFailure", function() { return CurrentFavCityActionFailure; });
var FavActionTypes;
(function (FavActionTypes) {
    FavActionTypes["ADD_FAV_CITY"] = "[FAV] added to favorites";
    FavActionTypes["REMOVE_FAV_CITY"] = "[FAV] removed from favorites";
    FavActionTypes["CURRENT_FAV_CITY_WEATHER"] = "[FAV] favorites current weather";
    FavActionTypes["CURRENT_FAV_CITY_WEATHER_SUCCESS"] = "[FAV] favorites current weather success";
    FavActionTypes["CURRENT_FAV_CITY_WEATHER_FAILURE"] = "[FAV] favorites current weather failure";
})(FavActionTypes || (FavActionTypes = {}));
var AddFavCityAction = /** @class */ (function () {
    function AddFavCityAction(payload) {
        this.payload = payload;
        this.type = FavActionTypes.ADD_FAV_CITY;
    }
    return AddFavCityAction;
}());

var RemoveFavCityAction = /** @class */ (function () {
    function RemoveFavCityAction(payload) {
        this.payload = payload;
        this.type = FavActionTypes.REMOVE_FAV_CITY;
    }
    return RemoveFavCityAction;
}());

var CurrentFavCityAction = /** @class */ (function () {
    function CurrentFavCityAction(payload) {
        this.payload = payload;
        this.type = FavActionTypes.CURRENT_FAV_CITY_WEATHER;
    }
    return CurrentFavCityAction;
}());

var CurrentFavCityActionSuccess = /** @class */ (function () {
    function CurrentFavCityActionSuccess(payload) {
        this.payload = payload;
        this.type = FavActionTypes.CURRENT_FAV_CITY_WEATHER_SUCCESS;
    }
    return CurrentFavCityActionSuccess;
}());

var CurrentFavCityActionFailure = /** @class */ (function () {
    function CurrentFavCityActionFailure(payload) {
        this.payload = payload;
        this.type = FavActionTypes.CURRENT_FAV_CITY_WEATHER_FAILURE;
    }
    return CurrentFavCityActionFailure;
}());



/***/ }),

/***/ "./src/app/favorites/effects/favorites.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/favorites/effects/favorites.effects.ts ***!
  \********************************************************/
/*! exports provided: FavEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavEffects", function() { return FavEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var _city_effects_city_effects_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../city/effects/city.effects.helper */ "./src/app/city/effects/city.effects.helper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/favorites.actions */ "./src/app/favorites/actions/favorites.actions.ts");








var FavEffects = /** @class */ (function () {
    function FavEffects(actions$, favService) {
        var _this = this;
        this.actions$ = actions$;
        this.favService = favService;
        this.currentFavs$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_favorites_actions__WEBPACK_IMPORTED_MODULE_7__["FavActionTypes"].CURRENT_FAV_CITY_WEATHER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) { return _this.favService.getCurrentWeather(action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return new _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_7__["CurrentFavCityActionSuccess"](Object(_city_effects_city_effects_helper__WEBPACK_IMPORTED_MODULE_4__["currentCityResponse"])(res[0], action.payload.id, action.payload.name)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_7__["CurrentFavCityActionFailure"](error)); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavEffects.prototype, "currentFavs$", void 0);
    FavEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], src_app_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], FavEffects);
    return FavEffects;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.component.css":
/*!***************************************************!*\
  !*** ./src/app/favorites/favorites.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fav-title {\n    color: #fff;\n    padding-top: 25px;\n}\n\n.del-icon:hover {\n    color: #48ff00;\n    text-shadow: 0 0 10px rgb(0, 0, 0);\n}\n\n.a {\n    grid-area: a;\n}\n\n.b {\n    grid-area: day;\n}\n\n.grid-container {\n    margin-top: 50px;\n    width: 60%;\n    margin-right: auto;\n    margin-left: auto;\n    background-color: #fff;\n    padding: 30px;\n    display: grid;\n    grid-template-areas: 'a a a a a';\n    grid-gap: 30px;\n    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n\n.grid-container>div {\n    height: 300px;\n    padding-top: 50px;\n    font-size: 20px;\n    text-align: center;\n    background: rgb(255, 255, 255);\n    background: radial-gradient(circle, rgb(165, 225, 255) 0%, rgb(57, 189, 255) 150%);\n    display: grid;\n    grid-template-areas: 'b' 'b' 'b';\n    -webkit-transition: linear .15s;\n    transition: linear .15s;\n}\n\n.grid-container>div:hover {\n    background: radial-gradient(circle, #345579 0%, #1b1d35 150%);\n    cursor: pointer;\n    color: #fff;\n}\n\n@media (max-width:850px) {\n    .grid-container {\n        width: 95%;\n        grid-template-areas: 'a' 'a' 'a' 'a' 'a';\n    }\n    .grid-container>div {\n        padding-top: 10px;\n        height: 170px;\n        border-bottom: 1px solid rgb(204, 204, 204);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsa0ZBQWtGO0lBQ2xGLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsK0JBQXVCO0lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1Ysd0NBQXdDO0lBQzVDO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLDJDQUEyQztJQUMvQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdi10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5kZWwtaWNvbjpob3ZlciB7XG4gICAgY29sb3I6ICM0OGZmMDA7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4IHJnYigwLCAwLCAwKTtcbn1cblxuLmEge1xuICAgIGdyaWQtYXJlYTogYTtcbn1cblxuLmIge1xuICAgIGdyaWQtYXJlYTogZGF5O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2EgYSBhIGEgYSc7XG4gICAgZ3JpZC1nYXA6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmdyaWQtY29udGFpbmVyPmRpdiB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoMTY1LCAyMjUsIDI1NSkgMCUsIHJnYig1NywgMTg5LCAyNTUpIDE1MCUpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2InICdiJyAnYic7XG4gICAgdHJhbnNpdGlvbjogbGluZWFyIC4xNXM7XG59XG5cbi5ncmlkLWNvbnRhaW5lcj5kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMzNDU1NzkgMCUsICMxYjFkMzUgMTUwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo4NTBweCkge1xuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdhJyAnYScgJ2EnICdhJyAnYSc7XG4gICAgfVxuICAgIC5ncmlkLWNvbnRhaW5lcj5kaXYge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDQsIDIwNCwgMjA0KTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/favorites/favorites.component.html":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center fav-title\">\n    <h2>Favorites</h2>\n    <hr> Click on item to remove\n</div>\n\n<div class=\"grid-container shadow-lg\">\n\n    <div *ngFor=\"let item of favs$ | async\" class=\"shadow-lg\">\n        {{item.name}}<br>\n        <div><img src=\"{{item.icon}}\"></div>\n        <div *ngIf=\"unit$ | async\" [innerHtml]=\"item.c\"></div>\n        <div *ngIf=\"!(unit$ | async)\" [innerHtml]=\"item.f\"></div>\n        <i class=\"far fa-trash-alt del-icon\" (click)=\"removeFav(item.id)\"></i>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/favorites.actions */ "./src/app/favorites/actions/favorites.actions.ts");




var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(store, unitStore) {
        this.store = store;
        this.unitStore = unitStore;
        this.favorites = [];
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favs$ = this.store.select(function (state) { return state['favorites']; });
        this.store.select(function (state) { return state; }).subscribe(function (data) { return _this.favorites = data['favorites']; }).unsubscribe();
        this.currentFavWeather();
        this.unit$ = this.unitStore.select(function (state) { return state['nav'].unit; });
    };
    FavoritesComponent.prototype.currentFavWeather = function () {
        var _this = this;
        this.favorites.forEach(function (fav) {
            _this.store.dispatch(new _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_3__["CurrentFavCityAction"](fav));
        });
    };
    FavoritesComponent.prototype.removeFav = function (id) {
        this.store.dispatch(new _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveFavCityAction"](id));
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/favorites/reducers/favorites.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/favorites/reducers/favorites.reducer.ts ***!
  \*********************************************************/
/*! exports provided: FavReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavReducer", function() { return FavReducer; });
/* harmony import */ var _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/favorites.actions */ "./src/app/favorites/actions/favorites.actions.ts");

var initialState = [
    { id: '215854', name: 'Tel Aviv' }
];
function FavReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__["FavActionTypes"].ADD_FAV_CITY:
            for (var x = 0; x < state.length; x++)
                if (state[x].id == action.payload.id)
                    return state.slice();
            return state.concat([action.payload]);
        case _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__["FavActionTypes"].REMOVE_FAV_CITY:
            return state.filter(function (fav) { return fav.id != action.payload; });
        case _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__["FavActionTypes"].CURRENT_FAV_CITY_WEATHER:
            return [];
        case _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__["FavActionTypes"].CURRENT_FAV_CITY_WEATHER_SUCCESS:
            return state.concat([action.payload]);
        case _actions_favorites_actions__WEBPACK_IMPORTED_MODULE_0__["FavActionTypes"].CURRENT_FAV_CITY_WEATHER_FAILURE:
            return { error: action.payload };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/nav/actions/nav.actions.ts":
/*!********************************************!*\
  !*** ./src/app/nav/actions/nav.actions.ts ***!
  \********************************************/
/*! exports provided: NavActionTypes, ToggleUnitAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavActionTypes", function() { return NavActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleUnitAction", function() { return ToggleUnitAction; });
var NavActionTypes;
(function (NavActionTypes) {
    NavActionTypes["TOGGLE_UNIT"] = "[NAV] toggle unit";
})(NavActionTypes || (NavActionTypes = {}));
var ToggleUnitAction = /** @class */ (function () {
    function ToggleUnitAction() {
        this.type = NavActionTypes.TOGGLE_UNIT;
    }
    return ToggleUnitAction;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".design-nav-link {\n    text-decoration: none;\n    display: inline-block;\n    position: relative;\n}\n\n.design-nav-link:after {\n    background: none repeat scroll 0 0 transparent;\n    bottom: 5px;\n    content: \"\";\n    display: block;\n    height: 3px;\n    left: 50%;\n    position: absolute;\n    background: #8490ff;\n    -webkit-transition: width 0.5s ease 0s, left 0.5s ease 0s;\n    transition: width 0.5s ease 0s, left 0.5s ease 0s;\n    width: 0;\n}\n\n.design-nav-link:hover:after {\n    width: 100%;\n    left: 0;\n}\n\n.unit-toggle {\n    padding-left: 25px;\n    padding-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlEQUFpRDtJQUFqRCxpREFBaUQ7SUFDakQsUUFBUTtBQUNaOztBQUVBO0lBQ0ksV0FBVztJQUNYLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVzaWduLW5hdi1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRlc2lnbi1uYXYtbGluazphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBib3R0b206IDVweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogIzg0OTBmZjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UgMHMsIGxlZnQgMC41cyBlYXNlIDBzO1xuICAgIHdpZHRoOiAwO1xufVxuXG4uZGVzaWduLW5hdi1saW5rOmhvdmVyOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xufVxuXG4udW5pdC10b2dnbGUge1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark shadow-lg\">\n    <a href=\"#\" class=\"navbar-brand\">WeatherTask</a>\n    <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <div class=\"navbar-nav ml-auto\">\n\n            <a routerLink=\"/\" routerLinkActive=\"active\" class=\"nav-item nav-link design-nav-link\">Home</a>\n            <a routerLink=\"/favorites\" class=\"nav-item nav-link design-nav-link\">Favorites</a>\n            <span class=\"unit-toggle\" (click)=\"unitToggle()\">\n                <input type=\"checkbox\" checked data-toggle=\"toggle\" data-on=\"C\" data-off=\"F\" data-offstyle=\"info\"\n                    data-height=\"25\">\n            </span>\n\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_nav_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/nav.actions */ "./src/app/nav/actions/nav.actions.ts");




var NavComponent = /** @class */ (function () {
    function NavComponent(store) {
        this.store = store;
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.unitToggle = function () {
        this.store.dispatch(new _actions_nav_actions__WEBPACK_IMPORTED_MODULE_3__["ToggleUnitAction"]());
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/nav/reducers/nav.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/nav/reducers/nav.reducer.ts ***!
  \*********************************************/
/*! exports provided: NavReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavReducer", function() { return NavReducer; });
/* harmony import */ var _actions_nav_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/nav.actions */ "./src/app/nav/actions/nav.actions.ts");

var initialState = {
    unit: true,
};
function NavReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_nav_actions__WEBPACK_IMPORTED_MODULE_0__["NavActionTypes"].TOGGLE_UNIT:
            return { unit: !(state.unit) };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gap {\n    padding-top: 3%;\n    padding-bottom: 3%;\n}\n\n.ng-autocomplete {\n    width: 100%;\n    max-width: 600px;\n    display: table;\n    margin: 0 auto;\n}\n\n.item {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center;\n    white-space: nowrap;\n    line-height: 45px;\n    height: 45px;\n    padding: 0 16px;\n    text-align: left;\n    max-width: 100%;\n    box-sizing: border-box;\n}\n\nspan {\n    margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYXAge1xuICAgIHBhZGRpbmctdG9wOiAzJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XG59XG5cbi5uZy1hdXRvY29tcGxldGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gap\">\n    <div class=\"container\">\n        <div class=\"ng-autocomplete\">\n\n            <ng-autocomplete [(ngModel)]=\"search\" (keyup)=\"onKey()\" [data]=\"locations\" [searchKeyword]=\"keyword\" placeHolder=\"Search City\" historyIdentifier=\"locations\" [itemTemplate]=\"itemTemplate\" [notFoundTemplate]=\"notFoundTemplate\" #auto>\n            </ng-autocomplete>\n\n            <ng-template #itemTemplate let-item>\n                <div *ngIf=\"item.LocalizedName\" class=\"item\" (click)=\"getCurrentCity(item.Key, item.LocalizedName)\">\n                    <span [innerHTML]=\"item.LocalizedName\"></span> &nbsp; | &nbsp;\n                    <small>{{item.Country.LocalizedName}} | {{item.Country.ID}}</small>\n                </div>\n            </ng-template>\n\n            <ng-template #notFoundTemplate let-notFound>\n                <div [innerHTML]=\"notFound\"></div>\n            </ng-template>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _city_actions_city_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../city/actions/city.actions */ "./src/app/city/actions/city.actions.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(state) {
        this.state = state;
        this.keyword = 'LocalizedName';
        this.locations = ['loading'];
    }
    SearchComponent.prototype.onKey = function () {
        var _this = this;
        this.state.dispatch(new _city_actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["GetAutoCompleteAction"](this.auto.query));
        this.state.select(function (state) { return state; }).subscribe(function (data) {
            if (data['city'].user_input)
                _this.locations = data['city'].user_input[0];
        });
    };
    SearchComponent.prototype.getCurrentCity = function (id, name) {
        name = name.replace(/<[^>]+>/gm, '');
        this.state.dispatch(new _city_actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["LoadCityAction"]({ id: id, name: name }));
        this.state.dispatch(new _city_actions_city_actions__WEBPACK_IMPORTED_MODULE_3__["Next5DaysAction"](id));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "auto", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mor/Desktop/weatherApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map