import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class Interceptor implements HttpInterceptor {

    apikey = '0dee45835bcf0e45822f5c849ef0c10e';

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        console.log(req.urlWithParams);
        const customReq = req.clone({
            params : req.params.set('appid', this.apikey).set('units', 'metric')
        });
    
    return next.handle(customReq);
  }
}