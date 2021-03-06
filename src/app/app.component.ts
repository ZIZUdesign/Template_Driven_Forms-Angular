import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  @ViewChild('f') signupForm : NgForm; 
  defaultQuestion= 'teacher';
  answer= '';
  genders= ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // if you use setValue(), it overrides all other inputs 
    // this.signupForm.setValue({
    //   userData: {
    //     username:suggestedName,
    //     email: ''
    //   },
    //   secret:'pet',
    //   questionAnswer: '',
    //   gender:'male'
    // });
    
    // using patchValue(), we can set the value of one particular input field 
    //without overriding other input values
    // patchValue() is available in the form container 
    this.signupForm.form.patchValue({
      userData:{
            username: suggestedName 
    }
  });
  }

  user = {
    username: '',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }

  sumitted = false; 

  onSubmit(){
    this.sumitted = true; 
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.gender = this.signupForm.value.gender; 
    this.user.answer = this.signupForm.value.questionAnswer; 

    this.signupForm.reset();
  }


}
