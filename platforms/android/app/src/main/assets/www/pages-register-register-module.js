(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"auth-page\">  \r\n  <div class=\"register-page\">\r\n\r\n    <!-- IMAGE UPLOAD -->  \r\n    <ion-grid>\r\n          <ion-row> \r\n            <ion-col>     \r\n              <ion-avatar *ngFor=\"let img of images; index as pos\">\r\n                <img [src]=\"img.path\" /> \r\n              </ion-avatar>        \r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <!-- IF THERE IS AN IMAGE -->\r\n    <div *ngFor=\"let img of images; index as pos\">\r\n      <ion-grid>\r\n          <ion-row> \r\n            <ion-col>\r\n              <ion-button color=\"secondary\" (click)=\"selectdeleteImage(img, pos)\" expand=\"block\">RETAKE</ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button color=\"secondary\" (click)=\"deleteImage(img, pos)\" expand=\"block\">DELETE</ion-button>             \r\n            </ion-col>\r\n          </ion-row>\r\n      </ion-grid>\r\n    </div>    \r\n\r\n\r\n    <!-- IF THERE IS NO IMAGE -->\r\n    <div *ngIf=\"images.length == 0\">\r\n      <ion-avatar>\r\n        <ion-img src=\"assets/img/user.png\"></ion-img>\r\n      </ion-avatar>  \r\n      <div class=\"space-top\"></div>     \r\n      <ion-button color=\"secondary\" (click)=\"selectImage()\" expand=\"block\">\r\n        <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n          Add Profile Image\r\n      </ion-button>\r\n      <p> Your profile image will be the image used when you are chosen</p>\r\n    </div>   \r\n\r\n\r\n    <!-- Username -->\r\n    <ion-item no-padding class=\"animated fadeInUp\">\r\n      <ion-label color=\"secondary\" position=\"floating\">\r\n        <ion-icon name=\"person\" item-start></ion-icon>\r\n        Username:\r\n      </ion-label>\r\n      <ion-input color=\"secondary\" type=\"username\" [(ngModel)]=\"username\"></ion-input>\r\n    </ion-item>\r\n\r\n    <!-- Full Name -->\r\n    <ion-item no-padding class=\"animated fadeInUp\">\r\n      <ion-label color=\"secondary\" position=\"floating\">\r\n        <ion-icon name=\"person\" item-start></ion-icon>\r\n        Full Name: (First and Last)\r\n      </ion-label>\r\n      <ion-input color=\"secondary\" type=\"fullName\" [(ngModel)]=\"fullName\"></ion-input>\r\n    </ion-item>\r\n\r\n    <!-- Full Name -->\r\n    <ion-item no-padding class=\"animated fadeInUp\">\r\n      <ion-label color=\"secondary\" position=\"floating\">\r\n        <ion-icon name=\"mail\" item-start></ion-icon>\r\n          Email:\r\n      </ion-label>\r\n      <ion-input color=\"secondary\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n    </ion-item>\r\n      \r\n\r\n    <!-- Password -->\r\n    <ion-item no-padding class=\"animated fadeInUp\">\r\n      <ion-label position=\"floating\">\r\n        <ion-icon name=\"lock\" item-start></ion-icon>\r\n        Password:\r\n      </ion-label>\r\n      <ion-input color=\"secondary\" type=\"password\"  [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>  \r\n\r\n    <!-- Password Confirm -->\r\n    <ion-item no-padding class=\"animated fadeInUp\">\r\n      <ion-label position=\"floating\">\r\n        <ion-icon name=\"lock\" item-start></ion-icon>\r\n        Confirm Password:\r\n      </ion-label>\r\n      <ion-input color=\"secondary\" type=\"password\"  [(ngModel)]=\"confirm_password\"></ion-input>\r\n    </ion-item>      \r\n    \r\n\r\n    <!-- Register Button -->\r\n    <section class=\"space-top\">      \r\n    <div *ngFor=\"let img of images; index as pos\">  \r\n      <ion-button color=\"secondary\" (click)=\"prosesRegister(img)\" expand=\"block\">Register</ion-button>\r\n    </div>\r\n\r\n    <div *ngIf=\"images.length == 0\">\r\n      <ion-button color=\"secondary\" expand=\"block\" disabled>Register</ion-button>\r\n    </div>\r\n    </section>\r\n    \r\n\r\n    <!-- Sign Up Button -->\r\n    <div text-center class=\"space-top\">\r\n      <span (click)=\"formLogin()\" class=\"paz\" tappable>\r\n        <ion-text color=\"light\">\r\n          My bad fam, <strong>I already have an account</strong>\r\n        </ion-text>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"space-top-20\"></div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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











var STORAGE_KEY = 'my_images';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, postPvdr, toastCtrl, camera, file, http, webview, actionSheetController, storage, plt, loadingController, ref, filePath) {
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.images = [];
        this.username = "";
        this.password = "";
        this.userPhoto = "";
        this.confirm_password = "";
        this.fullName = "";
        this.email = "";
    }
    // IMAGE UPLOAD STUFF ---------------------------------
    RegisterPage.prototype.ngOnInit = function () {
        this.plt.ready().then(function () {
            //this.loadStoredImages();
        });
    };
    RegisterPage.prototype.loadStoredImages = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    _this.images.push({ name: img, path: resPath, filePath: filePath });
                }
            }
        });
    };
    RegisterPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    RegisterPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.takePicture(this.camera.PictureSourceType.CAMERA);
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            targetHeight: 500,
            targetWidth: 500,
            cameraDirection: 1,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.plt.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    RegisterPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        this.userPhoto = newFileName;
        return newFileName;
    };
    RegisterPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    RegisterPage.prototype.updateStoredImages = function (name) {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            if (!arr) {
                var newImages = [name];
                _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            _this.images = [newEntry].concat(_this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
        });
    };
    RegisterPage.prototype.deleteImage = function (imgEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
                _this.presentToast('File removed.');
            });
        });
    };
    RegisterPage.prototype.selectdeleteImage = function (imgEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
                _this.presentToast('File removed.');
            });
        });
        this.takePicture(this.camera.PictureSourceType.CAMERA);
    };
    RegisterPage.prototype.startUpload = function (imgEntry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    RegisterPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            _this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    };
    RegisterPage.prototype.uploadImageData = function (formData) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Gucci',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.http.post("http://spontadeal.com/stalkify/upload/upload.php", formData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            if (res['success']) {
                                _this.presentToast('File upload complete.');
                            }
                            else {
                                _this.presentToast('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // // //
    RegisterPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    // Makes sure all feilds are filled in register form
    // If form is ok, send data to api
    RegisterPage.prototype.prosesRegister = function (imgEntry) {
        return __awaiter(this, void 0, void 0, function () {
            var toast, toast, body;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.username == "" || this.fullName == "" || this.email == "")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: "Please fill out all fields",
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.confirm_password != this.password)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: "Password does not match",
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        this.startUpload(imgEntry);
                        body = {
                            username: this.username,
                            password: this.password,
                            fullName: this.fullName,
                            email: this.email,
                            userPhoto: this.userPhoto,
                            aksi: 'register'
                        };
                        this.postPvdr.postData(body, 'proses-api.php').subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var alertmsg, toast, toast;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertmsg = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/login']);
                                        return [4 /*yield*/, this.toastCtrl.create({
                                                message: 'Register successful',
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.toastCtrl.create({
                                            message: alertmsg,
                                            duration: 2000
                                        })];
                                    case 3:
                                        toast = _a.sent();
                                        toast.present();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_9__["FilePath"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map