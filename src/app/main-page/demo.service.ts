import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Item } from 'src/shared/models/item.model';
//'Content-Type': 'application/json',
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
//set('Content-Type', 'application/x-www-form-urlencoded')
 
@Injectable()
export class DemoService {
 
    constructor(private http:HttpClient) {}
 
    getLogs() {
        return this.http.get<Item[]>('https://calculatorwithlogsserver.herokuapp.com/api/getlogs');
    }
	addLogs(object){
		let body = 'user='+object.user+'&calculation='+object.calculation;
		return this.http.post('https://calculatorwithlogsserver.herokuapp.com/api/addlogs',body,httpOptions).subscribe();
	}
}