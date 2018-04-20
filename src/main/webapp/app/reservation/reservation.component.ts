import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router}  from '@angular/router';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule, FormControl  } from '@angular/forms';
import { ReservationService } from './reservation.service';
import { HttpErrorResponse } from '@angular/common/http';

import { LOGIN_ALREADY_USED_TYPE, EMAIL_ALREADY_USED_TYPE } from '../shared/constants/error.constants';
// import { LOGIN_ALREADY_USED_TYPE,EMAIL_ALREADY_USED_TYPE } from 'src/main/webapp/app/shared';


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

    roomName: string;
    success: boolean;
    error: string;
    errorEmailExists: string;
    errorUserExists: string;

    reservationTimeForm:FormGroup;
    startDate: FormControl;
    startTime: FormControl;
    endTime: FormControl;

    isReservationDetailForm: boolean = true;
    isReservationTimeForm: boolean = false;
    isReservationCompleteForm: boolean = false;

    constructor( private router: Router, private route: ActivatedRoute, private service: ReservationService) { }

    ngOnInit() { 

      this.route.params.subscribe((params: Params) => {
        this.roomName = params['roomName'];
      })

      this.reservationDetailForm = new FormGroup({
          firstName: new FormControl('', Validators.required),
          lastName: new FormControl('', Validators.required),
          email: new FormControl('', [Validators.email, Validators.required]),
          conferenceTitle: new FormControl('', Validators.required),
          conferenceDescription: new FormControl('')
      });

      this.reservationTimeForm = new FormGroup({
          startDate: new FormControl('',Validators.required),
          startTime: new FormControl('', Validators.required),
          endTime: new FormControl('', Validators.required)
      });

      
    }
    reservation_info = {
      'date':'',
      'firstName':'',
      'lastName':'',
      'requestorId':'',
      'roomScheduleStartTime':'',
      'roomScheduleEndTime':'',
      'conferenceTitle':'',
      'conferenceRoomId': ''

    }

    saveReservationDetails(){
      this.reservation_info.requestorId = this.reservationDetailForm.get('email').value;
      this.reservation_info.conferenceTitle = this.reservationDetailForm.get('conferenceTitle').value;
      this.reservation_info.firstName = this.reservationDetailForm.get('firstName').value;
      this.reservation_info.lastName = this.reservationDetailForm.get('lastName').value;
      this.reservation_info.conferenceRoomId = this.roomName;

      this.isReservationDetailForm = false;
      this.isReservationTimeForm = true;
    }
    saveReservationTime(){
      this.reservation_info.date = this.reservationTimeForm.get('startDate').value;
      this.reservation_info.roomScheduleStartTime = this.reservationTimeForm.get('startTime').value;
      this.reservation_info.roomScheduleEndTime = this.reservationTimeForm.get('endTime').value;

      console.log("RESERVATION DETAILS: " + JSON.stringify(this.reservation_info));
      // if(this.reservation_info.roomScheduleStartTime < 8:00){

      // }
      this.service.postReservationData(this.reservation_info)
      .subscribe(()=>{
      }, (response)=> this.processError(response))

      this.isReservationTimeForm = false;
      this.isReservationCompleteForm = true;
    }
    private processError(response: HttpErrorResponse) {
      this.success = null;
      if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
          this.errorUserExists = 'ERROR';
      } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
          this.errorEmailExists = 'ERROR';
      } else {
          this.error = 'ERROR';
      }
    }
    goBack() {
      window.history.back();
    }

}
