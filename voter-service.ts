import {Injectable}											from '@angular/core';
import {Http, Headers, RequestOptions}	from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class VoterService {
	baseUrl = "http://rpw.duffeytech.com:1337";
	
	constructor(private http: Http) {
		this.http = http;
	}
	getVoterName = (string) => {
		return this.http.get(this.baseUrl + '/voter/search?string=' + string).map(res => res.json());
	}
	getVoter = (id) => {
		return this.http.get(this.baseUrl + '/voter/' + id).map(res => res.json());
	}
}