var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
var ImagePage = /** @class */ (function () {
    function ImagePage(nav, modalCtrl, sanitizer) {
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
    }
    ImagePage.prototype.ngOnInit = function () {
        this.image = this.sanitizer.bypassSecurityTrustStyle(this.value);
    };
    ImagePage.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ImagePage.prototype, "value", void 0);
    ImagePage = __decorate([
        Component({
            selector: 'app-image',
            templateUrl: './image.page.html',
            styleUrls: ['./image.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            ModalController,
            DomSanitizer])
    ], ImagePage);
    return ImagePage;
}());
export { ImagePage };
//# sourceMappingURL=image.page.js.map