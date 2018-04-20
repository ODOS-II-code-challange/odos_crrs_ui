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
  reservationDetailForm:FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  conferenceTitle: FormControl;
  conferenceDescription: FormControl;

  reservationTimeForm:FormGroup;
  startDate: FormControl;
  startTime: FormControl;
  endTime: FormControl;

  isReservationDetailForm: boolean = true;
  isReservationTimeForm: boolean = false;
  isReservationCompleteForm: boolean = false;

  constructor() { }

  ngOnInit() { 
    this.reservationDetailForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        conferenceTitle: new FormControl('', Validators.required),
        conferenceDescription: new FormControl('', Validators.required)
    });

    this.reservationTimeForm = new FormGroup({
        Date: new FormControl('',Validators.required),
        startTime: new FormControl('', Validators.required),
        endTime: new FormControl('', Validators.required)
    });

    
  }

  saveReservationDetails(){

    console.log("reservation detail : ", this.reservationDetailForm.getRawValue());

    this.isReservationDetailForm = false;
    this.isReservationTimeForm = true;
  }
  saveReservationTime(){
  
  
    // var x = this.reservationDetailForm.get('startTime') - this.reservationDetailForm.get('endTime');
    console.log("reservation detail : ", this.reservationTimeForm.getRawValue());
    let start = +this.reservationTimeForm.get('startTime').value;
    let end = +this.reservationTimeForm.get('startTime').value;
    let result =(end - start)*60;
    console.log("Start time: " + start);
    console.log("Start time: " + end);
    console.log("reservation start time : ", +this.reservationTimeForm.get('startTime').value - this.reservationTimeForm.get('startTime').value);

    this.isReservationTimeForm = false;
    this.isReservationCompleteForm = true;
  }
  sumbitReservation(){

  }
  disabled(date, mode){
    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
  }

}
