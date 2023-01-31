//The following programming statements were adapted from C# Corner:
//Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
//Author: Nitesh Jha
//Author Profile Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../../auth-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']

})


export class UsersRegistrationComponent implements OnInit {

 
  //This method was adapted from AngularTraining:
  //Link: https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
  //Author: Alain Chautard
  //Author Profile Link: https://angulartraining.medium.com/
  constructor(public UsersService: AuthServiceService) { }

  ngOnInit(): void {

  }
  Registration(NewRegistration: NgForm){

    if(NewRegistration.invalid){
      //This programming statement has been adapted from C# Corner:
      //Link: https://www.c-sharpcorner.com/blogs/how-do-i-show-alert-in-angularjs1
      //Author: Gaurav Kumar Arora
      //Author Profile Link: https://www.c-sharpcorner.com/members/gaurav-kumar-arora
      alert('No data has been entered into the form')
      return
    }else{
      //This programming statement was adapted from C# Corner:
      //Link: https://www.c-sharpcorner.com/article/angular-services-for-sharing-data-between-component-using-angular-and-above/
      //Author: Bhairab Dutt
      //Author Profile Link: https://www.c-sharpcorner.com/members/bhairab-dutt
      this.UsersService.RegistrationService(NewRegistration.value.SuppliedEmployeeUserName,NewRegistration.value.SuppliedEmployeePassword)
      //This programming statement was adapted from C# Corner:
      //Link: https://www.c-sharpcorner.com/article/angular-14-typed-forms2/
      //Author: Varun Setia
      //Author Profile Link: https://www.c-sharpcorner.com/members/varun-setia
      NewRegistration.resetForm()
     
    
  }


}

}
