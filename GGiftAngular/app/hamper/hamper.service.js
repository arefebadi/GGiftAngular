"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
let HamperService = class HamperService {
    constructor(_http) {
        this._http = _http;
        //added
        this.allHampersUrl = `http://localhost:24543/api/allhampers`;
        this.hamperWithCatNameUrl = `http://localhost:24543/api/hampers/cat`;
    }
    getHamperData() {
        return this._http.get(this.allHampersUrl).map((response) => response.json(), error => this.handleError(error));
    }
    getHamperWithCategoryName(searchString) {
        let params = new http_1.URLSearchParams();
        params.set('catName', searchString);
        let requestOptions = new http_1.RequestOptions();
        requestOptions.search = params;
        return this._http.get(this.hamperWithCatNameUrl, requestOptions).map((response) => response.json(), error => this.handleError(error));
    }
    handleError(error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    }
};
HamperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HamperService);
exports.HamperService = HamperService;
//# sourceMappingURL=hamper.service.js.map