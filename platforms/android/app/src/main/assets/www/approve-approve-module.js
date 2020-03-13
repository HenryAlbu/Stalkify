(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approve-approve-module"],{

/***/ "./src/app/pages/approve/approve.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/approve/approve.module.ts ***!
  \*************************************************/
/*! exports provided: ApprovePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePageModule", function() { return ApprovePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _approve_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approve.page */ "./src/app/pages/approve/approve.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _approve_page__WEBPACK_IMPORTED_MODULE_5__["ApprovePage"]
    }
];
var ApprovePageModule = /** @class */ (function () {
    function ApprovePageModule() {
    }
    ApprovePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_approve_page__WEBPACK_IMPORTED_MODULE_5__["ApprovePage"]]
        })
    ], ApprovePageModule);
    return ApprovePageModule;
}());



/***/ }),

/***/ "./src/app/pages/approve/approve.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/approve/approve.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"prosesHome()\">\r\n        <ion-icon name=\"exit\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>About</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card *ngFor=\"let approveData of approveDatas\">\r\n    <div class=\"crop-none\">\r\n      <img src=\"http://www.spontadeal.com/stalkify/upload/uploadsSpotted/{{approveData.spottedPhoto}}\" />\r\n    </div>\r\n\r\n    <!-- <ion-card-header>\r\n      <ion-card-subtitle></ion-card-subtitle>\r\n      <ion-card-title>Madison, WI</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\r\n    </ion-card-content>-->\r\n    <ion-button expand=\"full\" color=\"primary\" (click)=\"prosesApproval(approveData, approveData.spottedPhoto, approveData.userId, 2)\">This is a selfe shot (+5 pts)</ion-button>\r\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"prosesApproval(approveData, approveData.spottedPhoto, approveData.userId, 1)\">This is a creeper shot (+1 pts)</ion-button>\r\n    <ion-button expand=\"full\" color=\"danger\" (click)=\"prosesApproval(approveData, approveData.spottedPhoto, approveData.userId, 0)\">This is not me (0 pts)</ion-button>\r\n  </ion-card>\r\n\r\n\r\n\r\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\r\n\t    <ion-infinite-scroll-content\r\n\t      loadingSpinner=\"bubbles\"\r\n\t      loadingText=\"Loading more data...\">\r\n\t    </ion-infinite-scroll-content>\r\n\t</ion-infinite-scroll>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/approve/approve.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/approve/approve.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcHJvdmUvYXBwcm92ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/approve/approve.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/approve/approve.page.ts ***!
  \***********************************************/
/*! exports provided: ApprovePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePage", function() { return ApprovePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var ApprovePage = /** @class */ (function () {
    function ApprovePage(router, postPvdr, toastCtrl) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.approveDatas = [];
        this.limit = 3;
        this.start = 0;
    }
    ApprovePage.prototype.ngOnInit = function () {
    };
    ApprovePage.prototype.ionViewWillEnter = function () {
        this.loadApproveData();
    };
    ApprovePage.prototype.prosesHome = function () {
        this.router.navigate(['tabs/home/']);
    };
    ApprovePage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadApproveData().then(function () {
                event.target.complete();
            });
        }, 500);
    };
    ApprovePage.prototype.removePost = function (post) {
        var index = this.approveDatas.indexOf(post);
        if (index > -1) {
            this.approveDatas.splice(index, 1);
        }
    };
    ApprovePage.prototype.loadApproveData = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                limit: _this.limit,
                start: _this.start,
            };
            _this.postPvdr.postData(body, 'proses-api.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var approveData = _a[_i];
                    _this.approveDatas.push(approveData);
                }
                resolve(true);
            });
        });
    };
    ApprovePage.prototype.prosesApproval = function (post, spottedPhoto, userId, type) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            var _this = this;
            return __generator(this, function (_a) {
                body = {
                    spottedPhoto: spottedPhoto,
                    type: type,
                    userId: userId,
                    aksi: 'approvePhoto'
                };
                this.postPvdr.postData(body, 'proses-api.php').subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var alertmsg, toast;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertmsg = data.msg;
                                if (!data.success) return [3 /*break*/, 1];
                                return [3 /*break*/, 3];
                            case 1: return [4 /*yield*/, this.toastCtrl.create({
                                    message: alertmsg,
                                    duration: 2000
                                })];
                            case 2:
                                toast = _a.sent();
                                toast.present();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                this.removePost(post);
                return [2 /*return*/];
            });
        });
    };
    ApprovePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approve',
            template: __webpack_require__(/*! ./approve.page.html */ "./src/app/pages/approve/approve.page.html"),
            styles: [__webpack_require__(/*! ./approve.page.scss */ "./src/app/pages/approve/approve.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], ApprovePage);
    return ApprovePage;
}());



/***/ })

}]);
//# sourceMappingURL=approve-approve-module.js.map