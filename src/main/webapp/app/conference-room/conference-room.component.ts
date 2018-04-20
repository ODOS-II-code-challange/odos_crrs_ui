import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { JhiEventManager } from "ng-jhipster";
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

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
    account: Account;
    modalRef: NgbModalRef;
    building_info: {};
    conference_room_names = [];
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

    getBuildigInfo(building_number: Number){

        // this.conferenceRoomService.getAllConferenceRoomData(this.buildingName).subscribe(
        //     (response) => {
        //         this.building_info = response;
        //         this.conference_room_names = this.building_info['conferenceRooms'];
        //             this.selectedRoom = this.building_info['conferenceRooms'][0];
        //     },
        //     (error) => {
        //         console.log(error);
        //     }
        // )

        console.log("selected room  ", this.selectedRoom);
        this.building_info = {
            "buildingId": 1,
            "buildingName": "Washington",
            "buildingDesc": "The Building is located at North West gate of the campus",
            "conferenceRooms": [
                {
                    "conferenceRoomId": 1,
                    "roomNum": "101",
                    "roomName": "Atomics",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 2,
                    "roomNum": "102",
                    "roomName": "IBX",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 3,
                    "roomNum": "103",
                    "roomName": "Stratus",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 4,
                    "roomNum": "104",
                    "roomName": "Atlas",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 5,
                    "roomNum": "105",
                    "roomName": "Georgia",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 6,
                    "roomNum": "106",
                    "roomName": "Capital",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 7,
                    "roomNum": "107",
                    "roomName": "Blue",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 8,
                    "roomNum": "108",
                    "roomName": "Sirus",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 9,
                    "roomNum": "109",
                    "roomName": "Bast",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                },
                {
                    "conferenceRoomId": 10,
                    "roomNum": "110",
                    "roomName": "Syphinics",
                    "roomCapacity": 10,
                    "activeIndicator": "Y"
                }
            ]
        }
        this.selectedRoom = this.building_info['conferenceRooms'][0];
    }
}
