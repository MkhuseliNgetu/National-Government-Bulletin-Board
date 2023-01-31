//The following programming method was adapted from RemoteStack:
//Link: https://remotestack.io/handle-angular-http-errors-with-httpinterceptor-rxjs/
//Author: RemoteStack
import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  

  constructor() {}
  //This programming method was adapted from RemoteStack:
  //Link: https://remotestack.io/handle-angular-http-errors-with-httpinterceptor-rxjs/
  //Author: RemoteStack
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(

      retry(1),
      catchError((BulletienBoardErrors : HttpErrorResponse ) =>{
        let BulletinBoardErrorMessage = '';

        if(BulletienBoardErrors.error instanceof ErrorEvent){


          BulletinBoardErrorMessage = 'Error: ' + BulletienBoardErrors.error.message;
        }else{


          BulletinBoardErrorMessage = 'Server Error: '+ BulletienBoardErrors.status + "\n" + 'Error: ' + BulletienBoardErrors.message;
        }

        console.log(BulletinBoardErrorMessage)
        return throwError(BulletinBoardErrorMessage);

      })





    );
  }
}
