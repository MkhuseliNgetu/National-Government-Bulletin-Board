//The following programming statements have been adapted from Itsolutionstuff:
//Link: https://www.itsolutionstuff.com/post/how-to-create-routing-module-in-angular-11example.html
//Author: Hardik Savani
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//The following programing statements have been adapted from Mdbootstrap:
//Link: https://mdbootstrap.com/docs/angular/extended/import-export-component/
//Author: Mdbootstrap
import { UsersLoginComponent } from './Auth/Login/Login/login.component';
import { UsersRegistrationComponent } from './Auth/Registration/Registration/registration.component';
import { PostsCreateComponent } from './Auth/Posts/posts-create/posts-create.component';
import { PostsGetComponent } from './Auth/Posts/posts-get/posts-get.component';
import { PostsDeleteComponent } from './Auth/Posts/posts-delete/posts-delete.component';




//This programming statement has been adapted from Angular:
//Link: https://angular.io/tutorial/toh-pt5
//Author: Angular
const BulletinBoardRoutes: Routes = [
  {path: 'Login', component: UsersLoginComponent},
  {path: 'SignUp', component: UsersRegistrationComponent},
  {path: 'AddPost', component: PostsCreateComponent},
  {path: 'GetPost', component: PostsGetComponent},
  {path: 'DeletePost', component: PostsDeleteComponent },
]


//This programming method has been adapted from Angular:
//Link: https://angular.io/tutorial/toh-pt5
//Author: Angular 
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(BulletinBoardRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
