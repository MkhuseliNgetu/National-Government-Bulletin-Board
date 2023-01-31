//The following programming statements have been adapted from GeeksForGeeks:
//Link: https://www.geeksforgeeks.org/how-to-use-mat-dialog-in-angular/
//Author: bunnyram19
//Author Profile Link: https://auth.geeksforgeeks.org/user/bunnyram19/articles
import {Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent {

  //This programming method has been adapted from GeeksForGeeks:
  //Link: https://www.geeksforgeeks.org/how-to-use-mat-dialog-in-angular/
  //Author: bunnyram19
  //Author Profile Link: https://auth.geeksforgeeks.org/user/bunnyram19/articles
  constructor(@Inject (MAT_DIALOG_DATA) public UserData: {Outome: String}, public ErrorMessageBox: MatDialog) { 



  }

 
 

  
}
