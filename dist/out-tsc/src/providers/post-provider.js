var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
var PostProvider = /** @class */ (function () {
    //server: string = "http://localhost/server_api/"; // default
    // if you test in real device "http://localhost" change use the your IP	
    // server: string = "http://192.199.122.100/IONIC4_CRUD_LOGINREGIS_PHP_MYSQL/server_api/"; 
    function PostProvider(http) {
        this.http = http;
        this.server = "http://spontadeal.com/stalkify/"; // default
    }
    PostProvider.prototype.postData = function (body, file) {
        var type = "application/json; charset=UTF-8";
        var headers = new Headers({ 'Content-Type': type });
        var options = new RequestOptions({ headers: headers });
        console.log(function (res) { return res.json(); });
        return this.http.post(this.server + file, JSON.stringify(body), options)
            .map(function (res) { return res.json(); });
    };
    PostProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], PostProvider);
    return PostProvider;
}());
export { PostProvider };
//# sourceMappingURL=post-provider.js.map