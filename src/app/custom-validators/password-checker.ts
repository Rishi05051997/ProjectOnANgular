import { FormGroup } from "@angular/forms";

export function PasswordChecker (controlName: string, 
    ComapareControlName: string
    ){
        return (formGroup: FormGroup) =>{
            const password = formGroup.controls[controlName];
            const ConfirmPassword = formGroup.controls[ComapareControlName];

            if (password.value !== ConfirmPassword.value ) {
                ConfirmPassword.setErrors({mustMatch: true})
            }else{
                ConfirmPassword.setErrors(null);
            }
        }
    }