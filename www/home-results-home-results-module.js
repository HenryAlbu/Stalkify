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

module.exports = ".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%); }\n  .popup-menu-overlay.in {\n    opacity: 1;\n    visibility: visible; }\n  .popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  transition: all .25s ease-in-out; }\n  .popup-menu-toggle.out {\n    opacity: 0;\n    visibility: hidden;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    transition: all .15s ease-in-out; }\n  .popup-menu-toggle.out:before {\n      transition: all .15s ease-in-out;\n      -webkit-transform: scale(0);\n      transform: scale(0); }\n  .popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  transition: all .25s ease-in-out;\n  transition-delay: .15s;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap; }\n  .popup-menu-panel .popup-menu-item {\n    margin: auto;\n    -moz-flex: 1 0 30%;\n    flex: 1 0 30%;\n    display: -moz-flex;\n    display: flex;\n    -moz-flex-direction: column;\n    flex-direction: column;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0;\n    transition: all .25s ease-in-out; }\n  .popup-menu-panel .popup-menu-item ion-icon {\n      margin: 0 auto;\n      text-align: center;\n      color: #fff; }\n  .popup-menu-panel .popup-menu-item span {\n      padding: 0;\n      margin: 0 0 auto 0;\n      color: #fff;\n      text-align: center;\n      font-size: 12px;\n      text-transform: uppercase;\n      font-weight: 500;\n      line-height: 18px; }\n  .popup-menu-panel .popup-menu-item:active i {\n      color: #dd4135;\n      transition: all 0.15s; }\n  .popup-menu-panel .popup-menu-item:active span {\n      color: #dd4135;\n      transition: all .15s; }\n  .popup-menu-panel.in {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    transition-delay: 0s; }\n  .popup-menu-panel.in .popup-menu-item {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 1;\n      transition-delay: .15s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L0M6XFxVc2Vyc1xcdHlcXFN0YWxraWZ5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwb3BtZW51XFxwb3BtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUVsQixpQ0FBaUM7RUFFakMsMkZBQXFGLEVBQUE7RUFaekY7SUFjUSxVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7RUFJM0I7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWixnQ0FBZ0MsRUFBQTtFQVhwQztJQWFRLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUVuQixnQ0FBZ0MsRUFBQTtFQWxCeEM7TUFxQlksZ0NBQWdDO01BQ2hDLDJCQUEyQjtNQUMzQixtQkFBbUIsRUFBQTtFQUsvQjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBRVosaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsWUFBWTtFQUVaLGdDQUFnQztFQUVoQyxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBSW5CLGtCQUFrQjtFQUVsQixhQUFhO0VBSWIsZUFBZSxFQUFBO0VBNUJuQjtJQThCUSxZQUFZO0lBSVosa0JBQWtCO0lBRWxCLGFBQWE7SUFJYixrQkFBa0I7SUFFbEIsYUFBYTtJQUliLDJCQUEyQjtJQUUzQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixVQUFVO0lBRVYsZ0NBQWdDLEVBQUE7RUFyRHhDO01BdURZLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsV0FBVyxFQUFBO0VBekR2QjtNQTREWSxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7RUFuRTdCO01BdUVnQixjQUFxQjtNQUVyQixxQkFBcUIsRUFBQTtFQXpFckM7TUE0RWdCLGNBQXFCO01BRXJCLG9CQUFvQixFQUFBO0VBOUVwQztJQW1GUSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBRW5CLG9CQUFvQixFQUFBO0VBdEY1QjtNQXdGWSwyQkFBMkI7TUFDM0IsbUJBQW1CO01BQ25CLFVBQVU7TUFFVixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wbWVudS9wb3BtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9wdXAgTWVudSAvL1xyXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYmEoNzksMzYsMTcyLCAuODUpIDAlLCByZ2JhKDc5LDM2LDE3MiwgLjY1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDc5LDM2LDE3MiwgLjg1KSAwJSwgcmdiYSg3OSwzNiwxNzIsIC42NSkgMTAwJSk7XHJcbiAgICAmLmluIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3B1cC1tZW51LXRvZ2dsZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDEwMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgICYub3V0IHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3B1cC1tZW51LXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIGJvdHRvbTogODBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgei1pbmRleDogMTAyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjE1cztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcclxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAucG9wdXAtbWVudS1pdGVtIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMSAwIDMwJTtcclxuICAgICAgICAtd2Via2l0LWZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgLW1vei1ib3gtZmxleDogMSAwIDMwJTtcclxuICAgICAgICAtbW96LWZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgLW1zLWZsZXg6IDEgMCAzMCU7XHJcbiAgICAgICAgZmxleDogMSAwIDMwJTtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCBhdXRvIDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDIyMSw2NSw1Myk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMjEsNjUsNTMpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5pbiB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICAucG9wdXAtbWVudS1pdGVtIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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

module.exports = ":host ion-content {\n  --background: var(--ion-color-light); }\n\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium); }\n\n:host ion-card.no-radius {\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL0M6XFxVc2Vyc1xcdHlcXFN0YWxraWZ5L3NyY1xcYXBwXFxwYWdlc1xcaG9tZS1yZXN1bHRzXFxob21lLXJlc3VsdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsb0NBQWEsRUFBQTs7QUFGckI7RUFNUSxnQkFBZ0I7RUFDaEIsaURBQWlELEVBQUE7O0FBUHpEO0VBWVksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXJlc3VsdHMvaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgJi5uby1yYWRpdXMge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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