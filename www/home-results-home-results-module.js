(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-results-home-results-module"],{

/***/ "./src/app/components/popmenu/popmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInDown\">\r\n  <ion-fab-button (click)=\"togglePopupMenu()\">\r\n    <ion-ripple-effect></ion-ripple-effect>\r\n    <ion-icon name=\"apps\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<div class=\"popup-menu\">\r\n  <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\"></div>\r\n  <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\r\n    <div class=\"popup-menu-item\">\r\n      <ion-icon name=\"cog\" slot=\"middle\" size=\"large\"></ion-icon>\r\n      <span>Config</span>\r\n    </div>\r\n    <div class=\"popup-menu-item\">\r\n      <ion-icon name=\"beer\" slot=\"middle\" size=\"large\"></ion-icon>\r\n      <span>Activities</span>\r\n    </div>\r\n    <div class=\"popup-menu-item\">\r\n      <ion-icon name=\"person\" slot=\"middle\" size=\"large\"></ion-icon>\r\n      <span>Settings</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%); }\n  .popup-menu-overlay.in {\n    opacity: 1;\n    visibility: visible; }\n  .popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  transition: all .25s ease-in-out; }\n  .popup-menu-toggle.out {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    transition: all .15s ease-in-out; }\n  .popup-menu-toggle.out:before {\n      transition: all .15s ease-in-out;\n      -webkit-transform: scale(0);\n      transform: scale(0); }\n  .popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  transition: all .25s ease-in-out;\n  transition-delay: .15s;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap; }\n  .popup-menu-panel .popup-menu-item {\n    margin: auto;\n    -moz-flex: 1 0 30%;\n    flex: 1 0 30%;\n    display: -moz-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    flex-direction: column;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0;\n    transition: all .25s ease-in-out; }\n  .popup-menu-panel .popup-menu-item ion-icon {\n      margin: 0 auto;\n      text-align: center;\n      color: #fff; }\n  .popup-menu-panel .popup-menu-item span {\n      padding: 0;\n      margin: 0 0 auto 0;\n      color: #fff;\n      text-align: center;\n      font-size: 12px;\n      text-transform: uppercase;\n      font-weight: 500;\n      line-height: 18px; }\n  .popup-menu-panel .popup-menu-item:active i {\n      color: #dd4135;\n      transition: all 0.15s; }\n  .popup-menu-panel .popup-menu-item:active span {\n      color: #dd4135;\n      transition: all .15s; }\n  .popup-menu-panel.in {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    transition-delay: 0s; }\n  .popup-menu-panel.in .popup-menu-item {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 1;\n      transition-delay: .15s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L0M6XFx4YW1wcFxcaHRkb2NzXFxTdGFsa2lmeS9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wbWVudVxccG9wbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFFbEIsaUNBQWlDO0VBRWpDLDJGQUFxRixFQUFBO0VBWnpGO0lBY1EsVUFBVTtJQUNWLG1CQUFtQixFQUFBO0VBSTNCO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosZ0NBQWdDLEVBQUE7RUFYcEM7SUFhUSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFFbkIsZ0NBQWdDLEVBQUE7RUFsQnhDO01BcUJZLGdDQUFnQztNQUNoQywyQkFBMkI7TUFDM0IsbUJBQW1CLEVBQUE7RUFLL0I7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUVaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osU0FBUztFQUNULG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLFlBQVk7RUFFWixnQ0FBZ0M7RUFFaEMsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUluQixrQkFBa0I7RUFFbEIsYUFBYTtFQUliLGVBQWUsRUFBQTtFQTVCbkI7SUE4QlEsWUFBWTtJQUlaLGtCQUFrQjtJQUVsQixhQUFhO0lBSWIsa0JBQWtCO0lBRWxCLGFBQWE7SUFJYiwyQkFBMkI7SUFFM0Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsVUFBVTtJQUVWLGdDQUFnQyxFQUFBO0VBckR4QztNQXVEWSxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQXpEdkI7TUE0RFksVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGlCQUFpQixFQUFBO0VBbkU3QjtNQXVFZ0IsY0FBcUI7TUFFckIscUJBQXFCLEVBQUE7RUF6RXJDO01BNEVnQixjQUFxQjtNQUVyQixvQkFBb0IsRUFBQTtFQTlFcEM7SUFtRlEsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUVuQixvQkFBb0IsRUFBQTtFQXRGNUI7TUF3RlksMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQixVQUFVO01BRVYsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcG1lbnUvcG9wbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBvcHVwIE1lbnUgLy9cclxuLnBvcHVwLW1lbnUtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDc5LDM2LDE3MiwgLjg1KSAwJSwgcmdiYSg3OSwzNiwxNzIsIC42NSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg3OSwzNiwxNzIsIC44NSkgMCUsIHJnYmEoNzksMzYsMTcyLCAuNjUpIDEwMCUpO1xyXG4gICAgJi5pbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdXAtbWVudS10b2dnbGUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxMDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmLm91dCB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucG9wdXAtbWVudS1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBib3R0b206IDgwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHotaW5kZXg6IDEwMjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogLjE1cztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLnBvcHVwLW1lbnUtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxIDAgMzAlO1xyXG4gICAgICAgIC1tb3otYm94LWZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgLW1vei1mbGV4OiAxIDAgMzAlO1xyXG4gICAgICAgIC1tcy1mbGV4OiAxIDAgMzAlO1xyXG4gICAgICAgIGZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgYXV0byAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMjEsNjUsNTMpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjIxLDY1LDUzKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuaW4ge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICAgICAgLnBvcHVwLW1lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: PopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmenuComponent", function() { return PopmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopmenuComponent = /** @class */ (function () {
    function PopmenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
    }
    PopmenuComponent.prototype.ngOnInit = function () {
    };
    PopmenuComponent.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    PopmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popmenu',
            template: __webpack_require__(/*! ./popmenu.component.html */ "./src/app/components/popmenu/popmenu.component.html"),
            styles: [__webpack_require__(/*! ./popmenu.component.scss */ "./src/app/components/popmenu/popmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], PopmenuComponent);
    return PopmenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPageModule", function() { return HomeResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/popmenu/popmenu.component */ "./src/app/components/popmenu/popmenu.component.ts");
/* harmony import */ var _home_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-results.page */ "./src/app/pages/home-results/home-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { TutorialModalController } from './../tutorial/tutorial.module';
var routes = [
    {
        path: '',
        component: _home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"]
    }
];
var HomeResultsPageModule = /** @class */ (function () {
    function HomeResultsPageModule() {
    }
    HomeResultsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"], _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__["PopmenuComponent"]]
        })
    ], HomeResultsPageModule);
    return HomeResultsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">    \r\n    <ion-title>\r\n        <ion-text color=\"light\">\r\n          <ion-text color=\"light\" class=\"fw700\">My Points: {{points}}</ion-text>\r\n        </ion-text>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"prosesLogout()\">\r\n        <ion-icon name=\"exit\"></ion-icon>\r\n      </ion-button>     \r\n    </ion-buttons>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content fullscreen>  \r\n  <section [hidden]=ishidden class=\"full-width\">    \r\n    <ion-button (click)=\"approvePage()\" class=\"no-margin\" expand=\"full\" color=\"secondary\">APPROVE PHOTOS \r\n    <ion-badge slot=\"end\" color=\"primary\" class=\"margin-left\">12</ion-badge></ion-button>\r\n  </section>  \r\n\r\n\r\n  <!-- USER SELECTED PHOTO -->\r\n  <ion-card>\r\n    <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\" edge>\r\n      <ion-fab-button  (click)=\"takePicture()\" size=\"large\" color=\"danger\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <div class=\"crop\">\r\n      <img (click)=\"presentImage(userPhoto)\" [src]=\"userPhoto\" />\r\n    </div>\r\n    <ion-card-header>\r\n      <ion-card-subtitle>User of the Day:</ion-card-subtitle>\r\n      <ion-card-title>{{fullName}}</ion-card-title>\r\n    </ion-card-header> \r\n         \r\n  </ion-card>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n       <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n       <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n       <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n       <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div><img src=\"assets/img/100.png\" /></div>\r\n          </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n  "

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium); }\n\n:host ion-card.no-radius {\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL0M6XFx4YW1wcFxcaHRkb2NzXFxTdGFsa2lmeS9zcmNcXGFwcFxccGFnZXNcXGhvbWUtcmVzdWx0c1xcaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG9DQUFhLEVBQUE7O0FBRnJCO0VBTVEsZ0JBQWdCO0VBQ2hCLGlEQUFpRCxFQUFBOztBQVB6RDtFQVlZLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL2hvbWUtcmVzdWx0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgICYubm8tcmFkaXVzIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPage", function() { return HomeResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// Modals

var STORAGE_KEY = 'my_images';
var HomeResultsPage = /** @class */ (function () {
    function HomeResultsPage(modalCtrl, router, toastCtrl, storage) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.images = [];
        this.ishidden = false;
    }
    HomeResultsPage.prototype.takePicture = function () {
        this.router.navigate(['/approve-photo']);
    };
    // Just to display username on login
    HomeResultsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('session_storage').then(function (res) {
            _this.username = res.username;
            _this.points = res.points;
            _this.userId = res.userId;
            console.log(res);
            // Hides button if not selected user
            if (res.userId != res.selectedUserId) {
                _this.ishidden = true;
            }
        });
        this.storage.get('selected_user').then(function (res) {
            _this.userPhoto = "http://spontadeal.com/stalkify/upload/uploads/" + res.userPhoto;
            _this.fullName = res.fullName;
            _this.selectedUserId = res.userId;
        });
    };
    // Log out on click
    HomeResultsPage.prototype.prosesLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/login']);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: 'Logout successful',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Shows popup of main image
    HomeResultsPage.prototype.presentImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_4__["ImagePage"],
                            componentProps: { value: image }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.approvePage = function () {
        this.router.navigate(['/approve']);
    };
    HomeResultsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-results',
            template: __webpack_require__(/*! ./home-results.page.html */ "./src/app/pages/home-results/home-results.page.html"),
            styles: [__webpack_require__(/*! ./home-results.page.scss */ "./src/app/pages/home-results/home-results.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], HomeResultsPage);
    return HomeResultsPage;
}());



/***/ })

}]);
//# sourceMappingURL=home-results-home-results-module.js.map