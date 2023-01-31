//The following programming statements were adapted from C# Corner:
//Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
//Author: Nitesh Jha
//Author Profile Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { AuthServiceService } from '../../auth-service.service';


@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.scss'],
  providers: [AuthServiceService],
})

export class PostsCreateComponent implements OnInit {

  //This programming statement was adaped from Tektutorialshub:
  //Link: https://www.tektutorialshub.com/angular/angular-input-output-eventemitter/
  //Author: Tektutorialshub
  Posts!: {ID: String, Title: String, Details: String, _id: String }[];
  //This programming statement was adaped from Tektutorialshub:
  //Link: https://www.tektutorialshub.com/angular/angular-input-output-eventemitter/
  //Author: Tektutorialshub
  @Input()UpdatedPosts = new Subject<{ID: String, Title: String, Details: String, _id: String }[]>;

  //This method was adapted from AngularTraining:
  //Link: https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
  //Author: Alain Chautard
  //Author Profile Link: https://angulartraining.medium.com/
  constructor(public PostsService: AuthServiceService) { }
  //This programming statement was adapted from C# Corner:
  //Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
  //Author: Nitesh Jha
  //Author Profile Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
  private PostsSubcription!: Subscription;

  ngOnInit(): void {
  }

  NewPost(AddPost: NgForm){

    if(AddPost.invalid){

      //This programming statement has been adapted from C# Corner:
      //Link: https://www.c-sharpcorner.com/blogs/how-do-i-show-alert-in-angularjs1
      //Author: Gaurav Kumar Arora
      //Author Profile Link: https://www.c-sharpcorner.com/members/gaurav-kumar-arora
      alert('No data has been entered into the form')
      return
    }else{

      if(AddPost.value.SuppliedPostID != "" && AddPost.value.SuppliedPostTitle != "" && AddPost.value.SuppliedPostDetails != ""){

        //This programming statement was adapted from C# Corner:
        //Link: https://www.c-sharpcorner.com/article/angular-services-for-sharing-data-between-component-using-angular-and-above/
        //Author: Bhairab Dutt
        //Author Profile Link: https://www.c-sharpcorner.com/members/bhairab-dutt
        this.PostsService.CreatePostService(AddPost.value.SuppliedPostID,AddPost.value.SuppliedPostTitle,AddPost.value.SuppliedPostDetails)
        //This programming statement was adapted from C# Corner:
        //Link: https://www.c-sharpcorner.com/article/angular-14-typed-forms2/
        //Author: Varun Setia
        //Author Profile Link: https://www.c-sharpcorner.com/members/varun-setia
        AddPost.resetForm()

        //This programming statement was adapted from C# Corner:
        //Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
        //Author: Nitesh Jha
        //Author Profile Link: https://www.c-sharpcorner.com/article/how-to-share-data-between-components-using-subscription-and-subject-in-angular-6/
        this.PostsSubcription = this.PostsService.UpdatedPosts.subscribe((Posts: {ID: String, Title: String, Details: String, _id: String }[])=> {

          this.Posts = Posts;
          
    
       })

       
      }

      
    }
  }

}
