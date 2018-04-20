import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { JhiEventManager } from "ng-jhipster";
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';

import { Account, LoginModalService, Principal } from "../shared";
import { ConferenceRoomService } from './conference-room.service';

@Component({
    selector: 'jhi-conference-room',
    templateUrl: './conference-room.component.html',
    styleUrls: [
        'conference-room.scss'
    ]

})
export class ConferenceRoomComponent implements OnInit {
    
    en: any;
    date10: Date;
    date: Date;

    account: Account;
    modalRef: NgbModalRef;
    buildingInfo= {};
    selectedRoom: string;
    buildingName: string;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private route: ActivatedRoute,
        private conferenceRoomService: ConferenceRoomService,
        private router: Router
    ) {
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: 'Today',
            clear: 'Clear'
        }



    }



    ngOnInit() {
        this.route.params.subscribe((params: Params) => this.getBuildigInfo(params['id']));
        this.route.snapshot.data['type'];

        this.principal.identity().then((account) => {
            this.account = account;
        });

        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    getBuildigInfo(buildingNumber: Number){

        this.conferenceRoomService.getBuildingData(buildingNumber).subscribe(
            (response) => {
                this.buildingInfo = response;
                this.selectedRoom = this.buildingInfo['conferenceRooms'][0];
            },
            (error) => {
                console.log(error);
            }
        )
    }
    
}
