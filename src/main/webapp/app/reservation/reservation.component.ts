import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule, FormControl  } from '@angular/forms';

@Component({
  selector: 'jhi-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: [
      'reservation.scss'
  ]
})
export class ReservationComponent implements OnInit {
  reservationform:FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  conferenceTitle: FormControl;
  conferenceDescription: FormControl;

  constructor() { }

  ngOnInit() { 
    this.reservationform = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        conferenceTitle: new FormControl('', Validators.required),
        conferenceDescription: new FormControl('', Validators.required)
    });
  }
}
