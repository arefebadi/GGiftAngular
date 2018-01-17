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
const core_1 = require("@angular/core");
const hamper_service_1 = require("./hamper.service");
const category_service_1 = require("../category/category.service");
let HampersComponent = class HampersComponent {
    constructor(_hamperService, _catService) {
        this._hamperService = _hamperService;
        this._catService = _catService;
    }
    ngOnInit() {
        this._catService.getCategoryData().subscribe(result => { this.categories = result; });
    }
    getAll() {
        this._hamperService.getHamperData().subscribe(result => { this.hampers = result; });
        this.searchCatString = "";
    }
    findHamperFromSelect(selectedCat) {
        this.searchCatString = selectedCat;
        this.findHamper();
    }
    findHamper() {
        this._hamperService.getHamperWithCategoryName(this.searchCatString).subscribe(result => { this.hampers = result; });
    }
};
HampersComponent = __decorate([
    core_1.Component({
        selector: 'hamper',
        templateUrl: '/app/hamper/hamper.component.template.html',
        providers: [hamper_service_1.HamperService, category_service_1.CategoryService],
        styleUrls: ['/app/hamper/hamper.component.css'],
    }),
    __metadata("design:paramtypes", [hamper_service_1.HamperService, category_service_1.CategoryService])
], HampersComponent);
exports.HampersComponent = HampersComponent;
//# sourceMappingURL=hamper.component.js.map