//The following programming statements were adapted from RemoteStack:
//Link: https://remotestack.io/handle-angular-http-errors-with-httpinterceptor-rxjs/
//Author: RemoteStack
import { Injectable } from '@angular/core';
import { catchError, retry, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //This programming statement was adapted from Tektutorialshub:
  //Link: https://www.tektutorialshub.com/angular/angular-input-output-eventemitter/
  //Author: Tektutorialshub
  Posts: any[] =[{ID: String, Title: String, Details: String, _id: String }];
  //This programming statement was adapted from C# Corner:
  //Link: https://www.c-sharpcorner.com/article/subject-and-behavior-subject-in-angular-8/
  //Author: Siddharth Gajbhiye
  //Auhtor Profile Link: https://www.c-sharpcorner.com/members/siddharth-gajbhiye
  UpdatedPosts = new Subject<{ID: String, Title: String, Details: String, _id: String }[]>();

  private AuthToken!:String;
  
  //This programming method was adapted from Tektutorialshub:
  //Link: https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/
  //Author: Tektutorialshub
  constructor(private HTTP: HttpClient) { }

  RegistrationService(EmployeeUsername: String, EmployeePassword:String): any{
    //This programming statement was adapted from W3resource:
    //Link: https://www.w3resource.com/angular/HttpClient.php
    //Author: W3resources
    this.HTTP.post<{Message: string}>('https://localhost:3000/api/users/SignUp',{EmployeeUsername:EmployeeUsername,EmployeePassword:EmployeePassword})
    .pipe(retry(2),catchError(this.GetAuthErrors))
    .subscribe(RegistrationStatus =>{alert(RegistrationStatus.Message);})
  }
 
  LoginService(EmployeeUsername: String, EmployeePassword:String){
    //This programming statement was adapted from W3resource:
    //Link: https://www.w3resource.com/angular/HttpClient.php
    //Author: W3resources
    this.HTTP.post<{Token: String, Message: String}>('https://localhost:3000/api/users/Login',{EmployeeUsername:EmployeeUsername,EmployeePassword:EmployeePassword}).pipe(retry(2),catchError(this.GetAuthErrors))
    .subscribe(LoginStatus =>{const Token = LoginStatus.Token; this.AuthToken = Token; alert(JSON.stringify(LoginStatus.Message))})

  }

  CreatePostService(SuppliedPostID: String, SuppliedPostTitle: String, SuppliedPostDetails:String){
    //This programming statement was adapted from W3resource:
    //Link: https://www.w3resource.com/angular/HttpClient.php
    //Author: W3resources
    this.HTTP.post<{Message: String ,Post: any}>('https://localhost:3000/api/post/AddPost', {ID:SuppliedPostID,Title:SuppliedPostTitle, Details:SuppliedPostDetails}).pipe(retry(2),catchError(this.GetAuthErrors))
    .subscribe(Post =>{alert(JSON.stringify(Post.Message));this.Posts.push(Post.Post);this.UpdatedPosts.next(this.Posts)})
    
  }

  GetPostsService(PostTitle: string) : any{

    const PostRequest = PostTitle;
    //This programming statement was adapted from Tektutorialshub:
    //Link: https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/
    //Author: Tektutorialshub
    const RequestData = new HttpParams().set('PC', PostRequest)

    if(PostRequest != null || PostRequest != ""){
      //This programming statement was adapted from Tektutorialshub:
      //Link: https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/
      //Author: Tektutorialshub
      this.HTTP.get<{Message: String, Post: any}>('https://localhost:3000/api/post/GetPost', {params: RequestData}).pipe(retry(2),catchError(this.GetAuthErrors))
      .subscribe(Post =>{alert(JSON.stringify(Post.Message));this.Posts.push(Post.Post); this.UpdatedPosts.next(this.Posts)})
     
    }
   
  }

  DeletePostService(PostID:String){
    //This programming statement was adapted from W3resource:
    //Link: https://www.w3resource.com/angular/HttpClient.php
    //Author: W3resources
    this.HTTP.delete<{Message: String,Post: any}>('https://localhost:3000/api/post/RemovePost/' + PostID).pipe(retry(2),catchError(this.GetAuthErrors))
    .subscribe(Post =>{alert(JSON.stringify(Post.Message));this.Posts.push(Post.Post); this.UpdatedPosts.next(this.Posts)})

  }
  //This programming method was adapted from C# Corner:
  //Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
  //Author: Nitesh Jha
  //Author Profile Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
  UpdatePosts(){

    return this.UpdatedPosts.asObservable();
  }
  
  GetAuthToken(){
    
    return this.AuthToken;
  }

  //This programming method was adapted from RemoteStack:
  //Link: https://remotestack.io/handle-angular-http-errors-with-httpinterceptor-rxjs/
  //Author: RemoteStack
  //Author Profile Link: https://remotestack.io/author/remotestack/
  GetAuthErrors(BulletienBoardErrors: HttpErrorResponse){

    let BulletinBoardErrorMessage = '';

    if(BulletienBoardErrors.error instanceof ErrorEvent){

      BulletinBoardErrorMessage = 'Error:' + BulletienBoardErrors.error.message;
      alert(BulletienBoardErrors)
    }else{

      BulletinBoardErrorMessage = 'Server Error: '+ BulletienBoardErrors.status + "\n" + 'Error: ' + BulletienBoardErrors.message;
      alert(BulletienBoardErrors)
    }

    console.log(BulletinBoardErrorMessage)
    return throwError(BulletinBoardErrorMessage)

  }
}
