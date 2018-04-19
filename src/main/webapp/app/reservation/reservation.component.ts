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

  time = {hour: 13, minute: 30};
  meridian = true;

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
        startDate: new FormControl('',Validators.required),
        startTime: new FormControl('', Validators.required),
        endTime: new FormControl('', Validators.required)
    });
  }
  reservationDetail={
    'firstName':'',
    'lastName':'',
    'email':'',
    'conferenceTitle':'',
    'conferenceDescription':''
  }
  reservationTime = {
    'startDate':'',
    'startTime':'',
    'endTime':''
  }

  saveReservationDetails(){
    // this.reservationDetail.firstName = this.firstName.value;
    // this.reservationDetail.lastName = this.lastName.value;
    // this.reservationDetail.email = this.email.value;
    // this.reservationDetail.conferenceTitle = this.conferenceTitle.value;
    // this.reservationDetail.conferenceDescription = this.conferenceDescription.value;

    this.isReservationDetailForm = false;
    this.isReservationTimeForm = true;
  }
  saveReservationTime(){
    // this.reservationTime.startDate = this.startDate.value;
    // this.reservationTime.startTime = this.startTime.value;
    // this.reservationTime.endTime = this.endTime.value;

    this.isReservationTimeForm = false;
    this.isReservationCompleteForm = true;
  }
  sumbitReservation(){

  }
  toggleMeridian(){
    this.meridian = !this.meridian;

  }
}
