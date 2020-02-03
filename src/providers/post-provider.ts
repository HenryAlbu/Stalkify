import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
	server: string = "http://spontadeal.com/stalkify/"; // default
	//server: string = "http://localhost/server_api/"; // default
	// if you test in real device "http://localhost" change use the your IP	
    // server: string = "http://192.199.122.100/IONIC4_CRUD_LOGINREGIS_PHP_MYSQL/server_api/"; 

	constructor(public http : Http) {

	}

	postData(body, file){
		let type = "application/json; charset=UTF-8";
		let headers = new Headers({ 'Content-Type': type });
		let options = new RequestOptions({ headers: headers });
		console.log(res => res.json());
		return this.http.post(this.server + file, JSON.stringify(body), options)
		.map(res => res.json());
		
	}
}