import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HamperService {
    //added
    private allHampersUrl = `http://localhost:24543/api/allhampers`; 
    private hamperWithCatNameUrl = `http://localhost:24543/api/hampers/cat`; 
    constructor(private _http: Http) { }

    getHamperData() {
        return this._http.get(this.allHampersUrl).map((response) => response.json(), error => this.handleError(error));
    }
    getHamperWithCategoryName(searchString: string) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('catName', searchString);

        let requestOptions = new RequestOptions();
        requestOptions.search = params;

        return this._http.get(this.hamperWithCatNameUrl, requestOptions).map((response) => response.json(), error => this.handleError(error));
    }
 
    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}