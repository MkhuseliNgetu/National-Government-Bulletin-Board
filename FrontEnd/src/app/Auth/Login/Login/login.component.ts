//The following programming statements were adapted from C# Corner:
//Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
//Author: Nitesh Jha
//Author Profile Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';
//This progamming statement was adapted from Knoldus:
//Link: https://blog.knoldus.com/routing-in-angular/
//Author: Kartik Tiwari
//Author Profile Link: https://blog.knoldus.com/author/kartiktiwari26/
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class UsersLoginComponent implements OnInit {

  
  Option: String = this.AuthenticationRouter.url

  //This method was adapted from AngularTraining:
  //Link: https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
  //Author: Alain Chautard
  //Author Profile Link: https://angulartraining.medium.com/
  constructor(public AuthenticationService: AuthServiceService, private AuthenticationRouter : Router) { }

  ngOnInit(): void {
  }

  Login(NewLogin: NgForm){

    if(NewLogin.invalid){
      //This programming statement has been adapted from C# Corner:
      //Link: https://www.c-sharpcorner.com/blogs/how-do-i-show-alert-in-angularjs1
      //Author: Gaurav Kumar Arora
      //Author Profile Link: https://www.c-sharpcorner.com/members/gaurav-kumar-arora
      alert('No data has been entered into the form')
      return;
    }else{

      
    if(this.Option == '/Login'){

      //This programming statement was adapted from C# Corner:
      //Link: https://www.c-sharpcorner.com/article/angular-services-for-sharing-data-between-component-using-angular-and-above/
      //Author: Bhairab Dutt
      //Author Profile Link: https://www.c-sharpcorner.com/members/bhairab-dutt
      this.AuthenticationService.LoginService(NewLogin.value.SuppliedEmployeeUserName,NewLogin.value.SuppliedEmployeePassword)
      //This programming statement was adapted from C# Corner:
      //Link: https://www.c-sharpcorner.com/article/angular-14-typed-forms2/
      //Author: Varun Setia
      //Author Profile Link: https://www.c-sharpcorner.com/members/varun-setia
      NewLogin.resetForm()

    }else{

    }
    }
  
     
    }
  }

