import { OnInit, Component } from '@angular/core';
import { HamperService } from './hamper.service';
import { Hamper } from "./hamper";
import { CategoryService } from '../category/category.service';
import { Category } from "../category/category";
@Component({
    selector: 'hamper',
    templateUrl: '/app/hamper/hamper.component.template.html',
    providers: [HamperService, CategoryService],
    styleUrls: ['/app/hamper/hamper.component.css'],
})

export class HampersComponent implements OnInit{
    hampers: Hamper[];
    categories: Category[];
    searchCatString: string;

    constructor(private _hamperService: HamperService, private _catService: CategoryService) { }

    ngOnInit() {
        this._catService.getCategoryData().subscribe(result => { this.categories = result});
    }
    getAll() {
        this._hamperService.getHamperData().subscribe(result => { this.hampers = result });
        this.searchCatString = "";
       
    }
    findHamperFromSelect(selectedCat: string) {
        this.searchCatString = selectedCat;
        this.findHamper();
    }

    findHamper() {
        this._hamperService.getHamperWithCategoryName(this.searchCatString).subscribe(result => { this.hampers = result });
      
    }

}