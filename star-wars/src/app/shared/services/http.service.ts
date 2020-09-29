

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class HttpService {

    constructor(public http: HttpClient) { }

    get(url: string, params: Object = null): Observable<any> {

        const urlParts = url.split('/');

        if (params) { url = this.concatQueryParams(url, params); }
        return this.http.get(url, { headers: this.getHeaders() });
    }

    postJSon(url: string, body: any, params: Object = null): Observable<any> {
        if (params) { url = this.concatQueryParams(url, params); }
        return this.http.post(url, JSON.stringify(body), { headers: this.getHeaders('post') });
    }

    postForm(url: string, body: any, params: Object = null): Observable<any> {
        if (params) { url = this.concatQueryParams(url, params); }
        return this.http.post(url, body, { headers: this.getHeaders('post', false) });
    }

    put(url: any, body: any, params: Object = null) {
        if (params) { url = this.concatQueryParams(url, params); }
        return this.http.put(url, JSON.stringify(body), { headers: this.getHeaders('put') });
    }

    delete(url: any, body: any = '', params: Object = null) {

        if (params) { url = this.concatQueryParams(url, params); }
        return this.http.delete(url, { headers: this.getHeaders('delete') });
    }

    private getHeaders(action: string = null, isJson: boolean = true) {
        let headers = new HttpHeaders();

        // headers = headers.set('authority', 'swapi.dev');
        // headers = headers.set('method', 'GET');
        // headers = headers.set('path', '/api/starships/');
        // headers = headers.set('scheme', 'https');

        // headers = headers.set('Access-Control-Allow-Headers', '*');
        // // headers = headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With');
        // headers = headers.set('Access-Control-Allow-Credentials', 'true');
        // headers = headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        headers = headers.set('Access-Control-Allow-Origin', '*');
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Cache-Control', 'no-cache');
        headers = headers.set('Pragma', 'no-cache'); // For internet explorer/older versions of IIS
        headers = headers.set('Authorization', 'none');

        if (action === 'post' || action === 'put') {
            headers = headers.set('Content-Type', isJson ? 'application/json' : 'application/x-www-form-urlencoded');
            headers = headers.set('Audience', 'Any');
        }

        return headers;
    }

    private concatQueryParams(url: string, params: Object): string {
        url += '?';
        const keys: string[] = Object.keys(params);
        keys.forEach((param, i) => {
            url += param + '=' + encodeURIComponent(params[param]);
            if (i < keys.length - 1) { url += '&'; }
        });

        return url;
    }

}
