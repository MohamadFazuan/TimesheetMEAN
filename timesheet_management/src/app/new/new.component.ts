import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  form = new FormGroup({
    project: new FormControl('',[Validators.required]),
    task: new FormControl('', [Validators.required]),
    assignedTo: new FormControl('', [Validators.required]),
    from: new FormControl('', [Validators.required]),
    to: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  })

  constructor() {

  }

  onSubmit() {

  }

  onClose(){
    
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
