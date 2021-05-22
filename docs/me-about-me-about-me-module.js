(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["me-about-me-about-me-module"],{

/***/ "4AB2":
/*!*******************************************************************!*\
  !*** ./src/app/me/about-me/components/banner/banner.component.ts ***!
  \*******************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/global-constants */ "jxL5");



class BannerComponent {
    constructor() {
        this.gc = src_app_common_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"];
    }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 15, vars: 4, consts: [[1, "banner"], [1, "container"], [1, "row"], [1, "col-sm-12", "col-md-4", "text-center"], [1, "image-fluid", "rounded-circle", 3, "src", "alt"], [1, "m-3"], [1, "col-sm-12", "col-md-8"], [1, "text-start"], [1, "d-flex", "flex-column", "align-items-start", "mt-5"], ["href", "#whoAmISection", 1, "btn", "btn-link", "text-white"], ["href", "#whatIDoSection", 1, "btn", "btn-link", "text-white"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Who am I?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "What I Do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.gc.AVATAR || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsmTSO8AUBRn1D-9hiSMles-PJRO9Ci5_5w&usqp=CAU", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.gc.SHORT_NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gc.TITLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gc.FULL_NAME);
    } }, styles: [".banner[_ngcontent-%COMP%] {\n  background-color: #0066c5;\n  height: calc(100vh - 50%);\n  display: flex;\n  align-items: center;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJDSE07RURJTix5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdDTEk7QURJUiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vdGhlbWUvY29sb3JcIjtcblxuLmJhbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbn1cbiIsIiRwcmltYXJ5OiAjMDA2NmM1O1xuXG4kd2hpdGU6ICNmZmY7XG5cbiRiZy1ib2R5OiAjZjVmNWY1O1xuJGNvbG9yLXRleHQ6IzMwMzAzMCJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ax/a":
/*!********************************************************!*\
  !*** ./src/app/me/about-me/about-me-routing.module.ts ***!
  \********************************************************/
/*! exports provided: AboutMeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeRoutingModule", function() { return AboutMeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ "EJb7");





const routes = [
    { path: '', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"] }
];
class AboutMeRoutingModule {
}
AboutMeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutMeRoutingModule });
AboutMeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutMeRoutingModule_Factory(t) { return new (t || AboutMeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutMeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "EJb7":
/*!************************************************************!*\
  !*** ./src/app/me/about-me/about-me/about-me.component.ts ***!
  \************************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/banner/banner.component */ "4AB2");
/* harmony import */ var _components_who_am_i_who_am_i_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/who-am-i/who-am-i.component */ "fwkM");
/* harmony import */ var _components_what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/what-ido/what-ido.component */ "t8kW");





class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 4, vars: 0, consts: [["data-bs-spy", "scroll", "data-bs-target", "#navbar-example2", "data-bs-offset", "0", "tabindex", "0", 1, "scrollspy-example"], ["id", "whoAmISection"], ["id", "whatIDoSection"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-who-am-i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-what-ido", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _components_who_am_i_who_am_i_component__WEBPACK_IMPORTED_MODULE_2__["WhoAmIComponent"], _components_what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_3__["WhatIDoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC1tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "EzXz":
/*!************************************************!*\
  !*** ./src/app/me/about-me/about-me.module.ts ***!
  \************************************************/
/*! exports provided: AboutMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeModule", function() { return AboutMeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_me_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me-routing.module */ "Ax/a");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "EJb7");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/banner/banner.component */ "4AB2");
/* harmony import */ var _components_who_am_i_who_am_i_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/who-am-i/who-am-i.component */ "fwkM");
/* harmony import */ var _components_what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/what-ido/what-ido.component */ "t8kW");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");









class AboutMeModule {
}
AboutMeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutMeModule });
AboutMeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutMeModule_Factory(t) { return new (t || AboutMeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _about_me_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutMeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutMeModule, { declarations: [_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _components_who_am_i_who_am_i_component__WEBPACK_IMPORTED_MODULE_5__["WhoAmIComponent"], _components_what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_6__["WhatIDoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _about_me_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutMeRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _components_who_am_i_who_am_i_component__WEBPACK_IMPORTED_MODULE_5__["WhoAmIComponent"], _components_what_ido_what_ido_component__WEBPACK_IMPORTED_MODULE_6__["WhatIDoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _about_me_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutMeRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "fwkM":
/*!***********************************************************************!*\
  !*** ./src/app/me/about-me/components/who-am-i/who-am-i.component.ts ***!
  \***********************************************************************/
/*! exports provided: WhoAmIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoAmIComponent", function() { return WhoAmIComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WhoAmIComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhoAmIComponent.ɵfac = function WhoAmIComponent_Factory(t) { return new (t || WhoAmIComponent)(); };
WhoAmIComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhoAmIComponent, selectors: [["app-who-am-i"]], decls: 23, vars: 0, consts: [[1, "container", "pt-5"], [1, "row"], [1, "col-12"], [1, "col-md-6"], ["src", "assets/images/coder.svg", "alt", "", 1, "img-fluid"], [1, "col-md-6", "d-flex", "align-items-center"], ["src", "assets/images/coworkers.svg", "alt", "", 1, "img-fluid"]], template: function WhoAmIComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Who Am I?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I'm a software engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Who loves writing code. I have been obsessed with the idea of using software to solve practical problems. Even when I leave the office, I tend to continue writing code at the house. I believe in the power of programming to transform and improve the lives of people around the world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I'm a constant learner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Who lives learning new technologies, best practices, new tools but also about life. working with other people, learning about other ways of thinking, and creating team solutions are some of the best things about my job. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aG8tYW0taS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhoAmIComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-who-am-i',
                templateUrl: './who-am-i.component.html',
                styleUrls: ['./who-am-i.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t8kW":
/*!***********************************************************************!*\
  !*** ./src/app/me/about-me/components/what-ido/what-ido.component.ts ***!
  \***********************************************************************/
/*! exports provided: WhatIDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatIDoComponent", function() { return WhatIDoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class WhatIDoComponent {
    constructor() {
        this.icons = {
            database: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDatabase"],
            backend: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCogs"],
            frontend: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAddressCard"]
        };
    }
    ngOnInit() {
    }
}
WhatIDoComponent.ɵfac = function WhatIDoComponent_Factory(t) { return new (t || WhatIDoComponent)(); };
WhatIDoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhatIDoComponent, selectors: [["app-what-ido"]], decls: 41, vars: 3, consts: [[1, "container-fluid", "py-5", "bg-white"], [1, "row"], [1, "col-12"], [1, "container"], [1, "col-md-4"], [1, "card", "card-info"], [1, "card-body"], [1, "card-title", "text-center"], [1, "icon", 3, "icon"], [1, "card-title", "text-primary", "text-center"], [1, "card-body", "card-body-text"], [1, "card-text"]], template: function WhatIDoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "What I do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut quas iste ea facere sapiente vitae quos ullam temporibus, tempore aliquam architecto at quam delectus, atque officiis assumenda accusantium. Odit? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Front-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Design, organize and build user-friendly applications using technologies like Angular or ReactJs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Back-End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Every client-server application must have the best architecture and best practices in the server to provide the user with the best experience. All of this is possible thanks to technologies such as .NET or NodeJs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Databases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " The organization, design, and structure of a database are some of the fundamental parts for the stability, scalability, and performance of an application. Experience in technologies such as Microsoft SQL Server, MySql, and PostgreSQL. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons.frontend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons.backend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.icons.database);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".icon[_ngcontent-%COMP%] {\n  color: #0066c5;\n  font-size: 2rem;\n}\n\n.card-info[_ngcontent-%COMP%] {\n  height: 350px;\n}\n\n.card-info[_ngcontent-%COMP%]   .card-body-text[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3doYXQtaWRvLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQ0hNO0VESU4sZUFBQTtBQURKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUVJO0VBQ0ksaUJBQUE7QUFBUiIsImZpbGUiOiJ3aGF0LWlkby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS9jb2xvclwiO1xuXG4uaWNvbntcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLmNhcmQtaW5mb3tcbiAgICBoZWlnaHQ6IDM1MHB4O1xuXG4gICAgLmNhcmQtYm9keS10ZXh0e1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB9XG59IiwiJHByaW1hcnk6ICMwMDY2YzU7XG5cbiR3aGl0ZTogI2ZmZjtcblxuJGJnLWJvZHk6ICNmNWY1ZjU7XG4kY29sb3ItdGV4dDojMzAzMDMwIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatIDoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-what-ido',
                templateUrl: './what-ido.component.html',
                styleUrls: ['./what-ido.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=me-about-me-about-me-module.js.map