import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    //added
    private allCatsUrl = `http://localhost:24543/api/categories`;
    constructor(private _http: Http) {
    }


    getCategoryData() {
        return this._http.get(this.allCatsUrl).map((response) => response.json(), error => this.handleError(error));
    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}