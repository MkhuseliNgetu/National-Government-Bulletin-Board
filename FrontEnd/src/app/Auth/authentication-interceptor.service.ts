//The following programming statements were adapted from RemoteStack:
//Link: https://remotestack.io/handle-angular-http-errors-with-httpinterceptor-rxjs/
//Author: RemoteStack
import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse,HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';



@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor{
 
  //This method was adapted from AngularTraining:
  //Link: https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
  //Author: Alain Chautard
  //Author Profile Link: https://angulartraining.medium.com/
  constructor(private AuthenticationService: AuthServiceService) { }
  
  //This method was adapted from AngularTraining:
  //Link: https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
  //Author: Alain Chautard
  //Author Profile Link: https://angulartraining.medium.com/
  intercept(Request: HttpRequest<unknown>, Next: HttpHandler): Observable<HttpEvent<any>> {

    const AuthToken = this.AuthenticationService.GetAuthToken();
    const AuthTokenRequest =
    
    Request.clone({headers: Request.headers.set("Authorization", "Bearer "+ AuthToken)});
    return Next.handle(AuthTokenRequest);
  
  }

 
  
}
