import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordChecker } from "./../custom-validators/password-checker";




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  url1 = "./../../assets/images1/download.jpg"
  url2="/userprofile"

  title = "Signup-Reactive";
  registerForm: FormGroup;
  submitted = false;
  fnamePattern = "/^[a-zA-Z '.-]*$/"
  phonePattern = "^[7-9]\d{9}$"
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
  ) {
    
  }
  
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(this.fnamePattern)]],
      lastName:['',[Validators.required, Validators.minLength(2)]],
      email: ['',[Validators.required, Validators.email,]],
      phone: ['',[Validators.required, Validators.pattern(this.phonePattern)]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',Validators.required],
      acceptTandC: [false, Validators.requiredTrue],
      age: ['', Validators.requiredTrue],
      state: ['', Validators.requiredTrue],
      country: ['', Validators.requiredTrue],
      address: ['', Validators.requiredTrue],
      
      tags: ['', Validators.required],
      
      picture: ['', Validators.required],
     
     
      
    },{
      validators: PasswordChecker('password','confirmPassword')
    });

    

   

    
    

  

  }

  categories = [
    {id: 1, name: 'cricket'},
    {id: 2, name: 'football'},
    {id: 3, name: 'hockey'},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'},
    {id: 7, name: 'JQuery', disabled: true},
    {id: 8, name: 'Javascript'},
  ];
    
  selected = [
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'}
  ];

  get h(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    

    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert("Success Signup\n" + JSON.stringify(this.registerForm.value))
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }
  // button data fetching to signup component
  saveCall()
  {
    this.submitted = true;
    console.log("sumitted");
    let data: any = this.registerForm.value;
   
    this.router.navigate(['/userprofile'],{
      queryParams:{data:btoa(JSON.stringify(data))}
    })
    
    
    
    
  }

  uploadImage(e) {
    
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url1 = event.target.result;
      

      }
    }
  }



  
  

  


  }
