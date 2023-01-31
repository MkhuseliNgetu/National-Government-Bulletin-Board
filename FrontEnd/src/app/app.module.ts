//The following programming statements have been adapted from Itsolutionstuff:
//Link: https://www.itsolutionstuff.com/post/how-to-create-routing-module-in-angular-11example.html
//Author: Hardik Savani
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//The following programing statements have been adapted from Mdbootstrap:
//Link: https://mdbootstrap.com/docs/angular/extended/import-export-component/
//Author: Mdbootstrap
import { AppComponent } from './app.component';
import { PostsCreateComponent } from './Auth/Posts/posts-create/posts-create.component';
import { PostsDeleteComponent } from './Auth/Posts/posts-delete/posts-delete.component';
import { PostsGetComponent } from './Auth/Posts/posts-get/posts-get.component';
import { UsersRegistrationComponent } from './Auth/Registration/Registration/registration.component';
import { UsersLoginComponent } from './Auth/Login/Login/login.component';
import { AuthenticationInterceptorService } from './Auth/authentication-interceptor.service';
import { ErrorComponent } from './Error/error/error.component';
import { ErrorInterceptorInterceptor } from './Error/error-interceptor.interceptor';

//This programming statement was adapted from RemoteStack:
//Link: https://remotestack.io/handle-angular-http-errors-with-httpinterceptor-rxjs/
//Author: RemoteStack
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//The programming statement wasadapted from Itsolutionstuff:
//Link: https://www.itsolutionstuff.com/post/how-to-create-routing-module-in-angular-11example.html
//Author: Hardik Savani
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//This programming statement was adapted from GeeksForGeeks:
//Link: https://www.geeksforgeeks.org/how-to-use-mat-dialog-in-angular/
//Author: bunnyram19
//Author Profile Link: https://auth.geeksforgeeks.org/user/bunnyram19/articles
import { MatDialogModule } from '@angular/material/dialog';





//This programming method has been adapted from Itsolutionstuff:
//Link: https://www.itsolutionstuff.com/post/how-to-create-routing-module-in-angular-11example.html
//Author: Hardik Savani
@NgModule({
  declarations: [
    AppComponent,
    UsersLoginComponent,
    PostsCreateComponent,
    PostsDeleteComponent,
    PostsGetComponent,
    UsersRegistrationComponent,
    ErrorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
    
  ],
  //The following programming statements were adapted from C# Corner:
  //Link: https://www.c-sharpcorner.com/article/using-http-interceptor-service-in-angular-app/
  //Author: Rohol Amin
  //Author Profile Link: https://www.c-sharpcorner.com/members/rohol-amin
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
